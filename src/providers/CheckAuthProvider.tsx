/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";

import { AuthHelper } from "@/helpers/auth.helper";
import { useActions } from "@/hooks/useActions";

export const CheckAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = AuthHelper.getUser();
  const refreshToken = AuthHelper.getRefreshToken();
  const { saveUser } = useActions();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      saveUser(user);
    }
  }, []);

  useEffect(() => {
    if (!refreshToken && user) {
      router.replace("/auth");
    }
  }, [router]);

  return <div>{children}</div>;
};
