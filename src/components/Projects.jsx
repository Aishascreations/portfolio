const projects = [
  {
    title: 'Brain Tumor Detection',
    desc: 'Deep learning model that classifies brain tumors from MRI scans using Convolutional Neural Networks. Includes data preprocessing and image augmentation pipelines.',
    tags: ['Python', 'TensorFlow', 'CNNs', 'OpenCV'],
    github: 'https://github.com/Aishascreations/brain-tumor-detection',
  },
  {
    title: 'Recipely',
    desc: 'AI-powered recipe management app. Save recipes, get Claude AI suggestions based on fridge ingredients, and generate categorized shopping lists with a full REST API backend.',
    tags: ['Node.js', 'Express', 'SQLite', 'Claude AI', 'JWT Auth'],
    github: 'https://github.com/Aishascreations/recipe-app',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce site with product catalogs, shopping cart logic, and a Spring Boot backend connected to a PostgreSQL database.',
    tags: ['JavaScript', 'React', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/Aishascreations/novel-store-project',
  },
  {
    title: 'Fitness Tracker App',
    desc: 'Cross-platform mobile application built with Flutter for health and activity monitoring. Tracks workouts, activity goals, and fitness progress.',
    tags: ['Flutter', 'Dart', 'Mobile Dev'],
    github: 'https://github.com/Aishascreations/fitness-tracker-app',
  },
  {
    title: 'Notes App',
    desc: 'Freeform note-taking app with markdown support, pinned notes, tag system, and real-time search. Full REST API backend with persistent SQLite storage.',
    tags: ['Node.js', 'Express', 'SQLite', 'Markdown', 'REST API'],
    github: 'https://github.com/Aishascreations/notes-app',
  },
  {
    title: 'Deeds Communication Program',
    desc: 'Low-level hardware communication protocol implementing bidirectional handshaking and polling for embedded systems interfacing.',
    tags: ['C', 'C++', 'Embedded Systems', 'Hardware Interfacing'],
    github: 'https://github.com/Aishascreations',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 2rem', background: '#f8f8f8' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <span style={{
          fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '12px'
        }}>projects</span>

        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
          letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '0.5rem', color: '#0a0a0a'
        }}>
          things i've built.
        </h2>
        <p style={{ fontSize: '16px', color: '#888', marginBottom: '3rem' }}>
          a selection of projects across web, mobile, and machine learning
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {projects.map((p, i) => (
            <div key={p.title} style={{
              background: '#fff',
              border: '1px solid #e8e8e8',
              borderRadius: '16px',
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '24px',
              alignItems: 'start',
              transition: 'box-shadow 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, color: '#888',
                    letterSpacing: '0.08em', textTransform: 'uppercase'
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0a0a0a' }}>
                    {p.title}
                  </h3>
                </div>

                <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '16px', maxWidth: '580px' }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '12px', padding: '4px 12px',
                      background: '#f0f0f0', border: '1px solid #e8e8e8',
                      borderRadius: '99px', color: '#444', fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              <a href={p.github} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', fontWeight: 600, color: '#0a0a0a',
                padding: '10px 18px', background: '#f8f8f8',
                border: '1px solid #e8e8e8', borderRadius: '99px',
                whiteSpace: 'nowrap', textDecoration: 'none',
              }}>
                github ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}