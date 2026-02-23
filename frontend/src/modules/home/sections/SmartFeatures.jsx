'use client';

import { useState } from 'react';

export default function SmartFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: 'Valet On Demand',
      description: 'Professional valet service available whenever you need it',
      image: '🚗',
      bgColor: 'bg-white',
    },
    {
      title: 'Seamless Experience',
      description: 'Smooth parking experience with smart navigation',
      image: '✅',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Ticketless Parking',
      description: 'No more paper tickets - everything digital',
      image: '📱',
      bgColor: 'bg-blue-50',
    },
    {
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance whenever you need help',
      image: '💬',
      bgColor: 'bg-purple-50',
    },
  ];

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Smart Features for Modern Parking
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the features that make parking effortless
          </p>
        </div>

        <div className="relative">
          {/* Feature Carousel */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0"
                >
                  <div className={`${feature.bgColor} rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8`}>
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-6xl md:text-8xl mb-4">{feature.image}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevFeature}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
            aria-label="Previous feature"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextFeature}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
            aria-label="Next feature"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
