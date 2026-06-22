export default function Header({ id, profile }) {
  const c = profile.contact || {}

  return (
    <header id={id} className="header">
      <div className="container">
        <h1 className="header__name">{profile.name}</h1>
        {profile.title && <p className="header__title">{profile.title}</p>}
        <p className="header__summary">{profile.summary}</p>
        <p className="header__summary">{profile.summary2}</p>

        <ul className="contact">
          {c.phone && (
            <li className="contact__item">
              <a href={`tel:${c.phone.replace(/\s+/g, '')}`}>📞 {c.phone}</a>
            </li>
          )}
          {c.email && (
            <li className="contact__item">
              <a href={`mailto:${c.email}`}>✉️ {c.email}</a>
            </li>
          )}
          {c.github && (
            <li className="contact__item">
              <a href={c.github} target="_blank" rel="noreferrer">🐙 GitHub</a>
            </li>
          )}
          {c.linkedin && (
            <li className="contact__item">
              <a href={c.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}
