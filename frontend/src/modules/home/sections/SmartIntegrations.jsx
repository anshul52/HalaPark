import { PulseLogo } from "../../../components/common/Home/homecommon";

export default function SmartIntegrations() {
  const integrations = [
    "Management",
    "Maintenance",
    "Technical Support",
    "Operations",
    "Installation",
    "Equipment Supply",
    "Advisory Services",
  ];

  // Duplicate integrations for seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className=" bg-[#0A0A0A] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center relative">
          <img
            src="/imgi_165_eVPQSYBoVqwchmpN78sjyYtovY.svg"
            alt="Smart Integrations"
            className="w-150 h-100 object-cover"
          />
          <img
            src="/giminilogo.svg"
            alt="Smart Integrations"
            className="w-5 h-5 object-cover absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="text-center mb-12 md:mb-16 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-4">
              Smart Integrations That <br /> Power Smarter Parking
            </h2>
            <p className="text-[15px] text-gray-300 max-w-2xl mx-auto">
              Everything works better when the right services <br /> come
              together.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center mb-20">
          {/* Central Location Pin */}
          <div className="absolute z-10">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              {/* <img
                src="/imgi_32_rRwo7mUtZ89fOzQy5lvrDQHYjo.png"
                alt="Smart Integrations"
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
              /> */}
              <PulseLogo size={100} scale={1} />
            </div>
          </div>

          {/* Integration Logos in Straight Line with Animation */}
          <div className="my-16 md:my-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
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
                  className="flex items-center gap-2 shrink-0 bg-transparent border border-white rounded-xl px-4 py-2 shadow-lg text-sm font-medium text-white transition-transform"
                >
                  <img
                    src={`/integrations/${integration}.svg`}
                    alt={integration}
                    className="w-7 h-7 object-cover"
                  />

                  <span className="text-white text-sm font-medium">
                    {integration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
