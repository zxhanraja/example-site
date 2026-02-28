
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import About from './components/About';
import Inspiration from './components/Inspiration';
import ShowroomCTA from './components/ShowroomCTA';
import Footer from './components/Footer';
import DetailedContent from './components/DetailedContent';
import LoadingScreen from './components/LoadingScreen';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Chatbot from './components/Chatbot';

export type ViewState = 'home' | 'privacy' | 'accessibility' | 'terms' | 'heritage' | 'archive' | 'showroom' | 'consultation' | 'projects_detailed';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTopBtn(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
  };

  if (currentView !== 'home') {
    return (
      <div className="min-h-screen bg-marble-white font-sans selection:bg-regal-gold selection:text-white">
        <LoadingScreen />
        <Header isScrolled={true} onNavigate={navigateTo} />
        <DetailedContent type={currentView} onBack={() => navigateTo('home')} />
        <Footer onNavigate={navigateTo} />
        <Chatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-regal-gold selection:text-white">
      <LoadingScreen />
      <Header isScrolled={scrolled} onNavigate={navigateTo} />

      <main>
        <section id="home">
          <Hero onExplore={() => navigateTo('archive')} />
        </section>

        <section id="collections" className="py-20 md:py-32">
          <Collections onCatalog={() => navigateTo('archive')} />
        </section>

        <section id="about" className="py-20 md:py-32 bg-marble-gray/20">
          <About onReadMore={() => navigateTo('heritage')} />
        </section>

        <section id="projects" className="py-20 md:py-32">
          <Inspiration onViewMore={() => navigateTo('projects_detailed')} />
        </section>

        <section className="py-16 md:py-24 bg-charcoal text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-regal-gold rounded-full"></div>
          </div>
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic mb-6">The Essence of Sovereignty</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed">
              True luxury is not just seen, it is felt. Our curators traverse the most remote regions of the Earth to bring you textures and patterns that haven't been seen for millions of years.
            </p>
          </div>
        </section>

        <Testimonials />

        <FAQ />

        <section className="py-20 md:py-32 bg-white">
          <ShowroomCTA onBook={() => navigateTo('consultation')} onTour={() => navigateTo('showroom')} />
        </section>
      </main>

      <Footer onNavigate={navigateTo} />
      <Chatbot />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-[110px] right-8 z-[100] p-4 bg-white border border-regal-gold/30 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group ${showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        aria-label="Back to Top"
      >
        <svg className="w-5 h-5 text-regal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
      </button>
    </div>
  );
};

export default App;
