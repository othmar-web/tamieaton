import { useEffect } from "react";
import type { Video } from "@/lib/portfolio-data";

export function Lightbox({ video, onClose }: { video: Video | null; onClose: () => void }) {
  useEffect(() => {
    if (!video) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.label}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-4 rise"
      style={{ animationDuration: "0.4s" }}
    >
      <button
        onClick={onClose}
        className="eyebrow absolute right-5 top-5 text-ink-foreground link-line"
        aria-label="Close video"
      >
        Close ✕
      </button>
      <div onClick={(e) => e.stopPropagation()} className="flex max-h-full flex-col items-center">
        <video
          src={video.full}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          className="max-h-[82vh] w-auto max-w-full bg-ink"
        />
        <p className="eyebrow mt-4 text-ink-foreground/70">{video.label}</p>
      </div>
    </div>
  );
}
