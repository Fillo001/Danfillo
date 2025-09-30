export default function Gallery() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <p>Photos of our cassava farm, storage tanks, and livestock feeding.</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src="/logo.png" alt="Cassava farm" />
        <img src="/logo.png" alt="Storage tank" />
        <img src="/logo.png" alt="Cattle eating feed" />
        <img src="/logo.png" alt="Goats and sheep" />
      </div>
    </div>
  )
}
