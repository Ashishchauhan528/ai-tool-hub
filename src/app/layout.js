import './globals.css';
import ClientLayout from './layout-client';

export const metadata = {
  title: 'AI Tool Hub',
  description: 'Explore top AI tools categorized by use case — PDF, images, chatbots, video, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fafb' }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
