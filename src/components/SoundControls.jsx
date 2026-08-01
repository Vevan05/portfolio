export default function SoundControls({ musicOn, onToggle }) {
  return (
    <div id="sound-controls">
      <div
        className={`sound-btn ${musicOn ? 'on' : ''}`}
        id="music-toggle"
        title="Toggle ambient music"
        onClick={onToggle}
      >
        {musicOn ? '🔊' : '🔇'}
      </div>
    </div>
  );
}
