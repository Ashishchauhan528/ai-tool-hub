export default function AboutPage() {
  return (
    <div style={{
      background: "#f9fafb",
      minHeight: "100vh",
      padding: "4rem 1rem",
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '3rem',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '1.5rem'
        }}>
          About AI Tool Hub
        </h1>

        <p style={{ fontSize: '1.15rem', color: '#374151', lineHeight: '1.8' }}>
          <strong>AI Tool Hub</strong> is an independently built platform designed to simplify the discovery of high-quality AI tools. 
          It provides a clean and organized interface for users, developers, and researchers to explore tools across various categories—without distractions or unnecessary logins.
        </p>

        <hr style={{ margin: '2.5rem 0', borderTop: '1px solid #e5e7eb' }} />

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
          Our Mission
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: '1.8' }}>
          Our aim is to streamline the AI exploration journey by offering a curated selection of tools, categorized by real-world use cases—image processing, document handling, writing, chatbots, and more.
        </p>

        <hr style={{ margin: '2.5rem 0', borderTop: '1px solid #e5e7eb' }} />

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
          Key Features
        </h2>
        <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8', color: '#4b5563' }}>
          <li>• Clear category-based tool organization</li>
          <li>• Minimal UI, focused on productivity</li>
          <li>• Direct links—no login or signup needed to explore tools</li>
          <li>• Frequently updated with relevant tools</li>
        </ul>

        <hr style={{ margin: '2.5rem 0', borderTop: '1px solid #e5e7eb' }} />

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
          Tech Stack
        </h2>
        <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8', color: '#4b5563' }}>
          <li>• <strong>Next.js 15</strong> for the frontend and routing</li>
          <li>• <strong>Vercel</strong> for hosting and CI/CD</li>
          <li>• <strong>GitHub</strong> for source control and collaboration</li>
          <li>• <strong>Plain CSS & inline styles</strong> for a flexible design approach</li>
        </ul>

        <hr style={{ margin: '2.5rem 0', borderTop: '1px solid #e5e7eb' }} />

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
          About the Creator
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: '1.8' }}>
          This project was created and maintained by <strong>Ashish Chauhan</strong>, a developer with a strong interest in artificial intelligence, user experience, and modern web technologies. The idea behind AI Tool Hub is to simplify access to the rapidly evolving AI landscape.
        </p>

        <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: '#4b5563' }}>
          You can explore the codebase or contribute via{" "}
          <a href="https://github.com/Ashishchauhan528/ai-tool-hub" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            GitHub
          </a>.
        </p>
      </div>
    </div>
  );
}
