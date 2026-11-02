'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, BadgeCheck, Mail, MapPin } from 'lucide-react';
import { MouseEvent, useEffect, useState } from 'react';
import { certifications, profile } from '@/lib/data';

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 35 : 75;
    if (!deleting && text === word) delay = 1600;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, rgba(56,189,248,0.12), transparent 70%)`;

  function onMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const r = currentTarget.getBoundingClientRect();
    mx.set(clientX - r.left);
    my.set(clientY - r.top);
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-16"
    >
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="aurora absolute -left-[10%] top-[5%] h-[480px] w-[480px] rounded-full bg-sky-500/30" />
        <div className="aurora absolute right-[-5%] top-[20%] h-[520px] w-[520px] rounded-full bg-violet-600/30 [animation-delay:-6s]" />
        <div className="aurora absolute bottom-[-10%] left-[30%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 [animation-delay:-12s]" />
      </div>
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} aria-hidden />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.a
          variants={item}
          href="#experience"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-neutral-300 backdrop-blur-md transition hover:border-sky-400/40"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.current.title} @ {profile.current.company} · since {profile.current.since}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.p variants={item} className="mb-4 text-lg text-neutral-400 md:text-xl">
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">Venkata Satya Sai</span>
          <br />
          <span className="text-shimmer">Tunikipati</span>
        </motion.h1>

        <motion.div variants={item} className="mt-8 min-h-9 font-mono text-[15px] text-sky-300 sm:text-xl md:text-2xl">
          <span className="text-neutral-500">&gt; </span>
          {typed}
          <span className="ml-0.5 inline-block w-[10px] animate-pulse bg-sky-300">&nbsp;</span>
        </motion.div>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
          I build data-driven customer journeys on Salesforce Marketing Cloud — turning segments, AMPscript and
          automation into campaigns that land.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
          {certifications.filter((c) => c.status === 'earned').map(({ name: c }) => (
            <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sky-300">
              <BadgeCheck size={14} /> {c}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-neutral-400">
            <MapPin size={14} /> {profile.location}
          </span>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 font-medium text-neutral-950 transition hover:shadow-[0_0_40px_-5px_rgba(56,189,248,0.6)]"
          >
            View my work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-3.5 font-medium text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.07]"
          >
            Get in touch
            <Mail size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
