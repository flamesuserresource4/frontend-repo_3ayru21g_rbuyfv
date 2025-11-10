import { Users, MessageSquare, Search, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Find Your Team',
    desc: 'Search projects and collaborators by skills, roles, and interests.'
  },
  {
    icon: MessageSquare,
    title: 'Built-in Collaboration',
    desc: 'Keep conversations in one place with team chat and updates.'
  },
  {
    icon: Search,
    title: 'Personalized Feed',
    desc: 'See opportunities tailored to your skills and goals.'
  },
  {
    icon: ShieldCheck,
    title: 'College-Verified',
    desc: 'A trusted space exclusive to your academic community.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Why WorkWise</h2>
          <p className="mt-3 text-gray-600">Purpose-built for students to showcase talent, form teams, and ship real work.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-black/5 bg-gradient-to-b from-white to-gray-50 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
