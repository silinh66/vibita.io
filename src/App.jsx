import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Privacy from './components/Privacy';

function App() {
  const isPrivacyPage = window.location.pathname === '/privacy';

  if (isPrivacyPage) {
    return (
      <div className="app">
        <Navbar />
        <main>
          <Privacy />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
