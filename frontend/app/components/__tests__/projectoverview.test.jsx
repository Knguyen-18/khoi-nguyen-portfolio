import { render, screen } from "@testing-library/react";

jest.mock("@mui/material/useMediaQuery", () => ({
  __esModule: true,
  default: () => false,
}));

import ProjectOverview from "../ProjectOverview";

describe("ProjectOverview", () => {
  test("displays project overview section", () => {
    render(<ProjectOverview />);

    expect(screen.getByText(/about this project/i)).toBeInTheDocument();
  });

  test("displays project description", () => {
    render(<ProjectOverview />);

    expect(
      screen.getByText(/this portfolio website showcases/i)
    ).toBeInTheDocument();
  });

  test("displays technology stack", () => {
    render(<ProjectOverview />);

    const nextjsChips = screen.getAllByText(/next\.js/i);
    expect(nextjsChips.length).toBeGreaterThan(0);
    
    expect(screen.getAllByText(/typescript/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/material-ui/i).length).toBeGreaterThan(0);
  });

  test("has link to source code", () => {
    render(<ProjectOverview />);

    const githubLink = screen
      .getAllByRole("link")
      .find((link) => link.getAttribute("href")?.includes("github.com"));

    expect(githubLink).toHaveAttribute("target", "_blank");
  });
});
