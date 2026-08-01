export default function ToastStack({ toasts }) {
  return (
    <div id="toast-stack">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <div className="badge">🏆</div>
          <div className="txt">
            <div className="cap">{t.caption}</div>
            <div className="title">{t.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
