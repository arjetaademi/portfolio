import { useInView } from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "linear-gradient(160deg, #fce8f3, #fdf0f7)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 2rem" }}>
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left: info */}
          <div>
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
              — Contact
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#4a2540",
                lineHeight: 1.15,
                marginBottom: "1.2rem",
              }}
            >
              Let's work
              <br />
              <em style={{ fontStyle: "italic", color: "#d4478a" }}>together</em>
            </h2>

            <p
              style={{
                color: "#7a4060",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontSize: "0.92rem",
              }}
            >
              I'm open to frontend roles, internships, and freelance
              collaborations. If you have a project in mind or just want to
              connect, don't hesitate to reach out!
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                ["📧", "arjetaademi47@email.com", "mailto:arjetaademi47@email.com"],
                ["📍", "Kumanovo, North Macedonia", null],
                ["💼", "Open to opportunities", null],
              ].map(([icon, text, href]) => (
                <div key={text} style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
                  <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        color: "#d4478a",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ color: "#7a4060", fontSize: "0.9rem" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div style={{ display: "flex", gap: "0.8rem" }}>
              <a
                href="https://github.com/arjetaademi"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arjeta-ademi-a4a768247"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "2.5rem",
              boxShadow: "0 20px 60px rgba(212,71,138,0.1)",
              border: "1.5px solid #f5d0e8",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#4a2540",
                marginBottom: "1.8rem",
              }}
            >
              Send a message
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "#9a5070",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.08em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    NAME
                  </label>
                  <input className="contact-input" placeholder="Your name" />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "#9a5070",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.08em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    EMAIL
                  </label>
                  <input
                    className="contact-input"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "#9a5070",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.08em",
                    marginBottom: "0.4rem",
                  }}
                >
                  SUBJECT
                </label>
                <input className="contact-input" placeholder="What's this about?" />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "#9a5070",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.08em",
                    marginBottom: "0.4rem",
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  className="contact-input"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "15px" }}
              >
                Send Message ✦
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
