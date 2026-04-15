import "./App.css"
import { useEffect, useState } from "react"
const App = () => {
  const [themes, setThemes] = useState([])

  const [form, setForm] = useState({
    parkName: "",
    description: "",
    price: "",
    picture: ""
  })


  const getThemes = async () => {
    const res = await fetch("https://theme-park-3.onrender.com/themes")
    const data = await res.json()
    setThemes(data)
  }

  useEffect(() => {
    getThemes()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form,
      [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("https://theme-park-3.onrender.com/themes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    getThemes()

    setForm({
      parkName: "",
      description: "",
      price: "",
      picture:""
    })
  }

  const deleteTheme = async (id) => {
    await fetch(`https://theme-park-3.onrender.com/themes/${id}`, {
      method: "DELETE",
    })

    getThemes()
  }

  return (
    <div>
      <h1>Theme Park </h1>


      <ThemeSlider />

      <form onSubmit={handleSubmit}>
        <input
          name="parkName"
          placeholder="Park Name"
          value={form.parkName}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          name="picture"
          placeholder="Picture URL"
          value={form.picture}
          onChange={handleChange}
        />

        <button type="submit">Add Theme</button>
      </form>

      <div className="theme-container">
        {themes.map((theme) => (
          <div className="theme-card" key={theme._id}>

       <img src={theme.picture} alt="theme" />

     <h3>{theme.parkName}</h3>

     <p>{theme.description}</p>

        <p className="price">
          Price: {theme.price} BHD  </p>
            <button className="delete-btn"
              onClick={() => deleteTheme(theme._id)} >Delete</button>

          </div>
        ))}
      </div>
    </div>
  )
}

export default App
