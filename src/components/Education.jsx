export default function Education({ education }) {
  return (
    <div className="cards">
      {education.map((edu, i) => (
        <article key={i} className="card card--red">
          <div className="card__head">
            <h3 className="card__title">{edu.degree}</h3>
            <span className="card__meta">{edu.duration}</span>
          </div>
          <p className="card__subtitle">{edu.institution}</p>
          {edu.description && <p className="card__text">{edu.description}</p>}
        </article>
      ))}
    </div>
  )
}
