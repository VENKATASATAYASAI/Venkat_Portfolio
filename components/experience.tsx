'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';
import { experience } from '@/lib/data';
import SectionHeading from './ui/section-heading';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading eyebrow="Experience" title="Where I've been building" />

      <div ref={ref} className="relative pl-10 md:pl-14">
        <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:left-5" />
        <motion.div style={{ height }} className="absolute left-3 top-0 w-px bg-gradient-to-b from-sky-400 via-violet-500 to-fuchsia-500 md:left-5" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative"
            >
              <span
                className={`absolute -left-[34px] top-7 grid h-5 w-5 place-items-center rounded-full border-4 border-[#05050a] md:-left-[42px] ${
                  job.current ? 'bg-sky-400 shadow-[0_0_20px_4px_rgba(56,189,248,0.5)]' : 'bg-neutral-600'
                }`}
              />
              <div
                className={`rounded-3xl border p-6 md:p-8 ${
                  job.current ? 'glow-border border-transparent bg-white/[0.04]' : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">{job.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sky-300">
                      <Briefcase size={15} /> {job.company}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-xs ${
                      job.current ? 'bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30' : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    {job.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2 text-neutral-400">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
