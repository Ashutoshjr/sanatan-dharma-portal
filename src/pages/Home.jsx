import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shlokas } from '../data/calendar';
import { festivals2025 } from '../data/calendar';
import { deities } from '../data/deities';

function DiyaFlame() {
  return (
    <div className="relative inline-flex flex-col items-center">
      <div className="diya-flame text-4xl leading-none">🔥</div>
      <div className="w-10 h-3 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full mt-0.5 opacity-70" />
      <div className="w-6 h-2 bg-amber-900 rounded-full mt-0.5" />
    </div>
  );
}

function MandalaSVG({ size = 300, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      className={`${className} opacity-10`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {[20, 40, 60, 80, 100, 120].map((r, i) => (
        <circle key={r} cx="150" cy="150" r={r} fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity={1 - i * 0.1} />
      ))}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={angle}
            x1={150 + 20 * Math.cos(rad)} y1={150 + 20 * Math.sin(rad)}
            x2={150 + 120 * Math.cos(rad)} y2={150 + 120 * Math.sin(rad)}
            stroke="#D4AF37" strokeWidth="0.3"
          />
        );
      })}
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180;
        const cx = 150 + 80 * Math.cos(rad);
        const cy = 150 + 80 * Math.sin(rad);
        return <circle key={angle} cx={cx} cy={cy} r="8" fill="none" stroke="#D4AF37" strokeWidth="0.5" />;
      })}
      <circle cx="150" cy="150" r="10" fill="none" stroke="#FF6B00" strokeWidth="0.8" />
    </svg>
  );
}

const quickLinks = [
  { icon: '🕉️', label: 'About Hinduism', desc: 'Explore the philosophy', path: '/about' },
  { icon: '🙏', label: 'Gods & Goddesses', desc: 'Meet the divine', path: '/deities' },
  { icon: '🎶', label: 'Aarti', desc: 'Sacred hymns', path: '/aarti' },
  { icon: '📅', label: 'Hindu Calendar', desc: 'Panchang & festivals', path: '/calendar' },
  { icon: '🛕', label: 'Temples', desc: 'Sacred pilgrimage sites', path: '/temples' },
  { icon: '📖', label: 'Scriptures', desc: 'Gita, Vedas & more', path: '/scriptures' },
  { icon: '🧘', label: 'Yoga', desc: 'Mind, body & spirit', path: '/yoga' },
  { icon: '🌐', label: 'Community', desc: 'Learn & connect', path: '/community' },
];

export default function Home() {
  const [currentShlokaIndex, setCurrentShlokaIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentShlokaIndex(i => (i + 1) % shlokas.length);
        setFadeIn(true);
      }, 500);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const shloka = shlokas[currentShlokaIndex];
  const upcomingFestivals = festivals2025.slice(0, 3);
  const featuredDeities = deities.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-bg via-dharma-dark to-dharma-bg" />
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 30%, rgba(255,107,0,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.08) 0%, transparent 50%)'
          }}
        />

        {/* Mandala decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate">
          <MandalaSVG size={700} />
        </div>
        <div className="absolute top-10 right-10 hidden lg:block">
          <MandalaSVG size={200} className="opacity-5" />
        </div>
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <MandalaSVG size={150} className="opacity-5" />
        </div>

        {/* Temple silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden opacity-10">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,160 L0,100 L60,100 L60,40 L80,20 L100,40 L100,60 L120,60 L120,20 L140,0 L160,20 L160,60 L180,60 L180,40 L200,20 L220,40 L220,100 L280,100 L280,60 L300,40 L320,60 L320,100 L400,100 L400,80 L420,60 L440,40 L460,60 L480,80 L480,100 L560,100 L560,40 L580,20 L600,0 L620,20 L640,40 L640,100 L720,100 L720,60 L740,40 L760,20 L780,40 L800,60 L800,100 L880,100 L880,80 L900,60 L920,40 L940,60 L960,80 L960,100 L1040,100 L1040,40 L1060,20 L1080,0 L1100,20 L1120,40 L1120,100 L1200,100 L1200,60 L1220,40 L1240,60 L1240,100 L1320,100 L1320,80 L1340,60 L1360,40 L1380,60 L1400,80 L1440,80 L1440,160 Z"
              fill="#D4AF37"
            />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          {/* Diyas */}
          <div className="flex justify-center gap-8 mb-8">
            <DiyaFlame />
            <DiyaFlame />
            <DiyaFlame />
          </div>

          {/* Om symbol */}
          <div className="text-8xl md:text-9xl leading-none mb-6 text-saffron-500 animate-pulse-slow"
            style={{ fontFamily: 'Noto Sans Devanagari', textShadow: '0 0 60px rgba(255,107,0,0.5)' }}>
            ॐ
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            style={{ textShadow: '0 0 40px rgba(212,175,55,0.3)' }}>
            <span className="text-gold-400">Sanatan</span>{' '}
            <span className="text-ivory">Dharma</span>
          </h1>

          <div className="font-display text-xl md:text-2xl text-saffron-400 tracking-[0.3em] uppercase mb-6">
            The Eternal Path
          </div>

          {/* Tagline */}
          <p className="text-ivory/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore the timeless wisdom of the world's oldest living civilization —
            its philosophy, deities, scriptures, rituals, and spiritual practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/about" className="btn-primary">
              Begin Your Journey
            </Link>
            <Link to="/deities" className="btn-outline">
              Meet the Deities
            </Link>
          </div>

          {/* Sanskrit divider */}
          <div className="flex items-center justify-center gap-4 text-gold-700/50">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-gold-700/50" />
            <span className="text-sm tracking-widest devanagari">।। ॐ तत् सत् ।।</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-gold-700/50" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-600/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-gold-500/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Daily Shloka Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold-900/20 border border-gold-700/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-gold-400 text-xs font-display tracking-widest uppercase">Daily Shloka</span>
            </div>
            <h2 className="section-title">Verse of the Day</h2>
            <div className="gold-divider" />
          </div>

          <div
            className={`bg-dharma-dark border border-gold-700/30 rounded-xl p-8 md:p-12 text-center transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
            style={{ background: 'linear-gradient(135deg, rgba(45,18,0,0.8), rgba(26,10,0,0.9))' }}
          >
            <p className="text-gold-300 text-xl md:text-2xl leading-loose mb-4 devanagari">
              {shloka.sanskrit}
            </p>
            <p className="text-saffron-400/80 text-sm italic mb-4 tracking-wide">
              {shloka.transliteration}
            </p>
            <div className="h-px bg-gold-800/30 my-4" />
            <p className="text-ivory/80 text-lg leading-relaxed mb-4">
              "{shloka.meaning}"
            </p>
            <p className="text-gold-600 text-sm font-display tracking-wider">— {shloka.source}</p>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {shlokas.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentShlokaIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === currentShlokaIndex ? 'bg-gold-400 w-6' : 'bg-gold-800/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Explore the Portal</h2>
          <p className="section-subtitle">
            Your complete guide to Sanatan Dharma — from sacred texts to divine beings
          </p>
          <div className="gold-divider" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {quickLinks.map(({ icon, label, desc, path }) => (
              <Link
                key={path}
                to={path}
                className="group card-divine p-6 text-center hover:shadow-golden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{icon}</div>
                <h3 className="font-display text-gold-400 text-sm tracking-wider mb-1">{label}</h3>
                <p className="text-ivory/50 text-xs">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deities */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <h2 className="section-title">The Divine Pantheon</h2>
          <p className="section-subtitle">Discover the sacred deities of Sanatan Dharma</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {featuredDeities.map(deity => (
              <Link
                key={deity.id}
                to={`/deities/${deity.id}`}
                className="deity-card group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${deity.color} flex items-center justify-center text-3xl mx-auto mb-3 group-hover:shadow-golden transition-shadow`}>
                  {deity.symbol}
                </div>
                <h3 className="font-display text-gold-400 text-sm mb-0.5">{deity.name}</h3>
                <p className="text-ivory/50 text-xs">{deity.title}</p>
                <p className="text-saffron-500/70 text-base mt-1 devanagari">{deity.sanskrit}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/deities" className="btn-outline">
              View All Deities
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Festivals */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Upcoming Festivals</h2>
          <p className="section-subtitle">Sacred celebrations on the Hindu calendar</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {upcomingFestivals.map(fest => (
              <div key={fest.name} className="card-divine p-6 hover:shadow-golden">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-display tracking-wider ${
                    fest.type === 'festival' ? 'bg-saffron-500/20 text-saffron-400' :
                    fest.type === 'vrat' ? 'bg-gold-500/20 text-gold-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {fest.type}
                  </span>
                  <span className="text-gold-600 text-xs font-display">{fest.date}</span>
                </div>
                <h3 className="font-display text-gold-400 text-lg mb-1">{fest.name}</h3>
                <p className="text-saffron-500/70 text-sm devanagari mb-3">{fest.hindi}</p>
                <p className="text-ivory/60 text-sm leading-relaxed">{fest.description}</p>
                <p className="text-gold-600 text-xs mt-3">Deity: {fest.deity}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/calendar" className="btn-primary">
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="relative max-w-6xl mx-auto">
          <h2 className="section-title">Four Pillars of Dharma</h2>
          <p className="section-subtitle">The philosophical foundations of Sanatan Dharma</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { title: 'Dharma', hindi: 'धर्म', desc: 'Righteous duty and moral order. The cosmic law that upholds the universe and guides all beings toward their highest purpose.', icon: '⚖️' },
              { title: 'Artha', hindi: 'अर्थ', desc: 'Wealth and material prosperity. One of the four aims of life — pursuing honest livelihood and worldly success.', icon: '💰' },
              { title: 'Kama', hindi: 'काम', desc: 'Love, pleasure, and desire. Fulfillment of righteous desires is celebrated as a sacred aim of human life.', icon: '❤️' },
              { title: 'Moksha', hindi: 'मोक्ष', desc: 'Liberation from the cycle of rebirth. The ultimate goal — union with the divine and freedom from suffering.', icon: '🕊️' },
            ].map(pillar => (
              <div key={pillar.title} className="card-divine p-6 text-center group hover:shadow-golden transition-all">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <h3 className="font-display text-gold-400 text-xl mb-1">{pillar.title}</h3>
                <p className="text-saffron-500/80 text-2xl devanagari mb-3">{pillar.hindi}</p>
                <p className="text-ivory/60 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Symbols */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Sacred Symbols</h2>
          <p className="section-subtitle">Each symbol carries profound spiritual significance</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-10">
            {[
              { symbol: 'ॐ', name: 'Om', meaning: 'The primordial sound — the vibration of the universe' },
              { symbol: '卐', name: 'Swastika', meaning: 'Auspiciousness, good fortune, and eternal cycle' },
              { symbol: '🪷', name: 'Lotus', meaning: 'Purity, spiritual awakening, divine beauty' },
              { symbol: '🔱', name: 'Trishul', meaning: 'Shiva\'s trident — three aspects of existence' },
              { symbol: '☸️', name: 'Chakra', meaning: 'Vishnu\'s disc — cosmic wheel of dharma' },
              { symbol: '🐚', name: 'Shankha', meaning: 'Sacred conch — primordial sound of creation' },
            ].map(s => (
              <div key={s.name} className="card-divine p-4 text-center group hover:shadow-golden">
                <div className="text-5xl mb-3 devanagari group-hover:scale-110 transition-transform inline-block"
                  style={s.name === 'Om' ? { fontFamily: 'Noto Sans Devanagari', color: '#D4AF37' } : {}}>
                  {s.symbol}
                </div>
                <h3 className="font-display text-gold-400 text-sm mb-1">{s.name}</h3>
                <p className="text-ivory/50 text-xs leading-snug">{s.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.15), rgba(212,175,55,0.1), rgba(128,0,0,0.2))' }}
        />
        <div className="absolute inset-0 border-y border-gold-700/20" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-gold-400/60 text-sm font-display tracking-widest uppercase mb-4">Begin Your Spiritual Journey</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
            "The eternal path is always open to all"
          </h2>
          <p className="text-ivory/60 mb-8 text-lg">
            Dive into ancient wisdom, discover sacred stories, and connect with the divine through the rich tapestry of Sanatan Dharma.
          </p>
          <Link to="/about" className="btn-primary text-base px-10 py-4">
            Explore Now
          </Link>
        </div>
      </section>
    </div>
  );
}
