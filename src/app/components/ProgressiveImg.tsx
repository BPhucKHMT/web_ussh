import { useState, useEffect, useRef } from "react";

const loadedImageSources = new Set<string>();

interface ProgressiveImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** true = above the fold (hero/cover) — loads eagerly with high priority */
  eager?: boolean;
  /** extra classes for the skeleton wrapper div */
  wrapperClass?: string;
}

/**
 * ProgressiveImg
 * ─────────────────────────────────────────────────────────────
 * • Native browser lazy-loading (no IntersectionObserver overhead)
 * • decoding="async" — image decoded off the main thread
 * • fetchPriority="high" for above-fold (eager) images
 * • Warm-ivory skeleton placeholder until painted
 * • CSS opacity fade-in on load — zero JS animation overhead
 * • Wrapper does NOT add overflow-hidden — parent controls clipping
 * • img is always in the DOM so layout is never collapsed
 */
export function ProgressiveImg({
  src,
  alt,
  eager = false,
  className = "",
  wrapperClass = "",
  style,
  ...rest
}: ProgressiveImgProps) {
  const [loaded, setLoaded] = useState(() => loadedImageSources.has(src));
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setLoaded(loadedImageSources.has(src));

    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      loadedImageSources.add(src);
      setLoaded(true);
    }
  }, [src]);

  const markLoaded = () => {
    loadedImageSources.add(src);
    setLoaded(true);
  };

  return (
    <div
      className={`relative ${wrapperClass}`}
      style={{ borderRadius: "inherit" }}
    >
      {/* Skeleton shimmer — stays until the image is painted */}
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(192,133,82,0.07) 0%, rgba(230,194,122,0.14) 50%, rgba(192,133,82,0.07) 100%)",
            backgroundSize: "200% 100%",
            animation: "progImgSkeleton 1.6s ease-in-out infinite",
            borderRadius: "inherit",
            zIndex: 1,
          }}
        />
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        // @ts-ignore – fetchpriority is supported by modern browsers but not typed in older React DOM typings
        fetchpriority={eager ? "high" : "auto"}
        className={className}
        style={{
          ...style,
          display: "block",
          opacity: loaded ? 1 : 0,
          transition:
            "opacity 0.45s ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1), filter 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onLoad={markLoaded}
        onError={() => setLoaded(true)}
        {...rest}
      />

      <style>{`
        @keyframes progImgSkeleton {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
