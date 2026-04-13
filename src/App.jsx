import { useEffect, useState } from "react"

const App = () => {
  const [rides, setRides] = useState([])
  const [form, setForm] = useState({
    name: "",
    description: "",
    thrillLevel: ""
  })

  const getRides = async () => {
    const res = await fetch("http://localhost:3001/rides")
    const data = await res.json()
    setRides(data)
  }

  useEffect(() => {
    getRides()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:3001/rides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    getRides()

    setForm({
      name: "",
      description: "",
      thrillLevel: ""
    })
  }

  const deleteRide = async (id) => {
    await fetch(`http://localhost:3001/rides/${id}`, {
      method: "DELETE"
    })

    getRides()
  }

  return (
    <div>
      <h1>Theme Park</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Ride Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="thrillLevel"
          placeholder="Thrill Level"
          value={form.thrillLevel}
          onChange={handleChange}
        />

        <button type="submit">Add Ride</button>
      </form>

      {rides.map((ride) => (
        <div key={ride._id}>
          <h3>{ride.name}</h3>
          <p>{ride.description}</p>
          <p>🔥 {ride.thrillLevel}</p>

          <button onClick={() => deleteRide(ride._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default App