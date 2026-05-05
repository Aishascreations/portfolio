import { useEffect, useState } from 'react'

const roles = ['full stack developer', 'AI enthusiast', 'mobile developer', 'machine learning engineer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 2rem',
      background: 'linear-gradient(135deg, #fff 0%, #f8f8f8 100%)',
    }}>
      <div style={{ maxWidth: '720px', width: '100%' }}>

        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: '#f0f0f0',
          borderRadius: '99px',
          fontSize: '13px',
          color: '#666',
          marginBottom: '1.5rem',
          fontWeight: 500,
        }}>
          available for work
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 72px)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-2px',
          marginBottom: '1rem',
          color: '#0a0a0a',
        }}>
          hi, i'm Aishat.
        </h1>

        <h2 style={{
          fontSize: 'clamp(20px, 4vw, 34px)',
          fontWeight: 400,
          color: '#888',
          letterSpacing: '-0.5px',
          marginBottom: '1.5rem',
          minHeight: '50px',
        }}>
          i'm a{' '}
          <span style={{ color: '#0a0a0a', fontWeight: 700 }}>
            {displayed}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              background: '#0a0a0a',
              marginLeft: '2px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }} />
          </span>
        </h2>

        <p style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '520px',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          i build full-stack web apps, mobile applications, and machine learning models —
          with a passion for clean design and purposeful technology.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('projects')} style={{
            padding: '14px 28px',
            background: '#0a0a0a',
            color: '#fff',
            border: 'none',
            borderRadius: '99px',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '-0.2px',
          }}>
            view my work
          </button>
          <button onClick={() => scrollTo('contact')} style={{
            padding: '14px 28px',
            background: 'transparent',
            color: '#0a0a0a',
            border: '1.5px solid #0a0a0a',
            borderRadius: '99px',
            fontSize: '15px',
            fontWeight: 600,
          }}>
            get in touch
          </button>
          <a href="https://github.com/Aishascreations" target="_blank" rel="noreferrer" style={{
            padding: '14px 28px',
            background: 'transparent',
            color: '#666',
            border: '1.5px solid #e8e8e8',
            borderRadius: '99px',
            fontSize: '15px',
            fontWeight: 600,
            display: 'inline-block',
          }}>
            github ↗
          </a>
        </div>

        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  )
}