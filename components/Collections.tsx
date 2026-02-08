
import React from 'react';
import CollectionCard from './CollectionCard';

interface CollectionsProps {
  onCatalog?: () => void;
}

const Collections: React.FC<CollectionsProps> = ({ onCatalog }) => {
  const collections = [
    {
      title: "Royal Italian Marble",
      description: "Hand-selected Calacatta, Statuario, and Arabescato slabs sourced directly from the historic quarries of Carrara.",
      image: "https://images.unsplash.com/photo-1600607687940-4e2007e9545b?auto=format&fit=crop&q=60&w=800",
    },
    {
      title: "Spanish Crema Marfil",
      description: "Warm, earthy tones with delicate veining. Ideal for grand flooring and architectural statements.",
      image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&q=60&w=800",
    },
    {
      title: "Architectural Porcelain",
      description: "High-performance surfaces that replicate the finest natural stones with unrivaled durability for high-traffic zones.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=60&w=800",
    },
    {
      title: "Bespoke Mosaics",
      description: "Intricate patterns crafted with gold leaf, rare gemstones, and precision-cut marble for accent masterpieces.",
      image: "https://images.unsplash.com/photo-1599809275671-b59421abc7a1?auto=format&fit=crop&q=60&w=800",
    },
    {
      title: "Onyx Luminosity",
      description: "Translucent slabs that transform with backlighting, creating a glowing ethereal atmosphere for luxury bars and feature walls.",
      image: "https://images.unsplash.com/photo-1590273333852-6467380c800a?auto=format&fit=crop&q=60&w=800",
    },
    {
      title: "Travertine Textures",
      description: "Timeless Roman aesthetics with honed and filled finishes, perfect for modern minimalist sanctuaries.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=60&w=800",
    }
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <span className="text-regal-gold text-[10px] md:text-xs uppercase tracking-[0.6em] mb-4 font-bold">The Curated Archive</span>
        <h2 className="text-4xl md:text-7xl font-serif text-charcoal italic leading-none">
          Legacy <span className="not-italic text-royal-accent">Materials</span>
        </h2>
        <p className="mt-8 text-charcoal/40 max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
          Our global network provides access to the top 1% of stone quality available on the market today.
        </p>
        <div className="w-16 h-px bg-regal-gold/40 mt-12"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-24">
        {collections.map((item, idx) => (
          <CollectionCard 
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            delay={idx * 0.1}
          />
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <button 
          onClick={onCatalog}
          className="inline-flex items-center space-x-4 group"
        >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/60 group-hover:text-regal-gold transition-colors">Request Digital Archive Access</span>
            <div className="w-12 h-px bg-charcoal/20 group-hover:bg-regal-gold transition-all duration-500"></div>
        </button>
      </div>
    </div>
  );
};

export default Collections;
