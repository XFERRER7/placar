export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <span
        style={{
          textTransform: "uppercase",
          letterSpacing: "0.5em",
          fontSize: "clamp(0.9rem, 2vw, 1.4rem)",
          color: "#7f9bd6",
          fontWeight: 600,
        }}
      >
        Placar
      </span>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(1.5rem, 5vw, 5rem)",
          padding: "clamp(2rem, 6vw, 4rem) clamp(2rem, 8vw, 6rem)",
          borderRadius: "2rem",
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Team name="Giovanna" score={5} color="#4ade80" />

        <span
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 300,
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          ×
        </span>

        <Team name="Debru" score={0} color="#60a5fa" />
      </div>
    </main>
  );
}

function Team({ name, score, color }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        minWidth: "clamp(120px, 25vw, 260px)",
      }}
    >
      <span
        style={{
          fontSize: "clamp(1.5rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#fff",
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontSize: "clamp(6rem, 22vw, 16rem)",
          fontWeight: 800,
          lineHeight: 1,
          color,
          textShadow: `0 0 40px ${color}66`,
        }}
      >
        {score}
      </span>
    </div>
  );
}
