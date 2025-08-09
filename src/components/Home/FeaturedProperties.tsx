import React from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in DHA Phase 8',
      location: 'DHA Phase 8, Karachi',
      price: 'PKR 5.5 Crore',
      type: 'For Sale',
      beds: 5,
      baths: 6,
      area: '500 sq yd',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Modern Apartment in Clifton',
      location: 'Clifton Block 2, Karachi',
      price: 'PKR 2.8 Crore',
      type: 'For Sale',
      beds: 3,
      baths: 3,
      area: '1,800 sq ft',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Commercial Plaza in Gulshan',
      location: 'Gulshan-e-Iqbal, Karachi',
      price: 'PKR 8.5 Crore',
      type: 'For Sale',
      beds: null,
      baths: 12,
      area: '5,000 sq ft',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 4,
      title: 'Penthouse with Sea View',
      location: 'Clifton Block 9, Karachi',
      price: 'PKR 4.2 Crore',
      type: 'For Sale',
      beds: 4,
      baths: 4,
      area: '2,500 sq ft',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 5,
      title: 'Elegant Bungalow in North Nazimabad',
      location: 'North Nazimabad, Karachi',
      price: 'PKR 3.8 Crore',
      type: 'For Sale',
      beds: 4,
      baths: 4,
      area: '400 sq yd',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 6,
      title: 'Studio Apartment for Rent',
      location: 'Zamzama, Karachi',
      price: 'PKR 85,000/month',
      type: 'For Rent',
      beds: 1,
      baths: 1,
      area: '650 sq ft',
      image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked premium properties that offer exceptional value and prime locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    property.type === 'For Sale' 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                {property.featured && (
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-gold-500 text-white text-xs font-medium rounded">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">
                    {property.price}
                  </div>
                </div>

                <div className="flex items-center justify-between text-gray-600 border-t pt-4">
                  {property.beds && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.beds}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;