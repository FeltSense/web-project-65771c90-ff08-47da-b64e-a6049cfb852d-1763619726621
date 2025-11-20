import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-800 to-gray-950 opacity-90 z-0"></div>

      {/* Dynamic background element for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="20" r="15" fill="rgba(251, 146, 60, 0.1)" />
          <circle cx="80" cy="30" r="25" fill="rgba(251, 146, 60, 0.1)" />
          <circle cx="50" cy="70" r="10" fill="rgba(251, 146, 60, 0.1)" />
          <rect x="10" y="50" width="10" height="10" fill="rgba(251, 146, 60, 0.1)" transform="rotate(45 15 55)" />
          <polygon points="60,10 70,20 60,30 50,20" fill="rgba(251, 146, 60, 0.1)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight tracking-tighter text-shadow-lg drop-shadow-2xl">
          Ignite Your <span className="text-orange-500">Potential</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light leading-relaxed">
          Unleash your inner strength, transform your body, and achieve peak performance with our expert-led programs and state-of-the-art facilities.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-xl">
            Start Your Journey
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-xl">
            Explore Classes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;