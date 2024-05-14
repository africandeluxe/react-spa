import React from 'react';

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav>
      <button onClick={() => setCurrentPage('Home')}>Home</button>
      <button onClick={() => setCurrentPage('About')}>About</button>
      <button onClick={() => setCurrentPage('Contact')}>Contact</button>
    </nav>
  );
};

export default Navigation;