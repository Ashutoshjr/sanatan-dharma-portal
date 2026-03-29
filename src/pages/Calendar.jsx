import { useState } from 'react';
import { festivals2025, monthlyPanchang, shlokas } from '../data/calendar';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const HINDU_MONTHS = [
  'Magha', 'Phalguna', 'Chaitra', 'Vaishakha', 'Jyeshtha', 'Ashadha',
  'Shravana', 'Bhadrapada', 'Ashwina', 'Kartika', 'Margashirsha', 'Pausha'
];

function PanchangCard({ day, data }) {
  const isSpecial = day === 11 || day === 15 || day === 30 || day === 1;
  const festival = festivals2025.find(f => {
    const d = new Date(f.date);
    return d.getDate() === day;
  });

  return (
    <div className={`min-h-24 p-2 rounded-lg border transition-all cursor-pointer hover:shadow-golden ${
      festival
        ? 'bg-saffron-500/15 border-saffron-500/40'
        : isSpecial
          ? 'bg-gold-900/20 border-gold-700/40'
          : 'bg-dharma-dark border-gold-800/15 hover:border-gold-700/30'
    }`}>
      <div className="flex items-start justify-between mb-1">
        <span className={`font-display text-sm font-bold ${festival ? 'text-saffron-400' : 'text-ivory/70'}`}>{day}</span>
        {data && (
          <span className={`text-xs px-1 rounded ${
            data.paksha === 'Shukla' ? 'text-gold-300/70' : 'text-blue-300/70'
          }`}>
            {data.paksha === 'Shukla' ? '◯' : '●'}
          </span>
        )}
      </div>
      {data && (
        <div className="space-y-0.5">
          <p className="text-gold-500/70 text-xs leading-tight truncate">{data.tithi}</p>
          <p className="text-ivory/40 text-xs truncate">{data.nakshatra}</p>
        </div>
      )}
      {festival && (
        <p className="text-saffron-400 text-xs font-semibold mt-1 leading-tight">{festival.name}</p>
      )}
    </div>
  );
}

function FestivalBadge({ type }) {
  const colors = {
    festival: 'bg-saffron-500/20 text-saffron-400 border-saffron-500/30',
    vrat: 'bg-gold-500/20 text-gold-400 border-gold-500/30',
    purnima: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs border font-display tracking-wider uppercase ${colors[type] || colors.festival}`}>
      {type}
    </span>
  );
}

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [activeTab, setActiveTab] = useState('calendar');

  const currentYear = 2025;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const monthFestivals = festivals2025.filter(f => {
    const d = new Date(f.date);
    return d.getMonth() === currentMonth;
  });

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="relative">
          <p className="text-saffron-500/70 font-display text-sm tracking-widest uppercase mb-4">Sacred Time</p>
          <h1 className="section-title">Hindu Panchang</h1>
          <p className="text-4xl devanagari text-saffron-500/70 mb-4">पञ्चाङ्ग</p>
          <div className="gold-divider" />
          <p className="section-subtitle">
            The Hindu Panchang (almanac) is a comprehensive calendar based on both lunar and solar cycles.
            "Panchang" means "five limbs" — Tithi, Vara, Nakshatra, Yoga, and Karan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {[
            { id: 'calendar', label: 'Monthly Calendar' },
            { id: 'festivals', label: 'Festival Guide' },
            { id: 'panchang', label: 'Panchang Details' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded font-display text-xs tracking-wider uppercase transition-all ${
                activeTab === tab.id
                  ? 'bg-saffron-500 text-ivory shadow-saffron'
                  : 'border border-gold-700/30 text-gold-400/70 hover:border-gold-500/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div>
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6 max-w-3xl mx-auto">
              <button
                onClick={() => setCurrentMonth(m => Math.max(0, m - 1))}
                className="btn-outline py-2 px-4 text-xs"
              >
                ← Prev
              </button>
              <div className="text-center">
                <h2 className="font-display text-2xl text-gold-400">{MONTHS[currentMonth]} {currentYear}</h2>
                <p className="text-saffron-400/70 text-sm devanagari">
                  {HINDU_MONTHS[currentMonth]} — {HINDU_MONTHS[(currentMonth + 1) % 12]}
                </p>
              </div>
              <button
                onClick={() => setCurrentMonth(m => Math.min(11, m + 1))}
                className="btn-outline py-2 px-4 text-xs"
              >
                Next →
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="bg-dharma-dark border border-gold-800/30 rounded-2xl p-4 md:p-6 max-w-5xl mx-auto">
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center py-2 font-display text-xs text-gold-500/70 tracking-widest uppercase">
                    {day}
                  </div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for first day offset */}
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {/* Day cells */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const panchangIndex = (i) % monthlyPanchang.length;
                  return (
                    <PanchangCard
                      key={day}
                      day={day}
                      data={monthlyPanchang[panchangIndex]}
                    />
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-saffron-500/30 border border-saffron-500/50" />
                <span className="text-ivory/60 text-xs">Festival Day</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gold-900/30 border border-gold-700/50" />
                <span className="text-ivory/60 text-xs">Ekadashi / Purnima</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-300/70 text-sm">◯</span>
                <span className="text-ivory/60 text-xs">Shukla Paksha (Waxing Moon)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-300/70 text-sm">●</span>
                <span className="text-ivory/60 text-xs">Krishna Paksha (Waning Moon)</span>
              </div>
            </div>

            {/* This month's festivals */}
            {monthFestivals.length > 0 && (
              <div className="mt-10 max-w-5xl mx-auto">
                <h3 className="font-display text-gold-400 text-xl mb-6 text-center">
                  Festivals in {MONTHS[currentMonth]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {monthFestivals.map(fest => (
                    <div key={fest.name} className="card-divine p-5 hover:shadow-golden cursor-pointer"
                      onClick={() => setSelectedFestival(fest)}>
                      <div className="flex items-center justify-between mb-2">
                        <FestivalBadge type={fest.type} />
                        <span className="text-gold-600 text-xs font-display">{new Date(fest.date).getDate()} {MONTHS[new Date(fest.date).getMonth()]}</span>
                      </div>
                      <h4 className="font-display text-gold-400 text-base mb-1">{fest.name}</h4>
                      <p className="text-saffron-500/70 text-sm devanagari mb-2">{fest.hindi}</p>
                      <p className="text-ivory/60 text-sm">{fest.description.slice(0, 80)}...</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Festivals Tab */}
        {activeTab === 'festivals' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {festivals2025.map(fest => (
                <div
                  key={fest.name}
                  className="card-divine p-6 hover:shadow-golden cursor-pointer transition-all"
                  onClick={() => setSelectedFestival(selectedFestival?.name === fest.name ? null : fest)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <FestivalBadge type={fest.type} />
                    </div>
                    <span className="text-gold-600 text-sm font-display">{fest.date}</span>
                  </div>
                  <h3 className="font-display text-gold-400 text-xl mb-1">{fest.name}</h3>
                  <p className="text-saffron-500/70 text-xl devanagari mb-3">{fest.hindi}</p>
                  <p className="text-ivory/70 text-sm leading-relaxed mb-3">{fest.description}</p>
                  <p className="text-gold-600 text-xs mb-3">
                    <span className="text-gold-500">Deity: </span>{fest.deity}
                  </p>

                  {selectedFestival?.name === fest.name && (
                    <div className="mt-4 pt-4 border-t border-gold-800/30">
                      <h4 className="font-display text-saffron-400 text-xs tracking-widest uppercase mb-3">Rituals & Customs</h4>
                      <ul className="space-y-2">
                        {fest.rituals.map(ritual => (
                          <li key={ritual} className="flex items-start gap-2 text-ivory/70 text-sm">
                            <span className="text-gold-500 mt-0.5">•</span>
                            {ritual}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Panchang Tab */}
        {activeTab === 'panchang' && (
          <div className="max-w-5xl mx-auto">
            {/* Five limbs explanation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {[
                { name: 'Tithi', hindi: 'तिथि', desc: 'Lunar day — each of the 30 divisions of the lunar month. Determines auspiciousness.', icon: '🌙' },
                { name: 'Vara', hindi: 'वार', desc: 'Day of the week. Each day is ruled by a different deity and planet.', icon: '☀️' },
                { name: 'Nakshatra', hindi: 'नक्षत्र', desc: 'Lunar mansion — 27 star clusters that the moon passes through.', icon: '⭐' },
                { name: 'Yoga', hindi: 'योग', desc: 'Auspicious or inauspicious combination of the sun and moon\'s longitudes.', icon: '🔮' },
                { name: 'Karan', hindi: 'करण', desc: 'Half of a Tithi — there are 11 Karans, cycling through the month.', icon: '⏱️' },
              ].map(limb => (
                <div key={limb.name} className="card-divine p-5 text-center hover:shadow-golden">
                  <div className="text-3xl mb-3">{limb.icon}</div>
                  <h3 className="font-display text-gold-400 text-base mb-1">{limb.name}</h3>
                  <p className="text-saffron-500/70 text-xl devanagari mb-3">{limb.hindi}</p>
                  <p className="text-ivory/60 text-xs leading-relaxed">{limb.desc}</p>
                </div>
              ))}
            </div>

            {/* Sample Panchang table */}
            <div className="bg-dharma-dark border border-gold-800/30 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gold-800/20">
                <h3 className="font-display text-gold-400 text-lg">
                  Sample Panchang — {MONTHS[currentMonth]} {currentYear}
                </h3>
                <p className="text-ivory/50 text-sm mt-1">Representative panchang data for the current month</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gold-800/20">
                      {['Day', 'Tithi', 'Paksha', 'Nakshatra', 'Yoga', 'Karan'].map(h => (
                        <th key={h} className="text-left px-4 py-3 font-display text-xs text-gold-500/70 tracking-widest uppercase">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyPanchang.slice(0, 15).map((row, i) => (
                      <tr key={i} className={`border-b border-gold-800/10 hover:bg-gold-900/10 ${
                        row.tithi === 'Purnima' ? 'bg-gold-900/20' :
                        row.tithi === 'Amavasya' ? 'bg-blue-900/10' :
                        row.tithi === 'Ekadashi' ? 'bg-saffron-900/15' : ''
                      }`}>
                        <td className="px-4 py-3 text-ivory/70 text-sm font-display">{i + 1}</td>
                        <td className="px-4 py-3 text-gold-400 text-sm">{row.tithi}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs ${row.paksha === 'Shukla' ? 'text-gold-300' : 'text-blue-300'}`}>
                            {row.paksha}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-ivory/60 text-sm">{row.nakshatra}</td>
                        <td className="px-4 py-3 text-ivory/60 text-sm">{row.yoga}</td>
                        <td className="px-4 py-3 text-ivory/60 text-sm">{row.karan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Paksha explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="card-divine p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌕</span>
                  <h3 className="font-display text-gold-400 text-lg">Shukla Paksha</h3>
                </div>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  The bright half of the lunar month — from new moon to full moon.
                  Considered auspicious for new beginnings, ceremonies, and positive activities.
                  The moon grows (waxes) during this period, symbolizing growth and prosperity.
                </p>
              </div>
              <div className="card-divine p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌑</span>
                  <h3 className="font-display text-gold-400 text-lg">Krishna Paksha</h3>
                </div>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  The dark half of the lunar month — from full moon to new moon.
                  Associated with introspection, letting go, and ancestor rituals (Pitru Tarpan).
                  The moon decreases (wanes) during this period, symbolizing surrender and release.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
