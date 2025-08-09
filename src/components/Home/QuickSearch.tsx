
import { Home, Building2, MapPin, Briefcase, Key, TrendingUp } from 'lucide-react';

const QuickSearch = () => {
  const categories = [
    {
      icon: Home,
      title: 'Houses',
      description: 'Find your perfect home',
      count: '1,250+ Properties',
      color: 'bg-blue-500',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Building2,
      title: 'Apartments',
      description: 'Modern living spaces',
      count: '850+ Properties',
      color: 'bg-emerald-500',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: MapPin,
      title: 'Plots',
      description: 'Build your dream',
      count: '600+ Properties',
      color: 'bg-purple-500',
      image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Briefcase,
      title: 'Commercial',
      description: 'Business properties',
      count: '400+ Properties',
      color: 'bg-orange-500',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Key,
      title: 'Rentals',
      description: 'Move in ready',
      count: '900+ Properties',
      color: 'bg-pink-500',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'New Projects',
      description: 'Latest developments',
      count: '120+ Projects',
      color: 'bg-indigo-500',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Property Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find exactly what you're looking for with our comprehensive property categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <div className={`${category.color} p-3 rounded-full shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-semibold text-lg">
                    {category.count}
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-emerald-600 transition-colors">
                    View All →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickSearch;