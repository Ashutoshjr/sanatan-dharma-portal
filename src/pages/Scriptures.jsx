import { useState } from 'react';
import { geetaChapters, keyVerses, vedasSummary } from '../data/scriptures';
import { shlokas } from '../data/calendar';

export default function Scriptures() {
  const [activeSection, setActiveSection] = useState('gita');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [dailyVerse] = useState(() => shlokas[Math.floor(Math.random() * shlokas.length)]);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="relative">
          <p className="text-saffron-500/70 font-display text-sm tracking-widest uppercase mb-4">Sacred Knowledge</p>
          <h1 className="section-title">Scriptures & Texts</h1>
          <p className="text-3xl devanagari text-saffron-500/70 mb-4">शास्त्र</p>
          <div className="gold-divider" />
          <p className="section-subtitle">
            The vast ocean of Hindu sacred literature — from the ancient Vedas to the beloved Bhagavad Gita
          </p>
        </div>
      </div>

      {/* Daily verse banner */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <div className="bg-gradient-to-r from-dharma-dark via-saffron-900/20 to-dharma-dark border border-gold-700/30 rounded-xl p-6 text-center">
          <p className="text-xs font-display text-gold-500/70 tracking-widest uppercase mb-3">Daily Verse</p>
          <p className="text-gold-300 text-xl devanagari leading-relaxed mb-3">{dailyVerse.sanskrit}</p>
          <p className="text-saffron-400/70 text-sm italic mb-3">{dailyVerse.transliteration}</p>
          <p className="text-ivory/70">{dailyVerse.meaning}</p>
          <p className="text-gold-600/70 text-xs mt-3">— {dailyVerse.source}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Section tabs */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {[
            { id: 'gita', label: 'Bhagavad Gita' },
            { id: 'vedas', label: 'The Vedas' },
            { id: 'verses', label: 'Key Verses' },
            { id: 'epics', label: 'Epics' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`px-6 py-2.5 rounded font-display text-xs tracking-wider uppercase transition-all ${
                activeSection === tab.id
                  ? 'bg-saffron-500 text-ivory shadow-saffron'
                  : 'border border-gold-700/30 text-gold-400/70 hover:border-gold-500/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bhagavad Gita */}
        {activeSection === 'gita' && (
          <div className="max-w-5xl mx-auto">
            <div className="card-divine p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-5xl">📖</div>
                <div>
                  <h2 className="font-display text-gold-400 text-2xl mb-2">Bhagavad Gita</h2>
                  <p className="text-3xl devanagari text-saffron-500/70 mb-4">भगवद् गीता</p>
                  <p className="text-ivory/80 leading-relaxed">
                    The "Song of God" — a 700-verse dialogue between Prince Arjuna and his charioteer Krishna
                    on the battlefield of Kurukshetra. It is part of the Mahabharata (Book 6) and is considered
                    the quintessential scripture of Hinduism, addressing the deepest questions of life, duty,
                    devotion, and liberation.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-dharma-bg/50 rounded p-3 text-center">
                      <p className="font-display text-gold-400 text-xl">18</p>
                      <p className="text-ivory/60 text-xs">Chapters</p>
                    </div>
                    <div className="bg-dharma-bg/50 rounded p-3 text-center">
                      <p className="font-display text-gold-400 text-xl">700</p>
                      <p className="text-ivory/60 text-xs">Verses (Shlokas)</p>
                    </div>
                    <div className="bg-dharma-bg/50 rounded p-3 text-center">
                      <p className="font-display text-gold-400 text-xl">3</p>
                      <p className="text-ivory/60 text-xs">Paths (Yoga)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter list */}
            <div className="grid grid-cols-1 gap-3">
              {geetaChapters.map(ch => (
                <div
                  key={ch.chapter}
                  className={`card-divine p-5 cursor-pointer transition-all ${
                    selectedChapter === ch.chapter ? 'border-gold-500/50 shadow-golden' : ''
                  }`}
                  onClick={() => setSelectedChapter(selectedChapter === ch.chapter ? null : ch.chapter)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-saffron-700 to-amber-900 rounded-full flex items-center justify-center font-display text-gold-300 font-bold text-sm flex-shrink-0">
                      {ch.chapter}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-display text-gold-400 text-base">{ch.title}</h3>
                          <p className="text-saffron-400/70 text-sm italic">{ch.subtitle}</p>
                        </div>
                        <span className="text-gold-600/70 text-xs ml-4 whitespace-nowrap">{ch.verses} verses</span>
                      </div>
                      {selectedChapter === ch.chapter && (
                        <p className="text-ivory/70 text-sm leading-relaxed mt-3 pt-3 border-t border-gold-800/20">
                          {ch.summary}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The Vedas */}
        {activeSection === 'vedas' && (
          <div className="max-w-5xl mx-auto">
            <div className="card-divine p-8 mb-8">
              <h2 className="font-display text-gold-400 text-2xl mb-4">The Vedas — Sacred Knowledge</h2>
              <p className="text-ivory/80 leading-relaxed text-lg mb-4">
                The Vedas are the oldest scriptures of Sanatan Dharma, composed in Vedic Sanskrit.
                "Veda" means knowledge. They are considered <em className="text-saffron-400">Shruti</em> ("that which is heard") —
                eternal, divine wisdom heard by enlightened seers (Rishis) in deep meditation.
              </p>
              <p className="text-ivory/70 leading-relaxed">
                The Vedas consist of four collections: Rigveda, Yajurveda, Samaveda, and Atharvaveda.
                Each Veda has four parts: Samhitas (hymns), Brahmanas (rituals), Aranyakas (forest texts), and Upanishads (philosophy).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vedasSummary.map((veda, i) => (
                <div key={veda.name} className="card-divine p-6 hover:shadow-golden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-saffron-700 to-amber-900 rounded-full flex items-center justify-center font-display text-gold-300 text-lg font-bold">
                      {['ऋ', 'य', 'सा', 'अ'][i]}
                    </div>
                    <div>
                      <h3 className="font-display text-gold-400 text-xl">{veda.name}</h3>
                      <p className="text-saffron-500/70 text-xl devanagari">{veda.hindi}</p>
                    </div>
                  </div>
                  <p className="text-ivory/80 text-sm leading-relaxed mb-4">{veda.description}</p>
                  <div className="bg-dharma-bg/50 rounded-lg p-4 mb-3">
                    <p className="text-gold-500/70 text-xs font-display tracking-wider uppercase mb-2">Contents</p>
                    <p className="text-ivory/60 text-sm">{veda.contents}</p>
                  </div>
                  <p className="text-gold-600/60 text-xs">{veda.verses}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-dharma-dark border border-gold-700/20 rounded-xl p-8">
              <h3 className="font-display text-gold-400 text-xl mb-4">The Upanishads</h3>
              <p className="text-ivory/80 leading-relaxed mb-6">
                The Upanishads (108 in total, 10-13 principal ones) form the philosophical culmination of the Vedas.
                They explore the nature of Brahman, Atman, and the cosmos through dialogues between teacher and student.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: 'Brihadaranyaka', meaning: 'Forest of great knowledge' },
                  { name: 'Chandogya', meaning: 'Of the chants' },
                  { name: 'Taittiriya', meaning: 'Of the partridge school' },
                  { name: 'Kena', meaning: 'By whom?' },
                  { name: 'Katha', meaning: 'Story of Nachiketa' },
                  { name: 'Isha', meaning: 'The Lord' },
                  { name: 'Mundaka', meaning: 'The razor\'s edge' },
                  { name: 'Mandukya', meaning: 'Of the frog' },
                ].map(u => (
                  <div key={u.name} className="bg-dharma-bg/50 border border-gold-800/20 rounded p-3">
                    <p className="text-gold-400 text-sm font-display">{u.name}</p>
                    <p className="text-ivory/50 text-xs mt-1">{u.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Verses */}
        {activeSection === 'verses' && (
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-gold-400 text-xl text-center mb-8">
              Essential Shlokas from the Bhagavad Gita
            </h3>
            <div className="space-y-8">
              {keyVerses.map(v => (
                <div key={`${v.chapter}-${v.verse}`} className="card-divine p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-saffron-500/20 border border-saffron-500/30 text-saffron-400 text-xs px-3 py-1.5 rounded font-display">
                      Chapter {v.chapter}, Verse {v.verse}
                    </span>
                  </div>
                  <p className="text-gold-300 text-xl md:text-2xl devanagari leading-loose mb-4">{v.sanskrit}</p>
                  <div className="h-px bg-gold-800/30 my-4" />
                  <p className="text-ivory/80 text-lg leading-relaxed mb-4">"{v.english}"</p>
                  <p className="text-ivory/50 text-sm italic">{v.context}</p>
                </div>
              ))}
            </div>

            {/* All shlokas */}
            <div className="mt-10">
              <h3 className="font-display text-gold-400 text-xl text-center mb-8">From the Upanishads & Puranas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {shlokas.map((s, i) => (
                  <div key={i} className="card-divine p-6 hover:shadow-golden">
                    <p className="text-gold-300 text-lg devanagari leading-loose mb-3">{s.sanskrit}</p>
                    <p className="text-saffron-400/70 text-sm italic mb-3">{s.transliteration}</p>
                    <p className="text-ivory/70 text-sm">{s.meaning}</p>
                    <p className="text-gold-600/60 text-xs mt-3">— {s.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Epics */}
        {activeSection === 'epics' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ramayana */}
              <div className="card-divine p-8">
                <div className="text-4xl mb-4">🏹</div>
                <h2 className="font-display text-gold-400 text-2xl mb-2">Ramayana</h2>
                <p className="text-3xl devanagari text-saffron-500/70 mb-4">रामायण</p>
                <div className="space-y-2 mb-6 text-sm text-ivory/60">
                  <p><span className="text-gold-600">Author:</span> Maharishi Valmiki</p>
                  <p><span className="text-gold-600">Verses:</span> ~24,000 (Valmiki), ~12,800 (Tulsidas's Ramcharitmanas)</p>
                  <p><span className="text-gold-600">Books:</span> 7 Kandas (Bala, Ayodhya, Aranya, Kishkindha, Sundara, Yuddha, Uttara)</p>
                </div>
                <p className="text-ivory/80 text-sm leading-relaxed mb-6">
                  The epic of Lord Rama — his birth in Ayodhya, his 14-year exile with Sita and Lakshmana,
                  the abduction of Sita by Ravana, the alliance with Sugriva and Hanuman, and the great battle
                  to rescue Sita and restore dharma.
                </p>
                <div className="space-y-4">
                  <h4 className="font-display text-gold-400 text-sm tracking-wider uppercase">Key Teachings</h4>
                  {[
                    'Honor and keep your promises (word given must be kept)',
                    'A son\'s devotion to his father and mother',
                    'Fraternal love and loyalty (Lakshmana\'s devotion to Rama)',
                    'The ideal wife — Sita\'s devotion and strength',
                    'Perfect servant-devotion — Hanuman\'s love for Rama',
                    'Righteous rule (Rama Rajya) as the ideal of governance',
                  ].map(t => (
                    <div key={t} className="flex items-start gap-2">
                      <span className="text-saffron-500 mt-0.5 text-sm">•</span>
                      <p className="text-ivory/70 text-sm">{t}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mahabharata */}
              <div className="card-divine p-8">
                <div className="text-4xl mb-4">⚔️</div>
                <h2 className="font-display text-gold-400 text-2xl mb-2">Mahabharata</h2>
                <p className="text-3xl devanagari text-saffron-500/70 mb-4">महाभारत</p>
                <div className="space-y-2 mb-6 text-sm text-ivory/60">
                  <p><span className="text-gold-600">Author:</span> Maharishi Vyasa (Krishna Dvaipayana)</p>
                  <p><span className="text-gold-600">Verses:</span> ~100,000+ (world's longest epic poem)</p>
                  <p><span className="text-gold-600">Books:</span> 18 Parvas (books)</p>
                </div>
                <p className="text-ivory/80 text-sm leading-relaxed mb-6">
                  The great war between the Pandavas and Kauravas — cousins fighting over the kingdom of Hastinapura.
                  It contains the Bhagavad Gita, countless moral tales, philosophy, and wisdom about every aspect of dharmic life.
                </p>
                <div className="space-y-4">
                  <h4 className="font-display text-gold-400 text-sm tracking-wider uppercase">Key Teachings</h4>
                  {[
                    'Dharma must be upheld even at great personal cost',
                    'The consequences of ego, greed, and jealousy (Kauravas)',
                    'Truth and righteousness ultimately prevail',
                    'The Bhagavad Gita — the universal scripture of duty',
                    'Friendship and loyalty (Krishna and the Pandavas)',
                    '"Vyasochhishtam jagat sarvam" — all of life is contained in Vyasa',
                  ].map(t => (
                    <div key={t} className="flex items-start gap-2">
                      <span className="text-saffron-500 mt-0.5 text-sm">•</span>
                      <p className="text-ivory/70 text-sm">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
