import { Outlet } from "react-router";
import { useAuthStore } from "../../../lib/auth.store";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import { Navbar } from "../../../components/Navbar";

export default function LearnLayout() {
  const { user, isAuthenticated } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";

  if (isStudent) {
    return <StudentLearnLayout />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-28 pb-12">
        <Outlet />
      </main>
    </div>
  );
}

function StudentLearnLayout() {
  const { collapsed, sidebarWidth, sidebar } = useStudentSidebar();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar sidebarOffset={sidebarWidth} />
      {sidebar}
      <main
        className={`${collapsed ? "ml-18" : "ml-64"} pt-24 p-8 transition-all duration-300 overflow-auto`}
      >
        <Outlet />
      </main>
    </div>
  );
}
