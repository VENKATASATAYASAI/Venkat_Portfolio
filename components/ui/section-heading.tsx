'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-14 max-w-2xl"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-sky-400">{eyebrow}</p>
      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-neutral-400">{subtitle}</p>}
    </motion.div>
  );
}
