"use client";

import { useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const testimonials = [
    {
      name: "Sarah K",
      title: "Operations Manager",
      rating: 4,
      text: "Managing parking is much easier now. Everything is in one system, payments are seamless, and the team always has clear visibility over daily operations.",
      image: "👩",
      bgColor: "bg-[#F7F7FE]",
    },
    {
      name: "James Carter",
      title: "Project Manager at TechNova",
      rating: 4,
      text: "Managing parking is much easier now. Everything is in one system, payments are seamless, and the team always has clear visibility over daily operations.",
      image: "👨",
      bgColor: "bg-orange-500",
      featured: true,
    },
    {
      name: "Emily R",
      title: "Facilities Director",
      rating: 4,
      text: "Managing parking is much easier now. Everything is in one system, payments are seamless, and the team always has clear visibility over daily operations.",
      image: "👩‍💼",
      bgColor: "bg-[#F7F7FE]",
    },
    {
      name: "Emily R",
      title: "Facilities Director",
      rating: 4,
      text: "Managing parking is much easier now. Everything is in one system, payments are seamless, and the team always has clear visibility over daily operations.",
      image: "👩‍💼",
      bgColor: "bg-[#F7F7FE]",
    },
    {
      name: "Emily R",
      title: "Facilities Director",
      rating: 4,
      text: "Managing parking is much easier now. Everything is in one system, payments are seamless, and the team always has clear visibility over daily operations.",
      image: "👩‍💼",
      bgColor: "bg-[#F7F7FE]",
    },
    {
      name: "lkjhgvftyuhij R",
      title: "Facilities Director",
      rating: 4,
      text: "Managing parking is much easier now. Everything is in one system, payments are seamless, and the team always has clear visibility over daily operations.",
      image: "👩‍💼",
      bgColor: "bg-[#F7F7FE]",
    },
    {
      name: "EDRFTVYGBHNJIK R",
      title: "Facilities Director",
      rating: 4,
      text: "Managing parking is much easier now. Everything is in one system, payments are seamless, and the team always has clear visibility over daily operations.",
      image: "👩‍💼",
      bgColor: "bg-[#F7F7FE]",
    },
    {
      name: "Emily URDCFTYVGBUNI",
      title: "Facilities Director",
      rating: 4,
      text: "Managing parking is much easier now. Everything is in one system, payments are seamless, and the team always has clear visibility over daily operations.",
      image: "👩‍💼",
      bgColor: "bg-[#F7F7FE]",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans w-full">
      <div className="max-w-5xl mx-auto mb-20 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <img
          src="/imgi_170_iDrlOYszhHrSmrgaFKo5G5kRV8.svg"
          alt="Testimonials"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-auto flex w-full gap-10 relative">
        <div className="text-center mb-12 md:mb-16 w-[40%] flex flex-col items-center justify-start pl-30">
          <h2 className="text-[40px] font-semibold tracking-tight text-gray-900 mb-4 leading-12">
            Trusted by People <br /> Who Park Smarter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-left">
            Hear how HalaPark is making parking <br /> easier for our customers.
          </p>
        </div>

        <div className="w-[60%]">
          <div className="flex items-center gap-2 overflow-hidden">
            {testimonials.map((testimonial, index) => {
              const distance = Math.abs(index - currentIndex);
              const isVisible = distance <= 1; // Show current, previous, and next

              if (!isVisible) return null;

              // Calculate position: -1 (left), 0 (center), 1 (right)
              const position = index - currentIndex;

              // To show 2.5 cards: each card is 40% width
              // 2 full cards (80%) + half of third card (20%) = 100%
              const cardWidth = "w-[41%]";

              return (
                <div
                  key={index}
                  className={`shrink-0 transition-all duration-500 ${cardWidth} ${
                    position === 0
                      ? "scale-100 opacity-100"
                      : "scale-100 opacity-100"
                  }`}
                >
                  <div
                    className={`${testimonial.bgColor} rounded-3xl  h-130 ${
                      testimonial.featured ? "text-white" : "text-gray-900"
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
                        <p className="text-lg md:text-xl mb-4">
                          {testimonial.text}
                        </p>
                        <p className="font-semibold">- {testimonial.name}</p>
                      </div>
                    ) : (
                      <div className="flex flex-col h-full p-6 md:p-8 border-2 border-[#dfe0f8] rounded-3xl">
                        {/* Stars at the top */}
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Testimonial text */}
                        <p className="text-[#535353] text-[20px] mb-6 leading-relaxed grow">
                          {testimonial.text}
                        </p>

                        {/* Profile section at bottom */}
                        <div className="flex items-center mt-auto">
                          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-2xl shrink-0 mr-4">
                            {testimonial.image}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 text-base">
                              {testimonial.name}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
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
            className="absolute left-47 top-[60%] transform -translate-y-1/2 text-white p-3 rounded-full  transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <img
              src="/imgi_178_K3YtoO81ZiQgTf1jDdsJ9y1pI.png"
              alt="Previous"
              className="w-9 h-9"
            />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute left-62 top-[60%] transform -translate-y-1/2 text-white p-3 rounded-full transition-colors z-10"
            aria-label="Next testimonial"
          >
            <img
              src="/imgi_179_gTRENw5OR8ywXmFiT9I6QaizgA.png"
              alt="Next"
              className="w-9 h-9"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
