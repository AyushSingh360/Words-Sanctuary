export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-header">
          <h1 className="about-title">The Storyteller</h1>
          <p className="about-subtitle">
            "The written word is not just a carrier of information, but a vessel for the quietude we often lose in the noise of the modern world."
          </p>
        </div>

        <p className="about-text">
          I have spent a decade learning how to translate the silence between thoughts into sentences. My journey began in the damp corridors of old libraries and the sun-drenched silence of coastal retreats, where I discovered that the most profound stories aren't told—they are curated.
          {"\n\n"}
          At Words Sanctuary, I believe in the power of crafting stillness through the written word. It is an intentional slowing down, an invitation to breathe through the letters.
        </p>

        <div className="about-journey">
          <h2 className="journey-title" style={{ color: "var(--color-primary-container)" }}>The Journey of Intent</h2>
          
          <div className="journey-step">
            <h3 className="journey-title">The Early Chapters</h3>
            <p className="journey-desc">Forming a relationship with paper and ink in the quietest corners of the world, where every word was a meditation.</p>
          </div>
          
          <div className="journey-step">
            <h3 className="journey-title">The Artist's Eye</h3>
            <p className="journey-desc">Learning that storytelling is as much about the visual rhythm of the page as it is about the narrative arc itself.</p>
          </div>
          
          <div className="journey-step">
            <h3 className="journey-title">The Curated Peace</h3>
            <p className="journey-desc">Finding my voice in the minimalism of thought, dedicated to those who seek refuge in the beauty of simplicity.</p>
          </div>
        </div>

        <div className="about-philosophy">
          <span className="philosophy-title">A Philosophy of Patience</span>
          <p className="about-text text-center">
            My work is a rejection of the urgent. Here, we celebrate the slow sentence. The paragraph that took three hours to breathe into life. The essay that waited for the right season to be finished.
          </p>
          <p className="philosophy-quote">"To curate is to care. To write is to remember how to feel."</p>
        </div>

      </div>
    </section>
  );
}
