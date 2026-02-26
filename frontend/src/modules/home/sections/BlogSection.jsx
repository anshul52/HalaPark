export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: "CRM",
      title: "How Customer Relationships Will Evolve in 2024",
      description:
        "Not all CRMs are built the same. Learn what really based on your business size & needs.",
      image: "/imgi_180_1kzCxED38jsjIKuhRBA6i4NjDGw.png",
    },
    {
      id: 2,
      category: "Productivity",
      title: "7 Sales Tasks You Should Automate Today",
      description:
        "Stop wasting hours on manual follow-ups. Learn the workflows that top teams run on autopilot.",
      image: "/imgi_183_duJmg8i6Rpv49UWkPseSAewzew.png",
    },
    {
      id: 3,
      category: "Growth",
      title: "How to Scale from 10 to 10,000 Contacts",
      description:
        "A playbook for turning early traction into long-term customer relationships without chaos.",
      image: "/imgi_188_WnsbD4yww7gkGwGcZ8z0c6oSc9U.png",
    },
  ];

  return (
    <section
      id="blog"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white font-sans px-4 sm:px-6 lg:px-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center w-fit mx-auto gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
            <img
              src="/download(1).svg"
              alt="BLOG AND INSIGHTS"
              className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0"
            />
            <p className="text-xs sm:text-sm lg:text-[14px] text-black max-w-2xl mx-auto">
              BLOG AND INSIGHTS
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold text-gray-900 mb-3 sm:mb-4">
            Insights & Updates
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Insights and guides for smarter parking decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-[#F5F6F8] p-1.5 sm:p-2 rounded-lg overflow-hidden transition-shadow"
            >
              <div className="h-48 sm:h-56 md:h-64 lg:h-68 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-125 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <span
                    className={`inline-block text-xs sm:text-sm lg:text-[16px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-3xl ${
                      post.id === 3
                        ? "text-[#805CFF] bg-[#EBF1FF]"
                        : post.id === 2
                        ? "text-[#0454FF] bg-[#EBF1FF]"
                        : "bg-[#FFF2F2] text-[#FF6262]"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="w-1 h-1 bg-black rounded-full"></span>
                  <span className="text-xs sm:text-sm lg:text-[16px] text-black">
                    6 min
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-6 sm:leading-7 hover:text-blue-600 transition-colors duration-300 cursor-pointer mb-2 line-clamp-0">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base lg:text-[16px] leading-5 sm:leading-6">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
