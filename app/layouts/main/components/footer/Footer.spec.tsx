import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';

describe('Footer component', () => {
    it('renders without crashing', () => {
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

    it('should correctly sum two numbers', () => {
        const sum = (a: number, b: number): number => {
            return a + b;
        };

        expect(sum(2, 3)).toBe(5);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(0, 0)).toBe(0);
        expect(sum(100, 200)).toBe(300);
    });
});
