import { useState } from 'react';
import { vedasSummary } from '../data/scriptures';

const concepts = [
  {
    title: 'Brahman',
    hindi: 'ब्रह्मन्',
    icon: '∞',
    description: 'The ultimate, unchanging reality that underlies all existence. Brahman is infinite, eternal, and beyond all description — the source and ground of all being.',
    quote: '"Sarvam khalvidam brahma" — All of this is indeed Brahman. (Chandogya Upanishad)',
  },
  {
    title: 'Atman',
    hindi: 'आत्मन्',
    icon: '✦',
    description: 'The individual soul — the eternal, indestructible essence within every living being. The Atman is ultimately identical with Brahman (the universal soul).',
    quote: '"Tat tvam asi" — That (Brahman) thou art. (Chandogya Upanishad)',
  },
  {
    title: 'Dharma',
    hindi: 'धर्म',
    icon: '⚖️',
    description: 'Cosmic order, righteous duty, and the moral law that governs the universe and individual conduct. Each person has their own dharma based on their nature and stage of life.',
    quote: '"Ahimsa paramo dharma" — Non-violence is the supreme dharma.',
  },
  {
    title: 'Karma',
    hindi: 'कर्म',
    icon: '⚙️',
    description: 'The universal law of cause and effect. Every action creates impressions that shape future experiences. Liberation comes when karma is exhausted through righteous living.',
    quote: '"As you sow, so shall you reap" — the universal law of karma.',
  },
  {
    title: 'Samsara',
    hindi: 'संसार',
    icon: '🔄',
    description: 'The cycle of death and rebirth. The soul transmigrates from body to body based on accumulated karma, seeking eventual liberation (Moksha) from this cycle.',
    quote: '"The soul is never born nor dies at any time." — Bhagavad Gita 2.20',
  },
  {
    title: 'Moksha',
    hindi: 'मोक्ष',
    icon: '🕊️',
    description: 'Liberation from the cycle of birth and death. The ultimate goal of human life — the realization of one\'s true nature as identical with Brahman.',
    quote: '"Brahma satyam jagan mithya, jivo brahmaiva naparah" — Brahman alone is real; the world is an appearance; the individual soul is Brahman itself.',
  },
  {
    title: 'Maya',
    hindi: 'माया',
    icon: '🌊',
    description: 'Illusion or the creative power that makes the world appear separate from Brahman. Maya is the veil that hides the true nature of reality and keeps souls bound.',
    quote: 'Maya is like a magic show — real in experience, but not the ultimate truth.',
  },
  {
    title: 'Yoga',
    hindi: 'योग',
    icon: '🧘',
    description: 'Union with the Divine. There are many paths of yoga: Jnana (knowledge), Bhakti (devotion), Karma (action), and Raja (royal path of meditation).',
    quote: '"Yoga is the cessation of the movements of the mind." — Yoga Sutras 1.2',
  },
];

const philosophies = [
  { name: 'Advaita Vedanta', founder: 'Adi Shankaracharya', desc: 'Non-dualism — Brahman and Atman are ultimately one. The appearance of diversity is Maya (illusion).' },
  { name: 'Dvaita Vedanta', founder: 'Madhvacharya', desc: 'Dualism — God (Vishnu) and the individual soul are eternally distinct. Devotion is the path.' },
  { name: 'Vishishtadvaita', founder: 'Ramanujacharya', desc: 'Qualified non-dualism — souls and matter are real but exist within and as part of Brahman.' },
  { name: 'Mimamsa', founder: 'Jaimini', desc: 'Focus on Vedic rituals and dharma. Emphasizes the eternal nature of the Vedas and the importance of ritual.' },
  { name: 'Samkhya', founder: 'Kapila', desc: 'Dualism of Purusha (consciousness) and Prakriti (matter). Foundation of classical Yoga philosophy.' },
  { name: 'Nyaya', founder: 'Gautama', desc: 'Logic and epistemology. Valid sources of knowledge include perception, inference, and testimony.' },
];

export default function About() {
  const [activeConcept, setActiveConcept] = useState(null);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }}
        />
        <div className="relative">
          <p className="text-saffron-500/70 font-display text-sm tracking-widest uppercase mb-4">The Eternal Way</p>
          <h1 className="section-title">About Sanatan Dharma</h1>
          <p className="text-3xl devanagari text-saffron-500/70 mb-4">सनातन धर्म</p>
          <div className="gold-divider" />
          <p className="section-subtitle max-w-3xl">
            The world's oldest living religion, Sanatan Dharma (Hinduism) is not merely a religion
            but a complete way of life — a civilization, a philosophy, and a path to the divine.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">

        {/* Introduction */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '5000+', label: 'Years of Wisdom', icon: '📜' },
              { stat: '1.2B+', label: 'Followers Worldwide', icon: '🌍' },
              { stat: '330M+', label: 'Named Deities', icon: '🙏' },
            ].map(s => (
              <div key={s.label} className="card-divine p-6 text-center hover:shadow-golden">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="font-display text-3xl text-gold-400 mb-1">{s.stat}</div>
                <div className="text-ivory/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="card-divine p-8 mt-8">
            <h2 className="font-display text-gold-400 text-2xl mb-4">What is Sanatan Dharma?</h2>
            <div className="space-y-4 text-ivory/80 leading-relaxed text-lg">
              <p>
                <strong className="text-gold-400">Sanatan Dharma</strong> — literally "the Eternal Law" — is the ancient name for what is popularly called Hinduism.
                "Sanatan" means eternal or timeless, and "Dharma" means the natural order, righteous law, or way of life.
              </p>
              <p>
                Unlike religions with a single founder, a fixed set of dogmas, or one sacred book, Sanatan Dharma is a vast, living tradition
                that encompasses enormous diversity — from monotheism to polytheism, from strict ritualism to philosophical inquiry,
                from forest asceticism to devotional ecstasy.
              </p>
              <p>
                Its foundational texts — the <strong className="text-gold-400">Vedas</strong> — are considered the oldest religious scriptures in the world, composed over 5,000 years ago.
                Yet Sanatan Dharma is not frozen in the past. It continuously evolves, welcoming new interpretations, saints, and movements.
              </p>
              <p>
                At its heart, Sanatan Dharma teaches that there is one ultimate Reality (Brahman), that every soul (Atman) is divine,
                and that the goal of life is to realize this divinity — through knowledge, devotion, righteous action, or meditation.
              </p>
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mb-16">
          <h2 className="section-title">Core Philosophical Concepts</h2>
          <p className="section-subtitle">The bedrock ideas that shape Hindu thought and practice</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {concepts.map(concept => (
              <div
                key={concept.title}
                className={`card-divine p-5 cursor-pointer transition-all duration-300 ${
                  activeConcept === concept.title ? 'border-gold-500/60 shadow-golden' : ''
                }`}
                onClick={() => setActiveConcept(activeConcept === concept.title ? null : concept.title)}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{concept.icon}</div>
                  <h3 className="font-display text-gold-400 text-lg">{concept.title}</h3>
                  <p className="text-saffron-500/70 text-xl devanagari">{concept.hindi}</p>
                </div>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  {activeConcept === concept.title ? concept.description : concept.description.slice(0, 80) + '...'}
                </p>
                {activeConcept === concept.title && (
                  <div className="mt-4 pt-4 border-t border-gold-800/30">
                    <p className="text-gold-400/70 text-sm italic">"{concept.quote}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* The Four Vedas */}
        <section className="mb-16">
          <h2 className="section-title">The Four Vedas</h2>
          <p className="section-subtitle">The oldest and most sacred texts of Sanatan Dharma</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {vedasSummary.map((veda, i) => (
              <div key={veda.name} className="card-divine p-6 hover:shadow-golden">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron-700 to-amber-900 rounded-full flex items-center justify-center flex-shrink-0 font-display text-gold-300 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-gold-400 text-xl mb-1">{veda.name}</h3>
                    <p className="text-saffron-500/70 text-xl devanagari mb-3">{veda.hindi}</p>
                    <p className="text-ivory/80 text-sm leading-relaxed mb-3">{veda.description}</p>
                    <div className="bg-dharma-bg/50 rounded p-3 mb-3">
                      <p className="text-gold-500/70 text-xs font-display tracking-wider uppercase mb-1">Contents</p>
                      <p className="text-ivory/60 text-sm">{veda.contents}</p>
                    </div>
                    <p className="text-gold-600/70 text-xs">{veda.verses}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred texts overview */}
        <section className="mb-16">
          <h2 className="section-title">Sacred Texts</h2>
          <p className="section-subtitle">The vast library of Hindu sacred literature</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                name: 'Upanishads', count: '108 texts',
                desc: 'Philosophical dialogues exploring the nature of Brahman, Atman, and the universe. The "end of the Vedas" (Vedanta). Key texts: Brihadaranyaka, Chandogya, Mandukya.',
                icon: '📚',
              },
              {
                name: 'Bhagavad Gita', count: '700 verses',
                desc: 'The "Song of God" — a dialogue between Krishna and Arjuna on the battlefield of Kurukshetra. Covers Karma, Bhakti, and Jnana Yoga. The most read Hindu text.',
                icon: '📖',
              },
              {
                name: 'Ramayana', count: '24,000 verses',
                desc: 'The epic story of Lord Rama. Written by Valmiki, it explores dharma, devotion, and ideal conduct. The most beloved story in Hinduism.',
                icon: '🏹',
              },
              {
                name: 'Mahabharata', count: '100,000+ verses',
                desc: 'The world\'s longest epic poem. Includes the Bhagavad Gita, the Harivamsa, and countless stories of dharma, war, and human nature.',
                icon: '⚔️',
              },
              {
                name: 'Puranas', count: '18 major texts',
                desc: 'Stories of gods, creation, genealogy, and cosmic cycles. Include the Bhagavata Purana (stories of Vishnu\'s avatars), Shiva Purana, and Devi Bhagavata.',
                icon: '📜',
              },
              {
                name: 'Yoga Sutras', count: '196 sutras',
                desc: 'Compiled by Patanjali, this foundational text of classical yoga outlines the eight-limbed path (Ashtanga Yoga) to liberation.',
                icon: '🧘',
              },
            ].map(text => (
              <div key={text.name} className="card-divine p-6 hover:shadow-golden">
                <div className="text-3xl mb-3">{text.icon}</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-gold-400 text-lg">{text.name}</h3>
                  <span className="text-gold-600/70 text-xs bg-gold-900/20 px-2 py-0.5 rounded">{text.count}</span>
                </div>
                <p className="text-ivory/70 text-sm leading-relaxed">{text.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schools of Philosophy */}
        <section className="mb-16">
          <h2 className="section-title">Six Schools of Philosophy</h2>
          <p className="section-subtitle">The Darshanas — classical Hindu philosophical systems</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {philosophies.map(phil => (
              <div key={phil.name} className="card-divine p-5 hover:shadow-golden">
                <h3 className="font-display text-gold-400 text-base mb-1">{phil.name}</h3>
                <p className="text-saffron-400/70 text-xs mb-3">Founded by: {phil.founder}</p>
                <p className="text-ivory/70 text-sm leading-relaxed">{phil.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ashramas */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="section-title">Four Stages of Life</h2>
          <p className="section-subtitle">Ashrama Dharma — the Hindu life cycle</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {[
              { name: 'Brahmacharya', hindi: 'ब्रह्मचर्य', age: 'Childhood & Student (0–25)', desc: 'The stage of celibate studentship, learning, and character formation under a teacher (Guru). Focus: education, discipline, values.', icon: '📚' },
              { name: 'Grihastha', hindi: 'गृहस्थ', age: 'Householder (25–50)', desc: 'The stage of marriage, family, and worldly life. The most important stage — the householder supports all other stages of society.', icon: '🏠' },
              { name: 'Vanaprastha', hindi: 'वानप्रस्थ', age: 'Retirement (50–75)', desc: 'Gradually withdrawing from worldly responsibilities, handing over duties to the next generation, and turning toward spiritual life.', icon: '🌲' },
              { name: 'Sannyasa', hindi: 'संन्यास', age: 'Renunciation (75+)', desc: 'Complete renunciation of worldly life for full-time devotion and the pursuit of moksha. The wandering ascetic stage.', icon: '🕉️' },
            ].map(stage => (
              <div key={stage.name} className="card-divine p-6 hover:shadow-golden">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{stage.icon}</div>
                  <div>
                    <h3 className="font-display text-gold-400 text-lg mb-0.5">{stage.name}</h3>
                    <p className="text-saffron-500/70 text-lg devanagari mb-1">{stage.hindi}</p>
                    <p className="text-gold-600/70 text-xs mb-3">{stage.age}</p>
                    <p className="text-ivory/70 text-sm leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
