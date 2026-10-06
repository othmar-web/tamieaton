import { useRef } from "react";
import type { Video } from "@/lib/portfolio-data";

type Props = {
  video: Video;
  index?: string;
  onOpen: (v: Video) => void;
  className?: string;
  aspect?: string;
};

export function VideoTile({ video, index, onOpen, className = "", aspect = "aspect-[9/16]" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <figure className={`group ${className}`}>
      <button
        type="button"
        onClick={() => onOpen(video)}
        onMouseEnter={() => ref.current?.play().catch(() => {})}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.pause();
            ref.current.currentTime = 0;
          }
        }}
        aria-label={`Play: ${video.label}`}
        className={`relative block w-full overflow-hidden bg-muted ${aspect}`}
      >
        <img
          src={video.poster}
          alt={video.label}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
        />
        <video
          ref={ref}
          src={video.preview}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/60 bg-ink/20 text-ink-foreground backdrop-blur-sm transition-all duration-500 group-hover:bg-ink-foreground group-hover:text-ink">
          <svg width="11" height="12" viewBox="0 0 11 12" fill="currentColor" aria-hidden>
            <path d="M0 0l11 6-11 6z" />
          </svg>
        </span>
      </button>
      <figcaption className="mt-3 flex items-baseline gap-3 text-muted-foreground">
        {index && <span className="eyebrow text-accent">{index}</span>}
        <span className="text-sm">{video.label}</span>
      </figcaption>
    </figure>
  );
}
