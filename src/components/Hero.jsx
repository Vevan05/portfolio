import { useState, useEffect, useMemo } from 'react';
import { splashes } from '../data/content.js';

export default function Hero({ onNav }) {
  const [splash, setSplash] = useState(splashes[0]);

  useEffect(() => {
    setSplash(splashes[Math.floor(Math.random() * splashes.length)]);
  }, []);

  // Generate terrain only once
  const dirtRows = useMemo(
    () =>
      Array.from({ length: 3 }, () =>
        Array.from({ length: 12 }, () =>
          Math.random() < 0.35 ? 'dirt2' : 'dirt'
        )
      ),
    []
  );

  // Different cloud top shapes
  const cloudShapes = [
    'shape1',
    'shape2',
    'shape3',
    'shape4',
    'shape5',
  ];

  // Generate clouds only once
  const clouds = useMemo(
    () => [
      { top: 30, left: '5%', shape: cloudShapes[Math.floor(Math.random() * cloudShapes.length)] },
      { top: 150, left: '20%', shape: cloudShapes[Math.floor(Math.random() * cloudShapes.length)] },
      { top: 45, left: '38%', shape: cloudShapes[Math.floor(Math.random() * cloudShapes.length)] },
      { top: 110, left: '58%', shape: cloudShapes[Math.floor(Math.random() * cloudShapes.length)] },
      { top: 35, left: '76%', shape: cloudShapes[Math.floor(Math.random() * cloudShapes.length)] },
      { top: 65, left: '92%', shape: cloudShapes[Math.floor(Math.random() * cloudShapes.length)] },
    ],
    []
  );

  return (
    <section id="home">
      <div className="sky">
        <div className="clouds">
          {clouds.map((cloud, i) => (
            <div
              key={i}
              className={`cloud ${cloud.shape}`}
              style={{
                top: `${cloud.top}px`,
                left: cloud.left,
                width: '23px',
                height: '10px',
              }}
            />
          ))}
        </div>

        {/* Terrain */}
        <div
          className="terrain"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '136px',
          }}
        >
          {/* Grass */}
          <div
            className="terrain-row"
            style={{ bottom: '102px', height: '34px' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="block grass-top" />
            ))}
          </div>

          {/* Dirt */}
          {dirtRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="terrain-row"
              style={{
                bottom: `${68 - rowIndex * 34}px`,
                height: '34px',
              }}
            >
              {row.map((type, i) => (
                <div key={i} className={`block ${type}`} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-inner">
        <h1 className="hero-name pixel">VEVAN O NARAIN</h1>

        <span className="splash" id="splash">
          {splash}
        </span>

        <p className="hero-sub">
          AI/ML &amp; Full-Stack Developer — B.Tech CSE (AI/ML), VIT Vellore.
          Seeking an SDE internship.
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

          <a
            className="mc-btn gold"
            href="/Vevan_Narain_Resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}