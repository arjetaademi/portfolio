import { useInView } from "../hooks/useInView";
import { SKILLS } from "../data/data";

function SkillBar({ name, level, icon, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        marginBottom: "1.4rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(16px)",
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "#4a2540",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg,#f7b8d8,#e880b0)",
              borderRadius: "6px",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            {icon}
          </span>
          {name}
        </span>
        <span style={{ fontSize: "0.8rem", color: "#c0607a", fontWeight: 600 }}>
          {level}%
        </span>
      </div>

      <div
        style={{
          height: "6px",
          background: "#fde8f2",
          borderRadius: "99px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: inView ? `${level}%` : "0%",
            background: "linear-gradient(90deg,#f7b8d8,#d4478a)",
            borderRadius: "99px",
            transition: `width 1.1s cubic-bezier(.4,0,.2,1) ${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #fdf6fa, #fce8f3)",
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
            — Skills & Tools
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#4a2540",
            }}
          >
            What I work with
          </h2>
        </div>

        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem 4rem" }}
        >
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
