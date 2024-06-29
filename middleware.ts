import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("loginToken");
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}
export const config = {
  matcher: "/profile",
};
