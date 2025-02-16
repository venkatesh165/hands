import "@testing-library/jest-dom";
import "next-router-mock";
import { jest } from "@jest/globals";

global.ResizeObserver = require("resize-observer-polyfill");

// ✅ Mock `next/navigation`
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
  })),
  usePathname: jest.fn(() => "/"),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
}));

jest.mock('@clerk/clerk-react', () => ({
  ClerkProvider: ({ children }) => <div>{children}</div>,
}));
// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

// Now Clerk's API keys will be available in the test environment
// jest.setup.js or setupTests.js
global.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));

// ✅ Mock `next/router`
jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
  })),
}));
