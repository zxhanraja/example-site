
import React from 'react';

interface InspirationProps {
  onViewMore?: () => void;
}

const Inspiration: React.FC<InspirationProps> = ({ onViewMore }) => {
  const projects = [
    { title: "Serene Sanctuary", category: "Bathrooms", year: "2024", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=60&w=800" },
    { title: "Imperial Lobby", category: "Commercial", year: "2023", img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=60&w=800" },
    { title: "Gourmet Atelier", category: "Kitchens", year: "2024", img: "https://images.unsplash.com/photo-1556912177-c54030639a6d?auto=format&fit=crop&q=60&w=800" },
    { title: "Monolithic Facade", category: "Exteriors", year: "2023", img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=60&w=800" },
    { title: "Private Terrace", category: "Residential", year: "2022", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=60&w=800" },
    { title: "Grand Atrium", category: "Estates", year: "2024", img: "https://images.unsplash.com/photo-1534433832407-b7d1e0214a4b?auto=format&fit=crop&q=60&w=800" },
    { title: "Minimalist Loft", category: "Modern", year: "2023", img: "https://images.unsplash.com/photo-1615873968403-89e06862826b?auto=format&fit=crop&q=60&w=800" },
    { title: "Royal Ballroom", category: "Heritage", year: "2024", img: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=60&w=800" },
    { title: "Infinity Spa", category: "Wellness", year: "2024", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=60&w=800" }
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 space-y-8 lg:space-y-0">
        <div className="max-w-2xl">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-regal-gold mb-4 block font-bold">Inspiration Gallery</span>
          <h3 className="text-4xl md:text-7xl font-serif text-charcoal italic leading-none">Curated <span className="not-italic text-royal-accent">Spaces</span></h3>
          <p className="mt-6 text-charcoal/50 text-sm md:text-base font-light leading-relaxed">
            Witness our materials come to life in some of the most prestigious architectural projects globally.
          </p>
        </div>
        <div className="lg:text-right">
          <p className="max-w-xs lg:ml-auto text-charcoal/40 font-light text-xs md:text-sm italic mb-6">
            "Design is a journey from the core of the Earth to the light of the sun."
          </p>
          <button 
            onClick={onViewMore}
            className="text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal hover:text-regal-gold transition-all duration-300 border-b border-charcoal/10 hover:border-regal-gold pb-2 inline-block"
          >
            View Projects Archive
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative overflow-hidden aspect-[3/4] bg-marble-gray rounded-sm cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700"
            onClick={onViewMore}
          >
            <img 
              src={project.img} 
              alt={project.title} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
              onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-start w-full">
              <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-regal-gold font-bold">
                    {project.category}
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.4em] text-white/40">
                    {project.year}
                  </span>
              </div>
              <h4 className="text-2xl md:text-4xl font-serif text-white tracking-tight italic">{project.title}</h4>
              <div className="w-0 h-px bg-white mt-6 group-hover:w-full transition-all duration-1000 origin-left"></div>
            </div>

            <div className="absolute top-4 right-4 md:hidden">
                <span className="px-4 py-1.5 bg-black/30 backdrop-blur-lg border border-white/10 text-white text-[7px] uppercase tracking-[0.3em] rounded-full font-bold">
                    {project.category}
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
