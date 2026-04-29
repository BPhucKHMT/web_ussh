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
          className="group relative mb-4 flex justify-center overflow-hidden rounded-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(75,46,43,0.24)]"
          style={{ boxShadow: "0 8px 30px rgba(75,46,43,0.15)", transform: "translateZ(0)" }}
        >
          <ProgressiveImg
            key={src}
            src={src}
            alt={alt}
            wrapperClass={layout === "full" ? "w-full" : "max-w-full"}
            className={`${layout === "full" ? "w-full" : "max-w-full max-h-[70vh] w-auto"} h-auto object-contain rounded-lg transition duration-700 ease-out group-hover:scale-[1.045] group-hover:brightness-[1.04]`}
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
