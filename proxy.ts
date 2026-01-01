/* eslint-disable @typescript-eslint/ban-ts-comment */

import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


async function publicRouteProxy(req: NextRequest) {
  const token = await getToken({ req });
  const path = req.nextUrl.pathname;

  if (!token) return NextResponse.next();

  if (path === "/" || path === "/login" || path === "/register") {
    if (token.role === "admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
    return NextResponse.redirect(new URL("/student/dashboard", req.url));
  }

  return NextResponse.next();
}

const privateRouteProxy = withAuth(
  function proxy(req) {
    const role = req.nextauth.token?.role;
    const path = req.nextUrl.pathname;

    if (path.startsWith("/student") && role !== "student") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (path.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/" || path === "/login" || path === "/register") {
    return publicRouteProxy(req);
  }

  if (path.startsWith("/student") || path.startsWith("/admin")) {
    // @ts-expect-error
    return privateRouteProxy(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/student/:path*",
    "/admin/:path*",
  ],
};
