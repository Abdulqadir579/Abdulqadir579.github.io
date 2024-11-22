import React from 'react';
import { LineChart, Shield, Briefcase, Globe, Target, Users, BadgeDollarSign, Gem } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Investment Strategy',
    description: 'Data-driven investment strategies tailored to your risk profile and goals.'
  },
  {
    icon: Shield,
    title: 'Wealth Protection',
    description: 'Comprehensive solutions to preserve and protect your wealth for generations.'
  },
  {
    icon: Target,
    title: 'Tax Optimization',
    description: 'Strategic tax planning to maximize your wealth retention and growth.'
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Access to exclusive international investment opportunities and markets.'
  }
];

const services = [
  {
    icon: Briefcase,
    title: 'Portfolio Management',
    price: 'Custom Pricing',
    features: [
      'Personalized investment strategy',
      'Regular portfolio rebalancing',
      'Risk management',
      'Performance reporting'
    ]
  },
  {
    icon: BadgeDollarSign,
    title: 'Wealth Planning',
    price: 'Custom Pricing',
    features: [
      'Estate planning',
      'Tax optimization',
      'Retirement planning',
      'Succession planning'
    ]
  },
  {
    icon: Users,
    title: 'Family Office',
    price: 'Custom Pricing',
    features: [
      'Multi-generational planning',
      'Family governance',
      'Consolidated reporting',
      'Legacy preservation'
    ]
  },
  {
    icon: Gem,
    title: 'Private Banking',
    price: 'Custom Pricing',
    features: [
      'Exclusive banking services',
      'Credit solutions',
      'Asset-based lending',
      'International banking'
    ]
  }
];

export default function Features() {
  return (
    <div id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Financial Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions and strategic guidance to help you achieve your financial objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 animate-float">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored financial solutions designed to meet your unique needs and objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 animate-float">
                <service.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-emerald-600 font-medium mb-4">{service.price}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}