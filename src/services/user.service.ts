import axiosRequest from "@/api/axios.settings";
import { AuthHelper } from "@/helpers/auth.helper";
import { IUser, IUserCode, IUserProps } from "@/types/user.interface";

export const UserService = {
  async getAllUsers() {
    return await axiosRequest.get<IUserProps[]>("/user");
  },

  async getUser() {
    return await axiosRequest.get<IUserProps>("/user/account");
  },

  async login({ email, password }: IUserProps) {
    return await axiosRequest.post<IUser>("/user/login", {
      email,
      password,
    });
  },

  async register({ email, password }: IUserProps) {
    return await axiosRequest.post<IUser>("/user/register", {
      email,
      password,
    });
  },

  async getNewAccessToken() {
    const refreshToken = AuthHelper.getRefreshToken();

    const response = await axiosRequest.post<Omit<IUser, "user">>("/token", {
      refreshToken,
    });

    console.log(response);

    if (response.data.accessToken) {
      AuthHelper.saveAccessToken(response.data.accessToken);
    }

    return response;
  },

  async getCode({ email }: Omit<IUserCode, "code">) {
    return await axiosRequest.post<IUserCode>("/email/send", {
      email,
    });
  },
};
