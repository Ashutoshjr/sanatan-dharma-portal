import { useState, useRef, useEffect } from 'react';

export default function AartiPlayer({ youtubeId, aartiName, deity }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const iframeRef = useRef(null);

  // Reset when aarti changes
  useEffect(() => {
    setIsPlaying(false);
    setIsLoaded(false);
    setShowPlayer(false);
  }, [youtubeId]);

  const handlePlay = () => {
    setShowPlayer(true);
    setIsPlaying(true);
  };

  const handleStop = () => {
    setShowPlayer(false);
    setIsPlaying(false);
    setIsLoaded(false);
  };

  if (!youtubeId) return null;

  return (
    <div className="rounded-xl overflow-hidden border border-gold-700/30 bg-gradient-to-br from-dharma-dark to-dharma-bg mb-6">
      {/* Player header */}
      <div className="flex items-center gap-4 p-4">
        {/* Diya icon with flame animation */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
          isPlaying ? 'bg-saffron-500/30 border border-saffron-500/50' : 'bg-gold-900/30 border border-gold-700/30'
        }`}>
          <span className={`text-2xl ${isPlaying ? 'diya-flame' : ''}`}>🪔</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-display text-gold-400 text-sm truncate">{aartiName}</p>
          <p className="text-ivory/50 text-xs">{deity} Aarti</p>
          {isPlaying && (
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-saffron-500 rounded-full animate-pulse"
                  style={{
                    height: `${8 + Math.sin(i * 1.2) * 6}px`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${0.8 + i * 0.1}s`,
                  }}
                />
              ))}
              <span className="text-saffron-400 text-xs ml-2 font-display tracking-wider">PLAYING</span>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-ivory px-4 py-2 rounded-lg font-display text-xs tracking-wider uppercase transition-all shadow-saffron hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play Aarti
            </button>
          ) : (
            <button
              onClick={handleStop}
              className="flex items-center gap-2 bg-dharma-dark hover:bg-red-900/40 border border-red-700/40 text-red-400 px-4 py-2 rounded-lg font-display text-xs tracking-wider uppercase transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h12v12H6z"/>
              </svg>
              Stop
            </button>
          )}
        </div>
      </div>

      {/* Waveform decoration when playing */}
      {isPlaying && (
        <div className="px-4 pb-2">
          <div className="flex items-center gap-0.5 h-8">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-saffron-600 to-gold-400 rounded-full opacity-60 animate-pulse"
                style={{
                  height: `${20 + Math.sin(i * 0.5) * 14 + Math.cos(i * 0.3) * 8}%`,
                  animationDelay: `${(i * 0.05) % 1}s`,
                  animationDuration: `${0.6 + (i % 5) * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* YouTube embed — hidden iframe that plays audio */}
      {showPlayer && (
        <div className="relative">
          <div className="bg-black/20 border-t border-gold-800/20">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                ref={iframeRef}
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${aartiName} - Aarti`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoaded(true)}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-dharma-dark">
                <div className="text-center">
                  <div className="text-4xl diya-flame mb-3">🪔</div>
                  <p className="text-gold-400 text-sm font-display">Loading aarti...</p>
                </div>
              </div>
            )}
          </div>
          <div className="px-4 py-2 bg-dharma-dark/80 flex items-center justify-between">
            <p className="text-ivory/40 text-xs">Audio via YouTube • Click fullscreen for full experience</p>
            <a
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500/60 hover:text-gold-400 text-xs font-display tracking-wider transition-colors"
            >
              Open on YouTube ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
