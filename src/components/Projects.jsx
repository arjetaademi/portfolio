import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/data";

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : project.color,
        borderRadius: "20px",
        padding: "2rem",
        border: `1.5px solid ${hovered ? "#e880b0" : "#f5c6de"}`,
        transition: "all 0.35s ease",
        transform: inView
          ? hovered
            ? "translateY(-8px)"
            : "none"
          : "translateY(30px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}ms`,
        boxShadow: hovered
          ? "0 20px 60px rgba(212,71,138,0.15)"
          : "0 4px 20px rgba(212,71,138,0.06)",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>{project.icon}</div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#4a2540",
          marginBottom: "0.6rem",
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontSize: "0.88rem",
          color: "#7a4060",
          lineHeight: 1.7,
          marginBottom: "1.2rem",
        }}
      >
        {project.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              background: "linear-gradient(135deg,#f7b8d8,#f0a0c8)",
              color: "#7a2050",
              fontSize: "0.72rem",
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: "99px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            — Portfolio
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#4a2540",
              marginBottom: "1rem",
            }}
          >
            Featured Projects
          </h2>
          <p style={{ color: "#7a4060", maxWidth: "500px", margin: "0 auto", fontSize: "0.92rem" }}>
            A selection of projects I've built to sharpen my skills and solve real problems.
          </p>
        </div>

        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 100} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://github.com/arjetaademi"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
