import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  rating: number;
}

const testimonialsData: TestimonialProps[] = [
  {
    quote: "Ignite Fitness has transformed my life! The trainers are incredibly supportive, and the facilities are top-notch. I've never felt stronger or more motivated.",
    author: "Sarah J.",
    title: "Dedicated Member",
    rating: 5,
  },
  {
    quote: "I was hesitant to join a gym, but Ignite Fitness made me feel welcome from day one. The personalized workout plans helped me achieve my goals faster than I expected.",
    author: "Mark L.",
    title: "New Achiever",
    rating: 5,
  },
  {
    quote: "The group classes are fantastic! So much energy and variety. Ignite Fitness isn't just a gym; it's a community that pushes you to be your best.",
    author: "Emily R.",\    title: "Class Enthusiast",
    rating: 4,
  },
  {
    quote: "As a busy professional, I appreciate the flexible hours and the efficient, results-driven training. Ignite Fitness is an invaluable part of my wellness routine.",
    author: "David K.",\
    title: "Executive Fitness",\
    rating: 5,\
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, title, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-gray-700 italic text-lg mb-4 leading-relaxed">"{quote}"</p>
      <div>
        <StarRating rating={rating} />
        <p className="font-semibold text-lg text-gray-900 mt-3">{author}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 to-purple-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12 sm:mb-16 tracking-tight">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
