import {
    clerkMiddleware,
    createRouteMatcher
  } from '@clerk/nextjs/server';

  const isProtectedRoute = createRouteMatcher([
    '/admin(.*)',
  ]);
  
  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });
//   export default clerkMiddleware(async (auth, req) => {
//         // const {userId} = auth()
//         // console.log(userId);
//         // const data = await clerkClient().users.getUserList();
//         // const userRole = data.data.find(user=> user.id === userId)?.publicMetadata?.role;

//         try{

//             if (isProtectedRoute(req)) auth().protect();
//         } catch(e) {
//         console.log(e);
//         }
//   });
  
  export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  };