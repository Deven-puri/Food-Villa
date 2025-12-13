import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { cards: [] } }),
  })
) as jest.Mock;

test("should render Body component", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchButton).toBeInTheDocument();
});

test("should render search input", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const searchInput = screen.getByPlaceholderText(/Search restaurants/i);
  expect(searchInput).toBeInTheDocument();
});

test("should render Top Rated filter button", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const filterButton = screen.getByText(/Top Rated Restaurants/i);
  expect(filterButton).toBeInTheDocument();
});
