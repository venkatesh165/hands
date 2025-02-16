import { createDynamicRouteParser } from 'next-router-mock/dynamic-routes';
import mockRouter from 'next-router-mock';

// Mock the Next.js router
jest.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

// Enable dynamic route parsing
mockRouter.useParser(createDynamicRouteParser([
  // Add your dynamic routes here (e.g., "/posts/[id]")
]));