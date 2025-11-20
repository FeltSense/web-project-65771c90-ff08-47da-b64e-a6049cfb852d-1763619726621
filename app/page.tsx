export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar Placeholder */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm p-4 border-b border-gray-800">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">Ignite Fitness</a>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            <li><a href="#join" className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">Join Now</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 p-8 max-w-4xl">
            <h1 className="text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              Unleash Your Potential. <span className="text-red-500">Ignite Your Fitness.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Transform your body and mind with our expert trainers, cutting-edge facilities, and vibrant community.
            </p>
            <a href="#join" className="inline-block px-10 py-4 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg">
              Start Your Journey
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold mb-12 text-white">
              Why <span className="text-red-500">Choose Us?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow duration-300">
                <div className="text-red-500 text-6xl mb-4">💪</div>
                <h3 className="text-3xl font-bold mb-4 text-white">Expert Trainers</h3>
                <p className="text-gray-400">Our certified trainers are dedicated to guiding you through personalized workout plans.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow duration-300">
                <div className="text-red-500 text-6xl mb-4">🏋️</div>
                <h3 className="text-3xl font-bold mb-4 text-white">State-of-the-Art Facilities</h3>
                <p className="text-gray-400">Access to the latest equipment and a clean, motivating environment.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow duration-300">
                <div className="text-red-500 text-6xl mb-4">🤝</div>
                <h3 className="text-3xl font-bold mb-4 text-white">Supportive Community</h3>
                <p className="text-gray-400">Join a community that inspires and challenges you to be your best.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-950">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold mb-12 text-white">
              Our <span className="text-red-500">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center hover:shadow-red-500/30 transition-shadow duration-300">
                <img src="/images/personal-training.jpg" alt="Personal Training" className="w-full h-48 object-cover rounded-md mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-white">Personal Training</h3>
                <p className="text-gray-400">One-on-one sessions tailored to your goals.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center hover:shadow-red-500/30 transition-shadow duration-300">
                <img src="/images/group-classes.jpg" alt="Group Classes" className="w-full h-48 object-cover rounded-md mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-white">Group Classes</h3>
                <p className="text-gray-400">High-energy classes for all fitness levels.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center hover:shadow-red-500/30 transition-shadow duration-300">
                <img src="/images/nutrition-coaching.jpg" alt="Nutrition Coaching" className="w-full h-48 object-cover rounded-md mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-white">Nutrition Coaching</h3>
                <p className="text-gray-400">Guidance for a balanced diet to fuel your progress.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="contact" className="py-24 bg-red-600 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-6 text-white">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-10 text-red-100">
              Join Ignite Fitness today and take the first step towards a stronger, healthier you.
            </p>
            <a href="#join" className="inline-block px-12 py-5 bg-white text-red-600 text-xl font-bold rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-xl">
              Become a Member
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Ignite Fitness</h4>
              <p>Your journey to a healthier lifestyle starts here.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
              <ul>
                <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">Our Services</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
              <p>123 Fitness Ave, Gym City, GC 12345</p>
              <p>Email: info@ignitefitness.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p>&copy; {new Date().getFullYear()} Ignite Fitness. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-red-500 transition-colors">Facebook</a>
              <a href="#" className="hover:text-red-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-red-500 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}