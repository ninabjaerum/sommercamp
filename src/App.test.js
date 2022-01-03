import React from "react";
import { render, screen } from "@testing-library/react";
import LongText from "./components/LongText";

test("renders learn react link", () => {
  render(<LongText />);
  const linkElement = screen.getByText(/Tidenes/i);
  expect(linkElement).toBeInTheDocument();
});
