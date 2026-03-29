import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Deities', path: '/deities' },
  { label: 'Aarti', path: '/aarti' },
  { label: 'Calendar', path: '/calendar' },
  { label: 'Scriptures', path: '/scriptures' },
  { label: 'Temples', path: '/temples' },
  { label: 'Yoga', path: '/yoga' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dharma-bg/95 backdrop-blur-md shadow-lg border-b border-gold-800/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-3xl leading-none" style={{ fontFamily: 'Noto Sans Devanagari' }}>ॐ</span>
            <div className="hidden sm:block">
              <div className="font-display text-sm font-bold text-gold-400 tracking-widest uppercase leading-tight">
                Sanatan Dharma
              </div>
              <div className="text-xs text-saffron-400/70 tracking-wider">The Eternal Path</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'text-gold-400' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gold-400 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gold-400 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-gold-400 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-gold-400 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-dharma-bg/98 backdrop-blur-md border-t border-gold-800/30 px-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link py-3 px-4 rounded border border-gold-800/20 hover:border-gold-500/40 hover:bg-gold-500/5 text-center ${
                  location.pathname === item.path ? 'text-gold-400 border-gold-500/40 bg-gold-500/5' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
