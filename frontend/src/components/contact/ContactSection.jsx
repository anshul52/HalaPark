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
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 max-md:py-16 max-sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto mt-18 max-md:mt-12 max-sm:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-md:gap-12 max-sm:gap-10">
          {/* Left Side */}
          <div className="space-y-10 max-md:space-y-8 max-sm:space-y-6 text-center lg:text-left">
            <div className="mb-16 max-md:mb-10 max-sm:mb-8">
              <div className="relative flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0 px-6 py-1 mb-4">
                <div className="absolute bottom-0 left-0 z-0">
                  <img src="/LeftSVG.png" alt="" className="w-3 h-3" />
                </div>

                <span className="text-[13px] text-[#0F1115] font-medium block">
                  Contact
                </span>

                <div className="absolute top-0 right-0 z-0">
                  <img src="/RightSVG.png" alt="" className="w-3 h-3" />
                </div>
              </div>

              <h2 className="text-[40px] max-md:text-[34px] max-sm:text-[26px] font-bold text-gray-900 mb-6 tracking-tighter">
                Let&apos;s collaborate
              </h2>

              <p className="text-[16px] max-sm:text-[15px] text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-6">
                Reach out and let&apos;s explore how we can bring your ideas to
                life. <br className="hidden sm:block" />
                Whether you&apos;re ready to begin or just have questions.
              </p>
            </div>

            <div className="max-sm:text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <a
                  href="tel:+919600080670"
                  className="text-xl max-sm:text-lg text-gray-900 hover:text-blue-600 transition-colors font-bold"
                >
                  +91 9600080670
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 break-words">
                <a
                  href="mailto:contact@halapark.com"
                  className="text-[32px] max-md:text-[24px] max-sm:text-[18px] text-gray-900 hover:text-blue-600 transition-colors font-bold break-all"
                >
                  contact@halapark.com
                </a>
              </div>

              <p className="text-sm text-gray-600 mb-8 max-md:mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
                Reach out to us via email or give us a call, we are happy to
                assist you!
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-3">
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

          {/* Right Side - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 max-md:space-y-4 max-sm:space-y-3"
            >
              {["name", "email", "phone"].map((field) => (
                <div key={field}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <div className="w-5 h-5 text-gray-400" />
                    </div>

                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      required
                      className="w-full pl-12 pr-4 py-3.5 max-sm:py-3 border-2 border-[#D2DAE4] rounded-[99px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              ))}

              <div>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <div className="w-5 h-5 text-gray-400" />
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3.5 max-sm:py-3 border-2 border-[#D2DAE4] rounded-[20px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3.5 max-sm:py-3 px-6 rounded-[99px] font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Send Message</span>
              </button>
            </form>

            {/* Address */}
            <div className="flex items-start gap-4 pt-6 max-md:pt-5 max-sm:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0">
                <img src="/address234.png" alt="" className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-medium text-[#697289] mb-2">
                  Address
                </h3>

                <p className="text-base max-sm:text-sm text-black leading-relaxed tracking-tight break-words">
                  SIS SAFAA B-Block Flot no.804, G.S.T Road, Guduvanchery,
                  Chengalpattu, Kanchipuram- 603202 Tamilnadu
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4 pt-6 max-md:pt-5 max-sm:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0">
                <img src="/clock234.png" alt="" className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-medium text-[#697289] mb-2">
                  Office Hours
                </h3>

                <p className="text-base max-sm:text-sm text-black leading-relaxed tracking-tight">
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
