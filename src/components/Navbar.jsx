import { Rocket, Bell, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow-md">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-extrabold text-lg tracking-tight">WorkWise</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-700" />
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
