'use client';

const tools = [
  {
    name: "Cursor",
    description: "AI coding assistant built directly into a developer-friendly code editor.",
    url: "https://www.cursor.sh"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster and smarter.",
    url: "https://github.com/features/copilot"
  },
  {
    name: "Tabnine",
    description: "AI code completion assistant for multiple languages and IDEs.",
    url: "https://www.tabnine.com"
  },
  {
    name: "Codeium",
    description: "Fast & free AI-powered autocomplete and code generation tool.",
    url: "https://codeium.com"
  },
  {
    name: "Replit Ghostwriter",
    description: "AI built into Replit to help you write and debug code.",
    url: "https://replit.com/ghostwriter"
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
        💻 Top AI Tools for Coders
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
