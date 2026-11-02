'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/lib/data';
import SectionHeading from './ui/section-heading';

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading eyebrow="Education" title="Foundations" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="shine rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-sky-500/30 text-violet-200">
                <GraduationCap size={22} />
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-neutral-400">{e.period}</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{e.degree}</h3>
            <p className="mt-1 text-neutral-400">{e.school}</p>
            {e.note && <p className="mt-3 text-sm text-sky-300">{e.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
