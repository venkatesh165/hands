import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return; // Skip authentication for public routes
  }

  // Await the auth() function and check for userId
  const { userId } = await auth();
  if (!userId) {
    // Redirect to sign-in page if not authenticated
    return new Response("Unauthorized", { status: 401 });
  }

  // Allow the request to proceed if authenticated
  return;
});