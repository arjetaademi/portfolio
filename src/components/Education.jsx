import { useInView } from "../hooks/useInView";
import { EDUCATION } from "../data/data";

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section
      id="education"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #fdf6fa, #fce8f3)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 2rem" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#d4478a",
            marginBottom: "0.5rem",
          }}
        >
          — Education
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#4a2540",
            marginBottom: "3rem",
          }}
        >
          Academic Background
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {EDUCATION.map((e, i) => (
            <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div className="timeline-dot" />
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "1.8rem",
                  border: "1.5px solid #f5d0e8",
                  boxShadow: "0 4px 20px rgba(212,71,138,0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    color: "#d4478a",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {e.year}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#4a2540",
                    marginBottom: "0.3rem",
                  }}
                >
                  {e.degree}
                </h3>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#c0607a",
                    marginBottom: "0.4rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {e.school}
                </div>
                <p style={{ color: "#7a4060", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {e.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
