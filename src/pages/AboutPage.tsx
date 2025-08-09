
import { Users, Award, Target, TrendingUp, Shield, Star, Calendar, Building2 } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'EliteEstate was established with a vision to revolutionize real estate in Karachi'
    },
    {
      year: '2016',
      title: 'Digital Platform Launch',
      description: 'Launched our first online property portal, making property search accessible to everyone'
    },
    {
      year: '2018',
      title: '1000+ Properties Milestone',
      description: 'Successfully facilitated over 1000 property transactions across Karachi'
    },
    {
      year: '2020',
      title: 'AI Integration',
      description: 'Introduced AI-powered market analysis and property valuation tools'
    },
    {
      year: '2022',
      title: 'Market Leadership',
      description: 'Became the leading real estate platform in Karachi with 50+ team members'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Expanding to other major cities with advanced PropTech solutions'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in all our dealings, ensuring our clients have access to accurate information and honest advice.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from property listings to customer support and market analysis.',
      color: 'text-emerald-600 bg-emerald-100'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and AI to provide insights that help our clients make informed property decisions.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients are at the heart of everything we do. We tailor our services to meet their unique needs and preferences.',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const team = [
    {
      name: 'Ahmed Hassan',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: '15+ years in real estate development and investment'
    },
    {
      name: 'Sarah Khan',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Expert in property management and client relations'
    },
    {
      name: 'Muhammad Ali',
      role: 'Technology Director',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'AI and PropTech innovation specialist'
    },
    {
      name: 'Fatima Sheikh',
      role: 'Market Analyst',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Real estate market research and investment analysis'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Excellence', icon: Calendar },
    { number: '5,000+', label: 'Properties Sold', icon: Building2 },
    { number: '10,000+', label: 'Happy Clients', icon: Users },
    { number: '₨50B+', label: 'Total Transactions', icon: TrendingUp }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-black/60"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-emerald-400">EliteEstate</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Leading Karachi's real estate transformation with AI-powered insights and exceptional service since 2014
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize the real estate experience in Pakistan by providing transparent, 
                  technology-driven solutions that empower buyers, sellers, and investors to make 
                  informed property decisions with confidence.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become Pakistan's most trusted real estate platform, setting new standards 
                  for innovation, transparency, and customer service while contributing to the 
                  sustainable development of our cities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern office building"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`p-4 rounded-xl ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade of growth, innovation, and success in transforming Karachi's real estate landscape
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-emerald-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full border-4 border-white shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional real estate services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-emerald-600 font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-emerald-100">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experienced team help you navigate Karachi's real estate market with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Browse Properties
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors font-medium">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;