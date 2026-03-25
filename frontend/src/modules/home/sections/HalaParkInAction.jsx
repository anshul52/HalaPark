export default function HalaParkInAction() {
  return (
    <section className="bg-[#ffffff] font-sans py-10 sm:py-12 md:py-16 lg:py-0">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[80vh]">
        {/* Left Side - Content */}
        <div className="text-white w-full lg:w-[40%] px-4 sm:px-6 md:px-8 lg:pl-30 lg:pr-0 mb-8 sm:mb-10 md:mb-12 lg:mb-0">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-[48px] font-medium mb-4 sm:mb-5 lg:mb-6 leading-tight lg:leading-12">
              Ready for app-store links, QR, and social proof
            </h2>
            <p className="text-sm sm:text-[15px] lg:text-[16px] font-light text-black/70 mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
              Thousands of property owners across the UAE are earning from bays
              that used to sit empty. It takes under five minutes to list. Join
              them.
            </p>
            <div className="text-black py-2 sm:py-4 lg:py-6">
              <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-start gap-5 sm:gap-8 lg:gap-12">
                {/* <!-- App Store --> */}
                <div className="flex items-center gap-3 sm:gap-4 cursor-pointer bg-gray-100/50 p-4 rounded-2xl">
                  <img
                    src="image--04.png"
                    alt="App Store"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl"
                  />

                  <div className="text-black leading-tight">
                    <p className="text-sm font-light">Download Now On</p>
                    <p className="text-xl sm:text-2xl font-medium">App Store</p>
                  </div>
                </div>

                {/* <!-- Play Store --> */}
                <div className="flex items-center gap-3 sm:gap-4 cursor-pointer bg-gray-100/50 p-4 rounded-2xl">
                  <img
                    src="image 4.png"
                    alt="Play Store"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl"
                  />

                  <div className="text-black leading-tight">
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
        <div className="relative flex justify-center items-center w-full lg:w-[60%] h-[340px] sm:h-[420px] md:h-[520px] lg:h-full overflow-hidden">
          <div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full mt-2 sm:mt-4 lg:mt-0 h-full"
          >
            <div className="inset-0 w-full h-full flex items-center justify-center relative">
              <div className="absolute left-1/2 top-1/2 z-0 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.5)_0%,_rgba(96,165,250,0.3)_35%,_rgba(191,219,254,0.16)_60%,_transparent_100%)] blur-3xl" />
              {/* Phone */}
              <div
                className="
                  relative
                  z-20
                  flex
                  h-full
                  items-center
                  justify-center
                  rounded-[3.5rem]
                  overflow-hidden
                "
              >
                <img
                  src="/Frame78901171276870.png"
                  alt="HalaPark"
                  className="
                    w-auto
                    h-[82%]
                    sm:h-[78%]
                    lg:h-[70%]
                    object-contain
                    rounded-[3.5rem]
                    
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
