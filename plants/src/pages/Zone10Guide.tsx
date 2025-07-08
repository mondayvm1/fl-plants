import React from 'react'
import { Sun, CloudRain, Thermometer, Droplets, Calendar, Leaf, Shield, Clock } from 'lucide-react'

const Zone10Guide: React.FC = () => {
  const climateData = [
    { icon: Thermometer, label: 'Average Low', value: '30-40°F', description: 'Minimum winter temperatures' },
    { icon: Thermometer, label: 'Average High', value: '85-95°F', description: 'Summer peak temperatures' },
    { icon: CloudRain, label: 'Annual Rainfall', value: '50-60 inches', description: 'Tropical rainfall patterns' },
    { icon: Sun, label: 'Growing Season', value: 'Year-round', description: 'Extended growing period' },
    { icon: Droplets, label: 'Humidity', value: '70-90%', description: 'High humidity levels' },
    { icon: Calendar, label: 'Frost Free Days', value: '365 days', description: 'No frost concerns' }
  ]

  const monthlyGuide = [
    {
      month: 'January',
      tasks: ['Plant cool-season vegetables', 'Prune fruit trees', 'Start spring seeds indoors'],
      plants: ['Lettuce', 'Spinach', 'Broccoli', 'Cauliflower']
    },
    {
      month: 'February',
      tasks: ['Plant tomatoes and peppers', 'Fertilize citrus trees', 'Prepare garden beds'],
      plants: ['Tomatoes', 'Peppers', 'Basil', 'Marigolds']
    },
    {
      month: 'March',
      tasks: ['Plant warm-season crops', 'Mulch garden beds', 'Start summer seeds'],
      plants: ['Beans', 'Corn', 'Squash', 'Cucumbers']
    },
    {
      month: 'April',
      tasks: ['Plant tropical fruits', 'Install irrigation', 'Control pests'],
      plants: ['Mangoes', 'Avocados', 'Bananas', 'Papayas']
    },
    {
      month: 'May',
      tasks: ['Harvest spring crops', 'Plant heat-tolerant varieties', 'Water management'],
      plants: ['Okra', 'Southern Peas', 'Sweet Potatoes', 'Malabar Spinach']
    },
    {
      month: 'June',
      tasks: ['Monitor for pests', 'Harvest early crops', 'Plant fall seeds'],
      plants: ['Collards', 'Mustard Greens', 'Turnips', 'Radishes']
    }
  ]

  const challenges = [
    {
      challenge: 'High Humidity',
      solutions: ['Ensure good air circulation', 'Use disease-resistant varieties', 'Avoid overhead watering'],
      icon: Droplets
    },
    {
      challenge: 'Intense Sun',
      solutions: ['Provide afternoon shade', 'Use shade cloth', 'Plant heat-tolerant varieties'],
      icon: Sun
    },
    {
      challenge: 'Heavy Rainfall',
      solutions: ['Improve soil drainage', 'Raise garden beds', 'Use containers'],
      icon: CloudRain
    },
    {
      challenge: 'Pest Pressure',
      solutions: ['Practice crop rotation', 'Use companion planting', 'Monitor regularly'],
      icon: Shield
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-florida-green mb-4">
          Florida Zone 10 Gardening Guide
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about gardening in Florida's tropical climate
        </p>
      </div>

      {/* Climate Overview */}
      <div className="card">
        <h2 className="text-2xl font-bold text-florida-green mb-6">Zone 10 Climate Overview</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {climateData.map((data) => {
            const Icon = data.icon
            return (
              <div key={data.label} className="text-center p-4 border border-gray-200 rounded-lg">
                <Icon className="h-8 w-8 text-florida-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-1">{data.label}</h3>
                <p className="text-lg font-bold text-florida-green mb-2">{data.value}</p>
                <p className="text-sm text-gray-600">{data.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Monthly Gardening Guide */}
      <div className="card">
        <h2 className="text-2xl font-bold text-florida-green mb-6">Monthly Gardening Calendar</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monthlyGuide.map((month) => (
            <div key={month.month} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{month.month}</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Tasks
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {month.tasks.map((task, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-florida-green mr-2">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                  <Leaf className="h-4 w-4 mr-2" />
                  Plants to Grow
                </h4>
                <div className="flex flex-wrap gap-1">
                  {month.plants.map((plant, index) => (
                    <span
                      key={index}
                      className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                    >
                      {plant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges and Solutions */}
      <div className="card">
        <h2 className="text-2xl font-bold text-florida-green mb-6">Common Challenges & Solutions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge) => {
            const Icon = challenge.icon
            return (
              <div key={challenge.challenge} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon className="h-5 w-5 text-florida-green" />
                  <h3 className="font-semibold text-gray-800">{challenge.challenge}</h3>
                </div>
                <ul className="space-y-2">
                  {challenge.solutions.map((solution, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-florida-green mr-2">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Soil and Watering */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🌱 Soil Management</h3>
          <div className="space-y-3 text-gray-700">
            <p><strong>Soil Type:</strong> Sandy, well-draining soil is common in Florida</p>
            <p><strong>pH Range:</strong> 6.0-7.0 is ideal for most plants</p>
            <p><strong>Improvements:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Add organic matter (compost, manure)</li>
              <li>• Use raised beds for better drainage</li>
              <li>• Mulch to retain moisture</li>
              <li>• Test soil regularly</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">💧 Watering Guidelines</h3>
          <div className="space-y-3 text-gray-700">
            <p><strong>Frequency:</strong> 2-3 times per week for established plants</p>
            <p><strong>Best Time:</strong> Early morning or late afternoon</p>
            <p><strong>Methods:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Drip irrigation for efficiency</li>
              <li>• Avoid overhead watering</li>
              <li>• Water deeply, not frequently</li>
              <li>• Adjust for rainfall</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="card">
        <h2 className="text-2xl font-bold text-florida-green mb-6">Zone 10 Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">✅ Do's</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Plant year-round with seasonal adjustments</li>
              <li>• Use native and adapted plants</li>
              <li>• Practice crop rotation</li>
              <li>• Mulch heavily to retain moisture</li>
              <li>• Monitor for pests regularly</li>
              <li>• Use shade structures for young plants</li>
              <li>• Install proper drainage systems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">❌ Don'ts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Don't plant frost-sensitive plants in winter</li>
              <li>• Avoid overwatering in rainy seasons</li>
              <li>• Don't ignore pest problems</li>
              <li>• Avoid planting in poorly drained areas</li>
              <li>• Don't use overhead sprinklers</li>
              <li>• Avoid planting too close together</li>
              <li>• Don't forget to test soil regularly</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="card">
        <h2 className="text-2xl font-bold text-florida-green mb-6">Additional Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Local Extension Offices</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• University of Florida IFAS Extension</li>
              <li>• Local Master Gardener Programs</li>
              <li>• County Extension Agents</li>
              <li>• Community Gardens</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Recommended Reading</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• "Florida Vegetable Gardening Guide"</li>
              <li>• "Florida-Friendly Landscaping"</li>
              <li>• "Tropical Fruit Production"</li>
              <li>• "Florida Native Plant Society"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zone10Guide 