export default function Footer() {
  return (
    <footer id="about" className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900">About WorkWise</h4>
            <p className="mt-2 text-sm text-gray-600">A student-first platform to connect talent with teams, grow portfolios, and build real-world projects inside your college.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Help & Resources</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Getting Started</a></li>
              <li><a className="hover:text-gray-900" href="#">FAQs</a></li>
              <li><a className="hover:text-gray-900" href="#">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Terms of Use</a></li>
              <li><a className="hover:text-gray-900" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} WorkWise — Built for UE24CS242A</div>
      </div>
    </footer>
  )
}
