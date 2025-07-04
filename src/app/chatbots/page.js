'use client';

const tools = [
  {
    name: "ChatGPT",
    description: "Powerful conversational AI by OpenAI.",
    url: "https://chat.openai.com"
  },
  {
    name: "Google Gemini",
    description: "AI assistant by Google that can generate and help with text, code, and more.",
    url: "https://gemini.google.com"
  },
  {
    name: "Claude",
    description: "Anthropic's chatbot designed to be helpful, harmless, and honest.",
    url: "https://claude.ai"
  },
  {
    name: "Pi AI",
    description: "Personal AI chatbot with emotional intelligence.",
    url: "https://pi.ai"
  },
  {
    name: "Poe",
    description: "All-in-one chatbot hub with ChatGPT, Claude, and more.",
    url: "https://poe.com"
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
        🤖 Top AI Chatbots
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
