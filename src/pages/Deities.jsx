import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deities } from '../data/deities';

function DeityCard({ deity }) {
  return (
    <Link to={`/deities/${deity.id}`} className="deity-card group block">
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${deity.color} flex items-center justify-center text-4xl mx-auto mb-4 group-hover:shadow-golden transition-all duration-300 group-hover:scale-105`}>
        {deity.symbol}
      </div>
      <h3 className="font-display text-gold-400 text-lg mb-0.5">{deity.name}</h3>
      <p className="text-saffron-500/80 text-xl devanagari mb-2">{deity.sanskrit}</p>
      <p className="text-ivory/60 text-sm mb-3">{deity.title}</p>
      <p className="text-gold-600/70 text-xs">{deity.role}</p>
    </Link>
  );
}

function DeityDetail({ deity }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'Story & Origin' },
    { id: 'significance', label: 'Significance' },
    { id: 'mantras', label: 'Mantras' },
    { id: 'festivals', label: 'Festivals' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate('/deities')}
        className="flex items-center gap-2 text-gold-400 hover:text-gold-300 mb-8 font-display text-sm tracking-wider"
      >
        ← Back to All Deities
      </button>

      {/* Hero */}
      <div className={`relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-br ${deity.color} p-0.5`}>
        <div className="bg-dharma-dark rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${deity.color} flex items-center justify-center text-8xl flex-shrink-0 shadow-golden`}>
              {deity.symbol}
            </div>
            <div className="text-center md:text-left">
              <p className="text-saffron-400/70 text-sm font-display tracking-widest uppercase mb-2">{deity.role}</p>
              <h1 className="font-display text-4xl md:text-5xl text-gold-400 mb-2">{deity.name}</h1>
              <p className="text-4xl devanagari text-saffron-500/80 mb-4">{deity.sanskrit}</p>
              <p className="text-ivory/80 text-xl italic mb-6">"{deity.title}"</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="bg-gold-900/30 border border-gold-700/30 rounded px-3 py-1.5">
                  <span className="text-gold-600 mr-2">Consort:</span>
                  <span className="text-ivory/80">{deity.consort}</span>
                </div>
                <div className="bg-gold-900/30 border border-gold-700/30 rounded px-3 py-1.5">
                  <span className="text-gold-600 mr-2">Vehicle:</span>
                  <span className="text-ivory/80">{deity.vehicle}</span>
                </div>
                <div className="bg-gold-900/30 border border-gold-700/30 rounded px-3 py-1.5">
                  <span className="text-gold-600 mr-2">Abode:</span>
                  <span className="text-ivory/80">{deity.abode}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="card-divine p-6 mb-6">
        <p className="text-ivory/80 text-lg leading-relaxed">{deity.description}</p>
      </div>

      {/* Iconography */}
      <div className="card-divine p-6 mb-6">
        <h3 className="font-display text-gold-400 text-sm tracking-widest uppercase mb-3">Sacred Iconography</h3>
        <p className="text-ivory/70 leading-relaxed">{deity.iconography}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded font-display text-xs tracking-wider uppercase transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-saffron-500 text-ivory'
                : 'border border-gold-700/30 text-gold-400/70 hover:border-gold-500/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="card-divine p-8">
        {activeTab === 'story' && (
          <div>
            <h3 className="font-display text-gold-400 text-xl mb-4">Origin & Story</h3>
            <p className="text-ivory/80 leading-relaxed text-lg">{deity.origin}</p>
          </div>
        )}
        {activeTab === 'significance' && (
          <div>
            <h3 className="font-display text-gold-400 text-xl mb-4">Divine Significance</h3>
            <p className="text-ivory/80 leading-relaxed text-lg">{deity.significance}</p>
          </div>
        )}
        {activeTab === 'mantras' && (
          <div>
            <h3 className="font-display text-gold-400 text-xl mb-6">Sacred Mantras</h3>
            <div className="space-y-6">
              {deity.mantras.map((mantra, i) => (
                <div key={i} className="bg-dharma-bg/50 border border-gold-800/20 rounded-lg p-6">
                  <p className="text-gold-300 text-2xl devanagari mb-3 leading-relaxed">{mantra.text}</p>
                  <p className="text-saffron-400/70 text-sm italic mb-2 tracking-wide">{mantra.transliteration}</p>
                  <div className="h-px bg-gold-800/20 my-3" />
                  <p className="text-ivory/70">Meaning: {mantra.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'festivals' && (
          <div>
            <h3 className="font-display text-gold-400 text-xl mb-6">Associated Festivals</h3>
            <div className="flex flex-wrap gap-3">
              {deity.festivals.map(fest => (
                <span key={fest} className="bg-saffron-500/20 border border-saffron-500/30 text-saffron-300 px-4 py-2 rounded-full text-sm">
                  {fest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Deities() {
  const { id } = useParams();
  const [filter, setFilter] = useState('all');

  if (id) {
    const deity = deities.find(d => d.id === id);
    if (!deity) return <div className="min-h-screen flex items-center justify-center text-gold-400">Deity not found</div>;
    return (
      <div className="pt-20 min-h-screen">
        <DeityDetail deity={deity} />
      </div>
    );
  }

  const categories = [
    { id: 'all', label: 'All Deities' },
    { id: 'trimurti', label: 'Trimurti', ids: ['brahma', 'vishnu', 'shiva'] },
    { id: 'devi', label: 'Devi (Goddesses)', ids: ['durga', 'lakshmi', 'saraswati', 'kali'] },
    { id: 'avatars', label: 'Avatars', ids: ['krishna', 'ram'] },
    { id: 'others', label: 'Others', ids: ['ganesh', 'hanuman', 'kartikeya'] },
  ];

  const filteredDeities = filter === 'all'
    ? deities
    : deities.filter(d => categories.find(c => c.id === filter)?.ids?.includes(d.id));

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }}
        />
        <div className="relative">
          <p className="text-saffron-500/70 font-display text-sm tracking-widest uppercase mb-4">Divine Beings</p>
          <h1 className="section-title">Gods & Goddesses</h1>
          <div className="gold-divider" />
          <p className="section-subtitle">
            The Hindu pantheon encompasses thousands of divine beings. Explore the major deities —
            each a face of the one Supreme Reality.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-8 max-w-7xl mx-auto">
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded font-display text-xs tracking-wider uppercase transition-all ${
                filter === cat.id
                  ? 'bg-saffron-500 text-ivory shadow-saffron'
                  : 'border border-gold-700/30 text-gold-400/70 hover:border-gold-500/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredDeities.map(deity => (
            <DeityCard key={deity.id} deity={deity} />
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-dharma-dark border border-gold-700/20 rounded-xl p-8 text-center">
          <h3 className="font-display text-gold-400 text-xl mb-4">The Hindu Understanding of God</h3>
          <p className="text-ivory/70 leading-relaxed text-lg">
            Hinduism teaches that there is one Supreme Reality (Brahman) — infinite, eternal, and beyond form.
            The many deities are manifestations and aspects of this one Divine. Worshipping any deity is ultimately
            worshipping the one Supreme Being. This principle is known as <em className="text-saffron-400">Ekam Sat Vipra Bahudha Vadanti</em>{' '}
            — "Truth is one, the wise call it by many names."
          </p>
        </div>
      </div>
    </div>
  );
}
