// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export function Navbar({ menuOpen, setMenuOpen }) {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/nzexp', label: 'My Experience' },
    { to: '/about', label: 'About Me' },
    { to: '/projects', label: 'My Projects' },
    { to: '/contact', label: 'Contact Me' },
  ];

  return (
    <nav className="bg-primary px-6 py-4 flex items-center justify-between sticky top-0 z-40">
      {/* Desktop links — centered */}
      <div className="hidden md:flex flex-1 justify-center gap-6 items-center">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              `text-white text-sm font-medium transition ${
                isActive ? 'opacity-100 underline underline-offset-4' : 'opacity-80 hover:opacity-100'
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}

        
        <a href="https://www.linkedin.com/in/rajithayag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-sm font-medium opacity-80 hover:opacity-100 transition"
        >
          LinkedIn
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden ml-auto text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '' : '☰'}
      </button>
    </nav>
  );
}