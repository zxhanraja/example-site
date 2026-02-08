
import React from 'react';

interface ShowroomCTAProps {
  onBook?: () => void;
  onTour?: () => void;
}

const ShowroomCTA: React.FC<ShowroomCTAProps> = ({ onBook, onTour }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-16">
      <div className="py-20 md:py-32 px-6 md:px-12 border border-regal-gold/10 rounded-sm bg-white shadow-xl relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-marble-gray/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-regal-gold mb-6 block font-bold">Experience Perfection</span>
          <h2 className="text-4xl md:text-7xl font-serif text-charcoal mb-8 tracking-tight">Visit Our Showroom</h2>
          <p className="text-charcoal/60 font-light text-base md:text-xl mb-12 leading-relaxed">
            Nothing compares to experiencing the texture and luminosity of natural stone in person. Join us for a private tour of our latest collections in a curated architectural setting.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button 
              onClick={onBook}
              className="w-full sm:w-auto px-12 py-5 bg-charcoal text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-regal-gold transition-all duration-500 shadow-lg shadow-charcoal/20"
            >
              Book Private Viewing
            </button>
            <button 
              onClick={onTour}
              className="w-full sm:w-auto px-12 py-5 border border-charcoal/20 text-charcoal rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-charcoal hover:text-white transition-all duration-500"
            >
              Virtual Showroom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowroomCTA;
