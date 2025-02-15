import { useClerk } from "@clerk/nextjs";

export function useAuth() {
  const { signOut, user } = useClerk();
  
  return {
    isSignedIn: !!user,
    signOut: () => signOut(),
  };
} 