import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@/utils/test-utils";
import { Button } from "./Button";
import { ClerkProvider } from '@clerk/nextjs'; 

// Mock Clerk
jest.mock('@clerk/nextjs', () => ({
  useClerk: jest.fn().mockReturnValue({
    user: null, 
  }),
  ClerkProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe("Button", () => {
  it("renders correctly", () => {
    render(
      <ClerkProvider>
        <Button>Click me</Button>
      </ClerkProvider>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/test">Link</Button>);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
  });
});
