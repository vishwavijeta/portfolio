export default function Skills({ skills }) {
  return (
    <ul className="skills">
      {skills.map((skill) => (
        <li key={skill.name} className="skill">
          <span className="skill__name">{skill.name}</span>
          {skill.level && <span className="skill__level">{skill.level}</span>}
        </li>
      ))}
    </ul>
  )
}
