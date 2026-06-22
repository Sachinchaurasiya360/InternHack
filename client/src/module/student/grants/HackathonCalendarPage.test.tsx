// @vitest-environment jsdom
import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createMemoryRouter, RouterProvider, Route, Routes } from "react-router";
import React from "react";
import HackathonCalendarPage from "./HackathonCalendarPage";

vi.mock("../../../lib/axios", () => ({
  default: {
    get: vi.fn((url: string) => {
      if (url === "/hackathons") {
        return Promise.resolve({ data: { hackathons: [
          { id: 1, name: "Hack 1", organizer: "Org", logo: "", description: "", prizePool: "", startDate: "2026-01-01", endDate: "2026-01-03", location: "E1", locationType: "virtual", website: "", tags: ["web3"], tracks: [], eligibility: "", status: "upcoming", ecosystem: "Ethereum", highlights: [] },
          { id: 2, name: "Hack 2", organizer: "Org", logo: "", description: "", prizePool: "", startDate: "2026-02-01", endDate: "2026-02-03", location: "E2", locationType: "in-person", website: "", tags: ["ai"], tracks: [], eligibility: "", status: "ongoing", ecosystem: "Solana", highlights: [] },
        ] } });
      }
      if (url === "/hackathons/my") {
        return Promise.resolve({ data: { participations: [] } });
      }
      return Promise.resolve({ data: {} });
    }),
  },
}));

vi.mock("../../../lib/auth.store", () => ({
  useAuthStore: () => ({ user: null }),
}));

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
    },
  });
}

function renderPage(initialEntries: string[]) {
  const router = createMemoryRouter(
    [
      {
        path: "/student/grants/hackathons",
        element: <HackathonCalendarPage />,
      },
    ],
    { initialEntries },
  );

  const queryClient = createTestQueryClient();

  return {
    router,
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    ),
  };
}

describe("HackathonCalendarPage URL filter sync", () => {
  beforeEach(() => {
    vi.useRealTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("restores filters from URL params on first render", async () => {
    renderPage(["/student/grants/hackathons?status=ongoing&location=in-person&eco=Solana&mine=1&q=hack"]);

    await waitFor(() => expect(screen.getByPlaceholderText(/search hackathons/i)).toHaveValue("hack"));
    expect(screen.getByRole("button", { name: /ongoing/i })).toHaveClass("bg-gray-950");
    expect(screen.getByDisplayValue("in-person")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Solana")).toBeInTheDocument();
  });

  it("falls back to default values on invalid filter params", async () => {
    const { router } = renderPage(["/student/grants/hackathons?status=invalid&location=unknown&eco=BadEco&mine=42"]);

    await waitFor(() => expect(screen.getByPlaceholderText(/search hackathons/i)).toBeInTheDocument());
    expect(screen.getByRole("button", { name: /all/i })).toHaveClass("bg-gray-950");
    expect(screen.getByDisplayValue("All Locations")).toBeInTheDocument();
    expect(screen.getByDisplayValue("All Ecosystems")).toBeInTheDocument();
    await waitFor(() => expect(router.state.location.search).toBe(""));
  });

  it("restores filter UI when navigating back and forward", async () => {
    const { router } = renderPage(["/student/grants/hackathons?status=upcoming"]);

    await waitFor(() => expect(screen.getByRole("button", { name: /upcoming/i })).toHaveClass("bg-gray-950"));

    await act(async () => {
      await router.navigate("/student/grants/hackathons?status=ongoing&location=in-person");
    });

    await waitFor(() => expect(screen.getByRole("button", { name: /ongoing/i })).toHaveClass("bg-gray-950"));
    expect(screen.getByDisplayValue("in-person")).toBeInTheDocument();

    await act(async () => {
      await router.navigate(-1);
    });

    await waitFor(() => expect(screen.getByRole("button", { name: /upcoming/i })).toHaveClass("bg-gray-950"));
    expect(screen.getByDisplayValue("All Locations")).toBeInTheDocument();

    await act(async () => {
      await router.navigate(1);
    });

    await waitFor(() => expect(screen.getByRole("button", { name: /ongoing/i })).toHaveClass("bg-gray-950"));
    expect(screen.getByDisplayValue("in-person")).toBeInTheDocument();
  });
});
