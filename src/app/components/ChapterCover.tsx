import { motion } from "motion/react";
import { ProgressiveImg } from "./ProgressiveImg";

interface ChapterCoverProps {
  id: string;
  number: string;
  title: string;
  image: string;
  description?: string;
}

export function ChapterCover({ id, number, title, image, description }: ChapterCoverProps) {
  return (
    <section id={id} className="relative h-[90vh] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        {/* eager=false here — chapter covers are below the fold, lazy is fine.
            The wrapper fills the section, skeleton shows the warm-ivory bg. */}
        <ProgressiveImg
          src={image}
          alt={title}
          eager
          wrapperClass="w-full h-full"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--silk-gold)]/10 mix-blend-overlay" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-32 px-6 text-center bg-gradient-to-t from-[var(--deep-brown)] via-[var(--deep-brown)]/40 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 text-[var(--silk-gold)]"
          style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", letterSpacing: "0.2em" }}
        >
          {number}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-[var(--ivory)]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl mx-auto text-[var(--ivory)]/90 text-center"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", lineHeight: 1.6 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
