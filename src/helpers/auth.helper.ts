import Cookies from "js-cookie";

import { IUserProps } from "@/types/user.interface";

export const AuthHelper = {
  saveTokens(accessToken: string, refreshToken: string) {
    Cookies.set("accessToken", accessToken);
    Cookies.set("refreshToken", refreshToken);
  },

  saveAccessToken(accessToken: string) {
    Cookies.set("accessToken", accessToken);
  },

  getAccessToken() {
    return Cookies.get("accessToken");
  },

  getRefreshToken() {
    return Cookies.get("refreshToken");
  },

  removeAllTokens() {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  },

  removeUserFromStorage() {
    Cookies.remove("user");
  },

  saveUserToStorage(user: IUserProps) {
    Cookies.set("user", JSON.stringify(user));
  },

  getUser(): IUserProps | undefined {
    const user = Cookies.get("user");

    if (user) {
      return JSON.parse(user);
    }
  },
};
