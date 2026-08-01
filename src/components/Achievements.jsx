import { achievements } from '../data/content.js';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="eyebrow">// advancements</div>
      <h2 className="section-title">Certifications &amp; Achievements</h2>
      <div className="ach-grid">
        {achievements.map((a) => (
          <a
            className="ach-card"
            style={{ textDecoration: 'none' }}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            key={a.title}
          >
            <div className="ach-icon">{a.icon}</div>
            <div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-desc">{a.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
