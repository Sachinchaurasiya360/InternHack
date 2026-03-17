import { Outlet } from "react-router";
import { useLayoutStore } from "../../lib/layout.store";
import { useStudentSidebar } from "../../components/StudentSidebar";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";

export default function StudentLayout() {
  const immersive = useLayoutStore((s) => s.immersive);
  const { collapsed, sidebarWidth, sidebar } = useStudentSidebar();

  if (immersive) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <SEO title="Student Dashboard" noIndex />
      {/* Navbar hidden on mobile (mobile top bar is in StudentSidebar) */}
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
