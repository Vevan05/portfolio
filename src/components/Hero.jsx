import { useState, useEffect } from 'react';
import { splashes } from '../data/content.js';

export default function Hero({ onNav }) {
  const [splash, setSplash] = useState(splashes[0]);

  useEffect(() => {
    setSplash(splashes[Math.floor(Math.random() * splashes.length)]);
  }, []);

  return (
    <section id="home">
      <div className="sky">
        <div className="clouds">
          <div className="cloud" style={{ top: '60px', left: '8%', width: '14px', height: '10px' }}></div>
          <div className="cloud" style={{ top: '110px', left: '60%', width: '14px', height: '10px' }}></div>
          <div className="cloud" style={{ top: '40px', left: '80%', width: '14px', height: '10px' }}></div>
        </div>
        <div className="terrain-row" style={{ bottom: '70px' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="block grass-top" key={i}></div>
          ))}
        </div>
        <div className="terrain-row" style={{ bottom: 0, height: '70px' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div className={`block ${i % 3 === 1 ? 'dirt2' : 'dirt'}`} key={i}></div>
          ))}
        </div>
      </div>
      <div className="hero-inner">
        <h1 className="hero-name pixel">VEVAN O NARAIN</h1>
        <div className="splash" id="splash">{splash}</div>
        <p className="hero-sub">
          AI/ML &amp; Full-Stack Developer — B.Tech CSE (AI/ML), VIT Vellore. Seeking an SDE internship.
        </p>
        <div className="hero-btns">
          <a
            className="mc-btn"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onNav('#projects');
            }}
          >
            View Builds
          </a>
          <a className="mc-btn gold" href="/Vevan_Narain_Resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
