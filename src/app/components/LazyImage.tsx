import { useState, useEffect, useRef } from "react";

const loadedLazyImageSources = new Set<string>();

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * LazyImage — only starts loading when entering the viewport.
 * Uses IntersectionObserver (no library) to avoid filter/re-render overhead.
 */
export function LazyImage({ src, alt, className = "", style, ...rest }: LazyImageProps) {
  const [inView, setInView] = useState(() => loadedLazyImageSources.has(src));
  const [loaded, setLoaded] = useState(() => loadedLazyImageSources.has(src));
  const sentinelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (loadedLazyImageSources.has(src)) {
      setInView(true);
      setLoaded(true);
      return;
    }

    setLoaded(false);
    if (!sentinelRef.current) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [src]);

  const markLoaded = () => {
    loadedLazyImageSources.add(src);
    setLoaded(true);
  };

  return (
    <>
      <span ref={sentinelRef} style={{ display: "block", width: 0, height: 0 }} />
      {/* Placeholder */}
      {!loaded && (
        <span
          className="absolute inset-0 block"
          style={{ background: "rgba(255,248,240,0.08)", borderRadius: "inherit" }}
        />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          decoding="async"
          className={className}
          style={{
            ...style,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.28s ease",
          }}
          onLoad={markLoaded}
          onError={() => setLoaded(true)}
          {...rest}
        />
      )}
    </>
  );
}
