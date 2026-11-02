'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Hourglass } from 'lucide-react';
import { MouseEvent } from 'react';
import { certifications, type Certification } from '@/lib/data';
import SectionHeading from './ui/section-heading';

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const earned = cert.status === 'earned';

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 900 }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className={`shine relative h-full rounded-3xl border p-6 ${
          earned ? 'border-white/15 bg-white/[0.04]' : 'border-dashed border-white/15 bg-transparent'
        }`}
      >
        <div
          className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${cert.accent} ${
            earned ? 'shadow-lg' : 'opacity-50'
          }`}
          style={{ transform: 'translateZ(40px)' }}
        >
          {earned ? <Award size={26} /> : <Hourglass size={24} />}
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">{cert.issuer}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{cert.name}</h3>
        <span
          className={`mt-5 inline-block rounded-full px-3 py-1 text-xs ${
            earned ? 'bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30' : 'bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/30'
          }`}
        >
          {earned ? 'Certified' : 'In progress'}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials & what's next"
        subtitle="Certified on Marketing Cloud today — working toward Data Cloud and Marketing Cloud Next."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <CertCard key={c.name} cert={c} index={i} />
        ))}
      </div>
    </section>
  );
}
