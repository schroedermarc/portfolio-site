import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router'

const navClass = ({ isActive }: { isActive: boolean }) =>
  `border-b-2 pb-1 transition-colors ${
    isActive ? 'border-accent-blue' : 'border-transparent hover:border-white/40'
  }`

export default function Layout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-8">
      <header className="flex flex-wrap items-center justify-between gap-4 py-6">
        <Link to="/" className="text-lg">
          <span className="font-semibold">Marc Schroeder</span>
          <span className="text-white/60"> // Design Technologist</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm uppercase tracking-wide">
          <NavLink to="/" end className={navClass}>
            Projects
          </NavLink>
          <NavLink to="/cv" className={navClass}>
            CV
          </NavLink>
          <a
            href="mailto:marcschroeder44@gmail.com"
            className="rounded bg-accent-blue px-3 py-1.5 font-semibold text-site"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1 pb-16">
        <Outlet />
      </main>

      <footer className="py-6 text-sm text-white/50">
        © {new Date().getFullYear()} Marc Schroeder
      </footer>
      <ScrollRestoration />
    </div>
  )
}
