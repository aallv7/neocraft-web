// components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[url(../../public/img/background.png)]">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <div className="flex flex-col gap-8 min-h-screen items-center p-5 w-full h-full bg-black/50 rounded-2xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;