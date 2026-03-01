
import React from 'react';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear scale-110 animate-slow-zoom"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=70&w=1600')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl pt-20">
        <div className="inline-block mb-6 md:mb-10 py-1.5 px-4 border border-champagne/40 rounded-full fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-[7px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-champagne font-bold">
            Exclusive Natural Stone Mastery
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 md:mb-10 leading-[1.1] md:leading-[1] italic fade-in" style={{ animationDelay: '0.3s' }}>
          Majestic <br className="sm:hidden" />
          <span className="not-italic text-gold-gradient block mt-2">Elegance</span>
        </h1>

        <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto font-light mb-10 md:mb-14 leading-relaxed fade-in px-4" style={{ animationDelay: '0.5s' }}>
          Sourcing the Earth's finest masterpieces for the world's most distinguished estates. CHOWDHURY MARBLE curates
          the foundation of your legacy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 fade-in" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-regal-gold text-white rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(197,160,89,0.5)] active:scale-95"
          >
            <span className="relative z-10">Explore Collections</span>
          </button>
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 border border-white/30 text-white rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-charcoal transition-all duration-500 active:scale-95"
          >
            Our Gallery
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-regal-gold animate-scroll-down"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
