import React, { useState } from 'react'
import { Upload, Camera, FileText, Search, Leaf } from 'lucide-react'

interface PlantCharacteristic {
  id: string
  label: string
  options: string[]
}

const PlantIdentifier: React.FC = () => {
  const [identificationMethod, setIdentificationMethod] = useState<'photo' | 'description'>('photo')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [characteristics, setCharacteristics] = useState<Record<string, string>>({})
  const [isIdentifying, setIsIdentifying] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const plantCharacteristics: PlantCharacteristic[] = [
    {
      id: 'leafType',
      label: 'Leaf Type',
      options: ['Simple', 'Compound', 'Needle-like', 'Scale-like', 'Palmate', 'Pinnate']
    },
    {
      id: 'leafColor',
      label: 'Leaf Color',
      options: ['Green', 'Dark Green', 'Light Green', 'Yellow-Green', 'Red', 'Purple', 'Variegated']
    },
    {
      id: 'flowerColor',
      label: 'Flower Color',
      options: ['White', 'Yellow', 'Pink', 'Red', 'Purple', 'Blue', 'Orange', 'No Flowers']
    },
    {
      id: 'growthHabit',
      label: 'Growth Habit',
      options: ['Tree', 'Shrub', 'Herb', 'Vine', 'Ground Cover', 'Grass']
    },
    {
      id: 'height',
      label: 'Height',
      options: ['Under 1 foot', '1-3 feet', '3-6 feet', '6-12 feet', 'Over 12 feet']
    }
  ]

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleCharacteristicChange = (id: string, value: string) => {
    setCharacteristics(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const identifyPlant = async () => {
    setIsIdentifying(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = [
        {
          name: 'Bougainvillea',
          scientificName: 'Bougainvillea spp.',
          confidence: 85,
          image: 'https://via.placeholder.com/150x150/FF69B4/FFFFFF?text=Bougainvillea',
          description: 'A popular tropical vine with colorful bracts that thrive in Zone 10.',
          care: {
            sun: 'Full sun',
            water: 'Moderate',
            soil: 'Well-draining',
            fertilizer: 'Monthly during growing season'
          }
        },
        {
          name: 'Hibiscus',
          scientificName: 'Hibiscus rosa-sinensis',
          confidence: 78,
          image: 'https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Hibiscus',
          description: 'Tropical flowering shrub with large, colorful blooms.',
          care: {
            sun: 'Full sun to partial shade',
            water: 'Regular watering',
            soil: 'Rich, well-draining',
            fertilizer: 'Every 2-3 weeks during growing season'
          }
        }
      ]
      setResults(mockResults)
      setIsIdentifying(false)
    }, 2000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-florida-green mb-4">
          Plant Identifier
        </h1>
        <p className="text-gray-600">
          Identify plants by uploading a photo or describing their characteristics
        </p>
      </div>

      {/* Identification Method Tabs */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setIdentificationMethod('photo')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            identificationMethod === 'photo'
              ? 'bg-florida-green text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Camera className="h-5 w-5" />
          <span>Photo Upload</span>
        </button>
        <button
          onClick={() => setIdentificationMethod('description')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            identificationMethod === 'description'
              ? 'bg-florida-green text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <FileText className="h-5 w-5" />
          <span>Description</span>
        </button>
      </div>

      {/* Photo Upload Section */}
      {identificationMethod === 'photo' && (
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Plant Photo</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Drag and drop your plant photo here, or click to browse
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="btn-primary cursor-pointer inline-block"
            >
              Choose Photo
            </label>
          </div>
          
          {previewUrl && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800 mb-2">Preview:</h3>
              <img
                src={previewUrl}
                alt="Plant preview"
                className="max-w-md rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      )}

      {/* Description Section */}
      {identificationMethod === 'description' && (
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Describe Your Plant</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {plantCharacteristics.map((characteristic) => (
              <div key={characteristic.id}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {characteristic.label}
                </label>
                <select
                  value={characteristics[characteristic.id] || ''}
                  onChange={(e) => handleCharacteristicChange(characteristic.id, e.target.value)}
                  className="input-field"
                >
                  <option value="">Select {characteristic.label}</option>
                  {characteristic.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Identify Button */}
      <div className="text-center">
        <button
          onClick={identifyPlant}
          disabled={isIdentifying || (identificationMethod === 'photo' && !selectedFile) || (identificationMethod === 'description' && Object.keys(characteristics).length === 0)}
          className="btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isIdentifying ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Identifying...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Identify Plant</span>
            </div>
          )}
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Identification Results</h2>
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{result.name}</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {result.confidence}% match
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 italic mb-2">{result.scientificName}</p>
                    <p className="text-gray-700 mb-4">{result.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <span className="text-sm font-medium text-gray-600">Sun:</span>
                        <p className="text-sm">{result.care.sun}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Water:</span>
                        <p className="text-sm">{result.care.water}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Soil:</span>
                        <p className="text-sm">{result.care.soil}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Fertilizer:</span>
                        <p className="text-sm">{result.care.fertilizer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PlantIdentifier 