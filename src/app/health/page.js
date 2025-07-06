'use client';

export default function HealthTools() {
  const tools = [
    {
      name: "Ada Health",
      description: "AI-powered symptom checker that helps identify possible conditions.",
      url: "https://ada.com"
    },
    {
      name: "Woebot",
      description: "AI chatbot for mental health support and cognitive behavioral therapy.",
      url: "https://woebothealth.com"
    },
    {
      name: "HealthGPT",
      description: "AI assistant trained on medical literature to answer health-related queries.",
      url: "https://healthgpt.co"
    },
    {
      name: "Youper",
      description: "Emotional health assistant powered by AI and psychology tools.",
      url: "https://www.youper.ai"
    }
  ];

  return (
    <main style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>⚕️ Health Assistants</h1>
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
