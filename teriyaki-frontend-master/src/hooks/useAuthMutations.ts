import { useMutation } from "react-query";
import { useRouter } from "next/router";

import { useActions } from "./useActions";

import { UserService } from "@/services/user.service";
import { IUserProps } from "@/types/user.interface";
import { AuthHelper } from "@/helpers/auth.helper";

export const useAuthMutations = () => {
  const { saveUser } = useActions();
  const { push } = useRouter();

  const {
    mutate: loginUser,
    error: loginError,
    isLoading: isLoadingLog,
  } = useMutation(["login"], (data: IUserProps) => UserService.login(data), {
    onSuccess({ data }) {
      saveUser(data.user);
      AuthHelper.saveUserToStorage(data.user);
      AuthHelper.saveTokens(data.accessToken, data.refreshToken);
      push("/");
    },
  });

  const {
    mutate: registerUser,
    error: registerError,
    isLoading: isLoadingReg,
  } = useMutation(
    ["register"],
    (data: IUserProps) => UserService.register(data),
    {
      onSuccess({ data }) {
        saveUser(data.user);
        AuthHelper.saveUserToStorage(data.user);
        AuthHelper.saveTokens(data.accessToken, data.refreshToken);
        push("/");
      },
    }
  );

  return {
    loginUser,
    registerUser,
    loginError,
    registerError,
    isLoadingReg,
    isLoadingLog,
  };
};
