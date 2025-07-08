import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, Database, BookOpen, Sun, Thermometer, Droplets } from 'lucide-react'

const Home: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Plant Identification',
      description: 'Identify plants by uploading photos or describing their characteristics',
      path: '/identify',
      color: 'bg-florida-green'
    },
    {
      icon: Calendar,
      title: 'Garden Planner',
      description: 'Plan your Zone 10 garden with seasonal planting guides',
      path: '/planner',
      color: 'bg-florida-blue'
    },
    {
      icon: Database,
      title: 'Plant Database',
      description: 'Browse our comprehensive database of Zone 10 plants',
      path: '/database',
      color: 'bg-florida-orange'
    },
    {
      icon: BookOpen,
      title: 'Zone 10 Guide',
      description: 'Learn about Florida Zone 10 climate and gardening tips',
      path: '/zone10-guide',
      color: 'bg-florida-pink'
    }
  ]

  const zone10Info = [
    { icon: Sun, label: 'Sun Exposure', value: 'Full sun to partial shade' },
    { icon: Thermometer, label: 'Temperature Range', value: '30°F - 40°F minimum' },
    { icon: Droplets, label: 'Rainfall', value: '50-60 inches annually' }
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-florida-green mb-4">
          Welcome to Florida Zone 10
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your comprehensive guide to gardening in Florida's tropical climate. 
          Identify plants, plan your garden, and grow successfully in Zone 10.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/identify" className="btn-primary text-lg px-8 py-3">
            Start Identifying Plants
          </Link>
          <Link to="/zone10-guide" className="btn-secondary text-lg px-8 py-3">
            Learn About Zone 10
          </Link>
        </div>
      </div>

      {/* Zone 10 Climate Info */}
      <div className="card max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-florida-green mb-6 text-center">
          Zone 10 Climate Characteristics
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {zone10Info.map((info) => {
            const Icon = info.icon
            return (
              <div key={info.label} className="text-center p-4">
                <Icon className="h-12 w-12 text-florida-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">{info.label}</h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Link
              key={feature.title}
              to={feature.path}
              className="card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className={`${feature.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Link>
          )
        })}
      </div>

      {/* Quick Tips */}
      <div className="card max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-florida-green mb-6">
          Quick Zone 10 Gardening Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">🌱 Best Planting Times</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Vegetables: September - March</li>
              <li>• Annuals: October - April</li>
              <li>• Perennials: Year-round</li>
              <li>• Trees & Shrubs: June - September</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">💧 Watering Guidelines</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• New plants: Daily for 2-3 weeks</li>
              <li>• Established plants: 2-3 times per week</li>
              <li>• Drought-tolerant: Once per week</li>
              <li>• Adjust for rainfall</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 