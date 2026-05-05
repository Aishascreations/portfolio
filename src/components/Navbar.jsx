import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['about', 'projects', 'skills', 'contact']

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #e8e8e8' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px' }}>
        aishat<span style={{ color: '#888' }}>.dev</span>
      </span>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
        {links.map(link => (
          <button key={link} onClick={() => scrollTo(link)} style={{
            background: 'none', border: 'none', fontSize: '14px',
            color: '#444', fontWeight: 500, cursor: 'pointer',
            textTransform: 'lowercase', letterSpacing: '0.02em',
          }}>
            {link}
          </button>
        ))}
        <a href="https://github.com/Aishascreations" target="_blank" rel="noreferrer"
          style={{
            padding: '7px 16px', background: '#0a0a0a', color: '#fff',
            borderRadius: '99px', fontSize: '13px', fontWeight: 500,
          }}>
          github ↗
        </a>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', background: 'none', border: 'none',
        fontSize: '22px', color: '#0a0a0a',
      }} className="nav-mobile">
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0,
          background: '#fff', borderBottom: '1px solid #e8e8e8',
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: 'none', border: 'none', fontSize: '16px',
              color: '#0a0a0a', fontWeight: 500, textAlign: 'left', cursor: 'pointer',
            }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}