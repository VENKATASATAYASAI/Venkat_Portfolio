'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500"
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2"
      >
        <nav
          className={`flex items-center justify-between rounded-full border px-5 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? 'border-white/10 bg-neutral-950/70 shadow-2xl shadow-black/40' : 'border-white/5 bg-white/[0.03]'
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-violet-600 text-xs font-bold">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.shortName}</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-400 transition-colors hover:text-sky-400">
              <Linkedin size={18} />
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-400 transition-colors hover:text-white">
              <Github size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hidden text-neutral-400 transition-colors hover:text-violet-400 sm:block">
              <Mail size={18} />
            </a>
            <button onClick={() => setOpen((o) => !o)} className="text-neutral-300 md:hidden" aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex flex-col rounded-3xl border border-white/10 bg-neutral-950/90 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-neutral-300 hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
