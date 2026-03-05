export default function HalaParkInAction() {
  return (
    <section className="bg-[#000000] font-sans py-8 sm:py-12 md:py-16 lg:py-0">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center h-[80vh]">
        {/* Left Side - Content */}
        <div className="text-white w-full lg:w-[40%] pl-4 sm:pl-6 md:pl-8 lg:pl-30 mb-8 sm:mb-10 md:mb-12 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium mb-4 sm:mb-5 lg:mb-6 leading-12">
            Park Smarter with the HalaPark App
          </h2>
          <p className="text-sm sm:text-[15px] lg:text-[16px] font-light text-white/40 mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
            Replace multiple broken tools with Ramp, the only platform designed
            to make your finance team faster—and happier.
          </p>
          <div className="bg-black py-6">
            <div className="max-w-4xl mx-auto flex items-center justify-start gap-12">
              {/* <!-- App Store --> */}
              <div className="flex items-center gap-4 cursor-pointer">
                <img
                  src="image--04.png"
                  alt="App Store"
                  className="w-14 h-14 rounded-2xl"
                />

                <div className="text-white leading-tight">
                  <p className="text-sm font-light">Download Now On</p>
                  <p className="text-2xl font-medium">App Store</p>
                </div>
              </div>

              {/* <!-- Play Store --> */}
              <div className="flex items-center gap-4 cursor-pointer">
                <img
                  src="image 4.png"
                  alt="Play Store"
                  className="w-14 h-14 rounded-2xl"
                />

                <div className="text-white leading-tight">
                  <p className="text-sm font-light">Download Now On</p>
                  <p className="text-2xl font-medium">Play Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className="relative flex justify-center items-center w-full lg:w-[60%] h-full overflow-hidden"
          // style={}
        >
          <div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full mt-10 sm:mt-0 h-full"
          >
            <div className="inset-0 w-full h-full flex items-center justify-center relative">
              {/* Map Background */}
              <div className="relative w-full h-full">
                <img
                  src="/Frame9991171276918.png"
                  alt="HalaPark"
                  className="
                    h-full
                    w-230 
                    max-lg:w-full 
                    max-lg:h-full 
                    object-cover
                    opacity-10
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
                    sm:w-auto
                    sm:h-full
                    w-50
                    h-55
                    object-cover
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
