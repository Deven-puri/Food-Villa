import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("should load contact component correctly", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: /Contact Us/i });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Contact Us");
});

test("should load my button correctly", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Submit");
});

test("should load input fields correctly", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(3);
});

test("should load 2 input boxes", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  const nameInput = inputBoxes[0];
  const emailInput = inputBoxes[1];
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});
