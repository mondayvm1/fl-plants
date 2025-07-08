export interface PlantImage {
  id: string
  name: string
  scientificName: string
  category: string
  imageUrl: string
  description: string
  sunExposure: string
  waterNeeds: string
  height: string
  bloomTime: string
  care: string
  zone10Specific: string
}

export const plantImages: PlantImage[] = [
  {
    id: '1',
    name: 'Bougainvillea',
    scientificName: 'Bougainvillea spp.',
    category: 'shrubs',
    imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5ceb?w=400&h=300&fit=crop',
    description: 'A stunning tropical vine with vibrant bracts that come in pink, purple, orange, and white. Perfect for Zone 10 gardens.',
    sunExposure: 'Full sun',
    waterNeeds: 'Moderate',
    height: '10-30 feet',
    bloomTime: 'Year-round',
    care: 'Prune after flowering, fertilize monthly during growing season, protect from frost',
    zone10Specific: 'Thrives in Florida heat and humidity, drought-tolerant once established'
  },
  {
    id: '2',
    name: 'Hibiscus',
    scientificName: 'Hibiscus rosa-sinensis',
    category: 'shrubs',
    imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5ceb?w=400&h=300&fit=crop',
    description: 'Tropical flowering shrub with large, colorful blooms. State flower of Hawaii, perfect for Zone 10.',
    sunExposure: 'Full sun to partial shade',
    waterNeeds: 'High',
    height: '6-15 feet',
    bloomTime: 'Spring to Fall',
    care: 'Regular watering, deadhead spent flowers, protect from frost, fertilize every 2-3 weeks',
    zone10Specific: 'Loves Florida humidity, attracts hummingbirds and butterflies'
  },
  {
    id: '3',
    name: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    category: 'vegetables',
    imageUrl: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop',
    description: 'Popular garden vegetable with many varieties suitable for Zone 10. Plant in fall for best results.',
    sunExposure: 'Full sun',
    waterNeeds: 'Moderate',
    height: '3-6 feet',
    bloomTime: 'Spring to Fall',
    care: 'Stake or cage plants, consistent watering, fertilize regularly, protect from pests',
    zone10Specific: 'Plant September-March in Zone 10, avoid summer heat stress'
  },
  {
    id: '4',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    category: 'herbs',
    imageUrl: 'https://images.unsplash.com/photo-1618377382884-8fd508cb6d3a?w=400&h=300&fit=crop',
    description: 'Aromatic herb perfect for Zone 10 gardens. Essential for Italian and Thai cooking.',
    sunExposure: 'Full sun',
    waterNeeds: 'Moderate',
    height: '1-2 feet',
    bloomTime: 'Summer',
    care: 'Pinch off flower buds, harvest regularly, well-draining soil, protect from frost',
    zone10Specific: 'Grow year-round in Zone 10, plant near tomatoes for companion benefits'
  },
  {
    id: '5',
    name: 'Mango',
    scientificName: 'Mangifera indica',
    category: 'fruits',
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop',
    description: 'Tropical fruit tree that thrives in Zone 10. Sweet, juicy fruits perfect for Florida gardens.',
    sunExposure: 'Full sun',
    waterNeeds: 'Moderate',
    height: '30-100 feet',
    bloomTime: 'Winter to Spring',
    care: 'Prune for shape, protect from frost, well-draining soil, fertilize 3 times per year',
    zone10Specific: 'Perfect for Florida climate, plant in spring, harvest June-September'
  },
  {
    id: '6',
    name: 'Marigold',
    scientificName: 'Tagetes spp.',
    category: 'flowers',
    imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5ceb?w=400&h=300&fit=crop',
    description: 'Hardy annual flowers that deter pests and add color to Zone 10 gardens.',
    sunExposure: 'Full sun',
    waterNeeds: 'Low',
    height: '6-24 inches',
    bloomTime: 'Spring to Fall',
    care: 'Deadhead regularly, drought tolerant, full sun, plant in well-draining soil',
    zone10Specific: 'Excellent pest deterrent, plant around vegetables, heat tolerant'
  },
  {
    id: '7',
    name: 'Bell Pepper',
    scientificName: 'Capsicum annuum',
    category: 'vegetables',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    description: 'Sweet peppers perfect for Zone 10 gardens. Plant in fall for best production.',
    sunExposure: 'Full sun',
    waterNeeds: 'Moderate',
    height: '2-3 feet',
    bloomTime: 'Spring to Fall',
    care: 'Consistent watering, fertilize monthly, stake if needed, harvest when firm',
    zone10Specific: 'Plant September-March, avoid summer heat, great for container gardening'
  },
  {
    id: '8',
    name: 'Rosemary',
    scientificName: 'Rosmarinus officinalis',
    category: 'herbs',
    imageUrl: 'https://images.unsplash.com/photo-1618377382884-8fd508cb6d3a?w=400&h=300&fit=crop',
    description: 'Aromatic evergreen herb perfect for Zone 10. Drought-tolerant and pest-resistant.',
    sunExposure: 'Full sun',
    waterNeeds: 'Low',
    height: '2-4 feet',
    bloomTime: 'Spring',
    care: 'Well-draining soil, minimal watering, prune to shape, harvest year-round',
    zone10Specific: 'Perfect for Florida heat, drought-tolerant, great for borders and containers'
  },
  {
    id: '9',
    name: 'Avocado',
    scientificName: 'Persea americana',
    category: 'fruits',
    imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop',
    description: 'Tropical fruit tree perfect for Zone 10. Rich, creamy fruits for healthy eating.',
    sunExposure: 'Full sun',
    waterNeeds: 'Moderate',
    height: '30-60 feet',
    bloomTime: 'Winter to Spring',
    care: 'Well-draining soil, protect from frost, fertilize 3 times per year, prune for shape',
    zone10Specific: 'Excellent for Florida climate, plant in spring, harvest varies by variety'
  },
  {
    id: '10',
    name: 'Zinnia',
    scientificName: 'Zinnia elegans',
    category: 'flowers',
    imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5ceb?w=400&h=300&fit=crop',
    description: 'Colorful annual flowers that attract butterflies and hummingbirds to Zone 10 gardens.',
    sunExposure: 'Full sun',
    waterNeeds: 'Moderate',
    height: '1-3 feet',
    bloomTime: 'Spring to Fall',
    care: 'Deadhead regularly, well-draining soil, full sun, attract pollinators',
    zone10Specific: 'Heat and drought tolerant, perfect for Florida summers, great cut flowers'
  }
] 