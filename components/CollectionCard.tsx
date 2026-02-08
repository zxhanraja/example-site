
import React from 'react';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  delay: number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ title, description, image, delay }) => {
  return (
    <div 
      className="group flex flex-col h-full"
      style={{ 
        animation: `fadeIn 0.6s cubic-bezier(0.2, 0, 0, 1) ${delay}s forwards`,
        opacity: 0 
      }}
    >
      <div className="relative overflow-hidden mb-6 aspect-[4/5] md:aspect-[3/4] rounded-sm bg-marble-gray/30 shadow-sm border border-black/5">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
        />
        <div className="absolute inset-0 border border-regal-gold/0 group-hover:border-regal-gold/20 transition-all duration-500 m-3 md:m-4"></div>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="flex-grow space-y-3 px-1">
        <h4 className="text-xl md:text-2xl font-serif text-charcoal tracking-tight group-hover:text-regal-gold transition-colors duration-400 italic">
          {title}
        </h4>
        <p className="text-charcoal/50 font-light text-xs md:text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      <div className="pt-6 flex items-center group/link cursor-pointer px-1">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/40 group-hover/link:text-regal-gold transition-colors">
          Discovery
        </span>
        <div className="ml-3 w-8 h-px bg-regal-gold/20 group-hover/link:w-12 group-hover/link:bg-regal-gold transition-all duration-400"></div>
      </div>
    </div>
  );
};

export default CollectionCard;
