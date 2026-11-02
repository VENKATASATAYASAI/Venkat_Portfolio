'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 px-4 pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glow-border relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-white/[0.03] px-6 py-16 text-center md:px-16"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="aurora absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-500/25" />
          <div className="aurora absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-violet-600/25 [animation-delay:-8s]" />
        </div>
        <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-sky-400">Contact</p>
        <h2 className="relative mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Let&apos;s build your next <span className="text-shimmer">journey</span>.
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-neutral-400">
          Open to conversations about Marketing Cloud, Data Cloud and marketing-tech projects.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-neutral-950 transition hover:shadow-[0_0_50px_-5px_rgba(168,85,247,0.7)]"
        >
          <Mail size={18} /> {profile.email}
          <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </motion.div>

      <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-sm text-neutral-500 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-6">
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
            <Github size={16} /> GitHub
          </a>
          <a href={profile.links.trailblazer} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
            <ArrowUpRight size={16} /> Trailblazer
          </a>
        </div>
      </div>
    </footer>
  );
}
