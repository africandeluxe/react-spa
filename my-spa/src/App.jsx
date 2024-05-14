import React, { useState } from 'react';
import Navigation from './components/Navigation';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className="App">
      <Navigation setCurrentPage={setCurrentPage} />
      <PageContent currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
