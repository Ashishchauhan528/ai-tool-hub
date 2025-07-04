'use client';

const tools = [
  {
    name: "ChatPDF",
    description: "Chat with your PDFs and ask questions from them.",
    url: "https://www.chatpdf.com"
  },
  {
    name: "Humata",
    description: "AI that helps you understand documents fast.",
    url: "https://www.humata.ai"
  },
  {
    name: "PDF AI",
    description: "Summarize and search inside PDF files easily.",
    url: "https://pdfai.chat"
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
        📄 Top AI Tools for PDFs
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
