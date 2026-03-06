export default function HalaParkInAction() {
  return (
    <section className="bg-[#000000] font-sans py-10 sm:py-12 md:py-16 lg:py-0">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[80vh]">
        {/* Left Side - Content */}
        <div className="text-white w-full lg:w-[40%] px-4 sm:px-6 md:px-8 lg:pl-30 lg:pr-0 mb-8 sm:mb-10 md:mb-12 lg:mb-0">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium mb-4 sm:mb-5 lg:mb-6 leading-tight lg:leading-12">
              Your Parking Space Could Be Working Right Now
            </h2>
            <p className="text-sm sm:text-[15px] lg:text-[16px] font-light text-white/40 mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
              Thousands of property owners across the UAE are earning from bays
              that used to sit empty. It takes under five minutes to list. Join
              them.
            </p>
            <div className="bg-black py-2 sm:py-4 lg:py-6">
              <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-start gap-5 sm:gap-8 lg:gap-12">
                {/* <!-- App Store --> */}
                <div className="flex items-center gap-3 sm:gap-4 cursor-pointer">
                  <img
                    src="image--04.png"
                    alt="App Store"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl"
                  />

                  <div className="text-white leading-tight">
                    <p className="text-sm font-light">Download Now On</p>
                    <p className="text-xl sm:text-2xl font-medium">App Store</p>
                  </div>
                </div>

                {/* <!-- Play Store --> */}
                <div className="flex items-center gap-3 sm:gap-4 cursor-pointer">
                  <img
                    src="image 4.png"
                    alt="Play Store"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl"
                  />

                  <div className="text-white leading-tight">
                    <p className="text-sm font-light">Download Now On</p>
                    <p className="text-xl sm:text-2xl font-medium">
                      Play Store
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className="relative flex justify-center items-center w-full lg:w-[60%] h-[340px] sm:h-[420px] md:h-[520px] lg:h-full overflow-hidden"
          // style={}
        >
          <div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full mt-2 sm:mt-4 lg:mt-0 h-full"
          >
            <div className="inset-0 w-full h-full flex items-center justify-center relative">
              {/* Map Background */}
              <div className="relative w-full h-full">
                <img
                  src="/Frame567890-1171276930.png"
                  alt="HalaPark"
                  className="
                    h-full
                    w-full 
                    max-lg:w-full 
                    max-lg:h-full 
                    object-cover
                  "
                />
              </div>

              {/* Phone */}
              <div
                className="
                  absolute 
                  z-20
                  rounded-[2.5rem] h-full
                "
              >
                <img
                  src="/Frame78901171276870.png"
                  alt="HalaPark"
                  className="
                    w-auto
                    h-[82%]
                    sm:h-[88%]
                    lg:h-full
                    object-contain
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
