"use client";

import * as motion from "motion/react-client";

type FadeInSectionProps = {
  children: React.ReactNode;
};

export default function FadeInSection({ children }: FadeInSectionProps) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
