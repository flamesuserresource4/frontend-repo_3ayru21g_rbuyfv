import { useEffect, useState } from 'react'
import { Filter, ArrowRight } from 'lucide-react'

const mockProjects = [
  {
    id: 'p1',
    title: 'Campus Event App',
    skills: ['React', 'Node', 'MongoDB'],
    roles: ['Frontend', 'Backend'],
    desc: 'Build a mobile-first app to discover and manage college events.'
  },
  {
    id: 'p2',
    title: 'AI Study Buddy',
    skills: ['Python', 'NLP', 'Express'],
    roles: ['ML Engineer', 'API'],
    desc: 'An AI assistant for study plans, flashcards, and Q&A.'
  },
  {
    id: 'p3',
    title: 'Club Portfolio Site',
    skills: ['Next.js', 'Design'],
    roles: ['Designer', 'Fullstack'],
    desc: 'A polished website for showcasing club projects and achievements.'
  }
]

export default function ProjectsPreview() {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(mockProjects)

  useEffect(() => {
    const q = query.toLowerCase()
    setFiltered(
      mockProjects.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.skills.join(' ').toLowerCase().includes(q) ||
        p.roles.join(' ').toLowerCase().includes(q)
      )
    )
  }, [query])

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Active Projects</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by skill or role"
                className="pl-9 pr-3 py-2 rounded-lg border border-black/10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              View all
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <article key={p.id} className="p-6 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.skills.map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-black/5">{s}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-500">Roles: {p.roles.join(', ')}</div>
                <button className="px-3 py-1.5 text-sm rounded-md bg-gray-900 text-white hover:bg-gray-800">Join</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
