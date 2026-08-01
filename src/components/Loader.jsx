import { useEffect, useState, useRef } from 'react';

const MESSAGES = ['LOADING TERRAIN...', 'PLACING BLOCKS...', 'SPAWNING PLAYER...'];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);
  const [removed, setRemoved] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress((p) => {
        if (doneRef.current) return p;
        let next = p + (Math.random() * 18 + 8);
        if (next >= 100) {
          next = 100;
          doneRef.current = true;
          clearInterval(iv);
          setTimeout(() => setHide(true), 250);
          setTimeout(() => setRemoved(true), 900);
        }
        return next;
      });
    }, 160);
    return () => clearInterval(iv);
  }, []);

  if (removed) return null;

  const message = MESSAGES[Math.min(MESSAGES.length - 1, Math.floor(progress / 34))];

  return (
    <div id="loader" className={hide ? 'hide' : ''}>
      <div className="load-block"></div>
      <div className="load-bar-track">
        <div className="load-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="load-text">{message}</div>
    </div>
  );
}
