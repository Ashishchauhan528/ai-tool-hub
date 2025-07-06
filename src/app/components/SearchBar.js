'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const tools = [
  'ChatGPT', 'Google Gemini', 'MidJourney', 'PDFgear', 'Canva', 'Pictory', 'Runway ML',
  'Synthesia', 'ElevenLabs', 'Whisper', 'Codeium', 'Cursor', 'Kaiber', 'Descript', 'Play.ht',
  'Youper', 'HealthGPT', 'Ada Health', 'Woebot'
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = tools.filter(tool =>
        tool.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    router.push(`/search?q=${suggestion}`);
  };

  return (
    <div style={{ position: 'relative' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="Search tools..."
          value={query}
          onChange={handleInput}
          style={{
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            border: '1px solid #374151',
            backgroundColor: '#1f2937',
            color: '#f9fafb',
            outline: 'none',
            fontSize: '0.9rem',
            width: '180px'
          }}
        />
        <button type="submit" style={{
          padding: '0.4rem 0.9rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderTop: 'none',
          zIndex: 999,
          maxHeight: '200px',
          overflowY: 'auto',
          listStyle: 'none',
          margin: 0,
          padding: '0.5rem 0'
        }}>
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              onClick={() => handleSuggestionClick(s)}
              style={{
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                borderBottom: '1px solid #f1f1f1',
                fontSize: '0.95rem',
                color: '#111827'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
