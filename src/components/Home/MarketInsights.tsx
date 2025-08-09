import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Calendar, DollarSign } from 'lucide-react';

const MarketInsights = () => {
  const marketData = [
    {
      area: 'DHA',
      priceChange: '+12.5%',
      trend: 'up',
      avgPrice: '15.2 Lac/Marla',
      demand: 'High',
      color: 'emerald'
    },
    {
      area: 'Clifton',
      priceChange: '+8.3%',
      trend: 'up',
      avgPrice: '18.7 Lac/Marla',
      demand: 'Very High',
      color: 'blue'
    },
    {
      area: 'Gulshan',
      priceChange: '+5.2%',
      trend: 'up',
      avgPrice: '8.5 Lac/Marla',
      demand: 'Medium',
      color: 'purple'
    },
    {
      area: 'North Nazimabad',
      priceChange: '-2.1%',
      trend: 'down',
      avgPrice: '6.2 Lac/Marla',
      demand: 'Stable',
      color: 'orange'
    }
  ];

  const insights = [
    {
      icon: TrendingUp,
      title: 'Market Growth',
      value: '+15.8%',
      description: 'Year-over-year property value increase',
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Active Listings',
      value: '5,240',
      description: 'Properties currently available',
      color: 'text-blue-600'
    },
    {
      icon: Calendar,
      title: 'Average Days',
      value: '45',
      description: 'Time to sell/rent properties',
      color: 'text-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Transaction Volume',
      value: '₨2.8B',
      description: 'Monthly market activity',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Karachi Market Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time data and AI-powered analytics to help you make informed property decisions
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${insight.color} bg-opacity-10`}>
                  <insight.icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                <PieChart className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                <div className={`text-3xl font-bold ${insight.color}`}>
                  {insight.value}
                </div>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Area Performance */}
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Top Performing Areas
              </h3>
              <p className="text-gray-600">
                Real-time price movements and market demand analysis
              </p>
            </div>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:shadow-md transition-shadow border">
              View Full Report
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">{area.area}</h4>
                  <div className={`flex items-center ${
                    area.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {area.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="font-semibold text-sm">{area.priceChange}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Average Price</div>
                  <div className="text-lg font-bold text-gray-900">{area.avgPrice}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Demand:</span>
                    <span className={`text-sm font-medium ${
                      area.demand === 'Very High' ? 'text-red-600' :
                      area.demand === 'High' ? 'text-orange-600' :
                      area.demand === 'Medium' ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {area.demand}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Get Personalized Market Reports
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Receive detailed market analysis, price predictions, and investment recommendations tailored to your preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Subscribe to Reports
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium">
              Download Sample Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;