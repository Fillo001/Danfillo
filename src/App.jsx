import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import SellBuyForm from './pages/SellBuyForm'
import StaffLogin from './pages/StaffLogin'
import StaffDashboard from './pages/StaffDashboard'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<SellBuyForm />} />
        <Route path="/login" element={<StaffLogin />} />
        <Route path="/dashboard" element={<StaffDashboard />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
