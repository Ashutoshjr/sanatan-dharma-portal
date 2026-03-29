import { useState } from 'react';

const jyotirlingas = [
  { name: 'Somnath', location: 'Gujarat', deity: 'Shiva', significance: 'The first and foremost Jyotirlinga. The original temple was destroyed multiple times and rebuilt. It stands on the western coast where three rivers meet.' },
  { name: 'Mallikarjuna', location: 'Srisailam, Andhra Pradesh', deity: 'Shiva', significance: 'Located on Srisailam hill (Shrishailam). Associated with the story of Kartikeya\'s departure from Mount Kailash.' },
  { name: 'Mahakaleshwar', location: 'Ujjain, Madhya Pradesh', deity: 'Shiva', significance: 'The "Great God of Time" (Mahakala). One of the few south-facing (Dakshinamurti) lingas. Known for the famous Bhasmarti (ash ritual).' },
  { name: 'Omkareshwar', location: 'Madhya Pradesh', deity: 'Shiva', significance: 'Located on an island shaped like the sacred Om symbol. The island is formed by the Narmada river splitting into two.' },
  { name: 'Kedarnath', location: 'Uttarakhand, Himalayas', deity: 'Shiva', significance: 'Situated at 3,583 m altitude near the Mandakini river. One of the Char Dham. The temple is open only six months a year due to snow.' },
  { name: 'Bhimashankar', location: 'Maharashtra', deity: 'Shiva', significance: 'Located in the Sahyadri hills. The Bhima river originates here. Associated with the story of Shiva defeating the demon Bhima.' },
  { name: 'Vishwanath', location: 'Varanasi, Uttar Pradesh', deity: 'Shiva', significance: 'The golden temple in the holy city of Kashi (Varanasi). Considered the most sacred Jyotirlinga. Dying here is said to grant moksha.' },
  { name: 'Tryambakeshwar', location: 'Nashik, Maharashtra', deity: 'Shiva', significance: 'Near the source of the Godavari river. The linga here has three faces representing Brahma, Vishnu, and Shiva.' },
  { name: 'Vaidyanath', location: 'Deoghar, Jharkhand', deity: 'Shiva', significance: 'Also called Baidyanath. Associated with Ravana\'s devotion to Shiva. One of the most visited pilgrimage sites.' },
  { name: 'Nageshwar', location: 'Dwarka, Gujarat', deity: 'Shiva', significance: 'The "lord of serpents." Near the sacred city of Dwarka. Associated with protection from all types of poisons.' },
  { name: 'Rameshwaram', location: 'Tamil Nadu', deity: 'Shiva', significance: 'Established by Lord Rama before crossing to Lanka. One of the Char Dham. The temple has the longest corridor in India.' },
  { name: 'Grishneshwar', location: 'Aurangabad, Maharashtra', deity: 'Shiva', significance: 'The last of the 12 Jyotirlingas. Near the Ellora caves. Known for the red stone structure and important festivals.' },
];

const charDham = [
  {
    name: 'Badrinath', region: 'North (Uttarakhand)',
    deity: 'Vishnu', altitude: '3,133 m',
    desc: 'The abode of Lord Vishnu. Located on the banks of Alaknanda river in the Himalayas. Open May to November.',
    highlights: ['Tapt Kund (hot spring)', 'Brahma Kapal (ancestor rites)', 'Neelkanth Peak', 'Mana Village (last Indian village)'],
  },
  {
    name: 'Dwarka', region: 'West (Gujarat)',
    deity: 'Krishna', altitude: 'Sea level',
    desc: 'The legendary city of Lord Krishna, submerged and rebuilt. The Dwarkadhish temple is its heart.',
    highlights: ['Dwarkadhish Temple', 'Rukmini Temple', 'Bet Dwarka island', 'Gomti River'],
  },
  {
    name: 'Rameshwaram', region: 'South (Tamil Nadu)',
    deity: 'Shiva / Rama', altitude: 'Sea level',
    desc: 'A sacred island connected to mainland India. Associated with both Rama and Shiva. Pilgrims bath in 22 sacred wells.',
    highlights: ['Ramanathaswamy Temple', '22 sacred wells (kunds)', 'Pamban Bridge', 'Agni Theertham'],
  },
  {
    name: 'Puri', region: 'East (Odisha)',
    deity: 'Jagannath (Vishnu)', altitude: 'Sea level',
    desc: 'Home of Lord Jagannath. The famous Rath Yatra (chariot festival) attracts millions. Non-Hindus cannot enter the main temple.',
    highlights: ['Jagannath Temple', 'Rath Yatra (June/July)', 'Puri Beach', 'Sun Temple at Konark nearby'],
  },
];

const shaktipeethas = [
  { name: 'Kamakhya', location: 'Assam', significance: 'Most powerful Shakti Peetha — the yoni (womb) of Sati is enshrined here. Center of Tantric worship.' },
  { name: 'Vaishnodevi', location: 'Jammu', significance: 'One of the most visited pilgrimage sites in India. The goddess resides in a natural cave at 1,560 m altitude.' },
  { name: 'Kalighat', location: 'Kolkata, West Bengal', significance: 'The toes of Sati\'s right foot fell here. The Kali temple of Kalighat is one of the most sacred.' },
  { name: 'Mahakali (Pavagadh)', location: 'Gujarat', significance: 'Sati\'s head fell here. Located on the Pavagadh hill with a ropeway to the summit temple.' },
  { name: 'Jwala Devi', location: 'Himachal Pradesh', significance: 'Here, natural eternal flames burn from the earth. No idol — the goddess manifests as nine eternal flames.' },
  { name: 'Hingula', location: 'Balochistan (Pakistan)', significance: 'The oldest and foremost of all 51 Shakti Peethas — Sati\'s head fell here.' },
];

export default function Temples() {
  const [activeTab, setActiveTab] = useState('jyotirlinga');

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="relative">
          <p className="text-saffron-500/70 font-display text-sm tracking-widest uppercase mb-4">Sacred Pilgrimage</p>
          <h1 className="section-title">Temples & Teertha</h1>
          <p className="text-3xl devanagari text-saffron-500/70 mb-4">तीर्थ यात्रा</p>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Pilgrimage (Teertha Yatra) is one of the most ancient and sacred practices of Hinduism.
            Sacred sites are believed to be places where the divine energy is especially concentrated.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {[
            { id: 'jyotirlinga', label: '12 Jyotirlingas' },
            { id: 'chardham', label: 'Char Dham' },
            { id: 'shakti', label: 'Shakti Peethas' },
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

        {activeTab === 'jyotirlinga' && (
          <div>
            <div className="card-divine p-6 mb-8 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-gold-400 text-xl mb-3">The 12 Jyotirlingas</h2>
              <p className="text-ivory/70 leading-relaxed">
                "Jyoti" means light and "linga" is the symbol of Shiva. The 12 Jyotirlingas are the most sacred
                shrines of Shiva in India, where he is said to have manifested as pillars of infinite light.
                Visiting all 12 is considered the greatest Shaiva pilgrimage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {jyotirlingas.map((j, i) => (
                <div key={j.name} className="card-divine p-5 hover:shadow-golden">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-gray-700 to-slate-800 rounded-full flex items-center justify-center font-display text-gold-400 text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-gold-400 text-base mb-0.5">{j.name}</h3>
                      <p className="text-saffron-400/70 text-xs mb-2 flex items-center gap-1">
                        <span>📍</span> {j.location}
                      </p>
                      <p className="text-ivory/60 text-sm leading-relaxed">{j.significance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'chardham' && (
          <div>
            <div className="card-divine p-6 mb-8 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-gold-400 text-xl mb-3">Char Dham Yatra</h2>
              <p className="text-ivory/70 leading-relaxed">
                The four sacred abodes (Char Dham) — Badrinath, Dwarka, Rameshwaram, and Puri —
                represent the four cardinal directions and are considered the holiest pilgrimage circuit in Hinduism.
                Completing the Char Dham Yatra is believed to wash away all sins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {charDham.map(dham => (
                <div key={dham.name} className="card-divine p-6 hover:shadow-golden">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">🛕</div>
                    <div>
                      <h3 className="font-display text-gold-400 text-xl">{dham.name}</h3>
                      <p className="text-saffron-400/70 text-sm">{dham.region}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-dharma-bg/50 rounded p-2 text-xs">
                      <span className="text-gold-600">Deity: </span>
                      <span className="text-ivory/70">{dham.deity}</span>
                    </div>
                    <div className="bg-dharma-bg/50 rounded p-2 text-xs">
                      <span className="text-gold-600">Altitude: </span>
                      <span className="text-ivory/70">{dham.altitude}</span>
                    </div>
                  </div>
                  <p className="text-ivory/70 text-sm leading-relaxed mb-4">{dham.desc}</p>
                  <div>
                    <p className="text-gold-500/70 text-xs font-display tracking-wider uppercase mb-2">Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {dham.highlights.map(h => (
                        <span key={h} className="bg-saffron-500/10 border border-saffron-700/20 text-saffron-400/80 text-xs px-2 py-1 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'shakti' && (
          <div>
            <div className="card-divine p-6 mb-8 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-gold-400 text-xl mb-3">51 Shakti Peethas</h2>
              <p className="text-ivory/70 leading-relaxed mb-4">
                When Sati (Parvati's previous birth) died, her grief-stricken husband Shiva carried her body across the
                universe. Lord Vishnu used his Sudarshana Chakra to sever the body into 51 pieces. Each place where a
                piece fell became a Shakti Peetha — an abode of the Divine Mother.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {shaktipeethas.map(s => (
                <div key={s.name} className="card-divine p-5 hover:shadow-golden">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🌺</span>
                    <div>
                      <h3 className="font-display text-gold-400 text-base">{s.name}</h3>
                      <p className="text-saffron-400/70 text-xs">📍 {s.location}</p>
                    </div>
                  </div>
                  <p className="text-ivory/60 text-sm leading-relaxed">{s.significance}</p>
                </div>
              ))}
            </div>

            <div className="bg-dharma-dark border border-gold-700/20 rounded-xl p-8 max-w-3xl mx-auto text-center">
              <p className="text-ivory/60 text-sm">
                The 51 Shakti Peethas are spread across the Indian subcontinent, Nepal, Sri Lanka, Bangladesh, and Pakistan.
                Each has a presiding deity (shakti) and a Bhairava (guardian Shiva form). Visiting all 51 is the supreme
                pilgrimage for devotees of the Divine Mother.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
