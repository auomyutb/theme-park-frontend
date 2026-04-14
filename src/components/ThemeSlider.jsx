import "./ThemeSlider.css"

const themes = [
  {
    id: 1,
    title: "Fantasy Land",
    desc: "Magical castles, colorful lights, and fun family rides.",
    emoji: "🏰"
  },
  {
    id: 2,
    title: "Pirate Cove",
    desc: "Ships, treasure, water rides, and pirate adventures.",
    emoji: "🏴‍☠️"
  },
  {
    id: 3,
    title: "Space Zone",
    desc: "Rocket rides, neon lights, and futuristic fun.",
    emoji: "🚀"
  },
  {
    id: 4,
    title: "Jungle Adventure",
    desc: "Wild animals, jungle trains, and explorer games.",
    emoji: "🌴"
  },
  {
    id: 5,
    title: "Candy World",
    desc: "Sweet colors, cute decorations, and cartoon fun.",
    emoji: "🍭"
  }
]

const ThemeSlider = () => {
  return (
    <section className="theme-slider-section">
      <div className="theme-slider-header">
        <p className="theme-tag">🎠 Park Themes</p>
        <h2>Choose Your Fun Theme</h2>
        <p className="theme-subtext">
          Explore magical theme ideas for your amusement park.
        </p>
      </div>

      <div className="theme-slider">
        {themes.map((theme) => (
          <div className="theme-card" key={theme.id}>
            <div className="theme-icon">{theme.emoji}</div>
            <h3>{theme.title}</h3>
            <p>{theme.desc}</p>
            <button>Explore</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ThemeSlider
