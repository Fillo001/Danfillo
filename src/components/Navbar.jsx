import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="font-bold">Danfillo Cassava & Feeds</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/form">Sell/Buy</Link>
        <Link to="/login">Staff</Link>
      </div>
    </nav>
  )
}
