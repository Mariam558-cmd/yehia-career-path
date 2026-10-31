import { applications } from "../../data/applications";

export default function ApplicationsPage() {
  return (
    <main className="applications-page">
      <header className="applications-header">
        <h1>My Applications</h1>
        <p>Track your applications and stay organized.</p>
      </header>

  
      <section className="applications-list">
    {applications.map((application) => (
  <article key={application.id} className="application-card">
    <div className="application-icon application-icon-design">
      &lt;/&gt;
    </div>

    <div className="application-details">
      <h2>{application.title}</h2>

      <p className="application-company">
        {application.company}
      </p>

    <span className= {`application-status ${
    application.status === "Applied"
      ? "status-applied"
      : "status-review"
  }`}
>
  {application.status}
</span>
    </div>
  </article>
))}

      </section>
    </main>
  );
}