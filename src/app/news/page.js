'use client';

export default function NewsTools() {
  const tools = [
    {
      name: "Google Trends",
      description: "Explore what the world is searching — real-time search trends and data.",
      url: "https://trends.google.com"
    },
    {
      name: "Feedly AI",
      description: "AI-powered news aggregator that helps you stay updated on any topic or industry.",
      url: "https://feedly.com"
    },
    {
      name: "Perplexity AI",
      description: "Ask questions and get accurate, cited answers from the latest news sources.",
      url: "https://www.perplexity.ai"
    },
    {
      name: "Artifact",
      description: "AI-powered personalized news app from Instagram's founders (currently merged with Yahoo News).",
      url: "https://www.yahoo.com/news/artifact"
    }
  ];

  return (
    <main style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>📰 News & Trends Tools</h1>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {tools.map((tool, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '1.5rem',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>{tool.name}</h2>
            <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{tool.description}</p>
            <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none'
            }}>Visit</a>
          </div>
        ))}
      </div>
    </main>
  );
}
