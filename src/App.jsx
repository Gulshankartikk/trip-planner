import React, { Suspense, lazy } from 'react'
import { NavigationProvider } from './context/NavigationContext'
import { useNavigation, SCREENS } from './context/NavigationState'
import AppLayout from './components/layout/AppLayout'
import SplashScreen from './screens/SplashScreen'
import AuthScreen from './screens/AuthScreen'
import Dashboard from './screens/Dashboard'

// Lazy load other screens for better performance
const CreateTrip = lazy(() => import('./screens/CreateTrip'))
const Explore = lazy(() => import('./screens/Explore'))
const AITripPlanner = lazy(() => import('./screens/AITripPlanner'))
const Itinerary = lazy(() => import('./screens/Itinerary'))
const BudgetTracker = lazy(() => import('./screens/BudgetTracker'))
const MapExplorer = lazy(() => import('./screens/Placeholders').then(m => ({ default: m.MapExplorer })))
const Profile = lazy(() => import('./screens/Placeholders').then(m => ({ default: m.Profile })))

function AppContent() {
  const { currentScreen } = useNavigation()

  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.SPLASH:
        return <SplashScreen />
      case SCREENS.AUTH:
        return <AuthScreen />
      case SCREENS.DASHBOARD:
        return <Dashboard />
      case SCREENS.CREATE_TRIP:
        return <CreateTrip />
      case SCREENS.EXPLORE:
        return <Explore />
      case SCREENS.AI_PLANNER:
        return <AITripPlanner />
      case SCREENS.ITINERARY:
        return <Itinerary />
      case SCREENS.BUDGET:
        return <BudgetTracker />
      case SCREENS.MAP:
        return <MapExplorer />
      case SCREENS.PROFILE:
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  return (
    <AppLayout>
      <Suspense fallback={<div className="glass" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        {renderScreen()}
      </Suspense>
    </AppLayout>
  )
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  )
}

export default App
