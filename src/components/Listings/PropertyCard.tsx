import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    type: string;
    beds?: number;
    baths: number;
    area: string;
    image: string;
    featured?: boolean;
    views?: number;
    posted?: string;
  };
  onFavorite?: (id: number) => void;
  isFavorited?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property, 
  onFavorite, 
  isFavorited = false 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1">
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
        <div className="absolute top-4 right-4 flex gap-2">
          {property.views && (
            <div className="flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
              <Eye className="w-3 h-3" />
              {property.views}
            </div>
          )}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onFavorite?.(property.id);
            }}
            className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'}`} />
          </button>
        </div>
        {property.featured && (
          <div className="absolute bottom-4 left-4">
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{property.location}</span>
          </div>
          <div className="text-2xl font-bold text-emerald-600">
            {property.price}
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-600 border-t pt-4">
          {property.beds ? (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.beds}</span>
            </div>
          ) : (
            <div></div>
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

        {property.posted && (
          <div className="mt-3 pt-3 border-t text-xs text-gray-500">
            Posted {property.posted}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;