
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
    src?: string; // Optional if using placeholder
    placeholderType?: 'wireframe' | 'user-flow' | 'mockup' | 'chart';
    alt: string;
    caption: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const currentImage = images[currentIndex];

    return (
        <div className="my-12">
            <div className="relative aspect-video bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-inner group">

                {currentImage.src ? (
                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        fill
                        className="object-cover"
                    />
                ) : (
                    // Placeholder UI
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon size={48} className="mb-4 opacity-50" />
                        <span className="text-lg font-medium">{currentImage.alt}</span>
                        <span className="text-sm mt-2 opacity-75 uppercase tracking-widest">{currentImage.placeholderType} Placeholder</span>
                    </div>
                )}

                {/* Navigation Controls */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                                            ? 'bg-[var(--primary)] w-4'
                                            : 'bg-gray-400/50 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <p className="text-center text-sm text-gray-500 mt-3 italic">
                {currentImage.caption}
            </p>
        </div>
    );
}
