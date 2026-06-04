import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/data";

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    scrollTo(link);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(253,246,250,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #f5d0e8" : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#d4478a",
            letterSpacing: "0.02em",
          }}
        >
          Arjeta<span style={{ color: "#4a2540" }}> Ademi</span>
        </span>

        {/* Desktop links */}
        <div
          className="nav-links-desktop"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        >
          {NAV_LINKS.map((l) => (
            <button key={l} className="nav-link" onClick={() => handleNav(l)}>
              {l}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ padding: "9px 22px", fontSize: "0.74rem" }}
            onClick={() => handleNav("Contact")}
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#d4478a",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : i === 2
                    ? "rotate(-45deg) translate(5px,-5px)"
                    : "scaleX(0)"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(253,246,250,0.98)",
            padding: "1rem 2rem 1.5rem",
            borderTop: "1px solid #f5d0e8",
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              className="nav-link"
              onClick={() => handleNav(l)}
              style={{ display: "block", marginBottom: "1rem", fontSize: "0.9rem" }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
