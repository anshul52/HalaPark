export default function TrustedUsers() {
  // Avatar positions - scattered around the central text in organic arrangement
  const avatarPositions = [
    { top: '5%', left: '10%', size: 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24', image: '/imgi_105_cllTWXdcEdBHC7srBdSgfwmuDwE.jpg' },
    { top: '8%', left: '50%', size: 'w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20', image: '/imgi_114_jrKxnhujFruOStY7hW7O5YxmU.jpg' },
    { top: '5%', right: '10%', size: 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24', image: '/imgi_105_cllTWXdcEdBHC7srBdSgfwmuDwE.jpg' },
    { top: '50%', left: '5%', size: 'w-18 h-18 md:w-22 md:h-22 lg:w-24 lg:h-24', image: '/imgi_105_cllTWXdcEdBHC7srBdSgfwmuDwE.jpg' },
    { bottom: '10%', left: '15%', size: 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24', image: '/imgi_105_cllTWXdcEdBHC7srBdSgfwmuDwE.jpg' },
    { bottom: '8%', left: '50%', size: 'w-18 h-18 md:w-22 md:h-22 lg:w-24 lg:h-24', image: '/imgi_105_cllTWXdcEdBHC7srBdSgfwmuDwE.jpg' },
    { bottom: '10%', right: '10%', size: 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24', image: '/imgi_105_cllTWXdcEdBHC7srBdSgfwmuDwE.jpg' },
  ];

  // Avatar background colors matching the design
  const avatarStyles = [
    'bg-gray-300', // Light gray
    'bg-blue-200', // Light blue
    'bg-blue-200', // Light blue
    'bg-gray-200', // Light gray
    'bg-green-200', // Light green
    'bg-blue-200', // Light blue
    'bg-gray-200', // Light gray
  ];

  return (
    <section className="py-40  bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-100 flex items-center justify-center">
          {/* Scattered User Avatars - Organic Arrangement */}
          {avatarPositions.map((position, index) => (
            <div
              key={index}
              className={`absolute ${position.size} ${avatarStyles[index]} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10 border-2 border-white`}
              style={{
                ...(position.top && { top: position.top }),
                ...(position.bottom && { bottom: position.bottom }),
                ...(position.left && { left: position.left }),
                ...(position.right && { right: position.right }),
              }}
            >
              {/* Avatar image */}
              <img 
                src={position.image} 
                alt={`User avatar ${index + 1}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ))}

          {/* Central Text Block */}
          <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#292929] mb-6 leading-17">
              Trusted by 50,000+
              <br />
              <span className="inline-block ml-4 md:ml-8 lg:ml-12">Users</span>
            </h2>
            <p className="text-base  text-[#828282] max-w-2xl mx-auto leading-relaxed">
              Join the growing community of Payer trusted <br /> for its reliability and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
