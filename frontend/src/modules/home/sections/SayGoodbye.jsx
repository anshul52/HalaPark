'use client';

import { useState, useEffect } from 'react';

export default function SayGoodbye() {
  const frustrations = [
    'Slow entry and exit',
    'Daily parking frustration',
    'Unmanaged parking space',
    'Outdated systems',
    'Manual payments',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % frustrations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Say Goodbye to
          </h2>
          
          <div className="relative h-20 md:h-24 flex items-center justify-center">
            {frustrations.map((frustration, index) => (
              <div
                key={index}
                className={`absolute text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 scale-100 text-blue-600'
                    : 'opacity-0 scale-95'
                }`}
              >
                {frustration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
