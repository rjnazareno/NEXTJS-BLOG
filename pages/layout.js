import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>My Next.js Blog</h1>
        {/* Add any header content or navigation links here */}
      </header>

      <main>{children}</main>

      <footer>
        {/* Add any footer content or links here */}
        <p>&copy; 2024 My Next.js Blog</p>
      </footer>

      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        header {
          background-color: #f2f2f2;
          padding: 1rem;
          text-align: center;
        }

        main {
          flex: 1;
          padding: 1rem;
        }

        footer {
          background-color: #f2f2f2;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Layout;