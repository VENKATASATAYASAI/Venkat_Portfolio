'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Bot, Database, Route, Sparkles, type LucideIcon } from 'lucide-react';
import { MouseEvent } from 'react';
import { capabilities } from '@/lib/data';
import SectionHeading from './ui/section-heading';

const icons: Record<string, LucideIcon> = { route: Route, database: Database, sparkles: Sparkles, bot: Bot };

function Card({ c, i }: { c: (typeof capabilities)[number]; i: number }) {
  const mx = useMotionValue(-500);
  const my = useMotionValue(-500);
  const border = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, rgba(125,211,252,0.6), transparent 70%)`;
  const Icon = icons[c.icon] ?? Sparkles;

  function onMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const r = currentTarget.getBoundingClientRect();
    mx.set(clientX - r.left);
    my.set(clientY - r.top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      className={`group relative rounded-3xl p-px ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
    >
      {/* cursor-following border light */}
      <motion.div className="absolute inset-0 rounded-3xl bg-white/10 opacity-60 transition group-hover:opacity-100" style={{ background: border }} />
      <div className="absolute inset-0 rounded-3xl bg-white/[0.06]" />
      <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#0a0a12] p-7">
        <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${c.accent} blur-2xl transition-transform duration-700 group-hover:scale-150`} />
        <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sky-300 transition group-hover:rotate-[-8deg] group-hover:scale-110">
          <Icon size={22} />
        </div>
        <h3 className="relative mt-6 text-xl font-semibold text-white">{c.title}</h3>
        <p className="relative mt-2 max-w-md text-neutral-400">{c.description}</p>
      </div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading eyebrow="What I do" title="Marketing Cloud, end to end" subtitle="From the data model to the moment a message lands." />
      <div className="grid gap-5 md:grid-cols-3">
        {capabilities.map((c, i) => (
          <Card key={c.title} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}
