export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(150deg, #fdf6fa 0%, #fce8f3 50%, #fdf0f7 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(247,184,216,0.4) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,71,138,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 2rem 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            letterSpacing: "0.25em",
            color: "#d4478a",
            marginBottom: "1.2rem",
            textTransform: "uppercase",
            animation: "fadeUp 0.8s ease both",
          }}
        >
          ✦ Junior Frontend Developer
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            fontWeight: 700,
            color: "#4a2540",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
            animation: "fadeUp 0.8s 0.15s ease both",
          }}
        >
          Arjeta
          <br />
          <span style={{ color: "#d4478a", fontStyle: "italic" }}>Ademi</span>
        </h1>

        {/* Intro */}
        <p
          style={{
            maxWidth: "520px",
            fontSize: "1.05rem",
            color: "#7a4060",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            fontWeight: 300,
            animation: "fadeUp 0.8s 0.3s ease both",
          }}
        >
          I craft beautiful, responsive web experiences with clean code and
          thoughtful design. Passionate about turning ideas into pixel-perfect
          digital products.
        </p>

        {/* CTA buttons */}
        <div
          className="hero-btns"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            animation: "fadeUp 0.8s 0.45s ease both",
          }}
        >
          <button className="btn-primary" onClick={() => scrollTo("Projects")}>
            View My Work ↓
          </button>
          <a href="/cv-arjeta-ademi.pdf" className="btn-outline" download>
            ⬇ Download CV
          </a>
        </div>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            gap: "0.8rem",
            marginTop: "2.5rem",
            animation: "fadeUp 0.8s 0.6s ease both",
          }}
        >
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
    </section>
  );
}
