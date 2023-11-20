/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import cn from "classnames";

import styles from "./Auth.module.scss";

import { Button } from "@/ui/Button/Button";
import { Svg } from "@/ui/Svg/Svg";
import { emailPattern } from "@/utils/regExp";
import { useAuthMutations } from "@/hooks/useAuthMutations";
import { IUserProps } from "@/types/user.interface";
import { errorCatch } from "@/utils/errorCatch";
import { useSendCode } from "@/hooks/useSendCode";

interface IAuthForm extends IUserProps {
  code: number;
}

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const {
    loginUser,
    registerUser,
    loginError,
    registerError,
    isLoadingReg,
    isLoadingLog,
  } = useAuthMutations();

  const {
    sendCode,
    data: codeResp,
    isEmailLoading,
    emailError,
  } = useSendCode();

  const [isReg, setIsReg] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const [code, setCode] = useState<any>();
  const [isClicked, setIsClicked] = useState(false);
  const [codeError, setCodeError] = useState(false);

  useMemo(() => {
    if (!isEmailLoading) {
      setCode(codeResp?.data.code);
    }
  }, [isEmailLoading]);

  const submit = (data: IAuthForm) => {
    if (isReg) {
      if (!isClicked) {
        setIsClicked(true);
        sendCode(data);
        return;
      }
      if (code && code == data.code) {
        registerUser(data);
      } else if (emailError) {
        setCode(null);
        setIsClicked(false);
        sendCode(data);
        setIsClicked(true);
      } else {
        setCodeError(true);
      }
    } else {
      loginUser(data);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <label>
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: {
              message: "Email is required!",
              value: true,
            },
            pattern: {
              message: "Please enter correct email address",
              value: emailPattern,
            },
            maxLength: {
              message: "Email should be shorter than 40 symbols",
              value: 40,
            },
          })}
        />
        {errors && <p>{errors.email?.message}</p>}
      </label>
      <label>
        <input
          type={isPassword ? "password" : "text"}
          placeholder="Password"
          {...register("password", {
            required: {
              message: "Password is required!",
              value: true,
            },
            maxLength: {
              message: "Password should be shorter than 25 symbols",
              value: 25,
            },
            minLength: {
              message: "password should be minimum 6 symbols",
              value: 6,
            },
          })}
        />
        {errors && <p>{errors.password?.message}</p>}
        <span className={styles.eye} onClick={() => setIsPassword(!isPassword)}>
          <Svg.PasswordEye />
        </span>
      </label>
      {isReg && isClicked && !isEmailLoading && !emailError && (
        <label>
          <input
            type="text"
            placeholder="Code"
            {...register("code", {
              required: {
                message: "Code is required!",
                value: isReg,
              },
              minLength: {
                message: "Code must be minimum 6 symbols!",
                value: 6,
              },
              pattern: {
                message: "Code must be a number!",
                value: /^[0-9]*$/,
              },
            })}
          />
          {errors && <p>{errors.code?.message}</p>}
        </label>
      )}
      <Button
        loading={isLoadingReg || isLoadingLog || isEmailLoading}
        title={
          isReg && !isLoadingReg && !isLoadingLog
            ? "Register"
            : !isReg && !isLoadingReg && !isLoadingLog
            ? "Login"
            : "Loading..."
        }
        className="w-[250px] self-center"
      />
      <span className={styles.error}>
        {isReg
          ? errorCatch(registerError || emailError)
          : errorCatch(loginError)}
        {codeError && isReg && "Invalid code"}
      </span>
      <span
        onClick={
          isLoadingReg || isLoadingLog ? undefined : () => setIsReg(!isReg)
        }
        className={cn({
          "cursor-not-allowed": isLoadingReg || isLoadingLog,
          "cursor-pointer": !isLoadingReg && !isLoadingLog,
        })}
      >
        {isReg ? "Sign In" : "Sign Up"}
      </span>
    </form>
  );
};

export default AuthForm;
