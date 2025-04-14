import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "./Footer";

describe("Footer component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/footer/i);
    expect(footerElement).toBeInTheDocument();
  });

  it("should have correct Tailwind classes applied", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Footer/i);
    expect(footerElement).toHaveClass("bg-blue-600");
    expect(footerElement).toHaveClass("h-10");
    expect(footerElement).toHaveClass("px-8");
    expect(footerElement).toHaveClass("py-2");
    expect(footerElement).toHaveClass("text-white");
  });
});
