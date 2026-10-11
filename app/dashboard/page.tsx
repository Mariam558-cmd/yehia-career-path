export default function DashboardPage() {
  const totalApplications = 2;
  const appliedApplications = 1;
  const underReviewApplications = 1;

  return (
    <main className="dashboard-overview">
      <header className="dashboard-header">
        <h1>Your Career Progress</h1>

        <p>
          You&apos;ve made great progress! Keep going.
          Every application is another step forward.
        </p>
      </header>

      <section className="dashboard-stats">
        <article className="dashboard-stat-card stat-indigo">
          <div className="stat-icon">➤</div>

          <div className="stat-info">
            <h2>{totalApplications}</h2>
            <p>Total Applications</p>
          </div>
        </article>

        <article className="dashboard-stat-card stat-green">
          <div className="stat-icon">✔</div>

          <div className="stat-info">
            <h2>{appliedApplications}</h2>
            <p>Applied</p>
          </div>
        </article>

        <article className="dashboard-stat-card stat-orange">
          <div className="stat-icon">🔍</div>

          <div className="stat-info">
            <h2>{underReviewApplications}</h2>
            <p>Under Review</p>
          </div>
        </article>
      </section>

      <section className="dashboard-message">
        <span>🎯</span>
        <p>Small steps make big progress. You&apos;re doing great, keep going!</p>
      </section>
    </main>
  );
}