import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StaffLogin() {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    if (password === 'danfillo123') {
      navigate('/dashboard')
    } else {
      alert('Incorrect password')
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Staff Login</h2>
      <form onSubmit={handleLogin} className="space-y-4 max-w-md">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  )
}
