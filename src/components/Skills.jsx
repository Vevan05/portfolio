import { skillGroups } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills">
      <div className="eyebrow">// inventory</div>
      <h2 className="section-title">Skills</h2>
      <p className="tier-note">Hover a block for details — rarity colour marks the category, same as an item tooltip.</p>

      {skillGroups.map((group) => (
        <div className={`skill-group ${group.rarity}`} key={group.title}>
          <h3>{group.title}</h3>
          <div className="slots-row">
            {group.items.map((item) => (
              <div className="iv-slot" key={item.name}>
                <span className="glyph">{item.glyph}</span>
                <div className="tooltip">
                  <div className="t-name">{item.name}</div>
                  <div className="t-cat">{item.cat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
