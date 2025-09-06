import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  // Check if the request is for a protected route
  const protectedPaths = ['/dashboard', '/dashboard/leads', '/dashboard/campaigns', '/dashboard/settings'];
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (!isProtectedPath) {
    return NextResponse.next();
  }

  try {
    // Get session from the request
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // Redirect to login on error
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login, register (auth pages)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|login|register).*)',
  ],
  runtime: 'nodejs',
};