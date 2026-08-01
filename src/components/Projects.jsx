import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects">
      <div className="eyebrow">// builds</div>
      <h2 className="section-title">Projects</h2>
      <div className="proj-grid">
        {projects.map((p) => (
          <div className="proj-card" key={p.title}>
            <div className="proj-head">
              <div className="proj-icon">{p.icon}</div>
              <div className="proj-title">{p.title}</div>
            </div>
            <div className="proj-desc">{p.desc}</div>
            <div className="tag-row">
              {p.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a className="proj-link" href={p.link} target="_blank" rel="noopener noreferrer">
              → {p.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
