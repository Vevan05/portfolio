import { useEffect } from 'react';
import { navItems } from '../data/content.js';

export default function Hotbar({ activeId, onNav }) {
  useEffect(() => {
    function handleKeydown(e) {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 9) {
        const item = navItems[n - 1];
        if (item) onNav(item.target, item.download);
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onNav]);

  return (
    <div id="hotbar">
      {navItems.map((item) => (
        <div
          className={`slot ${activeId === item.target.replace('#', '') ? 'active' : ''}`}
          key={item.key}
          onClick={() => onNav(item.target, item.download)}
        >
          <span className="key">{item.key}</span>
          <span className="icon">{item.icon}</span>
          <div className="tip">{item.tip}</div>
        </div>
      ))}
    </div>
  );
}
