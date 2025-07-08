import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PlantIdentifier from './pages/PlantIdentifier'
import GardenPlanner from './pages/GardenPlanner'
import PlantDatabase from './pages/PlantDatabase'
import Zone10Guide from './pages/Zone10Guide'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/identify" element={<PlantIdentifier />} />
            <Route path="/planner" element={<GardenPlanner />} />
            <Route path="/database" element={<PlantDatabase />} />
            <Route path="/zone10-guide" element={<Zone10Guide />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 