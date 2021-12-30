import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const welcometext = screen.getByText(/Velkommen/i);
  expect(welcometext).toBeInTheDocument();
});
