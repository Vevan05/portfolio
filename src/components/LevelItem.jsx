import { useFillOnView } from '../hooks/useFillOnView.js';

export default function LevelItem({ item, isLast }) {
  const [ref, width] = useFillOnView(item.xp);

  return (
    <div className="level-item">
      {!isLast && <div className="level-line"></div>}
      <div
        className="level-badge"
        style={item.gold ? { background: 'var(--gold)', color: '#3a2c05' } : undefined}
      >
        {item.badge}
      </div>
      <div className="level-content">
        <div className="lv-title">{item.title}</div>
        <div className="lv-sub">{item.sub}</div>
        <div className="lv-desc">{item.desc}</div>
        <div className="xp-bar">
          <div
            ref={ref}
            className="xp-fill"
            style={{
              width: `${width}%`,
              ...(item.gold ? { background: 'linear-gradient(90deg,#c99b1a,var(--gold))' } : {}),
            }}
          ></div>
        </div>
        <div className="xp-label">{item.xpLabel}</div>
      </div>
    </div>
  );
}
