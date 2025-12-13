import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

test("should render Cart component", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );
  const heading = screen.getByRole("heading", { name: /Cart/i });
  expect(heading).toBeInTheDocument();
});

test("should render Clear Cart button", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );
  const clearButton = screen.getByRole("button", { name: /Clear Cart/i });
  expect(clearButton).toBeInTheDocument();
});

test("should display empty cart message when cart is empty", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );
  const emptyMessage = screen.getByText(
    /Cart is Empty. Add items to the cart!/i
  );
  expect(emptyMessage).toBeInTheDocument();
});
