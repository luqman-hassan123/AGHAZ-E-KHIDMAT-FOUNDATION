import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageLayout from './components/layout/PageLayout'
import PageTransition from './components/ui/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import FocusAreas from './pages/FocusAreas'
import Governance from './pages/Governance'
import Team from './pages/Team'
import Partner from './pages/Partner'
import Contact from './pages/Contact'

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageLayout><PageTransition><Home /></PageTransition></PageLayout>} />
        <Route path="/about" element={<PageLayout><PageTransition><About /></PageTransition></PageLayout>} />
        <Route path="/focus-areas" element={<PageLayout><PageTransition><FocusAreas /></PageTransition></PageLayout>} />
        <Route path="/governance" element={<PageLayout><PageTransition><Governance /></PageTransition></PageLayout>} />
        <Route path="/team" element={<PageLayout><PageTransition><Team /></PageTransition></PageLayout>} />
        <Route path="/partner-with-us" element={<PageLayout><PageTransition><Partner /></PageTransition></PageLayout>} />
        <Route path="/contact" element={<PageLayout><PageTransition><Contact /></PageTransition></PageLayout>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AppRoutes />
}
