
import React from 'react';

interface AboutProps {
  onReadMore?: () => void;
}

const About: React.FC<AboutProps> = ({ onReadMore }) => {
  const values = [
    { 
      label: "Provenance", 
      desc: "We exclusively partner with heritage quarries that have provided stone for European cathedrals and royal palaces for centuries." 
    },
    { 
      label: "Precision", 
      desc: "Our technology allows for sub-millimeter precision in cutting, ensuring that complex architectural patterns fit with absolute perfection." 
    },
    { 
      label: "Sustainability", 
      desc: "We prioritize quarries that utilize ethical extraction methods and water recycling systems, preserving the Earth's beauty for future generations." 
    },
    { 
      label: "Heritage", 
      desc: "Our master stone-graders possess an intuitive eye for veining and structural integrity passed down through generations of artisans." 
    }
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 xl:gap-40 mb-24 md:mb-32">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-sm shadow-2xl relative z-10 group bg-marble-gray">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=60&w=1000" 
              alt="The Amazon Legacy" 
              loading="lazy"
              className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-full h-full border border-regal-gold/20 -z-0"></div>
          <div className="absolute -bottom-6 -left-6 bg-charcoal p-8 md:p-10 z-20 shadow-2xl border-l-4 border-regal-gold">
            <span className="text-white text-3xl md:text-5xl font-serif block italic mb-2">32 Years</span>
            <span className="text-regal-gold text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">Of Master Sourcing</span>
          </div>
        </div>

        <div className="max-w-2xl order-1 lg:order-2">
          <span className="text-regal-gold text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 md:mb-8 block font-extrabold">Our Divine Heritage</span>
          <h2 className="text-4xl md:text-7xl font-serif text-charcoal mb-8 md:mb-12 leading-[1.1] tracking-tighter">
            Nature’s Art, <br /><span className="italic text-royal-accent">Curated for You</span>
          </h2>
          <div className="space-y-6 md:space-y-10 text-charcoal/70 font-light text-sm md:text-xl leading-relaxed">
            <p>
              Founded in 1992, Amazon Marble Centre was born from a singular passion: to uncover the most exquisite geological treasures hidden beneath the Earth's crust.
            </p>
            <div className="py-8 border-y border-charcoal/5">
                <p className="italic text-charcoal font-medium text-lg md:text-2xl leading-snug">
                  "Every slab in our showroom is a unique masterpiece, sculpted over millions of years and hand-picked for its soul."
                </p>
                <p className="mt-4 text-regal-gold text-[9px] uppercase tracking-widest font-bold">— Alessandro V., Lead Curator</p>
            </div>
            <p className="text-base md:text-lg">
              Our direct presence in the quarries of Carrara, Volakas, and Alicante ensures that we bypass the market, securing first-choice access to materials before they ever reach the open market.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onReadMore}
              className="px-10 py-5 bg-charcoal text-white hover:bg-regal-gold transition-all duration-500 rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold shadow-xl shadow-charcoal/10 flex items-center justify-between group"
            >
              <span>View Heritage Brochure</span>
              <svg className="w-4 h-4 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
            <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="inline-flex items-center justify-center px-10 py-5 border border-charcoal/10 hover:border-regal-gold text-[10px] uppercase tracking-[0.3em] font-bold transition-colors"
            >
              Return to Palace
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 border-t border-charcoal/5 pt-16 md:pt-24">
        {values.map((v, i) => (
          <div key={i} className="group hover:bg-white p-6 md:-m-6 transition-all duration-500 rounded-sm">
            <div className="flex items-center space-x-6 mb-6">
               <span className="text-regal-gold font-serif italic text-3xl opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
               <div className="h-[1px] flex-grow bg-charcoal/10 group-hover:bg-regal-gold/50 transition-all duration-700"></div>
            </div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-charcoal mb-4 group-hover:text-regal-gold transition-colors">{v.label}</h4>
            <p className="text-xs md:text-sm text-charcoal/50 font-light leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
