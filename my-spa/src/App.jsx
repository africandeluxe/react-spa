import React, { useState } from 'react';
import Navigation from './components/Navigation';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import './App.module.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className="App">
      <div className={StyleSheet.app}></div>
        <Navigation setCurrentPage={setCurrentPage} />
        <main className="content">
        <PageContent currentPage={currentPage} />
          </main>
        <Footer />
    </div>
  );
}

export default App;