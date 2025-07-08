import React, { useState } from 'react'
import { Calendar, Sun, CloudRain, Thermometer, Seedling, Flower, Tree } from 'lucide-react'
import CalendarComponent from '../components/Calendar'

interface PlantingGuide {
  season: string
  vegetables: string[]
  flowers: string[]
  herbs: string[]
  fruits: string[]
}

const GardenPlanner: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState('fall')
  const [selectedCategory, setSelectedCategory] = useState('vegetables')
  const [showCalendar, setShowCalendar] = useState(false)

  const seasons = [
    { id: 'spring', name: 'Spring', icon: Flower },
    { id: 'summer', name: 'Summer', icon: Sun },
    { id: 'fall', name: 'Fall', icon: CloudRain },
    { id: 'winter', name: 'Winter', icon: Thermometer }
  ]

  const categories = [
    { id: 'vegetables', name: 'Vegetables', icon: Seedling },
    { id: 'flowers', name: 'Flowers', icon: Flower },
    { id: 'herbs', name: 'Herbs', icon: Seedling },
    { id: 'fruits', name: 'Fruits', icon: Tree }
  ]

  const plantingGuides: Record<string, PlantingGuide> = {
    spring: {
      season: 'Spring',
      vegetables: ['Tomatoes', 'Peppers', 'Cucumbers', 'Squash', 'Beans', 'Corn'],
      flowers: ['Marigolds', 'Zinnias', 'Sunflowers', 'Cosmos', 'Petunias'],
      herbs: ['Basil', 'Cilantro', 'Dill', 'Parsley', 'Mint'],
      fruits: ['Strawberries', 'Blueberries', 'Citrus trees']
    },
    summer: {
      season: 'Summer',
      vegetables: ['Okra', 'Southern Peas', 'Sweet Potatoes', 'Malabar Spinach'],
      flowers: ['Portulaca', 'Vinca', 'Lantana', 'Pentas', 'Salvia'],
      herbs: ['Rosemary', 'Thyme', 'Oregano', 'Sage'],
      fruits: ['Mangoes', 'Avocados', 'Guavas', 'Lychee']
    },
    fall: {
      season: 'Fall',
      vegetables: ['Lettuce', 'Spinach', 'Kale', 'Broccoli', 'Cauliflower', 'Carrots'],
      flowers: ['Pansies', 'Snapdragons', 'Calendula', 'Alyssum'],
      herbs: ['Cilantro', 'Dill', 'Parsley', 'Chives'],
      fruits: ['Strawberries', 'Citrus fruits']
    },
    winter: {
      season: 'Winter',
      vegetables: ['Collards', 'Mustard Greens', 'Turnips', 'Radishes', 'Onions'],
      flowers: ['Pansies', 'Violas', 'Snapdragons', 'Dianthus'],
      herbs: ['Rosemary', 'Thyme', 'Sage', 'Oregano'],
      fruits: ['Citrus fruits', 'Strawberries']
    }
  }

  const currentGuide = plantingGuides[selectedSeason]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-florida-green mb-4">
          Zone 10 Garden Planner
        </h1>
        <p className="text-gray-600">
          Plan your garden with seasonal planting guides, moon phases, and farming almanac wisdom
        </p>
      </div>

      {/* Calendar Toggle */}
      <div className="text-center">
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="btn-primary text-lg px-8 py-3"
        >
          <Calendar className="h-5 w-5 inline mr-2" />
          {showCalendar ? 'Hide Calendar' : 'Show Planting Calendar'}
        </button>
      </div>

      {/* Calendar Component */}
      {showCalendar && (
        <div className="card">
          <CalendarComponent />
        </div>
      )}

      {/* Season Selector */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Season</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {seasons.map((season) => {
            const Icon = season.icon
            return (
              <button
                key={season.id}
                onClick={() => setSelectedSeason(season.id)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedSeason === season.id
                    ? 'border-florida-green bg-green-50 text-florida-green'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="h-8 w-8 mx-auto mb-2" />
                <span className="font-medium">{season.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Plant Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-florida-green text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Planting Guide */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="h-6 w-6 text-florida-green" />
          <h2 className="text-xl font-semibold text-gray-800">
            {currentGuide.season} Planting Guide
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Selected Category Plants */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
              {selectedCategory} to Plant in {currentGuide.season}
            </h3>
            <div className="space-y-3">
              {currentGuide[selectedCategory as keyof PlantingGuide].map((plant, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-3 h-3 bg-florida-green rounded-full"></div>
                  <span className="font-medium text-gray-800">{plant}</span>
                </div>
              ))}
            </div>
          </div>

          {/* All Categories Overview */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">All Categories</h3>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id}>
                  <h4 className="font-medium text-gray-700 mb-2 capitalize">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentGuide[category.id as keyof PlantingGuide].slice(0, 3).map((plant, index) => (
                      <span
                        key={index}
                        className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {plant}
                      </span>
                    ))}
                    {currentGuide[category.id as keyof PlantingGuide].length > 3 && (
                      <span className="text-sm text-gray-500">
                        +{currentGuide[category.id as keyof PlantingGuide].length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Moon Phase Tips */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🌙 Moon Phase Gardening Tips</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Waxing Moon (New to Full)</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Plant above-ground crops</li>
              <li>• Apply foliar fertilizers</li>
              <li>• Harvest for immediate use</li>
              <li>• Graft trees and shrubs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Waning Moon (Full to New)</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Plant root crops and bulbs</li>
              <li>• Prune and weed</li>
              <li>• Harvest for storage</li>
              <li>• Control pests</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Zone 10 Tips */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🌱 Planting Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Start seeds indoors 6-8 weeks before planting</li>
            <li>• Use well-draining soil with organic matter</li>
            <li>• Plant in the evening to reduce transplant shock</li>
            <li>• Water deeply after planting</li>
            <li>• Mulch to retain moisture and control weeds</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🌤️ Weather Considerations</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Watch for late frosts in early spring</li>
            <li>• Provide shade for young plants in summer</li>
            <li>• Protect from strong winds and storms</li>
            <li>• Adjust watering during rainy seasons</li>
            <li>• Consider microclimates in your garden</li>
          </ul>
        </div>
      </div>

      {/* Garden Layout Suggestion */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🏡 Sample Garden Layout</h3>
        <div className="bg-green-100 p-6 rounded-lg">
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div className="bg-white p-3 rounded border">Tomatoes</div>
            <div className="bg-white p-3 rounded border">Basil</div>
            <div className="bg-white p-3 rounded border">Marigolds</div>
            <div className="bg-white p-3 rounded border">Peppers</div>
            <div className="bg-white p-3 rounded border">Lettuce</div>
            <div className="bg-white p-3 rounded border">Carrots</div>
            <div className="bg-white p-3 rounded border">Onions</div>
            <div className="bg-white p-3 rounded border">Herbs</div>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            This layout maximizes space and companion planting benefits. Tall plants (tomatoes) 
            provide shade for smaller plants (lettuce), while herbs deter pests.
          </p>
        </div>
      </div>

      {/* Almanac Wisdom */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">📖 Traditional Almanac Wisdom</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Best Planting Days</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Plant during waxing moon for above-ground crops</li>
              <li>• Plant during waning moon for root crops</li>
              <li>• Avoid planting on new and full moons</li>
              <li>• Use first quarter for balanced growth</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Harvesting Wisdom</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Harvest during waning moon for better storage</li>
              <li>• Pick fruits during waxing moon for immediate use</li>
              <li>• Cut flowers during waxing moon for longer vase life</li>
              <li>• Harvest herbs during full moon for maximum potency</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GardenPlanner 