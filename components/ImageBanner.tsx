import React from 'react';

interface ImageBannerProps {
    src: string;
    alt: string;
    className?: string;
}

export function ImageBanner({ src, alt, className = '' }: ImageBannerProps) {
    return (
        <div className={`w-full flex justify-center bg-gray-50 ${className}`}>
            <div className="container mx-auto px-4">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-cover md:h-[150px] rounded-[10px]"
                />
            </div>
        </div>
    );
}
