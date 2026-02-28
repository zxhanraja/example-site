import React, { useState, useRef, useEffect } from 'react';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'Welcome to JS Tiles Emporium. How may I assist you with our luxury stone collections today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', text: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY || "AIzaSyBkziI5lOqbPPRuryfnqxj0-PG1SCAgiy4";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

            const systemInstruction = {
                role: "user",
                parts: [{
                    text: "You are an elite, highly professional concierge for 'JS Tiles Emporium', a luxury natural stone and marble brand based at 489, Grand Trunk Rd, Mahesh, Mahesh Bose Para, Serampore, Kolkata, West Bengal 712202. Direct contact: 07004745766. You provide instant, polite, and extremely concise replies. You assist architects, designers, and distinguished clients with inquiries about premium marble, tiles, and bespoke sourcing. Never break character. Be exceptionally courteous."
                }]
            };

            const contents = messages.slice(1).map(msg => ({
                role: msg.role === 'model' ? 'model' : 'user',
                parts: [{ text: msg.text }]
            }));
            contents.push({ role: 'user', parts: [{ text: userMessage.text }] });

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    systemInstruction,
                    contents,
                    generationConfig: {
                        temperature: 0.3,
                        maxOutputTokens: 256,
                    }
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Gemini API Error:", response.status, errorText);
                throw new Error('API request failed');
            }

            const data = await response.json();
            const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (botReply) {
                setMessages((prev) => [...prev, { role: 'model', text: botReply }]);
            } else {
                throw new Error('Invalid response format');
            }

        } catch (error) {
            console.error('Chatbot error:', error);
            setMessages((prev) => [...prev, { role: 'model', text: 'I apologize, but I am currently unable to process your request. Please call us directly at 07004745766.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[110] w-12 h-12 sm:w-14 sm:h-14 bg-charcoal text-regal-gold border border-regal-gold/30 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group"
                aria-label="Toggle Chat"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-4 sm:bottom-28 sm:right-8 z-[110] w-[calc(100vw-2rem)] sm:w-[350px] bg-white border border-charcoal/10 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-500 origin-bottom-right flex flex-col ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}
                style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}
            >
                {/* Header */}
                <div className="bg-charcoal text-white p-5 rounded-t-sm flex items-center justify-between border-b border-regal-gold/20">
                    <div>
                        <h3 className="font-serif italic text-lg text-regal-gold">JS Tiles Concierge</h3>
                        <p className="text-[9px] uppercase tracking-widest text-white/50">Always Online</p>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-marble-white">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-[85%] p-4 text-sm font-light leading-relaxed rounded-sm ${msg.role === 'user' ? 'bg-regal-gold text-white rounded-tr-none' : 'bg-white border border-charcoal/5 text-charcoal rounded-tl-none shadow-sm'}`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-charcoal/5 p-4 rounded-sm rounded-tl-none shadow-sm flex space-x-2">
                                <div className="w-1.5 h-1.5 bg-regal-gold/50 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-regal-gold/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-1.5 h-1.5 bg-regal-gold/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-charcoal/5 rounded-b-sm">
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask our concierge..."
                            className="flex-1 bg-charcoal/5 text-charcoal text-base p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-regal-gold/50 transition-all"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isLoading}
                            className="w-10 h-10 bg-charcoal text-regal-gold rounded-sm flex items-center justify-center hover:bg-regal-gold hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
