export default function SmartIntegrations() {
  const integrations = [
    'Stripe', 'Apple Pay', 'Google Pay', 'Visa', 'Mastercard', 'PayPal',
    'Square', 'Amazon Pay', 'Samsung Pay', 'Venmo', 'Zelle', 'Cash App'
  ];

  // Duplicate integrations for seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden font-sans">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Smart Integrations That Power
            <br />
            Smarter Parking
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Seamlessly connect with the tools and services you already use
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Central Location Pin */}
          <div className="absolute z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse overflow-hidden">
              <img 
                src="/imgi_32_rRwo7mUtZ89fOzQy5lvrDQHYjo.png" 
                alt="Smart Integrations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Integration Logos in Straight Line with Animation */}
          <div className="mt-32 md:mt-40 overflow-hidden">
            <style>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .scroll-animation {
                animation: scroll 30s linear infinite;
              }
            `}</style>
            <div className="flex items-center gap-4 md:gap-6 scroll-animation">
              {duplicatedIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="shrink-0 bg-transparent border border-white rounded-lg px-4 py-2 shadow-lg text-sm font-medium text-white hover:scale-110 transition-transform"
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
