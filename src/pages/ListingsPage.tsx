import { useState } from 'react';
import { Filter, Grid, List, Map } from 'lucide-react';
import FilterSidebar from '../components/Listings/FilterSidebar';
import PropertyCard from '../components/Listings/PropertyCard';

const ListingsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);

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
      featured: true,
      views: 245,
      posted: '2 days ago'
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
      views: 189,
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Commercial Plaza in Gulshan',
      location: 'Gulshan-e-Iqbal, Karachi',
      price: 'PKR 8.5 Crore',
      type: 'For Sale',
      beds: undefined,
      baths: 12,
      area: '5,000 sq ft',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      views: 156,
      posted: '3 days ago'
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
      views: 312,
      posted: '1 week ago'
    },
    {
      id: 5,
      title: 'Family House in North Nazimabad',
      location: 'North Nazimabad, Karachi',
      price: 'PKR 3.8 Crore',
      type: 'For Sale',
      beds: 4,
      baths: 4,
      area: '400 sq yd',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      views: 98,
      posted: '4 days ago'
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
      views: 234,
      posted: '5 days ago'
    }
  ];

  const handleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Listings</h1>
          <p className="text-gray-600">Discover your perfect property in Karachi</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FilterSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </button>
                  <div className="text-sm text-gray-600">
                    Showing {properties.length} of 1,240 properties
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm">
                    <option>Sort by: Latest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Area: Large to Small</option>
                    <option>Most Popular</option>
                  </select>

                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('map')}
                      className={`p-2 ${viewMode === 'map' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Map className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Grid */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onFavorite={handleFavorite}
                    isFavorited={favorites.includes(property.id)}
                  />
                ))}
              </div>
            )}

            {/* Property List View */}
            {viewMode === 'list' && (
              <div className="space-y-4">
                {properties.map((property) => (
                  <div key={property.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-64 h-48 flex-shrink-0">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                            <p className="text-gray-600 mb-2">{property.location}</p>
                            <div className="text-2xl font-bold text-emerald-600">{property.price}</div>
                          </div>
                          <button
                            onClick={() => handleFavorite(property.id)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <span className={`w-5 h-5 ${favorites.includes(property.id) ? 'text-red-500' : 'text-gray-400'}`}>
                              ❤
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center gap-6 text-gray-600 mb-4">
                          {property.beds && <span>{property.beds} Beds</span>}
                          <span>{property.baths} Baths</span>
                          <span>{property.area}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Posted {property.posted}</span>
                          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Map View Placeholder */}
            {viewMode === 'map' && (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Map View</h3>
                <p className="text-gray-600">Interactive map with property locations coming soon</p>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      page === 1 
                        ? 'bg-emerald-600 text-white' 
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;