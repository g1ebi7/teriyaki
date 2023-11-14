import { NextRequest, NextResponse } from "next/server";

import { AuthHelper } from "@/helpers/auth.helper";

export const middleware = (req: NextRequest) => {
  if (
    !req.cookies.toString().includes("refreshToken") &&
    req.url.includes("/profile")
  ) {
    return NextResponse.redirect("http://localhost:5001/");
  }
};
