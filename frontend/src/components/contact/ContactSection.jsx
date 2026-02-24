"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto mt-18">
        {/* Section Header */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Side - Contact Information */}
          <div className="space-y-10">
            <div className="mb-16">
              <div className="relative flex items-center justify-center w-fit px-6 py-1 mb-4">
                <div className="absolute bottom-0 left-0 z-0">
                  <img src="/LeftSVG.png" alt="" className="w-3 h-3" />
                </div>
                <span className="text-[13px] text-[#0F1115] font-medium block">
                  Contact
                </span>
                {/* Right L-shape at top-right */}
                <div className="absolute top-0 right-0 z-0">
                  <img src="/RightSVG.png" alt="" className="w-3 h-3" />
                </div>
              </div>
              <h2 className="text-[40px] font-bold text-gray-900 mb-6 tracking-tighter">
                Let&apos;s collaborate
              </h2>
              <p className="text-[16px] text-gray-600 max-w-2xl mx-auto leading-6">
                Reach out and let&apos;s explore how we can bring your ideas to
                life. <br /> Whether you&apos;re ready to begin or just have
                questions.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <a
                  href="tel:+919600080670"
                  className="text-xl text-gray-900 hover:text-blue-600 transition-colors font-bold"
                >
                  +91 9600080670
                </a>
              </div>

              <div className="flex items-center gap-3 mb-0">
                <a
                  href="mailto:contact@halapark.com"
                  className="text-[32px] text-gray-900 hover:text-blue-600 transition-colors font-bold"
                >
                  contact@halapark.com
                </a>
              </div>

              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Reach out to us via email or give us a call, we are happy to
                assist you!
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-[#D2DAE4] rounded-[99px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-[#D2DAE4] rounded-[99px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-[#D2DAE4] rounded-[99px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-[#D2DAE4] rounded-[20px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3.5 px-6 rounded-[99px] font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Send Message</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
            {/* Address */}
            <div className="flex items-start gap-4 pt-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0">
                <img src="/address234.png" alt="" className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-[#697289] mb-2">
                  Address
                </h3>
                <p className="text-base text-black leading-relaxed tracking-tight">
                  SIS SAFAA B-Block Flot no.804, G.S.T Road, Guduvanchery,
                  Chengalpattu, Kanchipuram- 603202 Tamilnadu
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4 pt-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0">
                <img src="/clock234.png" alt="" className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-[#697289] mb-2">
                  Office Hours
                </h3>
                <p className="text-base text-black leading-relaxed tracking-tight">
                  Monday to Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
