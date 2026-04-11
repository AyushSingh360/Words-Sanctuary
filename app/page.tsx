import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="home-hero-section">
        {/* Watercolor Corner Decorations */}
        <div className="hero-blob blob-1 watercolor-blur"></div>
        <div className="hero-blob blob-2 watercolor-blur"></div>
        <div className="hero-blob blob-3 watercolor-blur"></div>
        <div className="hero-blob blob-4 watercolor-blur"></div>

        {/* Centered Content */}
        <div className="hero-content">
          <h1 className="hero-title">Words from the Heart</h1>
          <p className="hero-subtitle">
            Inspiration, reflections, and quotes to soothe the soul.
          </p>
          <div style={{ paddingTop: "1rem" }}>
            <button className="hero-button">Enter the Gallery</button>
          </div>
        </div>

        {/* Quote at Bottom Center */}
        <div className="hero-quote-wrapper">
          <div className="hero-quote-divider"></div>
          <p className="hero-quote">{"\"Writing is the painting of the soul.\""}</p>
          <div className="hero-quote-divider"></div>
        </div>
      </section>

      {/* Curated Feed */}
      <section className="reflections-section">
        <div className="reflections-container">
          <h2 className="section-label">Recent Reflections</h2>

          <div className="reflections-grid">
            {/* Card 1 */}
            <div className="reflection-card card-1">
              <div className="img-wrapper aspect-16-9">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4r9TuklI1T1dKkihBoAQL7nhKsk3lWiif6wUsvLsldR9TAMbD-MTICSf9oWfaalZO3MjFPdjhO-_NZG48Zt509ZLTBe-3YQTUf1GnYwPt2t09J2fUxBcL7i83wukGDC5Zr3YcQE75cPrQHfbriOv76BYUNFHSgbmL8EvAfbpkF_frUM8DJudd8FMW8OoooCF07INxuPq5rkDzPzeK4XueUPeBPVZB1wfo-vQBlk46icWEs3i0KqdTj6Ptj9niLgidsnO9OWiakDhY"
                  alt="Journaling"
                />
              </div>
              <div className="reflection-card-content">
                <span className="card-tag tag-tertiary">Philosophy</span>
                <Link href="/journal" style={{ textDecoration: 'none' }}>
                  <h3 className="card-title">The Art of Morning Stillness</h3>
                </Link>
                <p className="card-excerpt">
                  Finding the architecture of {"one's"} thoughts before the world begins to speak. A study on silence as a creative catalyst.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="reflection-card card-2">
              <div className="img-wrapper aspect-4-5">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiLOCTpplzkgxGwidmJo0UYvIJoeczlGLOzVopVzFylRSGx1XnhW3N9E1YVkb3omt4jlYbshhVg_3fKKkMhB72Q4UpmO4IuoaFOQAUU9cnPU-TurfhoTC9_ot9Oi76yj2knsl6wxSZUbDY-Boz7Qlu8d39a2Sd5_rgbrNqVB75h-6Jrv99YhQs4MUGV5X7rGaCGq9rL0NOZ24QguhhJtBnHrA-aOtEgheEiTWUTt0HmyCZdxRPHGL7ulxiFX8atKWi6MmAkiXD2OCP"
                  alt="Sunsets"
                />
              </div>
              <div className="reflection-card-content">
                <span className="card-tag tag-secondary">Nature</span>
                <Link href="/journal" style={{ textDecoration: 'none' }}>
                  <h3 className="card-title">Where the Horizon Fades</h3>
                </Link>
                <p className="card-excerpt">
                  Reflections on the impermanence of beauty and the grace found in letting go of the day.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="reflection-card card-3">
              <div className="reflection-card-content" style={{ marginBottom: "2rem" }}>
                <span className="card-tag tag-primary">Poetics</span>
                <Link href="/journal" style={{ textDecoration: 'none' }}>
                  <h3 className="card-title">Ink as a Vessel</h3>
                </Link>
                <p className="card-excerpt">
                  How the physical act of writing bridges the gap between the subconscious and the tangible world.
                </p>
              </div>
              <div className="img-wrapper aspect-square">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2JFJfzKeoWfej_WUc3f-mav8zA6f5KgWXPYHiEy7QvlEYSwXWu0G8LuZfG-u0yso-wcJzypliJHabaoajo7eHntKbe9mJiXWrCwTYE4ckJLG_ZaVg9ReR4e0Rp1AtnSwtw6QBmnUHDUUjPlftoyddi-oXrjhR-ZlIii-ZSflP1cWsy9zLfK-Fgip1bPUjYKonPrXzqL76-wI95kdgufxBA9tt3Zf-cSlq4Z101h_jMv8Te3LYDenOEU0QMJLdn4WqCBxfS7m9QNL"
                  alt="Writing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="newsletter-section">
        <div className="newsletter-bg-blob"></div>
        <div className="newsletter-content">
          <div>
            <h2 className="newsletter-title">Join the Journey</h2>
            <p className="newsletter-desc">Receive monthly reflections and poetic meditations directly in your inbox.</p>
          </div>
          <div className="newsletter-form">
            <input className="newsletter-input" type="email" placeholder="Your email address" />
            <button className="newsletter-btn">Subscribe to the Letter</button>
          </div>
        </div>
      </section>
    </>
  );
}
