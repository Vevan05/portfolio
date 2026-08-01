import { useRef, useState, useCallback, useEffect } from 'react';

const SCALE = [220.0, 246.94, 261.63, 293.66, 329.63, 392.0, 440.0]; // A minor pentatonic-ish, original

export function useAudio() {
  const audioCtxRef = useRef(null);
  const musicTimerRef = useRef(null);
  const musicOnRef = useRef(false);
  const [musicOn, setMusicOn] = useState(false);

  const ensureAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  }, []);

  const playBlip = useCallback((freq, dur) => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
  }, []);

  const playAmbientNote = useCallback(() => {
    const ctx = audioCtxRef.current;
    if (!ctx || !musicOnRef.current) return;
    const freq = SCALE[Math.floor(Math.random() * SCALE.length)] / (Math.random() > 0.5 ? 1 : 2);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.06, now + 1.2);
    gain.gain.linearRampToValueAtTime(0.0001, now + 4.5);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 4.6);
  }, []);

  const toggleMusic = useCallback(() => {
    ensureAudio();
    const next = !musicOnRef.current;
    musicOnRef.current = next;
    setMusicOn(next);
    if (next) {
      playAmbientNote();
      musicTimerRef.current = setInterval(playAmbientNote, 2600);
    } else if (musicTimerRef.current) {
      clearInterval(musicTimerRef.current);
    }
  }, [ensureAudio, playAmbientNote]);

  useEffect(() => {
    const handler = () => ensureAudio();
    document.addEventListener('click', handler, { once: true });
    return () => {
      document.removeEventListener('click', handler);
      if (musicTimerRef.current) clearInterval(musicTimerRef.current);
    };
  }, [ensureAudio]);

  return { musicOn, toggleMusic, playBlip };
}
