'use client';
import Link from 'next/link';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase/firebase';

export default function ClientLayout({ children }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setShowDropdown(false);
  };

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '1rem 2rem',
        backgroundColor: '#111827',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <Link href="/" style={{
          textDecoration: 'none',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem'
        }}>
          <span style={{ fontSize: '1.8rem' }}>🧠</span>
          <span>AI Tool Hub</span>
        </Link>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#d1d5db', textDecoration: 'none' }}>Home</Link>
          <Link href="/about" style={{ color: '#d1d5db', textDecoration: 'none' }}>About</Link>
          <Link href="/contact" style={{ color: '#d1d5db', textDecoration: 'none' }}>Contact</Link>
          <a href="https://github.com/Ashishchauhan528/ai-tool-hub" target="_blank" style={{ color: '#d1d5db', textDecoration: 'none' }}>GitHub</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', position: 'relative' }}>
          <SearchBar />

          <div style={{ position: 'relative' }}>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                backgroundColor: '#2563eb',
                color: '#fff',
                padding: '0.4rem 0.9rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                userSelect: 'none'
              }}
            >
              👤 Account ▼
            </div>

            {showDropdown && (
              <div style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                zIndex: 999,
                minWidth: '130px'
              }}>
                {!user && (
                  <>
                    <Link
                      href="/login"
                      style={{
                        display: 'block',
                        padding: '0.5rem 1rem',
                        color: '#111827',
                        textDecoration: 'none',
                        fontSize: '0.9rem'
                      }}
                      onClick={() => setShowDropdown(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      style={{
                        display: 'block',
                        padding: '0.5rem 1rem',
                        color: '#111827',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        borderTop: '1px solid #f3f4f6'
                      }}
                      onClick={() => setShowDropdown(false)}
                    >
                      Signup
                    </Link>
                  </>
                )}
                {user && (
                  <button
                    onClick={handleLogout}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.5rem 1rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '0.9rem',
                      color: '#ef4444',
                      cursor: 'pointer'
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer style={{
        textAlign: 'center',
        padding: '1.5rem 1rem',
        marginTop: '2rem',
        backgroundColor: '#111827',
        color: '#d1d5db',
        fontSize: '0.9rem'
      }}>
        <p>© {new Date().getFullYear()} Ashish Chauhan | Built with ❤️ using Next.js & Vercel</p>
        <p>
          <a href="https://github.com/Ashishchauhan528/ai-tool-hub" target="_blank" style={{ color: '#60a5fa', textDecoration: 'none' }}>
            View on GitHub
          </a>
        </p>
      </footer>
    </>
  );
}
