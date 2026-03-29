import { useState } from 'react';

const ashtangaLimbs = [
  { num: 1, name: 'Yama', hindi: 'यम', meaning: 'Ethical restraints', desc: 'The five ethical principles: Ahimsa (non-violence), Satya (truth), Asteya (non-stealing), Brahmacharya (celibacy/moderation), Aparigraha (non-possessiveness).' },
  { num: 2, name: 'Niyama', hindi: 'नियम', meaning: 'Personal observances', desc: 'Personal practices: Saucha (cleanliness), Santosha (contentment), Tapas (discipline), Svadhyaya (self-study), Ishvara Pranidhana (surrender to God).' },
  { num: 3, name: 'Asana', hindi: 'आसन', meaning: 'Physical postures', desc: 'Steady and comfortable physical postures that prepare the body for meditation. Originally referred to meditation postures, now encompasses hundreds of poses.' },
  { num: 4, name: 'Pranayama', hindi: 'प्राणायाम', meaning: 'Breath control', desc: 'Regulation of the life force (prana) through controlled breathing. Connects the body and mind, preparing for deeper meditation states.' },
  { num: 5, name: 'Pratyahara', hindi: 'प्रत्याहार', meaning: 'Withdrawal of senses', desc: 'Withdrawal of the senses from external objects. The gateway to the inner journey — turning awareness inward.' },
  { num: 6, name: 'Dharana', hindi: 'धारणा', meaning: 'Concentration', desc: 'Fixing the mind on a single point of focus — a mantra, deity, breath, or flame. The training of attention.' },
  { num: 7, name: 'Dhyana', hindi: 'ध्यान', meaning: 'Meditation', desc: 'Uninterrupted flow of awareness toward the object of concentration. Pure witnessing without judgment or distraction.' },
  { num: 8, name: 'Samadhi', hindi: 'समाधि', meaning: 'Absorption / Liberation', desc: 'The highest state — complete absorption where the meditator, the act of meditation, and the object of meditation become one. The goal of yoga.' },
];

const pranayamas = [
  {
    name: 'Nadi Shodhana', hindi: 'नाड़ी शोधन',
    meaning: 'Alternate nostril breathing',
    desc: 'Balances the left and right energy channels (Ida and Pingala). Calms the nervous system and brings mental clarity.',
    steps: ['Close right nostril with right thumb', 'Inhale slowly through left nostril (4 counts)', 'Close left nostril with ring finger, release thumb', 'Exhale through right nostril (8 counts)', 'Inhale through right nostril (4 counts)', 'Close right, release left, exhale left (8 counts)', 'This is one cycle. Repeat 10–20 times'],
  },
  {
    name: 'Bhramari', hindi: 'भ्रामरी',
    meaning: 'Humming bee breath',
    desc: 'Creates a humming sound during exhalation. Deeply calming, reduces anxiety and anger. Named after the Indian black bee.',
    steps: ['Sit comfortably, close eyes', 'Plug ears with thumbs, fingers over closed eyes (Shanmukhi Mudra)', 'Inhale deeply through the nose', 'Exhale making a humming "mmm" sound', 'Feel the vibration in the skull and chest', 'Repeat 5–10 times'],
  },
  {
    name: 'Kapalabhati', hindi: 'कपालभाति',
    meaning: 'Skull-shining breath',
    desc: 'Rapid, forceful exhalations with passive inhalations. Energizes the body, cleanses the lungs, and fires the digestive system.',
    steps: ['Sit with spine erect', 'Inhale passively, then forcefully exhale through nose', 'The belly contracts sharply with each exhale', 'Start with 30 breaths, increase gradually', 'Follow with a few minutes of normal breathing', 'Not for beginners, pregnant, or high blood pressure'],
  },
  {
    name: 'Ujjayi', hindi: 'उज्जायी',
    meaning: 'Victorious breath',
    desc: 'The "ocean breath" — creates a soft hissing sound by slightly constricting the back of the throat. Warms and focuses the mind.',
    steps: ['Breathe through the nose only', 'Slightly constrict the glottis (back of throat)', 'Create a soft "haaah" sound on both inhale and exhale', 'The breath should sound like ocean waves', 'Maintain throughout yoga practice', 'Ratio: 5 counts inhale, 5 counts exhale'],
  },
];

const paths = [
  { name: 'Jnana Yoga', hindi: 'ज्ञान योग', icon: '🧠', desc: 'The path of knowledge and wisdom. Liberation through discrimination (Viveka) between the real (Brahman) and the unreal (Maya). Study of scriptures, enquiry, and reflection.' },
  { name: 'Bhakti Yoga', hindi: 'भक्ति योग', icon: '❤️', desc: 'The path of devotion and love. Surrender to the Divine through worship, prayer, singing (kirtan), and service. The path of the heart — most accessible for most people.' },
  { name: 'Karma Yoga', hindi: 'कर्म योग', icon: '🤲', desc: 'The path of selfless action. Performing all duties without attachment to results, as an offering to God. Liberation through work done with awareness and detachment.' },
  { name: 'Raja Yoga', hindi: 'राज योग', icon: '👑', desc: 'The royal path — systematic meditation as codified by Patanjali. The 8-limbed path (Ashtanga). Liberation through mastery of the mind and consciousness.' },
];

export default function Yoga() {
  const [activePranayama, setActivePranayama] = useState(null);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="relative">
          <p className="text-saffron-500/70 font-display text-sm tracking-widest uppercase mb-4">Mind Body Spirit</p>
          <h1 className="section-title">Yoga, Meditation & Ayurveda</h1>
          <p className="text-3xl devanagari text-saffron-500/70 mb-4">योग — ध्यान — आयुर्वेद</p>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Yoga is not just physical postures — it is a complete science of consciousness.
            "Yoga" means union — the union of individual consciousness with universal consciousness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Four Paths */}
        <section className="mb-16">
          <h2 className="section-title">Four Paths of Yoga</h2>
          <p className="section-subtitle">Different temperaments, different paths — all leading to the same summit</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {paths.map(path => (
              <div key={path.name} className="card-divine p-6 text-center hover:shadow-golden">
                <div className="text-5xl mb-4">{path.icon}</div>
                <h3 className="font-display text-gold-400 text-lg mb-1">{path.name}</h3>
                <p className="text-saffron-500/70 text-xl devanagari mb-4">{path.hindi}</p>
                <p className="text-ivory/70 text-sm leading-relaxed">{path.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ashtanga Yoga */}
        <section className="mb-16">
          <h2 className="section-title">Ashtanga Yoga</h2>
          <p className="section-subtitle">The 8 Limbs of Yoga as taught by Patanjali</p>
          <div className="gold-divider" />

          <div className="max-w-4xl mx-auto mt-10">
            <div className="card-divine p-6 mb-8">
              <p className="text-ivory/80 leading-relaxed text-lg text-center">
                Patanjali's <em className="text-saffron-400">Yoga Sutras</em> (compiled ~400 CE) define yoga as
                <em className="text-gold-400"> "chitta vritti nirodha"</em> — the cessation of the fluctuations of the mind.
                The eight limbs are a progressive path from ethical conduct to the highest states of consciousness.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-saffron-500 via-gold-500 to-saffron-700" />

              <div className="space-y-4">
                {ashtangaLimbs.map(limb => (
                  <div key={limb.num} className="flex gap-6">
                    {/* Number */}
                    <div className="w-12 h-12 bg-gradient-to-br from-saffron-700 to-amber-900 rounded-full flex items-center justify-center font-display text-gold-300 font-bold text-sm flex-shrink-0 z-10 shadow-saffron">
                      {limb.num}
                    </div>
                    {/* Content */}
                    <div className="flex-1 card-divine p-5 hover:shadow-golden">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-display text-gold-400 text-lg">{limb.name}</h3>
                          <span className="text-saffron-500/70 text-lg devanagari">{limb.hindi}</span>
                        </div>
                        <span className="text-gold-600/60 text-xs italic hidden sm:block">{limb.meaning}</span>
                      </div>
                      <p className="text-ivory/70 text-sm leading-relaxed">{limb.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pranayama */}
        <section className="mb-16">
          <h2 className="section-title">Pranayama Techniques</h2>
          <p className="section-subtitle">The science of breath — controlling the life force</p>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
            {pranayamas.map(p => (
              <div
                key={p.name}
                className={`card-divine p-6 cursor-pointer transition-all ${
                  activePranayama === p.name ? 'border-gold-500/50 shadow-golden' : ''
                }`}
                onClick={() => setActivePranayama(activePranayama === p.name ? null : p.name)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-gold-400 text-lg">{p.name}</h3>
                    <p className="text-saffron-500/70 text-lg devanagari">{p.hindi}</p>
                    <p className="text-gold-600/60 text-sm italic">{p.meaning}</p>
                  </div>
                  <span className="text-2xl">🫁</span>
                </div>
                <p className="text-ivory/70 text-sm leading-relaxed mb-4">{p.desc}</p>

                {activePranayama === p.name && (
                  <div className="pt-4 border-t border-gold-800/30">
                    <h4 className="font-display text-saffron-400 text-xs tracking-widest uppercase mb-3">Practice Steps</h4>
                    <ol className="space-y-2">
                      {p.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-ivory/70">
                          <span className="text-gold-500 font-bold flex-shrink-0">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="mt-3 text-gold-500/50 text-xs font-display">
                  {activePranayama === p.name ? '▲ Click to collapse' : '▼ Click for steps'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meditation */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="section-title">Dhyana — Meditation</h2>
          <div className="gold-divider" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                name: 'Trataka', hindi: 'त्राटक',
                desc: 'Gazing meditation — fixing the gaze on a single point (candle flame, Om symbol, or deity image) without blinking. Develops concentration and activates the third eye.',
                icon: '👁️',
              },
              {
                name: 'Mantra Japa', hindi: 'मंत्र जप',
                desc: 'Repetition of a sacred mantra, either aloud, whispered, or mentally. The vibration of the mantra purifies the mind and leads to deep states of absorption.',
                icon: '📿',
              },
              {
                name: 'Yoga Nidra', hindi: 'योग निद्रा',
                desc: '"Yogic sleep" — a state of conscious deep sleep between waking and sleeping. Profound relaxation and healing. One hour equals four hours of sleep.',
                icon: '😴',
              },
            ].map(m => (
              <div key={m.name} className="card-divine p-6 text-center hover:shadow-golden">
                <div className="text-4xl mb-3">{m.icon}</div>
                <h3 className="font-display text-gold-400 text-base mb-1">{m.name}</h3>
                <p className="text-saffron-500/70 text-lg devanagari mb-3">{m.hindi}</p>
                <p className="text-ivory/70 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ayurveda */}
        <section className="mb-16">
          <h2 className="section-title">Ayurveda</h2>
          <p className="section-subtitle">The ancient science of life and health</p>
          <div className="gold-divider" />

          <div className="max-w-5xl mx-auto mt-10">
            <div className="card-divine p-8 mb-8">
              <p className="text-ivory/80 leading-relaxed text-lg">
                <strong className="text-gold-400">Ayurveda</strong> — "the science of life" — is the ancient Hindu system of medicine.
                It is one of the world's oldest holistic healing systems, developed over 5,000 years ago.
                Ayurveda teaches that health is a balance between mind, body, and spirit, and that each person
                has a unique constitutional type (Prakriti) determined by the three doshas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: 'Vata', hindi: 'वात', elements: 'Air + Ether',
                  desc: 'The principle of movement. Governs breathing, blinking, muscle movement, heartbeat, and nerve impulses.',
                  traits: ['Creative, quick-thinking', 'Light, thin frame', 'Dry skin and hair', 'Enthusiastic and energetic'],
                  imbalance: 'Anxiety, insomnia, constipation, dry skin',
                  color: 'from-blue-900 to-indigo-900',
                },
                {
                  name: 'Pitta', hindi: 'पित्त', elements: 'Fire + Water',
                  desc: 'The principle of transformation. Governs digestion, metabolism, intelligence, and skin color.',
                  traits: ['Focused, determined', 'Medium frame', 'Warm skin', 'Natural leaders'],
                  imbalance: 'Anger, inflammation, acid reflux, skin rashes',
                  color: 'from-orange-900 to-red-900',
                },
                {
                  name: 'Kapha', hindi: 'कफ', elements: 'Earth + Water',
                  desc: 'The principle of structure. Governs physical strength, immunity, growth, and emotional stability.',
                  traits: ['Calm, loving', 'Large, sturdy frame', 'Oily smooth skin', 'Patient and loyal'],
                  imbalance: 'Weight gain, lethargy, depression, congestion',
                  color: 'from-green-900 to-emerald-900',
                },
              ].map(dosha => (
                <div key={dosha.name} className="card-divine p-6 hover:shadow-golden">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${dosha.color} flex items-center justify-center mb-4 mx-auto`}>
                    <span className="text-gold-300 text-2xl devanagari">{dosha.hindi[0]}</span>
                  </div>
                  <h3 className="font-display text-gold-400 text-xl text-center mb-1">{dosha.name}</h3>
                  <p className="text-saffron-500/70 text-xl devanagari text-center mb-2">{dosha.hindi}</p>
                  <p className="text-gold-600/70 text-xs text-center mb-4">{dosha.elements}</p>
                  <p className="text-ivory/70 text-sm leading-relaxed mb-4">{dosha.desc}</p>
                  <div className="mb-3">
                    <p className="text-gold-500/70 text-xs uppercase font-display tracking-wider mb-2">Characteristics</p>
                    {dosha.traits.map(t => (
                      <p key={t} className="text-ivory/60 text-xs flex items-start gap-2">
                        <span className="text-saffron-500">•</span>{t}
                      </p>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-gold-800/20">
                    <p className="text-gold-500/70 text-xs uppercase font-display tracking-wider mb-1">Imbalance shows as</p>
                    <p className="text-ivory/50 text-xs">{dosha.imbalance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
