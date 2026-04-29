import { ReactNode } from "react";
import { ProgressiveImg } from "./ProgressiveImg";

interface SplitLayoutProps {
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  children: ReactNode;
}

export function SplitLayout({ imageSrc, imageAlt, caption, children }: SplitLayoutProps) {
  return (
    <div className="bg-[var(--ivory)] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Cột trái: Hình ảnh */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
            <div className="group relative mb-4 flex justify-center overflow-hidden rounded-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(75,46,43,0.26)]"
                 style={{ boxShadow: "0 8px 30px rgba(75,46,43,0.18)", transform: "translateZ(0)" }}>
              <ProgressiveImg
                key={imageSrc}
                src={imageSrc}
                alt={imageAlt}
                wrapperClass="w-full"
                className="w-full h-auto object-contain rounded-lg transition duration-700 ease-out group-hover:scale-[1.045] group-hover:brightness-[1.04]"
              />
            </div>
            {caption && (
              <figcaption
                className="text-left text-[var(--wood-brown)] italic mt-4"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.5 }}
              >
                {caption}
              </figcaption>
            )}
          </div>

          {/* Cột phải: Nội dung chữ */}
          <div className="w-full lg:w-7/12">
            <div
              className="prose prose-lg text-[var(--deep-brown)] max-w-none"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.8 }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
