import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageVisitAnalytics from "../PageVisitAnalytics";

describe("PageVisitAnalytics", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("increments and displays the page visit count", async () => {
    localStorage.setItem("page_visit_count", "2");

    render(<PageVisitAnalytics />);

    expect(
      await screen.findByText("Page visits (this device): 3")
    ).toBeInTheDocument();
  });

  test("opens modal when analytics text is clicked", async () => {
    render(<PageVisitAnalytics />);

    const analyticsButton = await screen.findByRole("button", {
      name: /page visits/i,
    });
    await userEvent.click(analyticsButton);

    expect(await screen.findByText(/visit history/i)).toBeInTheDocument();
  });

  test("displays visit history with timestamps in modal", async () => {
    const visits = [
      { timestamp: "2025-01-15T10:30:00.000Z", region: "New York, US" },
      { timestamp: "2025-01-15T14:45:00.000Z", region: "California, US" },
    ];
    localStorage.setItem("visit_history", JSON.stringify(visits));

    render(<PageVisitAnalytics />);

    const analyticsButton = await screen.findByRole("button", {
      name: /page visits/i,
    });
    await userEvent.click(analyticsButton);

    expect(await screen.findByText(/New York, US/i)).toBeInTheDocument();
    expect(screen.getByText(/California, US/i)).toBeInTheDocument();
  });

  test("filters visits by region", async () => {
    const visits = [
      { timestamp: "2025-01-15T10:30:00.000Z", region: "New York, US" },
      { timestamp: "2025-01-15T14:45:00.000Z", region: "California, US" },
      { timestamp: "2025-01-15T18:00:00.000Z", region: "New York, US" },
    ];
    localStorage.setItem("visit_history", JSON.stringify(visits));

    render(<PageVisitAnalytics />);

    const analyticsButton = await screen.findByRole("button", {
      name: /page visits/i,
    });
    await userEvent.click(analyticsButton);

    const filterInput = await screen.findByPlaceholderText(/filter by region/i);
    await userEvent.type(filterInput, "New York");

    expect(await screen.findAllByText(/New York, US/i)).toHaveLength(2);
    expect(screen.queryByText(/California, US/i)).not.toBeInTheDocument();
  });

  test("resets filter when reset button is clicked", async () => {
    const visits = [
      { timestamp: "2025-01-15T10:30:00.000Z", region: "New York, US" },
      { timestamp: "2025-01-15T14:45:00.000Z", region: "California, US" },
    ];
    localStorage.setItem("visit_history", JSON.stringify(visits));

    render(<PageVisitAnalytics />);

    const analyticsButton = await screen.findByRole("button", {
      name: /page visits/i,
    });
    await userEvent.click(analyticsButton);

    const filterInput = await screen.findByPlaceholderText(/filter by region/i);
    await userEvent.type(filterInput, "New York");

    expect(await screen.findAllByText(/New York, US/i)).toHaveLength(1);

    const resetButton = screen.getByRole("button", { name: /reset/i });
    await userEvent.click(resetButton);

    expect(await screen.findAllByText(/New York, US/i)).toHaveLength(1);
    expect(screen.getByText(/California, US/i)).toBeInTheDocument();
  });
});
