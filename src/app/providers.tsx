// src/components/Providers.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
