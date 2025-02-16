const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Resolves alias '@' to 'src/'
    "^next/(.*)$": "<rootDir>/node_modules/next/$1", // Ensures Next.js modules are found
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/types.ts",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",  // Transform TypeScript files using ts-jest
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Transform JavaScript, JSX, TypeScript, and TSX files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@clerk/nextjs)" // This makes sure Clerk's module is transformed by Babel
  ],
};

module.exports = createJestConfig(config);
