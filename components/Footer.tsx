
import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-charcoal text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl md:text-3xl font-serif mb-6 italic text-left group flex flex-col items-start leading-none"
            >
              <span className="font-semibold">Amazon</span>
              <span className="text-[9px] uppercase tracking-[0.6em] mt-1 text-regal-gold font-bold">Marble Centre</span>
            </button>
            <p className="text-white/40 font-light text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Establishing the gold standard for high-end natural stone. We partner with the world's leading architects to define the pinnacle of luxury interiors.
            </p>
            <div className="flex space-x-5">
              {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-white/40 hover:text-regal-gold transition-colors text-[10px] uppercase tracking-widest font-bold border-b border-transparent hover:border-regal-gold pb-1"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white mb-8 border-b border-white/10 pb-4">Explore</h4>
            <ul className="space-y-4 text-xs text-white/40 font-medium">
              <li><button onClick={() => onNavigate('archive')} className="hover:text-regal-gold transition-colors">Stone Library</button></li>
              <li><button onClick={() => onNavigate('projects_detailed')} className="hover:text-regal-gold transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigate('heritage')} className="hover:text-regal-gold transition-colors">The Dynasty</button></li>
              <li><button onClick={() => onNavigate('showroom')} className="hover:text-regal-gold transition-colors">Virtual Showroom</button></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white mb-8 border-b border-white/10 pb-4">Support</h4>
            <ul className="space-y-4 text-xs text-white/40 font-medium">
              <li><button onClick={() => onNavigate('consultation')} className="hover:text-regal-gold transition-colors">Book Inquiry</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-regal-gold transition-colors">Privacy Charter</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-regal-gold transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('accessibility')} className="hover:text-regal-gold transition-colors">Accessibility</button></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-4 bg-white/5 p-8 rounded-sm">
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white mb-4">Concierge Access</h4>
            <p className="text-white/40 text-xs mb-6 font-light">Join our list for first-access to rare quarry finds and project highlights.</p>
            <div className="flex border-b border-white/20 pb-2 mb-8">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-xs w-full focus:outline-none placeholder:text-white/20" 
              />
              <button className="text-regal-gold text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">Join</button>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-white/30 mb-2 font-bold">Direct Line</span>
              <p className="text-lg font-serif italic text-white">+44 20 7946 0123</p>
            </div>
          </div>
        </div>
        
        {/* Sub-footer */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 mb-4 md:mb-0">
            © {currentYear} Amazon Marble Centre. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
            <span className="w-1.5 h-1.5 bg-regal-gold rounded-full animate-pulse-soft"></span>
            <span>London</span>
            <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
            <span>Milan</span>
            <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
            <span>Madrid</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
