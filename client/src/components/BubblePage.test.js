import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import PrivateRoute from "./PrivateRoute";

test("Fetches data and renders the bubbles", async () => {
  render(<BubblePage/>)

  await waitFor(() => screen.getAllByText(<li></li>))
  expect(screen.getAllByText(<li></li>).toHaveLength(12))
});
