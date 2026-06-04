import { useInView } from "../hooks/useInView";

const sectionStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "100px 2rem",
};

const sectionLabel = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.72rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#d4478a",
  marginBottom: "0.5rem",
};

const sectionTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "clamp(2.2rem, 4vw, 3rem)",
  fontWeight: 700,
  color: "#4a2540",
  lineHeight: 1.15,
};

export default function About({ scrollTo }) {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div style={sectionStyle}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Visual card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "24px",
                background: "linear-gradient(135deg, #fce8f3, #f9d0e8)",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(212,71,138,0.15)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  padding: "2rem",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f7b8d8, #d4478a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                    boxShadow: "0 12px 40px rgba(212,71,138,0.3)",
                  }}
                >
                  👩‍💻
                </div>

                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#4a2540",
                    }}
                  >
                    Arjeta Ademi
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      color: "#d4478a",
                      letterSpacing: "0.1em",
                      marginTop: "4px",
                    }}
                  >
                    Frontend Developer
                  </div>
                </div>

                {/* Stats grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    width: "100%",
                  }}
                >
                  {[
                    ["4+", "Projects"],
                    ["2+", "Years Learning"],
                    ["7", "Technologies"],
                    ["∞", "Curiosity"],
                  ].map(([n, l]) => (
                    <div
                      key={l}
                      style={{
                        background: "rgba(255,255,255,0.7)",
                        borderRadius: "12px",
                        padding: "12px",
                        textAlign: "center",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.6rem",
                          fontWeight: 700,
                          color: "#d4478a",
                        }}
                      >
                        {n}
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "#7a4060",
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spinning decoration */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "2px dashed #f7b8d8",
                animation: "spin 12s linear infinite",
              }}
            />
          </div>

          {/* Text content */}
          <div>
            <div style={sectionLabel}>— About Me</div>
            <h2
              style={{
                ...sectionTitle,
                marginBottom: "1.5rem",
              }}
            >
              Turning ideas into
              <br />
              <em style={{ fontStyle: "italic", color: "#d4478a" }}>
                digital reality
              </em>
            </h2>

            <p style={{ color: "#7a4060", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "0.95rem" }}>
              Hello! I'm Arjeta, a Junior Frontend Developer based in North
              Macedonia, passionate about creating clean and beautiful web
              experiences. I believe great design and solid code work hand-in-hand.
            </p>
            <p style={{ color: "#7a4060", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "0.95rem" }}>
           I hold a Bachelor's degree in Applied Programming
            and I am currently pursuing a Master's degree in Information Technology.
            
            </p>
            <p style={{ color: "#7a4060", lineHeight: 1.85, marginBottom: "2rem", fontSize: "0.95rem" }}>
              When I'm not coding, I enjoy exploring UI design trends,
              contributing to open-source projects, and leveling up my React
              skills. I'm actively seeking frontend or internship opportunities.
            </p>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button className="btn-primary" onClick={() => scrollTo("Contact")}>
                Get In Touch
              </button>
              <a
           href="https://github.com/arjetaademi"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
