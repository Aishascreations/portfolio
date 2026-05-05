export default function About() {
  return (
    <section id="about" style={{ padding: '100px 2rem', background: '#fff' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <span style={{
          fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '12px'
        }}>about me</span>

        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
          letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1.5rem', color: '#0a0a0a'
        }}>
          i build things that matter.
        </h2>

        <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '580px' }}>
          i'm <strong style={{ color: '#0a0a0a' }}>Aishat Fadekemi Gbemisola Onakoya</strong> — a software developer
          with a broad range of experience across full-stack web development, mobile development,
          machine learning, and embedded systems.
        </p>

        <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '580px' }}>
          i've built everything from deep learning models for medical imaging to cross-platform
          mobile apps, e-commerce platforms, and AI-powered web applications. i enjoy working
          across the full stack and picking up new technologies quickly.
        </p>

        <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '580px' }}>
          i'm currently open to new opportunities where i can contribute, grow, and keep building
          things i'm proud of.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
        }}>
          {[
            { label: 'Full Stack Dev', desc: 'web frontend + backend' },
            { label: 'Machine Learning', desc: 'TensorFlow, CNNs, OpenCV' },
            { label: 'Mobile Dev', desc: 'Flutter, Dart' },
            { label: 'Embedded Systems', desc: 'C/C++, hardware interfacing' },
          ].map(item => (
            <div key={item.label} style={{
              padding: '20px', background: '#f8f8f8', borderRadius: '12px',
              border: '1px solid #f0f0f0',
            }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px', color: '#0a0a0a' }}>{item.label}</div>
              <div style={{ fontSize: '13px', color: '#888' }}>{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}