export interface CalendarEvent {
  date: string
  type: 'planting' | 'harvest' | 'maintenance' | 'moon' | 'sun'
  title: string
  description: string
  category?: string
  moonPhase?: string
  sunPosition?: string
  almanacTip?: string
}

export interface MoonPhase {
  date: string
  phase: 'New Moon' | 'Waxing Crescent' | 'First Quarter' | 'Waxing Gibbous' | 'Full Moon' | 'Waning Gibbous' | 'Last Quarter' | 'Waning Crescent'
  description: string
  gardeningTip: string
}

export interface SunCalendar {
  date: string
  sunrise: string
  sunset: string
  dayLength: string
  gardeningTip: string
}

export const moonPhases: MoonPhase[] = [
  {
    date: '2024-01-01',
    phase: 'Waning Gibbous',
    description: 'Moon is decreasing in illumination',
    gardeningTip: 'Good time for pruning, weeding, and pest control. Avoid planting above-ground crops.'
  },
  {
    date: '2024-01-08',
    phase: 'Last Quarter',
    description: 'Half moon visible in the morning',
    gardeningTip: 'Excellent for root crops, bulbs, and transplanting. Focus on soil preparation.'
  },
  {
    date: '2024-01-15',
    phase: 'Waning Crescent',
    description: 'Thin crescent visible before sunrise',
    gardeningTip: 'Best time for harvesting, weeding, and pest control. Avoid planting.'
  },
  {
    date: '2024-01-22',
    phase: 'New Moon',
    description: 'Moon not visible',
    gardeningTip: 'Rest period for plants. Good for planning and garden maintenance.'
  },
  {
    date: '2024-01-29',
    phase: 'Waxing Crescent',
    description: 'Thin crescent visible after sunset',
    gardeningTip: 'Good for planting above-ground crops, especially leafy vegetables.'
  }
]

export const sunCalendar: SunCalendar[] = [
  {
    date: '2024-01-01',
    sunrise: '7:15 AM',
    sunset: '5:45 PM',
    dayLength: '10h 30m',
    gardeningTip: 'Short days - focus on cool-season crops and indoor seed starting.'
  },
  {
    date: '2024-02-01',
    sunrise: '7:00 AM',
    sunset: '6:00 PM',
    dayLength: '11h 0m',
    gardeningTip: 'Days getting longer - start spring planting preparations.'
  },
  {
    date: '2024-03-01',
    sunrise: '6:45 AM',
    sunset: '6:15 PM',
    dayLength: '11h 30m',
    gardeningTip: 'Spring planting season begins - plant tomatoes, peppers, and herbs.'
  },
  {
    date: '2024-04-01',
    sunrise: '6:30 AM',
    sunset: '6:30 PM',
    dayLength: '12h 0m',
    gardeningTip: 'Full spring - plant warm-season crops and annual flowers.'
  },
  {
    date: '2024-05-01',
    sunrise: '6:15 AM',
    sunset: '6:45 PM',
    dayLength: '12h 30m',
    gardeningTip: 'Long days - focus on heat-tolerant varieties and proper watering.'
  }
]

export const calendarEvents: CalendarEvent[] = [
  // January Events
  {
    date: '2024-01-05',
    type: 'planting',
    title: 'Plant Cool-Season Vegetables',
    description: 'Plant lettuce, spinach, broccoli, and cauliflower',
    category: 'vegetables',
    almanacTip: 'Plant during waxing moon for best growth. Focus on root development.'
  },
  {
    date: '2024-01-12',
    type: 'maintenance',
    title: 'Prune Fruit Trees',
    description: 'Prune citrus and other fruit trees while dormant',
    category: 'trees',
    almanacTip: 'Prune during waning moon to reduce sap flow and promote healing.'
  },
  {
    date: '2024-01-20',
    type: 'planting',
    title: 'Start Spring Seeds Indoors',
    description: 'Start tomatoes, peppers, and herbs indoors',
    category: 'vegetables',
    almanacTip: 'Plant during waxing crescent for strong above-ground growth.'
  },

  // February Events
  {
    date: '2024-02-03',
    type: 'planting',
    title: 'Plant Tomatoes and Peppers',
    description: 'Transplant tomatoes and peppers outdoors',
    category: 'vegetables',
    almanacTip: 'Plant during first quarter moon for balanced root and leaf growth.'
  },
  {
    date: '2024-02-10',
    type: 'maintenance',
    title: 'Fertilize Citrus Trees',
    description: 'Apply citrus fertilizer to promote spring growth',
    category: 'trees',
    almanacTip: 'Fertilize during waxing gibbous for maximum nutrient absorption.'
  },
  {
    date: '2024-02-18',
    type: 'planting',
    title: 'Plant Herbs',
    description: 'Plant basil, cilantro, and other herbs',
    category: 'herbs',
    almanacTip: 'Plant during waxing crescent for aromatic leaf development.'
  },

  // March Events
  {
    date: '2024-03-02',
    type: 'planting',
    title: 'Plant Warm-Season Crops',
    description: 'Plant beans, corn, squash, and cucumbers',
    category: 'vegetables',
    almanacTip: 'Plant during first quarter moon for strong stem development.'
  },
  {
    date: '2024-03-09',
    type: 'maintenance',
    title: 'Mulch Garden Beds',
    description: 'Apply mulch to retain moisture and control weeds',
    category: 'maintenance',
    almanacTip: 'Mulch during waning moon to reduce weed growth.'
  },
  {
    date: '2024-03-16',
    type: 'planting',
    title: 'Plant Tropical Fruits',
    description: 'Plant mangoes, avocados, and other tropical fruits',
    category: 'fruits',
    almanacTip: 'Plant during waxing gibbous for vigorous growth.'
  },

  // April Events
  {
    date: '2024-04-05',
    type: 'maintenance',
    title: 'Install Irrigation',
    description: 'Set up drip irrigation systems for summer',
    category: 'maintenance',
    almanacTip: 'Install during waning moon for efficient water use.'
  },
  {
    date: '2024-04-12',
    type: 'planting',
    title: 'Plant Heat-Tolerant Varieties',
    description: 'Plant okra, southern peas, and sweet potatoes',
    category: 'vegetables',
    almanacTip: 'Plant during waxing crescent for heat resistance.'
  },
  {
    date: '2024-04-20',
    type: 'harvest',
    title: 'Harvest Spring Crops',
    description: 'Harvest early spring vegetables',
    category: 'vegetables',
    almanacTip: 'Harvest during waning moon for better storage quality.'
  },

  // May Events
  {
    date: '2024-05-03',
    type: 'maintenance',
    title: 'Monitor for Pests',
    description: 'Check for common Zone 10 garden pests',
    category: 'maintenance',
    almanacTip: 'Inspect during waning moon when pests are less active.'
  },
  {
    date: '2024-05-10',
    type: 'planting',
    title: 'Plant Fall Seeds',
    description: 'Start seeds for fall garden',
    category: 'vegetables',
    almanacTip: 'Plant during waxing crescent for strong seedling development.'
  },
  {
    date: '2024-05-18',
    type: 'harvest',
    title: 'Harvest Early Crops',
    description: 'Harvest spring-planted vegetables',
    category: 'vegetables',
    almanacTip: 'Harvest during waning moon for better flavor and storage.'
  }
]

export const almanacTips = [
  {
    tip: "Plant above-ground crops during waxing moon phases for better growth",
    explanation: "The waxing moon (new to full) is believed to pull moisture upward, promoting leaf and stem growth."
  },
  {
    tip: "Plant root crops during waning moon phases for stronger root development",
    explanation: "The waning moon (full to new) is thought to pull energy downward, benefiting root growth."
  },
  {
    tip: "Avoid planting during the new moon and full moon",
    explanation: "These are considered rest periods when plants are less responsive to planting activities."
  },
  {
    tip: "Harvest during waning moon for better storage and flavor",
    explanation: "Plants harvested during waning moon are said to have better keeping qualities."
  },
  {
    tip: "Prune during waning moon to reduce sap flow",
    explanation: "Less sap flow during waning moon means faster healing and reduced stress on plants."
  },
  {
    tip: "Fertilize during waxing moon for maximum absorption",
    explanation: "Plants are more receptive to nutrients during the waxing phase."
  },
  {
    tip: "Water deeply during waning moon for better root penetration",
    explanation: "Water is drawn deeper into the soil during waning moon phases."
  },
  {
    tip: "Plant seeds during first quarter moon for balanced growth",
    explanation: "First quarter provides balanced energy for both root and shoot development."
  }
] 