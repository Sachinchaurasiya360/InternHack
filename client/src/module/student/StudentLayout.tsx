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
