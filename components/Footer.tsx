import React from 'react';
import Link from 'next/link';
// Assuming react-icons is installed for social media icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500">Ignite Fitness</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering your fitness journey with state-of-the-art facilities and expert trainers. Ignite your potential today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm">About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm">Services</Link></li>
            <li><Link href="/trainers" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm">Our Trainers</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-400">123 Fitness St, Gym City, GC 12345</li>
            <li className="text-gray-400">Email: info@ignitefitness.com</li>
            <li className="text-gray-400">Phone: (123) 456-7890</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/ignitefitness" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/ignitefitness" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/ignitefitness" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/company/ignitefitness" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
        &copy; {currentYear} Ignite Fitness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
