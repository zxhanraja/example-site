import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        name: "Arjun Singhania",
        role: "Property Developer, Mumbai",
        quote: "JS Tiles Emporium transformed our flagship residential project. Their Calacatta slabs are unparalleled in purity and veining. A truly flawless experience.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        name: "Priya Desai",
        role: "Lead Architect, Delhi",
        quote: "As an architect, I demand perfection. The curated archive here is breathtaking. Their statuario marble became the centerpiece of my latest villa design.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        name: "Vikram Mehta",
        role: "Hotelier, Jaipur",
        quote: "The bespoke onyx luminescence they provided for our hotel lobby creates an ethereal atmosphere. Their attention to luxury detail is unmatched.",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        name: "Rohan Kapoor",
        role: "Private Homeowner, Bangalore",
        quote: "From selection to installation, the journey was impeccable. Our floors exude a timeless elegance that only genuine, high-grade marble can provide.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        name: "Ananya Sharma",
        role: "Interior Designer, Pune",
        quote: "I rely on their travertine textures for my minimalist projects. The sourcing quality and professional guidance make them my definitive stone partner.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setIsAnimating(false);
        }, 500);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
            setIsAnimating(false);
        }, 500);
    };

    return (
        <section className="py-24 md:py-32 bg-marble-gray relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24 px-4">
                    <span className="text-regal-gold text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 font-bold">Client Testimonials</span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-charcoal italic leading-tight">
                        Voices of <span className="not-italic text-royal-accent">Elegance</span>
                    </h2>
                    <div className="w-12 h-px bg-regal-gold/40 mt-8"></div>
                </div>

                <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
                    {testimonials.map((testimonial, idx) => {
                        let positionClass = '';
                        if (idx === currentIndex) {
                            positionClass = 'translate-x-0 opacity-100 z-20 scale-100';
                        } else if (idx === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                            positionClass = '-translate-x-full opacity-0 z-10 scale-95';
                        } else if (idx === (currentIndex + 1) % testimonials.length) {
                            positionClass = 'translate-x-full opacity-0 z-10 scale-95';
                        } else {
                            positionClass = 'translate-x-full opacity-0 z-0 hidden';
                        }

                        return (
                            <div
                                key={idx}
                                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out flex flex-col items-center text-center ${positionClass}`}
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-regal-gold/30 p-1 mb-8">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover rounded-full"
                                        loading="lazy"
                                    />
                                </div>
                                <p className="text-xl md:text-2xl lg:text-3xl font-serif text-charcoal/80 italic mb-8 px-4 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <h4 className="text-sm md:text-base tracking-[0.2em] uppercase font-bold text-charcoal mb-2">
                                    {testimonial.name}
                                </h4>
                                <p className="text-xs text-charcoal/50 uppercase tracking-widest">
                                    {testimonial.role}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center items-center space-x-8 mt-12 md:mt-16">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-regal-gold hover:text-white hover:border-regal-gold transition-all duration-300"
                    >
                        ←
                    </button>
                    <div className="flex space-x-2">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setCurrentIndex(idx);
                                            setIsAnimating(false);
                                        }, 300);
                                    }
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-regal-gold w-8' : 'bg-charcoal/20 hover:bg-charcoal/40'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-regal-gold hover:text-white hover:border-regal-gold transition-all duration-300"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
