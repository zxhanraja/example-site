
import React from 'react';
import { ViewState } from '../App';

interface DetailedContentProps {
  type: ViewState;
  onBack: () => void;
}

const DetailedContent: React.FC<DetailedContentProps> = ({ type, onBack }) => {
  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="fade-in">
            <h1 className="text-4xl md:text-7xl font-serif italic text-charcoal mb-12">Privacy Charter</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-charcoal/70 font-light leading-loose text-base md:text-lg">
              <section>
                <h2 className="text-regal-gold text-xs uppercase tracking-[0.5em] font-bold mb-6">01. Information Collection</h2>
                <p>We collect essential project-specific data to provide bespoke stonework solutions. This data is handled with the highest level of discretion, synonymous with the privacy of our global elite clientele.</p>
              </section>
              <section>
                <h2 className="text-regal-gold text-xs uppercase tracking-[0.5em] font-bold mb-6">02. Security Protocols</h2>
                <p>Utilizing high-grade encryption, your architectural plans and project specifications are secured within our private design cloud. We never sell data to commercial brokers.</p>
              </section>
            </div>
          </div>
        );
      case 'heritage':
        return (
          <div className="fade-in">
            <h1 className="text-4xl md:text-7xl font-serif italic text-charcoal mb-12">The Amazon Dynasty</h1>
            <div className="space-y-12 text-charcoal/70 font-light leading-loose text-base md:text-lg max-w-4xl">
              <div className="aspect-[21/9] overflow-hidden rounded-sm bg-marble-gray mb-12">
                <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Quarry Heritage" onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')} />
              </div>
              <section>
                <h2 className="text-regal-gold text-xs uppercase tracking-[0.5em] font-bold mb-6">Established 1992</h2>
                <p>Born in the quarries of Carrara, Amazon Marble Centre was established to unite ancient geological mastery with modern architectural vision. Our foundation is built on decades of trust with heritage quarry owners.</p>
              </section>
              <section>
                <h2 className="text-regal-gold text-xs uppercase tracking-[0.5em] font-bold mb-6">Global Curation</h2>
                <p>Our scouts are permanently stationed in key global quarrying regions, ensuring that we secure first-choice slab selection long before materials enter the general market.</p>
              </section>
            </div>
          </div>
        );
      case 'archive':
        return (
          <div className="fade-in">
            <h1 className="text-4xl md:text-7xl font-serif italic text-charcoal mb-12">Material Archive</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-charcoal/70 font-light leading-loose text-base md:text-lg">
              <section className="space-y-6">
                <h2 className="text-regal-gold text-xs uppercase tracking-[0.5em] font-bold mb-4">A Catalog of the Earth</h2>
                <p>Our archive spans 200+ distinct stone varieties. Each slab is high-resolution scanned for BIM integration, ensuring your digital renders match physical reality.</p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="p-4 border border-charcoal/5 rounded-sm"><h4 className="font-bold text-[10px] uppercase mb-1">Grade A+</h4><p className="text-[10px] opacity-40 uppercase tracking-widest">Michelangelo Statuario</p></div>
                  <div className="p-4 border border-charcoal/5 rounded-sm"><h4 className="font-bold text-[10px] uppercase mb-1">Limited</h4><p className="text-[10px] opacity-40 uppercase tracking-widest">Royal Portoro Gold</p></div>
                </div>
              </section>
              <div className="aspect-square overflow-hidden rounded-sm bg-marble-gray">
                 <img src="https://images.unsplash.com/photo-1600607687940-4e2007e9545b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Library" onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')} />
              </div>
            </div>
          </div>
        );
      case 'showroom':
        return (
          <div className="fade-in">
            <h1 className="text-4xl md:text-7xl font-serif italic text-charcoal mb-12">Showroom Gallery</h1>
            <div className="space-y-12 text-charcoal/70 font-light leading-loose text-lg max-w-5xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-regal-gold text-xs uppercase tracking-[0.5em] font-bold mb-6">Physical Experience</h2>
                  <p>Visit our flagship London and Milan locations for a tactile experience of our rarest stones. We offer private viewing rooms for design teams to curate whole-project palettes.</p>
                </div>
                <div className="order-1 lg:order-2 aspect-[4/3] rounded-sm overflow-hidden bg-marble-gray">
                  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Showroom" onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')} />
                </div>
              </div>
            </div>
          </div>
        );
      case 'consultation':
        return (
          <div className="fade-in">
            <h1 className="text-4xl md:text-7xl font-serif italic text-charcoal mb-12">Consultation</h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-8 text-charcoal/70 font-light leading-loose text-base md:text-lg">
                <h2 className="text-regal-gold text-xs uppercase tracking-[0.5em] font-bold mb-6">Bespoke Architectural Partnership</h2>
                <p>We provide comprehensive technical support for large-scale stone projects. Our consultants assist with load calculations, slip-resistance certification, and climate-specific material selection.</p>
                <div className="pt-8 border-t border-charcoal/5 flex flex-wrap gap-4">
                  {['Residential', 'Commercial', 'Hospitality', 'Public Spaces'].map(tag => (
                    <span key={tag} className="px-5 py-2 border border-charcoal/10 text-[9px] uppercase tracking-widest font-bold rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                 <div className="bg-charcoal p-8 md:p-10 text-white rounded-sm sticky top-32">
                    <h3 className="text-2xl font-serif italic mb-6">Project Inquiry</h3>
                    <form className="space-y-4">
                       <input type="text" placeholder="Full Name" className="w-full bg-white/5 border-b border-white/10 py-3 px-2 focus:outline-none focus:border-regal-gold transition-colors text-sm" />
                       <input type="email" placeholder="Email Address" className="w-full bg-white/5 border-b border-white/10 py-3 px-2 focus:outline-none focus:border-regal-gold transition-colors text-sm" />
                       <textarea placeholder="Project Details" className="w-full bg-white/5 border-b border-white/10 py-3 px-2 h-32 focus:outline-none focus:border-regal-gold transition-colors text-sm resize-none"></textarea>
                       <button className="w-full py-4 mt-4 bg-regal-gold text-white text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-charcoal transition-all">Submit Brief</button>
                    </form>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'projects_detailed':
        return (
          <div className="fade-in">
            <h1 className="text-4xl md:text-7xl font-serif italic text-charcoal mb-12">Case Studies</h1>
            <div className="space-y-20">
               {[
                 { title: "The Mayfair Penthouse", loc: "London", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200" },
                 { title: "Lakeside Zurich Villa", loc: "Zurich", img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200" }
               ].map((p, i) => (
                 <section key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-b border-charcoal/5 pb-20 last:border-0">
                    <div className="aspect-video rounded-sm overflow-hidden bg-marble-gray">
                       <img src={p.img} className="w-full h-full object-cover" alt={p.title} onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')} />
                    </div>
                    <div className="space-y-4">
                       <span className="text-regal-gold text-[10px] uppercase tracking-widest font-bold">{p.loc}</span>
                       <h3 className="text-3xl font-serif italic">{p.title}</h3>
                       <p className="text-charcoal/50 font-light">A comprehensive stone installation requiring precise book-matching and custom finishing.</p>
                       <button className="text-[10px] uppercase font-bold border-b border-charcoal/20 pb-1">View Gallery</button>
                    </div>
                 </section>
               ))}
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="fade-in">
            <h1 className="text-4xl md:text-7xl font-serif italic text-charcoal mb-12">Terms of Luxury</h1>
            <div className="space-y-8 text-charcoal/70 font-light leading-relaxed text-sm md:text-base max-w-3xl">
              <section>
                <h2 className="text-regal-gold text-[10px] uppercase tracking-widest font-bold mb-4">Material Variation</h2>
                <p>Natural stone exhibits inherent geological variations. Minor differences in veining and hue are markers of authenticity and quality.</p>
              </section>
              <section>
                <h2 className="text-regal-gold text-[10px] uppercase tracking-widest font-bold mb-4">Professional Installation</h2>
                <p>We recommend our certified masters for all installations to ensure structural integrity and warranty coverage.</p>
              </section>
            </div>
          </div>
        );
      case 'accessibility':
        return (
          <div className="fade-in">
            <h1 className="text-4xl md:text-7xl font-serif italic text-charcoal mb-12">Accessibility</h1>
            <div className="space-y-8 text-charcoal/70 font-light leading-relaxed text-sm md:text-base max-w-3xl">
              <section>
                <h2 className="text-regal-gold text-[10px] uppercase tracking-widest font-bold mb-4">Digital Access</h2>
                <p>Our platform is engineered to WCAG 2.1 AA standards, ensuring a seamless experience for all users of assistive technology.</p>
              </section>
              <section>
                <h2 className="text-regal-gold text-[10px] uppercase tracking-widest font-bold mb-4">Showroom Access</h2>
                <p>All Amazon Marble Centre showrooms are fully wheelchair accessible with personal concierge assistance available on-site.</p>
              </section>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl font-serif italic mb-4">In Development</h1>
            <p className="text-charcoal/40 mb-10 text-sm">We are refining this architectural section.</p>
            <button onClick={onBack} className="text-regal-gold text-[10px] uppercase tracking-widest font-bold border border-regal-gold px-10 py-4 hover:bg-regal-gold hover:text-white transition-all">Return to Home</button>
          </div>
        );
    }
  };

  return (
    <div className="pt-24 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 bg-marble-white min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <button 
          onClick={onBack}
          className="group inline-flex items-center space-x-3 mb-16 text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 hover:text-regal-gold transition-all duration-300"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          <span>Return</span>
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailedContent;
