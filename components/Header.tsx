
import React, { useState, useEffect } from 'react';
import { ViewState } from '../App';

interface HeaderProps {
  isScrolled: boolean;
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Heritage', view: 'heritage' as ViewState },
    { name: 'Collections', view: 'archive' as ViewState },
    { name: 'Projects', view: 'projects_detailed' as ViewState },
    { name: 'Showroom', view: 'showroom' as ViewState },
  ];

  const handleLinkClick = (view: ViewState) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 lg:px-16 py-4 md:py-6 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 md:py-4 border-b border-regal-gold/10 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <button 
            onClick={() => handleLinkClick('home')}
            className={`text-left text-xl md:text-2xl font-serif tracking-tighter transition-all duration-500 flex flex-col items-start leading-none group ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            <span className="font-semibold italic group-hover:text-regal-gold transition-colors">Amazon</span>
            <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.6em] ml-1 mt-1 font-medium ${isScrolled ? 'text-regal-gold' : 'text-champagne'}`}>
              Marble Centre
            </span>
          </button>
          
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.view)}
                className={`text-[9px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 hover:text-regal-gold border-b border-transparent hover:border-regal-gold/50 pb-1 ${
                  isScrolled ? 'text-charcoal/80' : 'text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4 md:space-x-8">
            <button 
              onClick={() => handleLinkClick('consultation')}
              className={`hidden sm:inline-flex px-6 py-2 md:py-2.5 rounded-full border text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
                isScrolled 
                  ? 'border-regal-gold text-regal-gold hover:bg-regal-gold hover:text-white' 
                  : 'border-white/30 text-white hover:bg-white hover:text-charcoal'
              }`}
            >
              Consultation
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden flex flex-col space-y-1.5 p-2 focus:outline-none z-[70] ${
                isMenuOpen ? 'opacity-0 pointer-events-none' : (isScrolled ? 'text-charcoal' : 'text-white')
              }`}
              aria-label="Open Menu"
            >
              <span className="w-6 h-0.5 bg-current"></span>
              <span className="w-6 h-0.5 bg-current"></span>
              <span className="w-4 h-0.5 bg-current self-end"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[80] bg-charcoal transition-all duration-500 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {/* Close Button Inside Drawer */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 text-white hover:text-regal-gold transition-colors p-2 z-[90]"
          aria-label="Close Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col h-full p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[100%] h-[100%] border border-regal-gold rounded-full blur-[120px]"></div>
          </div>

          <div className="flex flex-col space-y-6 md:space-y-10 mt-16 relative z-10">
            <span className="text-regal-gold text-[9px] uppercase tracking-[0.5em] font-bold opacity-60">Navigation</span>
            {navLinks.map((link, idx) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.view)}
                className="text-white text-left text-4xl md:text-5xl font-serif italic hover:text-regal-gold transition-all duration-400 transform hover:translate-x-3 flex items-center group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('home')}
              className="text-white text-left text-4xl md:text-5xl font-serif italic hover:text-regal-gold transition-all duration-400 transform hover:translate-x-3 flex items-center group pt-4 border-t border-white/5"
            >
               Back to Home
            </button>
          </div>

          <div className="mt-auto pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between relative z-10">
            <div>
                <p className="text-regal-gold text-[8px] uppercase tracking-widest mb-3 font-bold">Concierge Service</p>
                <p className="text-white/60 text-base font-serif italic">London Flagship Showroom</p>
                <p className="text-white/40 text-xs mt-1">+44 20 7946 0123</p>
            </div>
            <div className="mt-8 md:mt-0 flex space-x-6">
                <a href="#" className="text-white/40 hover:text-regal-gold transition-colors text-[9px] uppercase tracking-widest font-bold">Instagram</a>
                <a href="#" className="text-white/40 hover:text-regal-gold transition-colors text-[9px] uppercase tracking-widest font-bold">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
