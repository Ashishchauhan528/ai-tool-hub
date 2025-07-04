'use client';

const tools = [
  {
    name: "Leonardo AI",
    description: "Create amazing AI-generated images with fine control.",
    url: "https://leonardo.ai"
  },
  {
    name: "Midjourney",
    description: "One of the most powerful text-to-image tools (via Discord).",
    url: "https://www.midjourney.com"
  },
  {
    name: "Remove.bg",
    description: "Remove image backgrounds instantly using AI.",
    url: "https://www.remove.bg"
  },
  {
    name: "Clipdrop",
    description: "AI tools for background removal, upscaling, relighting & more.",
    url: "https://clipdrop.co"
  }
];

export default function Page() {
  return (
    <main style={{
      padding: "2rem",
      backgroundColor: "#f9fafb",
      minHeight: "100vh"
    }}>
      <h1 style={{
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        color: "#1f2937"
      }}>
        🖼️ Top AI Tools for Images
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              textDecoration: "none",
              color: "#111"
            }}
          >
            <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{tool.name}</h2>
            <p style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>{tool.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
