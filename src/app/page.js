'use client';
import Link from 'next/link';

const categories = [
  { title: "Image Tools", emoji: "🖼️", path: "/image-tools" },
  { title: "PDF Tools", emoji: "📄", path: "/pdf-tools" },
  { title: "Video Tools", emoji: "📹", path: "/video-tools" },
  { title: "News & Trends", emoji: "📰", path: "/news" },
  { title: "Health Assistants", emoji: "⚕️", path: "/health" },
  { title: "Code & Dev Tools", emoji: "💻", path: "/code-tools" },
  { title: "Writing Assistants", emoji: "✍️", path: "/writing" },
  { title: "Voice & Audio Tools", emoji: "🎙️", path: "/audio-tools" },
  { title: "Education & Study", emoji: "📚", path: "/study" },
  { title: "AI Chatbots", emoji: "🤖", path: "/chatbots" }
];

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "2rem",
      backgroundColor: "#f3f4f6"
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#1f2937",
        textAlign: "center",
        marginBottom: "2rem"
      }}>
        Welcome to AI Tool Hub 🚀
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.5rem"
      }}>
        {categories.map((cat, idx) => (
          <Link href={cat.path} key={idx} style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
              color: "#1f2937",
              transition: "transform 0.2s ease"
            }}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <div style={{ fontSize: "2rem" }}>{cat.emoji}</div>
              <div>{cat.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
