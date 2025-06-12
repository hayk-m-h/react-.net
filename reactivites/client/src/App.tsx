import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState<Activities[]>([])

  useEffect( () => {
    fetch('https://localhost:5001/api/activities')
     .then(response => response.json())
     .then(data => setActivities(data))
  }, [])

  return (
    <div>
      <h3>Reactivites</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
