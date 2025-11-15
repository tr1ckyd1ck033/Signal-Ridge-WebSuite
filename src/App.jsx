import React, { useEffect } from "react";

const App = () => {
  // Scroll-based animation for the Ghost Seal
  useEffect(() => {
    const handleScroll = () => {
      const sc = window.scrollY || 0;
      const seal = document.getElementById("sr-seal-wrap");
      const stops = document.querySelectorAll("#ridgeBrush stop");
      if (seal) {
        const y = Math.max(-12, Math.min(12, sc * -0.02));
        seal.style.transform = `translateY(${y}px)`;
      }
      if (stops.length === 4) {
        const pct = Math.min(1, sc / 800);
        const shift = pct * 25;
        stops[0].setAttribute("offset", `${0 + shift}%`);
        stops[1].setAttribute("offset", `${35 + shift}%`);
        stops[2].setAttribute("offset", `${70 + shift}%`);
        stops[3].setAttribute("offset", `${100 + shift}%`);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade out intro text
  useEffect(() => {
    const init = document.getElementById("initText");
    if (!init) return;
    const t = setTimeout(() => {
      init.style.opacity = "0";
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <header className="hero brushed" id="top">
        <div className="seal-wrap" id="sr-seal-wrap">
          <svg
            id="ghost-seal"
            viewBox="0 0 1200 600"
            role="img"
            aria-label="Signal Ridge Ghost Seal"
          >
            <defs>
              <linearGradient id="ridgeBrush" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8d6b2c" />
                <stop offset="35%" stopColor="#B58B3B" />
                <stop offset="70%" stopColor="#7e5f25" />
                <stop offset="100%" stopColor="#2a2215" />
              </linearGradient>

              <linearGradient id="textGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B58B3B" />
                <stop offset="100%" stopColor="#8f6e30" />
              </linearGradient>
            </defs>

            {/* Ridge silhouette */}
            <g className="ridge-emboss">
              <path
                className="ridge-fill"
                d="
                  M80 380
                  C 220 330, 260 300, 330 310
                  C 400 320, 475 250, 560 250
                  C 640 250, 705 305, 770 300
                  C 835 295, 885 260, 950 270
                  C 1015 280, 1100 330, 1140 350
                  L 1140 390 L 80 390 Z
                "
              />
            </g>

            {/* Wordmark */}
            <g transform="translate(0, 85)">
              <text
                x="50%"
                y="470"
                textAnchor="middle"
                fontFamily="ui-serif, 'Times New Roman', Georgia, serif"
                fontSize="92"
                className="wordmark"
                style={{ fontVariantCaps: "small-caps" }}
              >
                SIGNAL RIDGE
              </text>
            </g>
          </svg>
        </div>

        <small className="init" id="initText">
          ACCESS LEVEL: VERIFIED · SYSTEM INITIALIZING…
        </small>

        <div className="scroll-indicator" aria-hidden="true" />
      </header>

      {/* OPERATIONAL MANDATE */}
      <section className="section alt">
        <div className="container reveal">
          <h2>Our Operational Mandate</h2>
          <div className="divider" />

          <div className="grid">
            <div>
              <p>
                We operate at the intersection of intelligence, analysis, and
                applied development. The work is simple: identify the pattern,
                verify the source, act on truth. The signal is always there. We
                make it visible.
              </p>
            </div>

            <div>
              <p>
                Signal Ridge is built for disciplined execution: black-site
                sensibilities, field-ready tooling, and data pipelines that
                don’t break under pressure. Quiet on the surface, industrial
                underneath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="section">
        <div className="container reveal">
          <h2>Divisions &amp; Capabilities</h2>
          <div className="divider" />

          <div className="cards">
            <div className="card">
              <h3>Field Ops</h3>
              <p>
                Discreet collection, verification, and escalation pathways with
                real operational discipline.
              </p>
            </div>

            <div className="card">
              <h3>Data</h3>
              <p>
                Acquisition pipelines, entity resolution, and correlation
                engines designed for real-world noise, not laboratory data.
              </p>
            </div>

            <div className="card">
              <h3>Development</h3>
              <p>
                Secure tools built lean and hardened — for bad networks, bad
                actors, and bad days.
              </p>
            </div>

            <div className="card">
              <h3>Analysis</h3>
              <p>
                Structured assessments and reporting tuned for decision-making,
                not corporate theater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section alt">
        <div className="container reveal">
          <h2>Selected Work</h2>
          <div className="divider" />

          <div className="hscroller" aria-label="project samples">
            <article className="tile">
              <h3>Intercept Surface</h3>
              <p>
                Unified intake for OSINT, structured crawls, and human feedback.
                High signal, low ceremony.
              </p>
            </article>

            <article className="tile">
              <h3>Clearance Ledger</h3>
              <p>
                Access control with auditable trails. If it moves, it’s logged.
              </p>
            </article>

            <article className="tile">
              <h3>Operator Toolkit</h3>
              <p>
                Focused utilities with tactical leverage. Minimal overhead,
                maximum effect.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="container reveal">
          <h2>Request Clearance</h2>
          <div className="divider" />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form captured. Wire to backend when ready.");
            }}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required />
            </div>

            <div>
              <label htmlFor="purpose">Purpose</label>
              <input id="purpose" name="purpose" required />
            </div>

            <div>
              <label htmlFor="code">Authorization Code (optional)</label>
              <input id="code" name="code" />
            </div>

            <div>
              <label htmlFor="msg">Message</label>
              <textarea id="msg" name="msg" rows={5} required />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <div className="footer-text">
            Signal Ridge Operations • Internal Distribution Only
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
