import { applications } from "../data/applications";
export default function DashboardPage() {
const totalApplications = applications.length;

const appliedApplications = applications.filter(
  (application) => application.status === "Applied"
).length;

const underReviewApplications = applications.filter(
  (application) => application.status === "Under Review"
).length;


  return (
    <main className="dashboard-overview">
      <header className="dashboard-header">
        <h1>Your Career Progress</h1>
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