import Link from "next/link";
import { opportunities } from "../../data/opportunities";

export default async function OpportunityPage({params}: {params: {id: string}}) {
  const { id } = await params;

  const selectedOpportunity = opportunities.find(
    (opportunity) => opportunity.id === id
  );

  if (!selectedOpportunity) {
    return (
      <main className="opportunity-page">
        <h1>Opportunity not found</h1>

        <p>
          We couldn't find an opportunity with this ID.
        </p>

        <Link href="/opportunities">
          ← Back to opportunities
        </Link>
      </main>
    );
  }

  return (
    <main className="opportunity-page">
      <Link href="/opportunities">
        ← Back to opportunities
      </Link>

      <h1>{selectedOpportunity.title}</h1>

      <p>{selectedOpportunity.company}</p>

      <p>{selectedOpportunity.location}</p>

      <p>{selectedOpportunity.description}</p>
    </main>
  );
}