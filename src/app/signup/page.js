'use client';
import { useState } from 'react';
import { auth } from '../firebase/firebase'; // ✅ Corrected path
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '3rem', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ padding: '0.5rem 1rem', background: '#10b981', color: '#fff', border: 'none' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
