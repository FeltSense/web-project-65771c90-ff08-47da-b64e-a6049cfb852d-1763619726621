import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏋️‍♂️',
      title: 'Personal Training',
      description: 'Achieve your fitness goals with customized workout plans and one-on-one coaching to maximize your potential.',
    },
    {
      icon: '💪',
      title: 'Group Classes',
      description: 'Energizing group sessions including HIIT, spin, and strength training for all fitness levels.',
    },
    {
      icon: '🥗',
      title: 'Nutrition Plans',
      description: 'Expert-designed meal plans and dietary advice to complement your fitness journey and optimize results.',
    },
    {
      icon: '🧘‍♀️',
      title: 'Yoga & Pilates',
      description: 'Improve flexibility, strength, and mental well-being with our diverse range of calming and invigorating classes.',
    },
    {
      icon: '🏃‍♀️',
      title: 'Running Coaching',
      description: 'Enhance your running technique, endurance, and speed with personalized coaching and training programs.',
    },
    {
      icon: '🏊‍♂️',
      title: 'Swim Training',
      description: 'From beginner lessons to advanced stroke correction, dive into better fitness with our expert instructors.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-400">Our Offerings</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Transform Your Fitness Journey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            At Ignite Fitness, we provide a diverse range of services designed to help you achieve optimal health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-gray-700">
              <div className="flex-shrink-0 mb-4">
                <p className="text-6xl">{service.icon}</p>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
