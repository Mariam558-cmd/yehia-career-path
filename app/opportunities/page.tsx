import Link from "next/link";
import { opportunities } from "../data/opportunities";

export default function OpportunitiesPage() {
  return (
    <main className="opportunities-page">
      <div className="opportunities-container">

        <div className="opportunities-header">
          <h1>Available Opportunities</h1>
          <p>
            Explore these opportunities and find the right fit for your
            skills and goals.
          </p>
        </div>

        <div className="opportunities-list">
          {opportunities.map((opportunity) => {
            const destination = `/opportunities/${opportunity.id}`;

            return (
              <article
                key={opportunity.id}
                className="opportunity-card"
              >
                <div className="opportunity-info">

                  <div className="opportunity-icon">
                    {opportunity.id === "1" && "</>"}
                    {opportunity.id === "2" && "</>"}
                    {opportunity.id === "3" && "</>"}
                  </div>

                  <div className="opportunity-details">
                    <h2>{opportunity.title}</h2>

                    <p className="opportunity-company">
                      {opportunity.company}
                    </p>

                    <p className="opportunity-location">
                      <span>📍</span>
                      {opportunity.location}
                    </p>
                  </div>

                </div>

                <Link
                  href={destination}
                  className="opportunity-button"
                >
                  View opportunity
                  <span>→</span>
                </Link>

              </article>
            );
          })}
        </div>

      </div>
    </main>
  );
}