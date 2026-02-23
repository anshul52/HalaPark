export default function HeroSection() {
  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 h-screen overflow-hidden font-sans bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/imgi_1_LTzUgqhBMU0fYD8l2vHeGvu8dQI.jpg)",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            All In One Parking
            <br />
            <span className="text-white">Management Solution</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
