import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center py-20">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Connect. Collaborate. Create.
            </h1>
            <p className="mt-4 text-gray-700 max-w-xl">
              A student-first platform to discover teammates, build real projects, and showcase your skills — all inside your college ecosystem.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800">Explore Projects</a>
              <a href="#create" className="px-5 py-3 rounded-lg bg-white/90 backdrop-blur border border-black/10 font-medium hover:bg-white">Start a Project</a>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white"></div>
    </section>
  )
}
