import { useState } from 'react'

export default function StaffDashboard() {
  const [activity, setActivity] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    alert('Activity and feedback submitted!')
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Staff Dashboard</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <textarea
          placeholder="Daily activity"
          value={activity}
          onChange={e => setActivity(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <textarea
          placeholder="Suggestions / Feedback"
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  )
}
