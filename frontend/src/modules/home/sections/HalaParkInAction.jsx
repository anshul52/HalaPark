export default function HalaParkInAction() {
  return (
    <section className="bg-[#000000] font-sans">
      <div className="w-full flex justify-between items-center">
          {/* Left Side - Content */}
          <div className="text-white w-[34%] px-10">
            <div>
              <button className="relative bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 font-medium text-[16px] transition-all hover:opacity-90 shadow-lg overflow-hidden group border border-transparent">
                {/* Subtle gradient overlay on top edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                
                {/* Star Icon - Four-pointed star */}
                <img src="/download.svg" alt="HalaPark in Action" className="w-5 h-5 text-white shrink-0" />
                
                {/* Button Text */}
                <span className="whitespace-nowrap text-white font-medium text-[14px]">HalaPark in Action</span>
              </button>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[56px] font-semibold mb-6">
              HalaPark in Action
            </h2>
            <p className="text-[16px] text-white mb-8 leading-relaxed">
              HalaPark works across public and private spaces to simplify parking, reduce congestion, and improve daily operations for everyone involved.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-[16px] transition-colors shadow-lg">
              See how HalaPark work
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center items-center w-[66%] h-[650px] overflow-hidden">
            <img 
              src="/image.png" 
              alt="HalaPark in Action" 
              className=" h-[800px] object-contain"
            />
          </div>
      </div>
    </section>
  );
}
