import React, { useState } from 'react';
import Navigation from './components/Navigation';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className="App">
      <header>
        <Navigation setCurrentPage={setCurrentPage} />
      </header>
      <main>
        <PageContent currentPage={currentPage} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
