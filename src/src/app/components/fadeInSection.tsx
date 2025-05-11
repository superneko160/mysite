import * as motion from "motion/react-client";

type FadeInSectionProps = {
  children: React.ReactNode;
};

export default function FadeInSection({ children }: FadeInSectionProps) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
