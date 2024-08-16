import {
    clerkMiddleware,
    createRouteMatcher,
    clerkClient
  } from '@clerk/nextjs/server';
  import { NextResponse } from 'next/server';

  const isProtectedRoute = createRouteMatcher([
    '/admin(.*)',
  ]);
  
  export default clerkMiddleware(async (auth, req) => {
    
    const {userId} = auth();
    if (isProtectedRoute(req)) {
        if (!userId) {
          // If not signed in, redirect to sign-in page
          return NextResponse.redirect(new URL('/sign-in', req.url));
        }
    
        const data = await clerkClient().users.getUserList();
        
        const userRole = data?.data.find(user => user.id === userId)?.publicMetadata?.role;
        
        if (userRole !== 'admin') {
          // If not an admin, redirect to home page
          return NextResponse.redirect(new URL('/', req.url));
        }
    
        // If admin, allow access to the admin page
        return NextResponse.next();
      }
  
      // For non-protected routes, allow access
      return NextResponse.next()
    })
  export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  };