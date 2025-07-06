'use client';

export default function WritingTools() {
  const tools = [
    {
      name: "Grammarly",
      description: "AI-powered writing assistant that helps with grammar, clarity, and tone suggestions.",
      url: "https://grammarly.com"
    },
    {
      name: "Notion AI",
      description: "Write, brainstorm, summarize, and edit directly in your Notion documents using AI.",
      url: "https://www.notion.so/product/ai"
    },
    {
      name: "Jasper",
      description: "AI writing assistant designed for marketers to generate blogs, ads, and emails.",
      url: "https://www.jasper.ai"
    },
    {
      name: "Writesonic",
      description: "AI writer for creating SEO-friendly content, ads, and marketing copy.",
      url: "https://writesonic.com"
    }
  ];

  return (
    <main style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>✍️ Writing Assistants</h1>
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
