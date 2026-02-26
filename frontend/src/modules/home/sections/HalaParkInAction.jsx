export default function HalaParkInAction() {
  return (
    <section className="bg-[#000000] font-sans py-8 sm:py-12 md:py-16 lg:py-0">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side - Content */}
        <div className="text-white w-full lg:w-[34%] px-4 sm:px-6 md:px-8 lg:px-10 mb-8 sm:mb-10 md:mb-12 lg:mb-0">
          <div className="mb-4 sm:mb-5 lg:mb-0">
            <button className="relative bg-black text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-3xl flex items-center gap-2 sm:gap-3 font-medium text-sm sm:text-[15px] lg:text-[16px] transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] overflow-visible group border border-white/10 mb-6">
              {/* Subtle gradient overlay on top edge */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              {/* Star Icon - Four-pointed star */}
              <img
                src="/download.svg"
                alt="HalaPark in Action"
                className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0"
              />

              {/* Button Text */}
              <span className="whitespace-nowrap text-white font-medium text-xs sm:text-sm lg:text-[14px]">
                HalaPark in Action
              </span>
            </button>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-semibold mb-4 sm:mb-5 lg:mb-6">
            HalaPark in Action
          </h2>
          <p className="text-sm sm:text-[15px] lg:text-[16px] text-white mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
            HalaPark works across public and private spaces to simplify parking,
            reduce congestion, and improve daily operations for everyone
            involved.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-[15px] lg:text-[16px] transition-colors shadow-lg w-full sm:w-auto">
            See how HalaPark work
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex justify-center items-center w-full lg:w-[66%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
          <img
            src="/image.png"
            alt="HalaPark in Action"
            className="h-full sm:h-[450px] md:h-[600px] lg:h-[800px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
