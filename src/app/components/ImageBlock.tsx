import { ProgressiveImg } from "./ProgressiveImg";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  layout?: "full" | "wide" | "normal";
}

export function ImageBlock({ src, alt, caption, layout = "wide" }: ImageBlockProps) {
  const maxWidth = layout === "full" ? "100%" : layout === "wide" ? "1200px" : "760px";

  return (
    <div className={`bg-[var(--ivory)] py-12 ${layout === "full" ? "px-2 sm:px-6" : "px-6"}`}>
      <div className="mx-auto" style={{ maxWidth }}>
        <div
          className="relative mb-4 flex justify-center rounded-lg overflow-hidden"
          style={{ boxShadow: "0 8px 30px rgba(75,46,43,0.15)" }}
        >
          <ProgressiveImg
            key={src}
            src={src}
            alt={alt}
            wrapperClass={layout === "full" ? "w-full" : "max-w-full"}
            className={`${layout === "full" ? "w-full" : "max-w-full max-h-[70vh] w-auto"} h-auto object-contain rounded-lg`}
          />
        </div>
        {caption && (
          <figcaption
            className="text-center text-[var(--wood-brown)] italic mt-4"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
          >
            {caption}
          </figcaption>
        )}
      </div>
    </div>
  );
}
