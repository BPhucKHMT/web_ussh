import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import { ProgressiveImg } from "./ProgressiveImg";

interface LivingProcessImageProps {
  src: string;
  alt: string;
  variant?: "framed" | "fullBleed";
}

export function LivingProcessImage({ src, alt, variant = "framed" }: LivingProcessImageProps) {
  const isFullBleed = variant === "fullBleed";
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.4 });

  const rotateY = useTransform(smoothX, [-1, 1], isFullBleed ? [-0.35, 0.35] : [-1.4, 1.4]);
  const rotateX = useTransform(smoothY, [-1, 1], isFullBleed ? [0.25, -0.25] : [1.2, -1.2]);
  const imageX = useTransform(smoothX, [-1, 1], isFullBleed ? [-14, 14] : [5, -5]);
  const imageY = useTransform(smoothY, [-1, 1], isFullBleed ? [-9, 9] : [4, -4]);
  const glowX = useTransform(smoothX, [-1, 1], [35, 65]);
  const glowY = useTransform(smoothY, [-1, 1], [38, 62]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className={`bg-[var(--ivory)] overflow-hidden ${isFullBleed ? "py-0 px-0 mt-16" : "py-12 px-3 sm:px-6"}`}>
      <div className={isFullBleed ? "w-full" : "mx-auto max-w-[1360px]"}>
        <motion.div
          initial={{ opacity: 0, y: isFullBleed ? 10 : 24, scale: isFullBleed ? 1 : 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: isFullBleed ? 1.15 : 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {!isFullBleed && (
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(230,194,122,0.22),transparent_42%),linear-gradient(135deg,rgba(192,133,82,0.12),rgba(69,37,31,0.04))] blur-sm" />
          )}

          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPointer}
            style={{ rotateX, rotateY, transformPerspective: isFullBleed ? 1800 : 1200 }}
            whileHover={isFullBleed ? { scale: 1.012 } : undefined}
            transition={isFullBleed ? { type: "spring", stiffness: 120, damping: 24 } : undefined}
            className={`group relative overflow-hidden ${isFullBleed ? "w-full rounded-none shadow-none will-change-transform cursor-none" : "rounded-[1.35rem] bg-[#fff8ec] shadow-[0_28px_90px_rgba(69,37,31,0.16)] ring-1 ring-[var(--bronze)]/12"}`}
          >
            <motion.div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-700 ${isFullBleed ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              style={{
                background: useTransform(
                  [glowX, glowY],
                  ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,${isFullBleed ? 0.42 : 0.34}), transparent ${isFullBleed ? 24 : 34}%)`
                ),
              }}
            />

            {isFullBleed && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: useTransform(
                    [glowX, glowY],
                    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,244,214,0.55), transparent 18%, rgba(69,37,31,0.28) 68%)`
                  ),
                }}
              />
            )}

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-10 -left-1/3 z-10 w-1/3 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.20),transparent)]"
              animate={{ x: isFullBleed ? ["-20%", "360%"] : ["0%", "430%"] }}
              transition={{ duration: isFullBleed ? 12 : 7.5, repeat: Infinity, repeatDelay: isFullBleed ? 7 : 4, ease: "easeInOut" }}
            />

            <motion.div
              style={{ x: imageX, y: imageY }}
              animate={isFullBleed ? { scale: [1.018, 1.028, 1.018] } : undefined}
              whileHover={isFullBleed ? { scale: 1.055, filter: "saturate(1.12) contrast(1.07)" } : undefined}
              transition={isFullBleed ? { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } : undefined}
              className={`relative z-0 ${isFullBleed ? "p-0" : "p-2 sm:p-4"}`}
            >
              <ProgressiveImg
                src={src}
                alt={alt}
                wrapperClass="w-full"
                className={`block w-full h-auto object-contain ${isFullBleed ? "rounded-none" : "rounded-[1rem]"}`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
