import React, { useState } from 'react'
import { Search, Filter, Sun, CloudRain, Droplets, Thermometer, Leaf } from 'lucide-react'
import { plantImages, PlantImage } from '../data/plantImages'

const PlantDatabase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSun, setSelectedSun] = useState('all')
  const [selectedWater, setSelectedWater] = useState('all')

  const categories = ['all', 'vegetables', 'flowers', 'herbs', 'fruits', 'trees', 'shrubs']
  const sunOptions = ['all', 'full sun', 'partial shade', 'full shade']
  const waterOptions = ['all', 'low', 'moderate', 'high']

  const filteredPlants = plantImages.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || plant.category === selectedCategory
    const matchesSun = selectedSun === 'all' || plant.sunExposure.toLowerCase().includes(selectedSun)
    const matchesWater = selectedWater === 'all' || plant.waterNeeds.toLowerCase().includes(selectedWater)

    return matchesSearch && matchesCategory && matchesSun && matchesWater
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vegetables': return '🥕'
      case 'flowers': return '🌸'
      case 'herbs': return '🌿'
      case 'fruits': return '🍎'
      case 'trees': return '🌳'
      case 'shrubs': return '🌺'
      default: return '🌱'
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-florida-green mb-4">
          Zone 10 Plant Database
        </h1>
        <p className="text-gray-600">
          Browse our comprehensive collection of plants that thrive in Florida Zone 10
        </p>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search plants by name, scientific name, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sun Exposure</label>
            <select
              value={selectedSun}
              onChange={(e) => setSelectedSun(e.target.value)}
              className="input-field"
            >
              {sunOptions.map(option => (
                <option key={option} value={option}>
                  {option === 'all' ? 'All Sun Levels' : option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Water Needs</label>
            <select
              value={selectedWater}
              onChange={(e) => setSelectedWater(e.target.value)}
              className="input-field"
            >
              {waterOptions.map(option => (
                <option key={option} value={option}>
                  {option === 'all' ? 'All Water Levels' : option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Plants ({filteredPlants.length})
          </h2>
          <div className="text-sm text-gray-600">
            Showing {filteredPlants.length} of {plantImages.length} plants
          </div>
        </div>

        {filteredPlants.length === 0 ? (
          <div className="text-center py-12">
            <Leaf className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No plants found matching your criteria.</p>
            <p className="text-sm text-gray-500">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map((plant) => (
              <div key={plant.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={plant.imageUrl}
                  alt={plant.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1593691509543-c55fb32e5ceb?w=400&h=300&fit=crop';
                  }}
                />
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{plant.name}</h3>
                    <span className="text-2xl">{getCategoryIcon(plant.category)}</span>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">{plant.scientificName}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{plant.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div className="flex items-center space-x-1">
                      <Sun className="h-3 w-3 text-yellow-500" />
                      <span className="text-gray-600">{plant.sunExposure}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Droplets className="h-3 w-3 text-blue-500" />
                      <span className="text-gray-600">{plant.waterNeeds}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Thermometer className="h-3 w-3 text-red-500" />
                      <span className="text-gray-600">{plant.height}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Leaf className="h-3 w-3 text-green-500" />
                      <span className="text-gray-600">{plant.bloomTime}</span>
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-1">Care Tips:</h4>
                    <p className="text-xs text-gray-600 line-clamp-2">{plant.care}</p>
                  </div>

                  <div className="border-t pt-3 mt-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-1">Zone 10 Specific:</h4>
                    <p className="text-xs text-green-600">{plant.zone10Specific}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="card text-center">
          <div className="text-2xl font-bold text-florida-green">{plantImages.length}</div>
          <div className="text-sm text-gray-600">Total Plants</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-florida-blue">{categories.length - 1}</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-florida-orange">3</div>
          <div className="text-sm text-gray-600">Sun Levels</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-florida-pink">3</div>
          <div className="text-sm text-gray-600">Water Levels</div>
        </div>
      </div>

      {/* Zone 10 Plant Highlights */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🌟 Zone 10 Plant Highlights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Best for Florida Heat:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Bougainvillea - Drought-tolerant once established</li>
              <li>• Hibiscus - Loves humidity and heat</li>
              <li>• Rosemary - Perfect for Florida summers</li>
              <li>• Marigolds - Heat and pest resistant</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Year-Round Growing:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Basil - Plant near tomatoes for companion benefits</li>
              <li>• Mango - Perfect tropical fruit tree</li>
              <li>• Avocado - Excellent for Florida climate</li>
              <li>• Zinnias - Heat and drought tolerant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantDatabase 