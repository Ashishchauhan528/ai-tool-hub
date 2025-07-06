'use client';

export default function StudyTools() {
  const tools = [
    {
      name: "Khan Academy + Khanmigo",
      description: "Learn anything for free with Khan Academy — now enhanced with the AI tutor Khanmigo.",
      url: "https://www.khanacademy.org/khan-labs"
    },
    {
      name: "Socratic by Google",
      description: "Snap a photo of your homework and get AI-powered help instantly.",
      url: "https://socratic.org"
    },
    {
      name: "QuillBot",
      description: "Paraphrasing and grammar checker tool with AI support — great for assignments.",
      url: "https://quillbot.com"
    },
    {
      name: "StudyCrumb",
      description: "AI writing and research assistant designed for students to generate essays and study guides.",
      url: "https://studycrumb.com"
    }
  ];

  return (
    <main style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>📚 Education & Study Tools</h1>
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
