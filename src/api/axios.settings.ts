import axios from "axios";

import { AuthHelper } from "@/helpers/auth.helper";
import { UserService } from "@/services/user.service";

let retry = false;

const axiosRequest = axios.create({
  baseURL:
    process.env.APP_ENV === "development"
      ? "http://localhost:3000/api"
      : `${process.env.APP_URL}/api`,
  headers: { "Content-Type": "application/json" },
});

axiosRequest.interceptors.request.use((config) => {
  const accessToken = AuthHelper.getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosRequest.interceptors.response.use(
  (config) => config,
  async (error) => {
    const accessToken = AuthHelper.getAccessToken();

    const originalRequest = error.config;

    if (error.response.status === 401 && !retry && accessToken) {
      retry = true;

      try {
        await UserService.getNewAccessToken();
        axiosRequest.request(originalRequest);
      } catch (err) {
        AuthHelper.removeAllTokens();
        AuthHelper.removeUserFromStorage();
      }
    }

    throw error;
  }
);

export default axiosRequest;
