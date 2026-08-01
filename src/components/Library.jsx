export default function Library() {
  return (
    <section id="library">
      <div className="eyebrow">// ender chest</div>
      <h2 className="section-title">ML Implementations Library</h2>
      <div className="chest">
        <div className="chest-icon">📦</div>
        <div className="chest-body">
          <div className="enchant-title">Machine-Learning</div>
          <p style={{ color: 'var(--text-dim)', fontSize: '17px', maxWidth: '560px' }}>
            A growing collection of machine learning implementations built from the ground up — classic algorithms
            alongside deep learning architectures, kept together as a single reference library.
          </p>
          <div className="enchant-list">
            <span className="ench-tag">✦ Classic ML Algorithms</span>
            <span className="ench-tag">✦ ANNs, CNNs & RNNs</span>
            <span className="ench-tag">✦ Natural Language Processing</span>
            <span className="ench-tag">✦ Reinforcement Learning</span>
          </div>
          <p style={{ marginTop: '16px' }}>
            <a className="mc-btn" href="https://github.com/vevan05/Machine-Learning" target="_blank" rel="noopener noreferrer">
              Open the Chest →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
