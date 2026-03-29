import { useState } from 'react';

const glossary = [
  { term: 'Ahimsa', devanagari: 'अहिंसा', meaning: 'Non-violence. The foundational ethical principle of Hinduism, Jainism, and Buddhism.' },
  { term: 'Atman', devanagari: 'आत्मन्', meaning: 'The individual soul or self. The eternal, indestructible essence within every being.' },
  { term: 'Avatar', devanagari: 'अवतार', meaning: 'Divine incarnation. When God descends to earth in a physical form to restore dharma.' },
  { term: 'Brahman', devanagari: 'ब्रह्मन्', meaning: 'The ultimate, unchanging reality. The infinite ground of all being.' },
  { term: 'Chakra', devanagari: 'चक्र', meaning: 'Energy centers in the subtle body. Also refers to Vishnu\'s discus weapon.' },
  { term: 'Dharma', devanagari: 'धर्म', meaning: 'Righteous duty, moral order, the law that upholds the universe.' },
  { term: 'Diya', devanagari: 'दीया', meaning: 'A small oil lamp used in worship. Symbol of knowledge and divine light.' },
  { term: 'Guru', devanagari: 'गुरु', meaning: 'A spiritual teacher who dispels darkness (gu = darkness, ru = that which dispels).' },
  { term: 'Karma', devanagari: 'कर्म', meaning: 'Action and its consequences. The universal law of cause and effect.' },
  { term: 'Kirtan', devanagari: 'कीर्तन', meaning: 'Devotional singing of God\'s names, stories, and glories — often call-and-response.' },
  { term: 'Linga', devanagari: 'लिंग', meaning: 'Symbol of Shiva\'s cosmic generative power. Found in all Shiva temples.' },
  { term: 'Mantra', devanagari: 'मंत्र', meaning: 'Sacred sound or formula. Man = mind, tra = instrument/protector. A tool for the mind.' },
  { term: 'Maya', devanagari: 'माया', meaning: 'Illusion. The creative power that makes the world appear separate from Brahman.' },
  { term: 'Moksha', devanagari: 'मोक्ष', meaning: 'Liberation from the cycle of birth and death. The ultimate goal of life.' },
  { term: 'Mudra', devanagari: 'मुद्रा', meaning: 'Sacred hand gesture. Used in worship, dance, yoga, and iconography.' },
  { term: 'Namaste', devanagari: 'नमस्ते', meaning: '"The divine in me bows to the divine in you." A sacred greeting acknowledging the Divine in all.' },
  { term: 'Om (Aum)', devanagari: 'ॐ', meaning: 'The primordial sound of creation. The sacred syllable that encompasses all of existence.' },
  { term: 'Prana', devanagari: 'प्राण', meaning: 'Life force or vital energy. The animating principle in all living beings.' },
  { term: 'Prasad', devanagari: 'प्रसाद', meaning: 'Sacred food offered to a deity and then distributed to devotees as divine blessing.' },
  { term: 'Puja', devanagari: 'पूजा', meaning: 'Ritual worship of a deity. Includes offerings of flowers, incense, light, food, and water.' },
  { term: 'Sadhana', devanagari: 'साधना', meaning: 'Spiritual practice. Regular, disciplined practice for spiritual growth.' },
  { term: 'Samsara', devanagari: 'संसार', meaning: 'The cycle of birth, death, and rebirth. The world of appearances and change.' },
  { term: 'Sanskrit', devanagari: 'संस्कृत', meaning: '"Perfected" or "refined" language. The sacred language of Hinduism and ancient India.' },
  { term: 'Shakti', devanagari: 'शक्ति', meaning: 'Divine feminine power/energy. The active force of creation and the Divine Mother.' },
  { term: 'Tilak', devanagari: 'तिलक', meaning: 'Sacred mark on the forehead. Indicates the third eye and one\'s sectarian affiliation.' },
  { term: 'Yoga', devanagari: 'योग', meaning: 'Union. A complete system for achieving union with the Divine through various paths.' },
];

const faqs = [
  {
    q: 'Is Hinduism polytheistic?',
    a: 'Hinduism is sometimes called polytheistic due to its many deities, but most Hindu philosophy teaches that all deities are manifestations of one Supreme Reality (Brahman). The many gods represent different attributes and aspects of the one Divine. The Rigveda states: "Ekam sat vipra bahudha vadanti" — Truth is one; the wise call it by many names.'
  },
  {
    q: 'Who founded Hinduism?',
    a: 'Hinduism has no single founder, which is unique among major world religions. It evolved organically over thousands of years through the insights of countless sages (Rishis) and saints. The Vedas, considered its oldest scriptures, are called "Shruti" (heard) — divine wisdom perceived in meditation, not authored by humans.'
  },
  {
    q: 'What is the Hindu view of other religions?',
    a: 'Hinduism is famously pluralistic. Most Hindus believe that all sincere spiritual paths lead to the same divine reality. The concept of "Sarva Dharma Samabhava" (equal respect for all faiths) is central. Hindus do not typically proselytize and respect the religious choices of all people.'
  },
  {
    q: 'What happens after death in Hinduism?',
    a: 'Hinduism teaches that the soul (Atman) is eternal and does not die. After physical death, the soul either takes another birth (based on karma and vasanas — mental impressions) or attains liberation (Moksha) and merges with Brahman. The ultimate goal is to break the cycle of reincarnation through spiritual realization.'
  },
  {
    q: 'What do Hindus believe about the creation of the world?',
    a: 'Hindu cosmology teaches that the universe cycles through vast periods of creation and dissolution (Brahma\'s day and night). The cosmos was not created from nothing but emerged from Brahman (the absolute). The universe is considered divine in itself — "Sarvam khalvidam Brahma" — all of this is Brahman.'
  },
  {
    q: 'Is vegetarianism required in Hinduism?',
    a: 'While many Hindus are vegetarian — particularly upper-caste Brahmins, Vaishnavas, and followers of certain traditions — vegetarianism is not universally required. The principle of Ahimsa (non-violence) encourages minimizing harm. Many communities, including coastal Hindus and those in Bengal, traditionally eat fish or meat.'
  },
  {
    q: 'What is the caste system?',
    a: 'The original Varna system described four categories based on occupation and nature: Brahmins (teachers/priests), Kshatriyas (warriors/rulers), Vaishyas (merchants), and Shudras (artisans/laborers). However, birth-based caste discrimination (Jati) as it evolved is widely condemned by Hindu reformers including Swami Vivekananda and Mahatma Gandhi. Modern Hindu thinkers emphasize the original ideal of merit-based social organization.'
  },
  {
    q: 'Can anyone practice Hinduism?',
    a: 'Yes. Hinduism welcomes all seekers. Unlike some religions, there is no formal conversion ceremony required. Anyone who resonates with Hindu philosophy, practices yoga, follows dharmic principles, or worships Hindu deities is considered part of the broader Sanatan Dharma tradition. Many Hindu texts address universal truths applicable to all humanity.'
  },
];

const resources = [
  {
    type: 'Books',
    items: [
      { title: 'Bhagavad Gita As It Is', author: 'A.C. Bhaktivedanta Swami Prabhupada', desc: 'Most comprehensive commentary with Sanskrit, transliteration, and detailed purports.' },
      { title: 'The Complete Works of Swami Vivekananda', author: 'Swami Vivekananda', desc: 'Nine volumes of lectures, writings, and poems by the great Hindu monk.' },
      { title: 'The Autobiography of a Yogi', author: 'Paramahansa Yogananda', desc: 'Classic spiritual autobiography exploring the lives of Indian saints and yoga.' },
      { title: 'Hindu Mythology', author: 'W.J. Wilkins', desc: 'Comprehensive reference to Hindu deities, stories, and symbolism.' },
    ],
  },
  {
    type: 'Online Resources',
    items: [
      { title: 'Vedabase', author: 'vedabase.io', desc: 'Complete Bhagavad Gita, Srimad Bhagavatam, and other Vaishnava texts online.' },
      { title: 'Sanskrit Documents', author: 'sanskritdocuments.org', desc: 'Repository of Sanskrit texts, prayers, and stotras with transliterations.' },
      { title: 'Speak Sanskrit', author: 'speaksanskrit.org', desc: 'Learning resources for the Sanskrit language.' },
      { title: 'HinduPad', author: 'hindupad.com', desc: 'Encyclopedia of Hindu religion — festivals, puja, recipes, and more.' },
    ],
  },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('glossary');
  const [search, setSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const filteredGlossary = glossary.filter(g =>
    g.term.toLowerCase().includes(search.toLowerCase()) ||
    g.meaning.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dharma-dark to-dharma-bg" />
        <div className="relative">
          <p className="text-saffron-500/70 font-display text-sm tracking-widest uppercase mb-4">Learn & Connect</p>
          <h1 className="section-title">Community & Resources</h1>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Explore our glossary of Sanskrit terms, get answers to common questions,
            and discover resources for deeper study.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {[
            { id: 'glossary', label: 'Sanskrit Glossary' },
            { id: 'faq', label: 'FAQ' },
            { id: 'resources', label: 'Resources' },
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

        {/* Glossary */}
        {activeTab === 'glossary' && (
          <div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search terms..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full max-w-md mx-auto block bg-dharma-dark border border-gold-700/30 rounded-lg px-4 py-3 text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-500/60 font-body"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredGlossary.map(entry => (
                <div key={entry.term} className="card-divine p-4 hover:shadow-golden flex items-start gap-4">
                  <div className="text-center flex-shrink-0 w-16">
                    <p className="text-gold-300 text-xl devanagari leading-tight">{entry.devanagari}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-gold-400 text-sm">{entry.term}</h3>
                    <p className="text-ivory/70 text-sm leading-relaxed mt-1">{entry.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`card-divine overflow-hidden transition-all cursor-pointer ${
                  expandedFaq === i ? 'border-gold-500/40' : ''
                }`}
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <div className="p-5 flex items-center justify-between gap-4">
                  <h3 className="font-display text-gold-400 text-sm">{faq.q}</h3>
                  <span className={`text-gold-500 transition-transform flex-shrink-0 ${expandedFaq === i ? 'rotate-45' : ''}`}>+</span>
                </div>
                {expandedFaq === i && (
                  <div className="px-5 pb-5 pt-0 border-t border-gold-800/20">
                    <p className="text-ivory/70 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Resources */}
        {activeTab === 'resources' && (
          <div className="space-y-10">
            {resources.map(section => (
              <div key={section.type}>
                <h3 className="font-display text-gold-400 text-xl mb-6">{section.type}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map(item => (
                    <div key={item.title} className="card-divine p-5 hover:shadow-golden">
                      <h4 className="font-display text-gold-400 text-base mb-1">{item.title}</h4>
                      <p className="text-saffron-400/70 text-sm mb-2">{item.author}</p>
                      <p className="text-ivory/60 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-dharma-dark border border-gold-700/20 rounded-xl p-8 text-center">
              <h3 className="font-display text-gold-400 text-xl mb-4">The Daily Practice</h3>
              <p className="text-ivory/70 leading-relaxed max-w-2xl mx-auto mb-6">
                The best way to understand Sanatan Dharma is through practice.
                Even simple daily practices can transform your life:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: '🌅', text: 'Morning prayer at sunrise' },
                  { icon: '📿', text: 'Chant a mantra 108 times' },
                  { icon: '📖', text: 'Read one verse of Gita' },
                  { icon: '🪔', text: 'Evening aarti at dusk' },
                ].map(p => (
                  <div key={p.text} className="bg-dharma-bg/50 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">{p.icon}</div>
                    <p className="text-ivory/70 text-sm">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
