'use client';

import { motion } from 'framer-motion';
import { profile, stats } from '@/lib/data';
import SectionHeading from './ui/section-heading';
import CountUp from './ui/count-up';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <div className="grid items-start gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeading eyebrow="About" title="Engineer by training. Marketer by craft." />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-neutral-400"
          >
            {profile.summary}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-neutral-400"
          >
            Next up: going deeper into <span className="text-emerald-300">Data Cloud</span> and{' '}
            <span className="text-amber-300">Marketing Cloud Next</span> to connect unified customer data with
            AI-driven engagement.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="shine rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
            >
              <div className="bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-4xl font-bold text-transparent">
                {typeof s.value === 'number' ? <CountUp to={s.value} suffix={s.suffix} /> : s.value}
              </div>
              <div className="mt-2 text-sm text-neutral-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
