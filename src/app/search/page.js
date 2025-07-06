'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const allTools = [
  { name: "Cursor", category: "code-tools", url: "https://www.cursor.sh" },
  { name: "ChatGPT", category: "chatbots", url: "https://chat.openai.com" },
  { name: "PDFgear", category: "pdf-tools", url: "https://www.pdfgear.com" },
  { name: "Canva", category: "image-tools", url: "https://www.canva.com" },
  { name: "Pictory", category: "video-tools", url: "https://pictory.ai" },
  { name: "Runway ML", category: "video-tools", url: "https://runwayml.com" },
  { name: "Synthesia", category: "video-tools", url: "https://www.synthesia.io" },
  { name: "ElevenLabs", category: "audio-tools", url: "https://elevenlabs.io" },
  { name: "Woebot", category: "health", url: "https://woebothealth.com" },
  { name: "Ada Health", category: "health", url: "https://ada.com" },
  { name: "Play.ht", category: "audio-tools", url: "https://play.ht" },
  { name: "Descript", category: "audio-tools", url: "https://www.descript.com" },
  { name: "Kaiber", category: "video-tools", url: "https://www.kaiber.ai" },
  { name: "HealthGPT", category: "health", url: "https://healthgpt.co" },
  { name: "Youper", category: "health", url: "https://www.youper.ai" }
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filtered = allTools.filter(tool =>
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div style={{ padding: '2rem', minHeight: '80vh' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Search Results for: <span style={{ color: '#2563eb' }}>{query}</span>
      </h2>

      {results.length === 0 ? (
        <p style={{ fontSize: '1.1rem', color: '#ef4444' }}>No tools found matching your search.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          {results.map((tool, idx) => (
            <a
              key={idx}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '1rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#111827',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: '#2563eb' }}>{tool.name}</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#6b7280' }}>{tool.category}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
