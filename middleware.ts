import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/'], // Only the homepage is public
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",  
    "/",                       
    "/api/(.*)",              
    "/trpc/(.*)"                
  ],
};
