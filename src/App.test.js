import React from "react";
import { render, screen } from "@testing-library/react";
import Overnatting from "./components/Overnatting";

test("renders learn react link", () => {
  render(<Overnatting />);
  const linkElement = screen.getByText(/overnatting/i);
  expect(linkElement).toBeInTheDocument();
});
