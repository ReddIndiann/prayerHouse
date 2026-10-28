import { useEffect, useRef, useState } from 'react'
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { podcastEpisodes } from '../data/sermons'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const shouldPlay = useRef(false)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState(false)

  const episode = podcastEpisodes[index]
  const src = encodeURI(episode.src)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    setCurrent(0)
    setDuration(0)
    setError(false)
    audio.load()
    if (shouldPlay.current) {
      audio.play().catch(() => setPlaying(false))
    }
  }, [index])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      shouldPlay.current = true
      audio.play().catch(() => setPlaying(false))
    }
  }

  const select = (nextIndex: number) => {
    if (nextIndex === index) {
      toggle()
      return
    }
    shouldPlay.current = true
    setIndex(nextIndex)
  }

  const skip = (direction: 1 | -1) => {
    shouldPlay.current = playing
    setIndex((prev) => (prev + direction + podcastEpisodes.length) % podcastEpisodes.length)
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white/80 shadow-soft">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          shouldPlay.current = true
          setIndex((prev) => (prev + 1) % podcastEpisodes.length)
        }}
        onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => {
          const value = event.currentTarget.duration
          setDuration(Number.isFinite(value) ? value : 0)
        }}
        onError={() => {
          setError(true)
          setPlaying(false)
        }}
      />

      <div className="bg-gradient-to-br from-brand-dark to-brand p-6 text-cream sm:p-8">
        <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-gold-soft uppercase">
          Podcast · Now playing
        </p>
        <h3 className="mt-3 font-display text-2xl leading-snug text-cream sm:text-3xl">
          {episode.title}
        </h3>
        <p className="mt-1.5 text-sm text-cream/65">{episode.speaker}</p>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => skip(-1)}
            aria-label="Previous episode"
            className="grid size-10 place-items-center rounded-full border border-cream/25 text-cream/80 transition hover:border-gold hover:text-gold"
          >
            <SkipBack className="size-4" />
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? 'Pause episode' : 'Play episode'}
            className="grid size-14 place-items-center rounded-full bg-cream text-brand-dark shadow-lift transition hover:bg-gold-soft"
          >
            {playing ? <Pause className="size-5" /> : <Play className="ml-0.5 size-5" />}
          </button>
          <button
            type="button"
            onClick={() => skip(1)}
            aria-label="Next episode"
            className="grid size-10 place-items-center rounded-full border border-cream/25 text-cream/80 transition hover:border-gold hover:text-gold"
          >
            <SkipForward className="size-4" />
          </button>

          <div className="ml-2 flex-1">
            <label htmlFor="podcast-progress" className="sr-only">
              Episode progress
            </label>
            <input
              id="podcast-progress"
              type="range"
              min={0}
              max={duration || 0}
              step={1}
              value={Math.min(current, duration || 0)}
              onChange={(event) => {
                const audio = audioRef.current
                if (!audio) return
                const time = Number(event.target.value)
                audio.currentTime = time
                setCurrent(time)
              }}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-cream/25 accent-gold"
            />
            <div className="mt-2 flex justify-between text-[0.68rem] tabular-nums text-cream/55">
              <span>{formatTime(current)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {error && (
          <p className="mt-4 text-xs text-gold-soft" role="alert">
            This message could not be loaded right now.{' '}
            <a href={src} target="_blank" rel="noreferrer" className="underline">
              Open the audio file
            </a>
            .
          </p>
        )}
      </div>

      <div className="max-h-80 divide-y divide-line/70 overflow-y-auto">
        {podcastEpisodes.map((item, itemIndex) => {
          const isActive = itemIndex === index
          return (
            <button
              key={`${item.title}-${itemIndex}`}
              type="button"
              onClick={() => select(itemIndex)}
              className={`flex w-full items-center gap-4 px-5 py-3.5 text-left transition ${
                isActive ? 'bg-brand/5' : 'hover:bg-sand/60'
              }`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full border ${
                  isActive ? 'border-brand text-brand' : 'border-line text-muted'
                }`}
              >
                {isActive && playing ? (
                  <Pause className="size-3" />
                ) : (
                  <Play className="ml-0.5 size-3" />
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={`block truncate text-sm font-medium ${
                    isActive ? 'text-brand' : 'text-ink'
                  }`}
                >
                  {item.title}
                </span>
                <span className="block text-xs text-muted">{item.speaker}</span>
              </span>
              {isActive && (
                <span className="text-[0.6rem] font-semibold tracking-[0.16em] text-brand uppercase">
                  Playing
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
