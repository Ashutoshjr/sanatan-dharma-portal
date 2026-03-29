import { useState } from 'react';
import { aartis } from '../data/aartis';

function DiyaIcon() {
  return (
    <span className="inline-flex flex-col items-center">
      <span className="diya-flame text-2xl">🔥</span>
    </span>
  );
}

export default function Aarti() {
  const [selectedAarti, setSelectedAarti] = useState(aartis[0]);
  const [viewMode, setViewMode] = useState('hindi'); // hindi, roman, meaning, all

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255,107,0,0.1) 0%, transparent 70%)' }}
        />
        <div className="relative">
          <div className="flex justify-center gap-4 mb-6">
            <DiyaIcon />
            <DiyaIcon />
            <DiyaIcon />
          </div>
          <p className="text-saffron-500/70 font-display text-sm tracking-widest uppercase mb-4">Sacred Hymns</p>
          <h1 className="section-title">Aarti Sangrah</h1>
          <p className="text-4xl devanagari text-saffron-500/70 mb-4">आरती संग्रह</p>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Aarti is the ritual of offering light to the divine — a devotional practice of love and gratitude.
            "Aarti" comes from the Sanskrit "Aratrika" meaning the light that removes darkness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar — Aarti list */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-display text-gold-400 text-sm tracking-widest uppercase mb-4 px-1">
                Select Aarti
              </h3>
              <div className="space-y-2">
                {aartis.map(aarti => (
                  <button
                    key={aarti.id}
                    onClick={() => setSelectedAarti(aarti)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      selectedAarti.id === aarti.id
                        ? 'bg-saffron-500/20 border-saffron-500/50 shadow-saffron'
                        : 'bg-dharma-dark border-gold-800/20 hover:border-gold-500/40 hover:bg-dharma-dark'
                    }`}
                  >
                    <div className="font-display text-sm text-gold-400 mb-0.5">{aarti.name}</div>
                    <div className="text-ivory/50 text-xs">{aarti.deity}</div>
                    <div className="text-saffron-500/60 text-sm devanagari mt-1">{aarti.devanagari}</div>
                  </button>
                ))}
              </div>

              {/* Aarti significance */}
              <div className="mt-6 bg-dharma-dark border border-gold-800/20 rounded-lg p-4">
                <h4 className="font-display text-gold-400 text-xs tracking-widest uppercase mb-3">About Aarti</h4>
                <p className="text-ivory/60 text-xs leading-relaxed">
                  Aarti is performed by moving a lit lamp in circular motions before the deity.
                  The light represents knowledge that dispels the darkness of ignorance.
                  Typically performed at sunrise and sunset, marking the transitions of the day.
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Aarti header */}
            <div className="card-divine p-8 mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron-700 to-amber-900 rounded-full flex items-center justify-center text-3xl shadow-saffron flex-shrink-0">
                  🪔
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="font-display text-gold-400 text-2xl md:text-3xl">{selectedAarti.name}</h2>
                  <p className="text-3xl devanagari text-saffron-500/80 mt-1">{selectedAarti.devanagari}</p>
                  <p className="text-ivory/50 text-sm mt-1">Deity: {selectedAarti.deity}</p>
                </div>
              </div>
            </div>

            {/* View mode toggle */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[
                { id: 'hindi', label: 'हिंदी (Devanagari)', short: 'हिंदी' },
                { id: 'roman', label: 'Transliteration', short: 'Roman' },
                { id: 'meaning', label: 'English Meaning', short: 'Meaning' },
                { id: 'all', label: 'All Versions', short: 'All' },
              ].map(mode => (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`px-4 py-2 rounded font-display text-xs tracking-wider uppercase transition-all ${
                    viewMode === mode.id
                      ? 'bg-gold-500 text-dharma-bg'
                      : 'border border-gold-700/30 text-gold-400/70 hover:border-gold-500/50'
                  }`}
                >
                  <span className="hidden sm:inline">{mode.label}</span>
                  <span className="sm:hidden">{mode.short}</span>
                </button>
              ))}
            </div>

            {/* Aarti verses */}
            <div className="space-y-6">
              {selectedAarti.verses.map((verse, i) => (
                <div key={i} className="card-divine p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-full bg-saffron-500/20 border border-saffron-500/30 flex items-center justify-center">
                      <span className="text-saffron-400 font-display text-xs">{i + 1}</span>
                    </div>
                    <div className="flex-1 h-px bg-gold-800/30" />
                    <span className="text-gold-700/50 text-lg">🪔</span>
                  </div>

                  {(viewMode === 'hindi' || viewMode === 'all') && (
                    <div className="mb-4">
                      {viewMode === 'all' && (
                        <p className="text-xs text-gold-600 font-display tracking-widest uppercase mb-2">Devanagari</p>
                      )}
                      <p className="aarti-text text-gold-300 leading-loose whitespace-pre-line">{verse.hindi}</p>
                    </div>
                  )}

                  {viewMode === 'all' && <div className="h-px bg-gold-800/20 my-4" />}

                  {(viewMode === 'roman' || viewMode === 'all') && (
                    <div className="mb-4">
                      {viewMode === 'all' && (
                        <p className="text-xs text-gold-600 font-display tracking-widest uppercase mb-2">Transliteration</p>
                      )}
                      <p className="text-saffron-400/80 text-lg italic leading-loose whitespace-pre-line">{verse.transliteration}</p>
                    </div>
                  )}

                  {viewMode === 'all' && <div className="h-px bg-gold-800/20 my-4" />}

                  {(viewMode === 'meaning' || viewMode === 'all') && (
                    <div>
                      {viewMode === 'all' && (
                        <p className="text-xs text-gold-600 font-display tracking-widest uppercase mb-2">English Meaning</p>
                      )}
                      <p className="text-ivory/70 text-base leading-relaxed">{verse.meaning}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* How to perform Aarti */}
            <div className="mt-10 bg-dharma-dark border border-gold-700/20 rounded-xl p-8">
              <h3 className="font-display text-gold-400 text-xl mb-6 flex items-center gap-3">
                <span>🪔</span> How to Perform Aarti
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { step: '1', title: 'Preparation', desc: 'Bathe and wear clean clothes. Light a diya (oil lamp) or ghee lamp. Place it on an aarti thali (plate) with flowers, incense, and kumkum.' },
                  { step: '2', title: 'Position', desc: 'Stand or sit facing the deity image or idol. Ring a bell with the left hand to invoke divine presence and ward off negative energies.' },
                  { step: '3', title: 'Circular Movement', desc: 'Move the lit lamp in a clockwise circular motion before the deity, starting from the feet upward. Do this 7 times.' },
                  { step: '4', title: 'Singing', desc: 'Sing or chant the aarti with full devotion. The vibrations of the song are as important as the physical ritual.' },
                  { step: '5', title: 'Receiving Blessings', desc: 'After the aarti, pass the lamp to all devotees present. They hold their hands over the flame and touch their eyes and forehead to receive the divine blessings.' },
                  { step: '6', title: 'Prasad', desc: 'Offer food or sweets to the deity and distribute it as prasad (blessed food) to all present.' },
                ].map(item => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-saffron-500/20 rounded-full flex items-center justify-center text-saffron-400 font-display font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-display text-gold-400 text-sm mb-1">{item.title}</h4>
                      <p className="text-ivory/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
