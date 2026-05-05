const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST API', 'JWT Auth', 'Spring Boot'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart'],
  },
  {
    category: 'Machine Learning',
    items: ['Python', 'TensorFlow', 'CNNs', 'OpenCV', 'Data Preprocessing'],
  },
  {
    category: 'Database',
    items: ['SQLite', 'PostgreSQL'],
  },
  {
    category: 'Systems & Tools',
    items: ['C', 'C++', 'Embedded Systems', 'Git', 'GitHub', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 2rem', background: '#fff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <span style={{
          fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '12px'
        }}>skills</span>

        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
          letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '0.5rem', color: '#0a0a0a'
        }}>
          what i work with.
        </h2>
        <p style={{ fontSize: '16px', color: '#888', marginBottom: '3rem' }}>
          technologies and tools across web, mobile, and machine learning
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}>
          {skills.map(group => (
            <div key={group.category} style={{
              background: '#f8f8f8', border: '1px solid #e8e8e8',
              borderRadius: '16px', padding: '24px',
            }}>
              <h3 style={{
                fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#888', marginBottom: '16px'
              }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {group.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#0a0a0a', flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}