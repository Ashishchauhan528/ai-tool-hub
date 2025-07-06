'use client';

export default function AudioTools() {
  const tools = [
    {
      name: "ElevenLabs",
      description: "AI voice generation platform for lifelike, emotional text-to-speech.",
      url: "https://elevenlabs.io"
    },
    {
      name: "Voicemod",
      description: "Real-time voice changer and AI soundboard for games, calls, and streams.",
      url: "https://www.voicemod.net"
    },
    {
      name: "Play.ht",
      description: "Text-to-speech tool with realistic AI voices in multiple languages.",
      url: "https://play.ht"
    },
    {
      name: "Descript",
      description: "Edit audio and video by editing text — includes AI voice cloning and studio tools.",
      url: "https://www.descript.com"
    }
  ];

  return (
    <main style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>🎙️ Voice & Audio Tools</h1>
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
