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

const featuredTools = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    description: "OpenAI’s conversational AI chatbot."
  },
  {
    slug: 'google-gemini',
    name: 'Google Gemini',
    image: 'https://brandlogos.net/google-gemini-logo-105899.html#google_vignette',
    description: "Google’s next-gen multimodal AI."
  },
  {
    slug: 'midjourney',
    name: 'MidJourney',
    image: 'https://i.ibb.co/7Y8c2GQ/midjourney-icon.png',
    description: "AI art generator known for surreal, high-quality visuals."
  },
  {
    slug: 'pdfgear',
    name: 'PDFgear',
    image: 'https://pdfgear.com/images/logo.png',
    description: "A fast, free, and full-featured PDF editor."
  },
  {
    slug: 'canva',
    name: 'Canva AI',
    image: 'https://static.canva.com/static/images/apple-touch-icon.png',
    description: "Design anything with AI-powered templates and tools."
  },
  {
    slug: 'synthesia',
    name: 'Synthesia',
    image: 'https://assets-global.website-files.com/606a802fcaa89bc357508cad/63f63c93b6e191cbad2c4f7f_synthesia-logo.png',
    description: "Create AI-powered videos with avatars from text."
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    image: 'https://avatars.githubusercontent.com/u/104934580?s=280&v=4',
    description: "AI voice cloning and synthetic speech generator."
  },
  {
    slug: 'codeium',
    name: 'Codeium',
    image: 'https://codeium.com/assets/images/logo-full-dark.png',
    description: "Free AI coding assistant for faster development."
  }
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

      {/* Categories Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.5rem"
      }}>
        {categories.map((cat, idx) => (
          <Link key={idx} href={cat.path} passHref>
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

      {/* Featured Tools */}
      <h2 style={{
        marginTop: '3rem',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#1f2937'
      }}>
        Featured AI Tools 🛠️
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        marginTop: '1.5rem'
      }}>
        {featuredTools.map(tool => (
          <Link key={tool.slug} href={`/tools/${tool.slug}`}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              padding: '1rem',
              transition: 'transform 0.2s',
              cursor: 'pointer',
              textAlign: 'center'
            }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={tool.image}
                alt={tool.name}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{ fontSize: '1.2rem', color: '#111827' }}>{tool.name}</h3>
              <p style={{ fontSize: '0.9rem', color: '#374151' }}>{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
