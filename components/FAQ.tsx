import React, { useState } from 'react';

const faqs = [
    {
        question: "Do you supply material globally?",
        answer: "Yes, CHOWDHURY MARBLE coordinates secure, international shipping for our curated slabs directly to your project site, ensuring the material arrives in pristine condition."
    },
    {
        question: "Can I view the slabs before purchasing?",
        answer: "Absolutely. We encourage private viewings at our showroom or via personalized virtual tours, allowing you to appreciate the intricate veining, texture, and luminosity of each unique slab."
    },
    {
        question: "Do you offer installation services?",
        answer: "While we specialize in sourcing and supplying the world's finest stones, we have an extensive network of master artisans and installation partners whom we highly recommend based on your location."
    },
    {
        question: "How do I care for my natural stone?",
        answer: "Each stone requires specific care. Generally, we recommend using pH-neutral cleaners and avoiding harsh chemicals. Upon purchase, our concierge team will provide you with a detailed preservation guide tailored to your selected material."
    },
    {
        question: "Are your Onyx and Quartzite suitable for backlighting?",
        answer: "Yes. Our premium Onyx and select Quartzite slabs possess remarkable translucency, making them exceptional choices for backlit feature walls and custom luxury bar installations."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-32 bg-white relative">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 px-4">
                    <span className="text-regal-gold text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 font-bold">Inquiries</span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-charcoal italic leading-tight">
                        Frequently <span className="not-italic text-royal-accent">Asked</span>
                    </h2>
                    <div className="w-12 h-px bg-regal-gold/40 mt-8"></div>
                </div>

                <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-b border-charcoal/10 pb-4 md:pb-6 transition-all duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                        >
                            <button
                                className="w-full flex justify-between items-center text-left py-4 group"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-serif text-charcoal text-xl md:text-2xl pr-8 group-hover:text-regal-gold transition-colors duration-300">
                                    {faq.question}
                                </span>
                                <span className={`text-regal-gold text-2xl transform transition-transform duration-500 ease-in-out ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                    +
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-charcoal/60 font-light text-sm md:text-base leading-relaxed pr-8 md:pr-12">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
