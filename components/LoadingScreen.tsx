import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsFadingOut(true), 500);
                    setTimeout(() => {
                        setIsVisible(false);
                        document.body.style.overflow = 'unset';
                    }, 1500);
                    return 100;
                }
                // Accelerate loading progress but slow down near the end for a premium feel
                const increment = prev < 80 ? Math.random() * 15 + 5 : Math.random() * 3 + 1;
                return Math.min(100, prev + increment);
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-charcoal flex flex-col items-center justify-center transition-opacity duration-1000 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-regal-gold rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-md px-8">
                <div className="text-center mb-12 transform transition-transform duration-1000 hover:scale-105">
                    <h1 className="text-4xl md:text-5xl font-serif text-white italic tracking-tighter shadow-sm flex flex-col items-center">
                        <span className="font-semibold px-2">Amazon</span>
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-regal-gold mt-2 font-bold no-italic">
                            Marble Centre
                        </span>
                    </h1>
                </div>

                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-6 relative">
                    <div
                        className="h-full bg-gradient-to-r from-regal-gold/50 via-regal-gold to-white transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-white/20 blur-[2px]" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex justify-between w-full text-[9px] uppercase tracking-[0.4em] font-bold text-white/40">
                    <span>Preparing Archive</span>
                    <span className="text-regal-gold">{Math.floor(progress)}%</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
