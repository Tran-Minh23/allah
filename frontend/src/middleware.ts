import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.has('token');

  if (!isLogin && request.nextUrl.pathname.startsWith('/hotel')) {
    return Response.redirect(new URL('/dashboard', request.url));
  }
}

export const config = {
  matcher: ['/hotel/:path*'],
};
