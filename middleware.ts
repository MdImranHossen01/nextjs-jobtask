// middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  // The matcher specifies which routes the middleware should apply to
  matcher: ["/dashboard/:path*"],
};