export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-blue-50 py-16 md:py-24 lg:py-32 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            All In One Parking
            <br />
            <span className="text-blue-600">Management Solution</span>
          </h1>
        </div>

        {/* Central Diagram */}
        <div className="relative flex justify-center items-center my-16">
          <div className="relative w-full max-w-2xl aspect-square">
            {/* Central Logo Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-xl flex items-center justify-center z-10 border-4 border-blue-500">
              <span className="text-2xl md:text-3xl font-bold text-blue-600">HP</span>
            </div>

            {/* Connecting Lines and Features */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {/* Smart Parking - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-2 mx-auto border-2 border-blue-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-800">Smart Parking</p>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0.5 h-16 md:h-20 bg-blue-300 border-dashed border-blue-400"></div>
              </div>

              {/* Valet On Demand - Right */}
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-2 mx-auto border-2 border-blue-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-800">Valet On Demand</p>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 md:w-20 h-0.5 bg-blue-300 border-dashed border-blue-400"></div>
              </div>

              {/* Private Parking - Left */}
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-2 mx-auto border-2 border-blue-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-800">Private Parking</p>
                <div className="absolute top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-16 md:w-20 h-0.5 bg-blue-300 border-dashed border-blue-400"></div>
              </div>

              {/* EV Charging - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-2 mx-auto border-2 border-blue-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-800">EV Charging</p>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-16 md:h-20 bg-blue-300 border-dashed border-blue-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
