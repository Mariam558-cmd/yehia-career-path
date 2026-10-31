import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <h2 className="sidebar-title">Dashboard</h2>

        <nav className="dashboard-nav">
          <Link href="/dashboard" className="dashboard-nav-link">
            <span className="nav-icon">⌂</span>
            Overview
          </Link>

          <Link
            href="/dashboard/applications"
            className="dashboard-nav-link"
          >
            <span className="nav-icon">▤</span>
            Applications
          </Link>
        </nav>
      </aside>

      <div className="dashboard-content">
        {children}
      </div>
    </section>
  );
}