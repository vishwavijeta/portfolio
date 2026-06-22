export default function Experience({ experience }) {
  return (
    <div className="cards">
      {experience.map((job, i) => (
        <article key={i} className="card card--blue">
          <div className="card__head">
            <h3 className="card__title">{job.role}</h3>
            <span className="card__meta">{job.duration}</span>
          </div>
          <p className="card__subtitle">
            {job.company}
            {job.location && <span className="card__location"> · {job.location}</span>}
          </p>
          {Array.isArray(job.description) && (
            <ul className="bullets">
              {job.description.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
          )}
          {Array.isArray(job.tech) && job.tech.length > 0 && (
            <div className="techstack">
              <span className="techstack__label">Tech Stack</span>
              <ul className="tags">
                {job.tech.map((t) => (
                  <li key={t} className="tag">{t}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
