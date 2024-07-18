import React from 'react';
import Footer from './pages/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">{children}
        </div>
            <Footer />
        </div>
  );
};

export default Layout;