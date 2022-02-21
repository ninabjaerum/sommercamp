import React from "react";
import { render, screen } from "@testing-library/react";
import { Typography } from "@mui/material";
import Summary from "./components/Summary";

test("renders learn react link", () => {
  render(<Summary />);
  const linkElement = screen.getByText(/10/i);
  expect(linkElement).toBeInTheDocument();
});
