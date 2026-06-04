import { useInView } from "../hooks/useInView";
import { EXPERIENCE } from "../data/data";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      style={{
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
          — Work Experience
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
          Professional Journey
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {EXPERIENCE.map((ex, i) => (
            <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div className="timeline-dot" />
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "1.8rem 2rem",
                  border: "1.5px solid #f5d0e8",
                  boxShadow: "0 4px 20px rgba(212,71,138,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "#4a2540",
                      }}
                    >
                      {ex.role}
                    </h3>
                    <div style={{ color: "#d4478a", fontWeight: 600, fontSize: "0.9rem" }}>
                      {ex.company}
                    </div>
                  </div>
                  <span
                    style={{
                      background: "#fce8f3",
                      color: "#c0607a",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      padding: "5px 12px",
                      borderRadius: "99px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {ex.period}
                  </span>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {ex.points.map((point, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        color: "#7a4060",
                        fontSize: "0.88rem",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#d4478a", flexShrink: 0, marginTop: "2px" }}>✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
