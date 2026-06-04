export default function Footer() {
  return (
    <footer
      style={{
        background: "#4a2540",
        color: "#f0a0c8",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.3rem",
          color: "#f7b8d8",
          marginBottom: "0.5rem",
        }}
      >
        Arjeta Ademi
      </div>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.1em",
          opacity: 0.6,
        }}
      >
        JUNIOR FRONTEND DEVELOPER · SKOPJE, NORTH MACEDONIA
      </div>
      <div style={{ marginTop: "1rem", fontSize: "0.78rem", opacity: 0.5 }}>
        © 2025 Arjeta Ademi. Built with React ✦
      </div>
    </footer>
  );
}
