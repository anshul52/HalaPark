'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const testimonials = [
    {
      name: 'Sarah K',
      rating: 5,
      text: 'HalaPark has completely transformed my parking experience. It\'s so convenient and easy to use!',
      image: '👩',
      bgColor: 'bg-white',
    },
    {
      name: 'Michael B',
      rating: 5,
      text: 'The best parking solution I\'ve ever used. Highly recommend to everyone!',
      image: '👨',
      bgColor: 'bg-orange-500',
      featured: true,
    },
    {
      name: 'Emily R',
      rating: 5,
      text: 'Amazing service and great customer support. Parking has never been this simple.',
      image: '👩‍💼',
      bgColor: 'bg-white',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by People Who Park Smarter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isVisible = Math.abs(index - currentIndex) <= 1;

              if (!isVisible) return null;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 transition-all duration-500 ${
                    isActive
                      ? 'w-full md:w-2/3 scale-100 opacity-100'
                      : 'w-0 md:w-1/4 scale-90 opacity-50'
                  }`}
                >
                  <div
                    className={`${testimonial.bgColor} rounded-lg p-6 md:p-8 shadow-lg ${
                      testimonial.featured ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {testimonial.featured ? (
                      <div className="text-center">
                        <div className="text-6xl mb-4">{testimonial.image}</div>
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-lg md:text-xl mb-4">{testimonial.text}</p>
                        <p className="font-semibold">- {testimonial.name}</p>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="text-3xl mr-4">{testimonial.image}</div>
                          <div>
                            <div className="flex mb-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-4 h-4 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <p className="font-semibold">{testimonial.name}</p>
                          </div>
                        </div>
                        <p className="text-sm">{testimonial.text}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
