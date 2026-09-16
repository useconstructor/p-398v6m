import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rosterly',
  description: 'A searchable business directory where companies register through a form and publish their profiles for public discovery. Company submissions are stored in a database and displayed in a browsable directory with industry-based filtering.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F7F9FC', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
