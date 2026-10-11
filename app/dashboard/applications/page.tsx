export default function ApplicationsPage() {
  return (
    <main className="applications-page">
      <header className="applications-header">
        <h1>My Applications</h1>
        <p>Track your applications and stay organized.</p>
      </header>

  
      <section className="applications-list">

        <article className="application-card">
          <div className="application-icon application-icon-design">
             &lt;/&gt;
          </div>
          <div className="application-details">
            <h2>Junior Front-End Developer</h2>
            <p className="application-company">Cedar Digital</p>
            <span className="application-status status-applied">
              Applied
            </span>
          </div>
        </article>

    
        <article className="application-card">
          <div className="application-icon application-icon-code">
            &lt;/&gt;
          </div>
          <div className="application-details">
            <h2>Graduate Software Engineer</h2>
            <p className="application-company">Code Harbor</p>
            <span className="application-status status-review">
              Under review
            </span>
          </div>
        </article>
      </section>
    </main>
  );
}