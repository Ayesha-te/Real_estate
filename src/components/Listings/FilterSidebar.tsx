import React from 'react';
import { Filter, X, MapPin, Home, DollarSign, Square } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto
        w-80 bg-white shadow-2xl lg:shadow-none
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        transition-transform duration-300 ease-in-out
        z-50 lg:z-auto overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden lg:block mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </h2>
          </div>

          {/* Property Type */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Home className="w-4 h-4" />
              Property Type
            </h3>
            <div className="space-y-2">
              {[
                'All Types',
                'Houses',
                'Apartments',
                'Plots',
                'Commercial',
                'Office'
              ].map((type, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </h3>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
              <option>All Areas</option>
              <option>Clifton</option>
              <option>DHA</option>
              <option>Gulshan-e-Iqbal</option>
              <option>Nazimabad</option>
              <option>North Nazimabad</option>
              <option>Malir</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Price Range
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min Price"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                {[
                  'Under 50 Lac',
                  '50 Lac - 1 Crore',
                  '1 - 2 Crore',
                  '2 - 5 Crore',
                  '5 Crore+'
                ].map((range, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Area Size */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Square className="w-4 h-4" />
              Area Size
            </h3>
            <div className="space-y-2">
              {[
                'Under 1000 sq ft',
                '1000 - 2000 sq ft',
                '2000 - 5000 sq ft',
                '5000+ sq ft'
              ].map((area, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{area}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Bedrooms</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, '6+'].map((bed, index) => (
                <button
                  key={index}
                  className="p-2 border border-gray-300 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 text-sm font-medium"
                >
                  {bed}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
            <div className="space-y-2">
              {[
                'Furnished',
                'Parking',
                'Garden',
                'Swimming Pool',
                'Gym',
                'Security',
                'Elevator',
                'Balcony'
              ].map((feature, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6 border-t">
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Apply Filters
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;