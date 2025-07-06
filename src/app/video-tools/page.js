'use client';

export default function VideoTools() {
  const tools = [
    {
      name: "Pictory",
      description: "Convert scripts or articles into engaging videos using AI.",
      url: "https://pictory.ai"
    },
    {
      name: "Runway ML",
      description: "AI video editing, motion tracking, and content generation for creators.",
      url: "https://runwayml.com"
    },
    {
      name: "Synthesia",
      description: "Create videos with AI avatars and voiceovers without cameras or mics.",
      url: "https://www.synthesia.io"
    },
    {
      name: "Kaiber",
      description: "AI video generator for creating short cinematic animations from text or images.",
      url: "https://www.kaiber.ai"
    }
  ];

  return (
    <main style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>📹 Video Tools</h1>
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
