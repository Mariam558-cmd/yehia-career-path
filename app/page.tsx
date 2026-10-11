import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="home-text">
        <div className="home-content">
          <h1>
            One step at a time
            <br />
            <span>Toward my first job</span>
          </h1>

          <p>
            I&apos;m Yehia, a Computer Science graduate from the Lebanese
            University, First Branch. I&apos;m looking for my first job and
            building a clear plan to make it happen.
          </p>

          <div className="buttons">
            <Link href="/plan" className="plan-button">
              View My Plan →
            </Link>

            <Link href="/opportunities" className="opportunities-button">
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

       <div className="home-image">
        <Image
          src="/yehia-plan.png"
          alt="Yehia writing his career plan in a notebook, with his laptop beside him"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="home-image-img"
        />
      </div>
    </main>
  );
}