// components/layout/Layout.tsx

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
