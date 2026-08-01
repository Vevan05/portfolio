import { contacts } from '../data/content.js';

export default function Contact() {
  return (
    <section id="contact">
      <div className="eyebrow">// item frames</div>
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        {contacts.map((c) => (
          <a
            className="frame"
            href={c.href}
            key={c.label}
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noopener noreferrer' : undefined}
            download={c.download || undefined}
          >
            <div className="ic">{c.icon}</div>
            <div className="lbl">{c.label}</div>
            <div className="val">{c.value}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
