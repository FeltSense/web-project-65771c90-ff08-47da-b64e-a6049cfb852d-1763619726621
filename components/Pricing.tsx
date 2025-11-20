import React from 'react';

interface PricingFeatureProps {
  children: React.ReactNode;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ children }) => (
  <li className="flex items-center space-x-3">
    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span>{children}</span>
  </li>
);

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, period, features, isPopular }) => (
  <div className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ${isPopular ? 'ring-4 ring-blue-600' : ''} xl:p-8 dark:bg-gray-800 dark:text-white dark:border-gray-700`}>
    <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Perfect for individuals and small teams.</p>
    <div className="flex justify-center items-baseline my-8">
      <span className="mr-2 text-5xl font-extrabold">{price}</span>
      <span className="text-gray-500 dark:text-gray-400">/{period}</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      {features.map((feature, index) => (
        <PricingFeature key={index}>{feature}</PricingFeature>
      ))}
    </ul>
    <a
      href="#"
      className={`text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900 ${isPopular ? 'scale-105' : ''}`}
    >
      Sign Up
    </a>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Simple, Transparent Pricing for Ignite Fitness
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Choose the plan that fits your fitness journey. No hidden fees, just pure dedication to your health.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PricingCard
            title="Basic"
            price="$29"
            period="month"
            features={[
              "Access to all basic gym equipment",
              "Standard fitness classes",
              "Personalized workout plan (digital)",
              "Community access"
            ]}
          />
          <PricingCard
            title="Pro"
            price="$49"
            period="month"
            features={[
              "All Basic features",
              "Access to advanced gym equipment",
              "Premium fitness classes",
              "1 personal training session/month",
              "Nutrition guide"
            ]}
            isPopular
          />
          <PricingCard
            title="Elite"
            price="$79"
            period="month"
            features={[
              "All Pro features",
              "Unlimited personal training sessions",
              "Custom meal plans by a nutritionist",
              "Priority booking for classes",
              "Access to exclusive workshops & events"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;