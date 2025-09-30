export default function Products() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <ul className="space-y-4">
        <li>🌾 Cassava Flour</li>
        <li>🥣 Garri</li>
        <li>🐄 Animal Feed for cattle, goats, and sheep</li>
      </ul>
      <div className="mt-6">
        <img src="/logo.png" alt="Animals eating feed" className="w-full max-w-md mx-auto" />
      </div>
    </div>
  )
}
