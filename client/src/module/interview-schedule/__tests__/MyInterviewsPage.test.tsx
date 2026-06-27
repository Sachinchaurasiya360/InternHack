// @vitest-environment jsdom
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import MyInterviewsPage from "../MyInterviewsPage";
import * as api from "../api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock the API module
vi.mock("../api", () => ({
  getInterviews: vi.fn(),
  scheduleInterview: vi.fn(),
  updateInterview: vi.fn(),
  cancelInterview: vi.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const renderComponent = (role: "STUDENT" | "RECRUITER") => {
  return render(
    <QueryClientProvider client={queryClient}>
      <MyInterviewsPage role={role} />
    </QueryClientProvider>
  );
};

describe("MyInterviewsPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });

  it("should render tabs correctly", async () => {
    (api.getInterviews as any).mockResolvedValue({ data: [], total: 0, page: 1, limit: 10 });
    
    renderComponent("STUDENT");

    expect(screen.getByText("Upcoming")).toBeTruthy();
    expect(screen.getByText("Past")).toBeTruthy();
    expect(screen.getByText("Cancelled")).toBeTruthy();
  });

  it("should display interview lists", async () => {
    (api.getInterviews as any).mockResolvedValue({
      data: [
        {
          id: 1,
          scheduledAt: new Date().toISOString(),
          durationMinutes: 60,
          status: "SCHEDULED",
          meetingLink: "https://zoom.us/test",
          recruiter: { name: "John Recruiter" },
          student: { name: "Alice Student" }
        }
      ],
      total: 1,
      page: 1,
      limit: 10
    });

    renderComponent("RECRUITER");

    await waitFor(() => {
      expect(screen.getByText("Alice Student")).toBeTruthy();
    });
  });

  it("should show schedule interview button for recruiters", async () => {
    (api.getInterviews as any).mockResolvedValue({ data: [], total: 0, page: 1, limit: 10 });
    
    renderComponent("RECRUITER");
    
    expect(screen.getByText("Schedule Interview")).toBeTruthy();
  });

  it("should not show schedule interview button for students", async () => {
    (api.getInterviews as any).mockResolvedValue({ data: [], total: 0, page: 1, limit: 10 });
    
    renderComponent("STUDENT");
    
    expect(screen.queryByText("Schedule Interview")).toBeNull();
  });
});
