import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Grocery from "../Grocery";

test("should render Grocery component heading", () => {
  render(<Grocery />);
  const heading = screen.getByRole("heading", { name: /Grocery/i });
  expect(heading).toBeInTheDocument();
});

test("should render grocery store heading", () => {
  render(<Grocery />);
  const heading = screen.getByText(/Our Grocery Store/i);
  expect(heading).toBeInTheDocument();
});
