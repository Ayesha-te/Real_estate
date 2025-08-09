import React from 'react';
import { Star, TrendingUp, MapPin, Calendar, DollarSign } from 'lucide-react';

const NewProjectsHighlight = () => {
  const projects = [
    {
      id: 1,
      title: 'Marina Heights',
      developer: 'Elite Developers',
      location: 'Clifton Block 1, Karachi',
      completionDate: 'Dec 2025',
      priceRange: '1.5 - 4.2 Crore',
      investmentScore: 9.2,
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      units: '2 & 3 BHK Apartments',
      features: ['Sea View', 'Smart Home', 'Gym & Pool', '24/7 Security']
    },
    {
      id: 2,
      title: 'Green Valley Residences',
      developer: 'Metro Builders',
      location: 'DHA Phase 7, Karachi',
      completionDate: 'Jun 2026',
      priceRange: '2.8 - 6.5 Crore',
      investmentScore: 8.7,
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      units: 'Villas & Townhouses',
      features: ['Private Garden', 'Club House', 'Kids Area', 'Shopping Complex']
    },
    {
      id: 3,
      title: 'Skyline Towers',
      developer: 'Prime Properties',
      location: 'Gulshan-e-Iqbal, Karachi',
      completionDate: 'Mar 2025',
      priceRange: '95 Lac - 2.8 Crore',
      investmentScore: 8.4,
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      units: '1, 2 & 3 BHK Apartments',
      features: ['Metro Access', 'Co-working Space', 'Rooftop Garden', 'Solar Power']
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-600 bg-green-100';
    if (score >= 8) return 'text-blue-600 bg-blue-100';
    return 'text-orange-600 bg-orange-100';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            New Projects in <span className="text-emerald-600">Karachi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover upcoming developments with AI-powered investment insights
          </p>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium">AI Investment Scoring</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    New Launch
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 ${getScoreColor(project.investmentScore)}`}>
                    <Star className="w-4 h-4" />
                    {project.investmentScore}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm">by {project.developer}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Completion: {project.completionDate}</span>
                  </div>
                  <div className="flex items-center text-emerald-600 font-semibold">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">PKR {project.priceRange}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{project.units}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                  View Details & Analysis
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium mr-4">
            Explore All New Projects
          </button>
          <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-200 font-medium">
            AI Market Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewProjectsHighlight;