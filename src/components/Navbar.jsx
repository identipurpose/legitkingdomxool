import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BookOpen } from 'lucide-react';

const DEFAULT_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/legitkingdomxool', label: 'Kingdom School' },
  { to: '/support', label: 'Support' },
];

export default function Navbar({ links = DEFAULT_LINKS, showLogin = true, variant = 'solid' }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isTransparent = variant === 'transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isTransparent ? 'bg-white/70 backdrop-blur-xl' : 'bg-background/80 backdrop-blur-xl border-b border-border'}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 h-16">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <BookOpen className="w-8 h-8 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground font-poppins">Legit Kingdom Xool</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {showLogin && (
            <a
              href="https://heedgod.app"
              className="ml-2 px-5 py-2 rounded-full gradient-primary text-white text-sm font-semibold transition shadow-warm hover:shadow-warm-lg"
            >
              Log In
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-4 sm:px-6 py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {showLogin && (
              <a
                href="https://heedgod.app"
                className="mt-2 py-3 text-center rounded-full gradient-primary text-white text-sm font-semibold shadow-warm"
              >
                Log In
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}