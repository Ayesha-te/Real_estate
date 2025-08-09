import { useState } from 'react';
import { Search, MapPin, Home, Building, Calendar, DollarSign } from 'lucide-react';

const HeroSection = () => {
  const [searchType, setSearchType] = useState('buy');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 pt-16">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
            Find Your <br />
            <span className="text-emerald-400">Dream Property</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Discover premium residential and commercial properties with AI-powered market insights
          </p>
        </div>

        {/* Search Widget */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          {/* Search Type Toggle */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { key: 'buy', label: 'Buy', icon: Home },
              { key: 'rent', label: 'Rent', icon: Calendar },
              { key: 'commercial', label: 'Commercial', icon: Building },
              { key: 'projects', label: 'New Projects', icon: Search }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setSearchType(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  searchType === key
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white"
              >
                <option value="">Select Location</option>
                <option value="clifton">Clifton</option>
                <option value="dha">DHA</option>
                <option value="gulshan">Gulshan-e-Iqbal</option>
                <option value="nazimabad">Nazimabad</option>
                <option value="north-nazimabad">North Nazimabad</option>
                <option value="malir">Malir</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white"
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="plot">Plot</option>
                <option value="commercial">Commercial</option>
                <option value="office">Office</option>
              </select>
            </div>

            {/* Budget */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white"
              >
                <option value="">Budget Range</option>
                <option value="0-50">Up to 50 Lac</option>
                <option value="50-100">50 Lac - 1 Crore</option>
                <option value="100-200">1 Crore - 2 Crore</option>
                <option value="200+">2 Crore+</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2 shadow-lg">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5,000+</div>
              <div className="text-sm text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2,500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">New Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;