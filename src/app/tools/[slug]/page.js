'use client';
import { useParams } from 'next/navigation';
import toolData from '../../data/toolData';


export default function ToolDetailPage() {
  const { slug } = useParams();
  const tool = toolData[slug];

  if (!tool) {
    return (
      <div style={{ padding: '2rem', fontSize: '1.2rem', color: '#dc2626' }}>
        Tool &quot;<strong>{slug.replace(/-/g, ' ')}</strong>&quot; not found.
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {tool.image && (
        <img
          src={tool.image}
          alt={tool.name}
          style={{
            maxWidth: '180px',
            height: 'auto',
            borderRadius: '10px',
            marginBottom: '1.5rem'
          }}
        />
      )}
      <h1 style={{ fontSize: '2rem', color: '#111827', marginBottom: '0.5rem' }}>{tool.name}</h1>
      <p style={{ margin: '0.75rem 0 1.25rem', fontSize: '1rem', color: '#374151' }}>{tool.description}</p>
      
      <p><strong>Category:</strong> {tool.category}</p>
      <p style={{ marginTop: '0.5rem' }}>
        <strong>Tags:</strong>{' '}
        {tool.tags.map(tag => (
          <span key={tag} style={{
            backgroundColor: '#e0f2fe',
            color: '#0369a1',
            padding: '0.25rem 0.6rem',
            borderRadius: '6px',
            fontSize: '0.85rem',
            marginRight: '0.5rem',
            display: 'inline-block'
          }}>{tag}</span>
        ))}
      </p>

      <a
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          padding: '0.6rem 1.2rem',
          borderRadius: '8px',
          textDecoration: 'none'
        }}
      >
        Visit Tool
      </a>
    </div>
  );
}
