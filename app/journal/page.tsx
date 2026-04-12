import Link from "next/link";

export default function Journal() {
  return (
    <section className="journal-section">
      <div className="journal-container">
        
        <div className="journal-entry">
          <span className="journal-date">MAY 15, 2024</span>
          <h2 className="journal-title">Whispers of the Morning Fog</h2>
          <p className="journal-excerpt">
            There is a specific stillness that only arrives before the sun. Today, the world was wrapped in a silken grey, a curtain between the known and the imagined. In these moments, my thoughts find their own rhythm, untethered from the demands of the day.
          </p>
          <Link href="#" className="journal-read-more">
            Read Reflection <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="journal-entry">
          <span className="journal-date">MAY 02, 2024</span>
          <h2 className="journal-title">The Geometry of Silence</h2>
          <p className="journal-excerpt">
            I spent the afternoon observing the way light shadows a blank page. We often fear the void, yet it is only in the empty spaces that new geometries can emerge. Silence is not an absence, but a presence of potential.
          </p>
          <Link href="#" className="journal-read-more">
            Read Reflection <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="journal-entry">
          <span className="journal-date">APR 22, 2024</span>
          <h2 className="journal-title">Of Ink and Intention</h2>
          <p className="journal-excerpt" style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
            "To write is to anchor the drifting soul to the physical world, one stroke at a time."
          </p>
          <p className="journal-excerpt">
            Reflecting on the tactile nature of analog tools in a digital world. Why do we still crave the resistance of paper and the permanence of ink?
          </p>
          <Link href="#" className="journal-read-more">
            Read Reflection <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="journal-entry">
          <span className="journal-date">APR 10, 2024</span>
          <h2 className="journal-title">The Summer of Stillness</h2>
          <p className="journal-excerpt">
            The heat has a way of slowing time. In the humid afternoons, the only movement is the slow drift of dust motes in a sunbeam. I have found solace in this stagnation.
          </p>
          <Link href="#" className="journal-read-more">
            Read Reflection <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="journal-entry">
          <span className="journal-date">MAR 28, 2024</span>
          <h2 className="journal-title">Blue Hour Melancholy</h2>
          <p className="journal-excerpt">
            There is a shade of blue that only exists for ten minutes each evening. It is the color of nostalgia and unfinished sentences.
          </p>
          <Link href="#" className="journal-read-more">
            Read Reflection <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="journal-pagination">
          <Link href="#" className="pagination-btn">
            <span className="material-symbols-outlined">west</span> Previous
          </Link>
          <Link href="#" className="pagination-btn">
            Next <span className="material-symbols-outlined">east</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
