import { Hero } from "../components/Hero";
import { IntroSection } from "../components/IntroSection";
import { StickyImageSection } from "../components/StickyImageSection";
import { NextChapter } from "../components/NextChapter";
import { motion } from "motion/react";

export function IntroPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <IntroSection />
      <StickyImageSection />
      <NextChapter to="/chuong-1" label="Chương 1" />
    </motion.div>
  );
}
