export default function Footer() {
  return (
    <footer style={{
      padding: '32px 2rem',
      background: '#0a0a0a',
      color: '#888',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
    }}>
      <span style={{ fontSize: '14px' }}>
        © 2026 Aishat Onakoya. built with React.
      </span>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://github.com/Aishascreations" target="_blank" rel="noreferrer"
          style={{ fontSize: '13px', color: '#888', textDecoration: 'none' }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = '#888'}
        >github</a>
        <a href="https://www.linkedin.com/in/aishat-onakoya-233627272/" target="_blank" rel="noreferrer"
          style={{ fontSize: '13px', color: '#888', textDecoration: 'none' }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = '#888'}
        >linkedin</a>
        <a href="mailto:onakoyaaishat5@gmail.com"
          style={{ fontSize: '13px', color: '#888', textDecoration: 'none' }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = '#888'}
        >email</a>
      </div>
    </footer>
  )
}