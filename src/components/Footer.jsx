import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dharma-dark border-t border-gold-800/30 mt-20">
      {/* Top divider */}
      <div className="flex items-center justify-center py-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-700/40 max-w-xs" />
        <span className="mx-4 text-3xl text-gold-500" style={{ fontFamily: 'Noto Sans Devanagari' }}>ॐ</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-700/40 max-w-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-gold-400 text-lg mb-3">Sanatan Dharma Portal</h3>
            <p className="text-ivory/60 text-sm leading-relaxed">
              Your complete digital guide to the eternal wisdom of Hindu religion, culture, and spirituality.
            </p>
            <p className="text-saffron-500/80 text-lg mt-4" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              सत्यमेव जयते
            </p>
            <p className="text-gold-600 text-xs italic">Truth alone triumphs</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-gold-500 text-sm tracking-widest uppercase mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['About Hinduism', '/about'],
                ['Gods & Goddesses', '/deities'],
                ['Aarti', '/aarti'],
                ['Hindu Calendar', '/calendar'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-ivory/60 hover:text-gold-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-gold-500 text-sm tracking-widest uppercase mb-4">Sacred</h4>
            <ul className="space-y-2">
              {[
                ['Scriptures', '/scriptures'],
                ['Temples & Pilgrimage', '/temples'],
                ['Yoga & Meditation', '/yoga'],
                ['Community', '/community'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-ivory/60 hover:text-gold-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mantra of Day */}
          <div>
            <h4 className="font-display text-gold-500 text-sm tracking-widest uppercase mb-4">Daily Prayer</h4>
            <div className="bg-dharma-bg/50 border border-gold-800/20 rounded-lg p-4">
              <p className="text-gold-300 text-base leading-relaxed mb-2 devanagari">
                ॐ सर्वे भवन्तु सुखिनः
              </p>
              <p className="text-ivory/60 text-xs italic">
                May all beings be happy
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold-800/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-xs">
            Built with devotion — Sanatan Dharma Portal © 2025
          </p>
          <div className="flex items-center gap-2">
            <span className="text-ivory/40 text-xs">Dedicated to the Eternal Path</span>
            <span className="text-saffron-500" style={{ fontFamily: 'Noto Sans Devanagari' }}>ॐ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
