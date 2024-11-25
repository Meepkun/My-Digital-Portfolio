import React from 'react';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;

