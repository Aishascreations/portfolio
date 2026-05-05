export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 2rem', background: '#f8f8f8' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <span style={{
          fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '12px'
        }}>contact</span>

        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
          letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1rem', color: '#0a0a0a'
        }}>
          let's work together.
        </h2>

        <p style={{
          fontSize: '17px', color: '#555', lineHeight: 1.8,
          marginBottom: '3rem', maxWidth: '520px'
        }}>
          i'm currently open to new opportunities. whether you have a project in mind,
          a question, or just want to connect — my inbox is always open.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>

          <a href="mailto:onakoyaaishat5@gmail.com" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 24px', background: '#0a0a0a', color: '#fff',
            borderRadius: '14px', textDecoration: 'none', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <div>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '3px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>email</div>
              <div style={{ fontSize: '16px', fontWeight: 600 }}>onakoyaaishat5@gmail.com</div>
            </div>
            <span style={{ fontSize: '20px' }}>↗</span>
          </a>

          <a href="https://github.com/Aishascreations" target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 24px', background: '#fff', color: '#0a0a0a',
            borderRadius: '14px', textDecoration: 'none', border: '1px solid #e8e8e8', transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '3px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>github</div>
              <div style={{ fontSize: '16px', fontWeight: 600 }}>Aishascreations</div>
            </div>
            <span style={{ fontSize: '20px' }}>↗</span>
          </a>

          <a href="https://www.linkedin.com/in/aishat-onakoya-233627272/" target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 24px', background: '#fff', color: '#0a0a0a',
            borderRadius: '14px', textDecoration: 'none', border: '1px solid #e8e8e8', transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '3px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>linkedin</div>
              <div style={{ fontSize: '16px', fontWeight: 600 }}>aishat-onakoya</div>
            </div>
            <span style={{ fontSize: '20px' }}>↗</span>
          </a>

        </div>
      </div>
    </section>
  )
}