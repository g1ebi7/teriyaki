import { useMutation } from "react-query";
import { useState } from "react";

import { UserService } from "@/services/user.service";

interface ICode {
  email: string;
}

export const useSendCode = () => {
  const {
    mutate: sendCode,
    isLoading: isEmailLoading,
    data,
    error: emailError,
  } = useMutation(["get code"], (data: ICode) => UserService.getCode(data));

  return { sendCode, data, isEmailLoading, emailError };
};
