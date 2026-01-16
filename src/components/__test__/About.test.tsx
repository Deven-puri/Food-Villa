import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";

// Mock fetch for UserClass component
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        login: "test-user",
        avatar_url: "https://test.com/avatar.jpg",
        name: "Test User",
      }),
  })
) as jest.Mock;

test("should render About component heading", () => {
  render(<About />);
  const heading = screen.getByText(/About Food Villa/i);
  expect(heading).toBeInTheDocument();
});

test("should render developer name", () => {
  render(<About />);
  const name = screen.getByText(/Deven/i);
  expect(name).toBeInTheDocument();
});

test("should render description text", () => {
  render(<About />);
  const description = screen.getByText(
    /food delivery web application built with React/i
  );
  expect(description).toBeInTheDocument();
});
