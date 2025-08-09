import React from 'react';
import { Shield, Star, Zap, Users, Award, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'Every listing is thoroughly verified for authenticity and legal compliance',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Star,
      title: 'Expert Consultation',
      description: 'Get personalized advice from our experienced real estate professionals',
      color: 'text-emerald-600 bg-emerald-100'
    },
    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Make informed decisions with our advanced market analysis and predictions',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Users,
      title: '10,000+ Happy Clients',
      description: 'Join thousands of satisfied customers who found their dream properties',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized as the leading real estate platform in Karachi',
      color: 'text-pink-600 bg-pink-100'
    },
    {
      icon: TrendingUp,
      title: 'Market Leadership',
      description: 'Access to the largest inventory of premium properties in the city',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose EliteEstate?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best real estate experience with cutting-edge technology and personalized service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Track Record</h3>
            <p className="text-xl text-emerald-100">Numbers that speak for our excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years of Excellence' },
              { number: '5,000+', label: 'Properties Sold' },
              { number: '10,000+', label: 'Happy Customers' },
              { number: '₨50B+', label: 'Total Transactions' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;