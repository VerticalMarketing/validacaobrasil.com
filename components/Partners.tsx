"use client";
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const partners = [
        { name: 'Voin', logo: '/partners/voin-partners.svg', width: 146, height: 94 },
        { name: 'Cepaf', logo: '/partners/cepaf-partners.svg', width: 210, height: 76 },
        { name: 'Voin', logo: '/partners/voin-partners.svg', width: 146, height: 94 },
        { name: 'Cepaf', logo: '/partners/cepaf-partners.svg', width: 210, height: 76 },
        { name: 'Voin', logo: '/partners/voin-partners.svg', width: 146, height: 94 },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[24px] font-raleway font-bold text-gray-800 text-center mb-4">
                        Nossos Parceiros de Confiança
                    </h2>
                    <p className="text-gray-600 max-w-5xl  text-[14px] mx-auto">
                        Instituições e empresas que caminham ao nosso lado para levar educação e qualidade ainda mais longe.
                    </p>
                </div>

                <div className="relative w-fit max-w-full mx-auto">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                        aria-label="Previous partners"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-400" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex items-center gap-8 md:gap-15 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 snap-center flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                            >
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    style={{ width: `${partner.width}px`, height: `${partner.height}px` }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                        aria-label="Next partners"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Partners;
