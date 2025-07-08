import React, { useState } from 'react'
import { Calendar as CalendarIcon, Sun, Moon, Leaf, Harvest } from 'lucide-react'
import { calendarEvents, moonPhases, sunCalendar, almanacTips } from '../data/calendarData'

interface CalendarProps {
  currentMonth?: number
  currentYear?: number
}

const Calendar: React.FC<CalendarProps> = ({ 
  currentMonth = new Date().getMonth(), 
  currentYear = new Date().getFullYear() 
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [viewMode, setViewMode] = useState<'calendar' | 'moon' | 'sun' | 'almanac'>('calendar')
  const [displayMonth, setDisplayMonth] = useState(currentMonth)
  const [displayYear, setDisplayYear] = useState(currentYear)

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]
  }

  const getEventsForDate = (date: string) => {
    return calendarEvents.filter(event => event.date === date)
  }

  const getMoonPhaseForDate = (date: string) => {
    return moonPhases.find(phase => phase.date === date)
  }

  const getSunInfoForDate = (date: string) => {
    return sunCalendar.find(sun => sun.date === date)
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelectedDate = (date: Date) => {
    return selectedDate.toDateString() === date.toDateString()
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (displayMonth === 0) {
        setDisplayMonth(11)
        setDisplayYear(displayYear - 1)
      } else {
        setDisplayMonth(displayMonth - 1)
      }
    } else {
      if (displayMonth === 11) {
        setDisplayMonth(0)
        setDisplayYear(displayYear + 1)
      } else {
        setDisplayMonth(displayMonth + 1)
      }
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(displayMonth, displayYear)
    const firstDay = getFirstDayOfMonth(displayMonth, displayYear)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 border border-gray-200 bg-gray-50"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(displayYear, displayMonth, day)
      const dateString = formatDate(date)
      const events = getEventsForDate(dateString)
      const moonPhase = getMoonPhaseForDate(dateString)
      const sunInfo = getSunInfoForDate(dateString)
      const todayClass = isToday(date) ? 'bg-florida-green text-white font-bold' : ''
      const selectedClass = isSelectedDate(date) ? 'bg-blue-50 border-blue-300' : ''

      days.push(
        <div
          key={day}
          className={`p-2 border border-gray-200 min-h-[100px] cursor-pointer hover:bg-gray-50 ${todayClass} ${selectedClass}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className={`font-semibold text-sm mb-1 ${isToday(date) ? 'text-white' : ''}`}>{day}</div>
          
          {/* Events */}
          {events.map((event, index) => (
            <div
              key={index}
              className={`text-xs p-1 mb-1 rounded ${
                event.type === 'planting' ? 'bg-green-100 text-green-800' :
                event.type === 'harvest' ? 'bg-orange-100 text-orange-800' :
                event.type === 'maintenance' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}
            >
              {event.title}
            </div>
          ))}

          {/* Moon Phase Indicator */}
          {moonPhase && (
            <div className="text-xs text-purple-600 mt-1">
              🌙 {moonPhase.phase}
            </div>
          )}

          {/* Sun Info */}
          {sunInfo && (
            <div className="text-xs text-yellow-600 mt-1">
              ☀️ {sunInfo.dayLength}
            </div>
          )}
        </div>
      )
    }

    return days
  }

  const renderMoonPhase = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Moon Phases & Gardening Tips</h3>
        {moonPhases.map((phase, index) => (
          <div key={index} className="card">
            <div className="flex items-center space-x-3 mb-2">
              <Moon className="h-5 w-5 text-purple-500" />
              <span className="font-semibold">{phase.phase}</span>
              <span className="text-sm text-gray-500">{phase.date}</span>
            </div>
            <p className="text-gray-600 mb-2">{phase.description}</p>
            <p className="text-sm bg-purple-50 p-2 rounded">
              <strong>Gardening Tip:</strong> {phase.gardeningTip}
            </p>
          </div>
        ))}
      </div>
    )
  }

  const renderSunCalendar = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sun Calendar & Day Length</h3>
        {sunCalendar.map((sun, index) => (
          <div key={index} className="card">
            <div className="flex items-center space-x-3 mb-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">{sun.date}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <span className="text-sm font-medium">Sunrise:</span>
                <p className="text-sm">{sun.sunrise}</p>
              </div>
              <div>
                <span className="text-sm font-medium">Sunset:</span>
                <p className="text-sm">{sun.sunset}</p>
              </div>
              <div>
                <span className="text-sm font-medium">Day Length:</span>
                <p className="text-sm">{sun.dayLength}</p>
              </div>
            </div>
            <p className="text-sm bg-yellow-50 p-2 rounded">
              <strong>Gardening Tip:</strong> {sun.gardeningTip}
            </p>
          </div>
        ))}
      </div>
    )
  }

  const renderAlmanac = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Farming Almanac Tips</h3>
        {almanacTips.map((tip, index) => (
          <div key={index} className="card">
            <div className="flex items-start space-x-3">
              <Leaf className="h-5 w-5 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-800 mb-2">{tip.tip}</p>
                <p className="text-sm text-gray-600">{tip.explanation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const selectedDateEvents = getEventsForDate(formatDate(selectedDate))
  const selectedDateMoon = getMoonPhaseForDate(formatDate(selectedDate))
  const selectedDateSun = getSunInfoForDate(formatDate(selectedDate))

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* View Mode Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setViewMode('calendar')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'calendar' ? 'bg-florida-green text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <CalendarIcon className="h-4 w-4 inline mr-2" />
          Calendar
        </button>
        <button
          onClick={() => setViewMode('moon')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'moon' ? 'bg-florida-green text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Moon className="h-4 w-4 inline mr-2" />
          Moon Phases
        </button>
        <button
          onClick={() => setViewMode('sun')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'sun' ? 'bg-florida-green text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Sun className="h-4 w-4 inline mr-2" />
          Sun Calendar
        </button>
        <button
          onClick={() => setViewMode('almanac')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'almanac' ? 'bg-florida-green text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Leaf className="h-4 w-4 inline mr-2" />
          Almanac Tips
        </button>
      </div>

      {/* Calendar View */}
      {viewMode === 'calendar' && (
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              ←
            </button>
            <h2 className="text-2xl font-bold text-florida-green">
              {monthNames[displayMonth]} {displayYear}
            </h2>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              →
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-2 text-center font-semibold text-gray-700 bg-gray-100">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>

          {/* Selected Date Details */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
              {isToday(selectedDate) && (
                <span className="ml-2 bg-florida-green text-white px-2 py-1 rounded-full text-sm">
                  Today
                </span>
              )}
            </h3>

            {/* Events */}
            {selectedDateEvents.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Events:</h4>
                {selectedDateEvents.map((event, index) => (
                  <div key={index} className="mb-2 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      {event.type === 'planting' && <Leaf className="h-4 w-4 text-green-500" />}
                      {event.type === 'harvest' && <Harvest className="h-4 w-4 text-orange-500" />}
                      <span className="font-medium">{event.title}</span>
                    </div>
                    <p className="text-sm text-gray-600">{event.description}</p>
                    {event.almanacTip && (
                      <p className="text-xs text-blue-600 mt-1">
                        <strong>Almanac Tip:</strong> {event.almanacTip}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Moon Phase */}
            {selectedDateMoon && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Moon Phase:</h4>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium">{selectedDateMoon.phase}</p>
                  <p className="text-sm text-gray-600">{selectedDateMoon.gardeningTip}</p>
                </div>
              </div>
            )}

            {/* Sun Info */}
            {selectedDateSun && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Sun Information:</h4>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Sunrise:</strong> {selectedDateSun.sunrise} | 
                    <strong> Sunset:</strong> {selectedDateSun.sunset} | 
                    <strong> Day Length:</strong> {selectedDateSun.dayLength}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{selectedDateSun.gardeningTip}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Moon Phase View */}
      {viewMode === 'moon' && renderMoonPhase()}

      {/* Sun Calendar View */}
      {viewMode === 'sun' && renderSunCalendar()}

      {/* Almanac View */}
      {viewMode === 'almanac' && renderAlmanac()}
    </div>
  )
}

export default Calendar 