// CV content ported from the 2021 site (legacy-v1 tag, src/containers/CV2.jsx).

const experience = [
  {
    when: 'May 2019 – Present',
    role: 'Design Technologist (contract), Stamen Design, San Francisco, CA',
    description:
      'Part Design Thinking. Part Data Science. Two Parts Web Development. Design technologist developing interactive maps and made-to-order data visualizations on the web. Clients include The Bill and Melinda Gates Foundation, Johnson & Johnson, UC Berkeley, The Berggruen Institute, Dropbox Inc.',
  },
  {
    when: 'Ongoing',
    role: 'Creative Code Instructor, Gray Area Foundation for the Arts, San Francisco, CA',
    description:
      'Teacher for the Web Audio and 3D environments weeks of the Gray Area Creative Code Immersive. Web Audio covers basics of electronic music synthesis, music programming in Tone.js, and audio-visual interaction with p5.js. 3D Environments covers creating VR-ready 3D worlds with A-FRAME.',
  },
  {
    when: 'January 2019 – June 2019',
    role: 'Artist In Residence, Gray Area Foundation for the Arts, San Francisco, CA',
    description:
      'Designed and developed immersive, room-scale installations blending physical computing, projection mapping, and sound design. Clients include Levy Dance and Google.',
  },
  {
    when: 'June 2018 – April 2019',
    role: 'Technologist, Company Cue, New York, NY (Remote)',
    description:
      'Developed web tools, processes and database management software for worldwide language translation and original marketing copy.',
  },
  {
    when: 'May 2014 – May 2018',
    role: 'Curated Content and Data Producer, Music, Apple, Cupertino, CA',
    description:
      'Project manager throughout launch of Apple Music, and Apple Music expansion launches in Israel, South Korea, Turkey, Taiwan, and others. From pre-launch to over 30 million paid subscribers around the world.',
  },
  {
    when: '2013 – 2014',
    role: 'iTunes Programming & Label Relations Intern, Music, Apple, Cupertino, CA',
  },
]

const skills = [
  ['Web Development Stack', 'Modern Javascript tools - React and Vue, Webpack, Node, Mapbox GLJS, D3.js, Firebase, Heroku + more.'],
  ['Data Analysis', 'Pandas for Python, Seaborn'],
  ['Creative Code', 'Processing (Java), p5.js, Tone.js, Arduino/Physical Computing, Ableton Live'],
]

const exhibitions = [
  ['MUTEK.SF', 'Elevator Pitch (A/V Installation) — May 2019'],
  ['Gray Area Showcase 2019.1', 'Core (A/V Installation) — June 2019'],
  ['Rush V.1', 'Entrance (A/V Installation) — June 2019'],
  ['Gray Area Showcase 2018.2', 'Elevator Pitch (A/V Installation) — December 2018'],
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="mb-4 text-sm uppercase tracking-widest text-accent-blue">{title}</h2>
      {children}
    </section>
  )
}

export default function CV() {
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_16rem]">
      <div>
        <Section title="Experience">
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.role}>
                <div className="text-sm text-white/60">{job.when}</div>
                <div className="font-semibold">{job.role}</div>
                {job.description && <p className="mt-1 text-white/80">{job.description}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Technical skills">
          <ul className="space-y-2">
            {skills.map(([label, text]) => (
              <li key={label}>
                <b>{label}:</b> {text}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Digital art exhibitions">
          <ul className="space-y-2">
            {exhibitions.map(([venue, work]) => (
              <li key={venue}>
                <b>{venue}</b> — {work}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          <p>University of Kansas, Lawrence, Kansas — B.S. Computer Science, 2014</p>
        </Section>
      </div>

      <aside className="space-y-1 text-white/80 md:order-last">
        <div>San Francisco, CA</div>
        <div>marcschroeder44@gmail.com</div>
      </aside>
    </div>
  )
}
