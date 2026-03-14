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
      <div className="hidden lg:block">
        <Navbar sidebarOffset={sidebarWidth} />
      </div>
      {sidebar}
      <main
        className={`pt-16 lg:pt-24 px-4 pb-8 sm:px-6 lg:px-8 transition-all duration-300 overflow-auto ${
          collapsed ? "lg:ml-18" : "lg:ml-64"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
