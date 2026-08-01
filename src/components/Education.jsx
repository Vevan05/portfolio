import { education } from '../data/content.js';
import LevelItem from './LevelItem.jsx';

export default function Education() {
  return (
    <section id="education">
      <div className="eyebrow">// leveling up</div>
      <h2 className="section-title">Education</h2>
      <div className="level-track">
        {education.map((item, i) => (
          <LevelItem item={item} isLast={i === education.length - 1} key={item.title} />
        ))}
      </div>
    </section>
  );
}
