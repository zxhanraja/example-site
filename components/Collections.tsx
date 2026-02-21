
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
      image: "https://ik.imagekit.io/ioktbcewp/download%20(50).jpg",
    },
    {
      title: "Spanish Crema Marfil",
      description: "Warm, earthy tones with delicate veining. Ideal for grand flooring and architectural statements.",
      image: "https://ik.imagekit.io/ioktbcewp/download%20(42).jpg",
    },
    {
      title: "Architectural Porcelain",
      description: "High-performance surfaces that replicate the finest natural stones with unrivaled durability for high-traffic zones.",
      image: "https://ik.imagekit.io/ioktbcewp/download%20(43).jpg",
    },
    {
      title: "Bespoke Mosaics",
      description: "Intricate patterns crafted with gold leaf, rare gemstones, and precision-cut marble for accent masterpieces.",
      image: "https://ik.imagekit.io/ioktbcewp/images%20(1).jpg",
    },
    {
      title: "Onyx Luminosity",
      description: "Translucent slabs that transform with backlighting, creating a glowing ethereal atmosphere for luxury bars and feature walls.",
      image: "https://ik.imagekit.io/ioktbcewp/download%20(44).jpg?updatedAt=1771674438376",
    },
    {
      title: "Travertine Textures",
      description: "Timeless Roman aesthetics with honed and filled finishes, perfect for modern minimalist sanctuaries.",
      image: "https://ik.imagekit.io/ioktbcewp/download%20(45).jpg?updatedAt=1771674438299",
    },
    {
      title: "Michelangelo Statuario",
      description: "The peak of marble luxury, featuring bold grey veining on a pure white background for iconic interiors.",
      image: "https://ik.imagekit.io/ioktbcewp/download%20(46).jpg?updatedAt=1771674438281",
    },
    {
      title: "Royal Portoro Gold",
      description: "An intense black marble with vibrant gold veining, representing the ultimate in grand architectural elegance.",
      image: "https://ik.imagekit.io/ioktbcewp/download%20(47).jpg?updatedAt=1771674438229",
    },
    {
      title: "Calacatta Viola",
      description: "A dramatic marble defined by rich purple and burgundy veining, creating a sophisticated statement in any space.",
      image: "https://ik.imagekit.io/ioktbcewp/download%20(48).jpg?updatedAt=1771674438312",
    },
    {
      title: "Valde Alpi",
      description: "Distinctive green hues with deep contrast, offering a natural and serene atmosphere for high-end designs.",
      image: "https://ik.imagekit.io/ioktbcewp/download%20(49).jpg?updatedAt=1771674438081",
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex flex-col items-center text-center mb-12 md:mb-24 px-4">
        <span className="text-regal-gold text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 font-bold">The Curated Archive</span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-charcoal italic leading-tight md:leading-none">
          Legacy <span className="not-italic text-royal-accent block sm:inline">Materials</span>
        </h2>
        <p className="mt-6 md:mt-8 text-charcoal/40 max-w-xl mx-auto font-light text-xs sm:text-sm md:text-base leading-relaxed">
          Our global network provides access to the top 1% of stone quality available on the market today.
        </p>
        <div className="w-12 md:w-16 h-px bg-regal-gold/40 mt-8 md:mt-12"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
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
