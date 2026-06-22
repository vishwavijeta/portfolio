export default function Projects({ projects }) {
  return (
    <div className="cards">
      {projects.map((project, i) => (
        <article key={i} className="card card--green">
          <h3 className="card__title">{project.name}</h3>
          {Array.isArray(project.description) && (
            <ul className="bullets">
              {project.description.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
          )}
          {project.tech && (
            <ul className="tags">
              {project.tech.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          )}
          <div className="card__links">
            {project.link && (
              <a className="card__link" href={project.link} target="_blank" rel="noreferrer">
                Code →
              </a>
            )}
            {project.liveLink && (
              <a className="card__link card__link--live" href={project.liveLink} target="_blank" rel="noreferrer">
                Live Demo →
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
