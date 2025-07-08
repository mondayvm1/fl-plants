import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Leaf, Search, Calendar, Database, BookOpen } from 'lucide-react'

const Navbar: React.FC = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Leaf },
    { path: '/identify', label: 'Plant ID', icon: Search },
    { path: '/planner', label: 'Garden Planner', icon: Calendar },
    { path: '/database', label: 'Plant Database', icon: Database },
    { path: '/zone10-guide', label: 'Zone 10 Guide', icon: BookOpen },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-4 border-florida-green">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-florida-green" />
            <span className="text-xl font-bold text-florida-green">
              Florida Zone 10 Plant Helper
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-florida-green text-white'
                      : 'text-gray-700 hover:bg-green-100 hover:text-florida-green'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 