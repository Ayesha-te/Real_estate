import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'listings':
        return <ListingsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  // Handle navigation by intercepting hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'listings') {
        setCurrentPage('listings');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top every time the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Change to 'auto' if you don't want smooth scroll
    });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
