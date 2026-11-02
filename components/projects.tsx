'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MouseEvent } from 'react';
import { projects, type Project } from '@/lib/data';
import BentoCard from './ui/bento-card';
import SectionHeading from './ui/section-heading';

function ProjectCard({ project }: { project: Project }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgba(139,92,246,0.18), transparent 75%)`;

  function onMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const r = currentTarget.getBoundingClientRect();
    mx.set(clientX - r.left);
    my.set(clientY - r.top);
  }

  const Wrapper = project.href ? 'a' : 'div';

  return (
    <BentoCard
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-3xl border-white/10 bg-white/[0.03] p-0 ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: glow }} />
      {project.featured && (
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/30 to-violet-600/30 blur-3xl" />
      )}
      <Wrapper
        {...(project.href ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="relative z-10 flex h-full flex-col p-7"
      >
        <div className="flex items-start justify-between">
          <div className={`grid place-items-center rounded-2xl border border-white/10 bg-white/5 ${project.featured ? 'h-16 w-16 text-3xl' : 'h-12 w-12 text-2xl'}`}>
            {project.emoji}
          </div>
          {project.href && (
            <ArrowUpRight className="text-neutral-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          )}
        </div>
        {project.featured && (
          <pre className="mt-8 hidden overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-[13px] leading-relaxed text-neutral-400 md:block">
            <span className="text-neutral-600">%%[ /* personalize from a data extension */ ]%%</span>{'\n'}
            <span className="text-violet-300">SET</span> @rows = <span className="text-sky-300">LookupRows</span>(<span className="text-emerald-300">&quot;Loyalty_DE&quot;</span>, <span className="text-emerald-300">&quot;SubscriberKey&quot;</span>, _subscriberkey){'\n'}
            <span className="text-violet-300">IF</span> <span className="text-sky-300">RowCount</span>(@rows) &gt; 0 <span className="text-violet-300">THEN</span>{'\n'}
            {'  '}<span className="text-violet-300">SET</span> @tier = <span className="text-sky-300">Field</span>(<span className="text-sky-300">Row</span>(@rows, 1), <span className="text-emerald-300">&quot;Tier&quot;</span>){'\n'}
            <span className="text-violet-300">ENDIF</span>
          </pre>
        )}
        <div className="mt-auto pt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-violet-300">{project.kicker}</p>
          <h3 className={`mt-2 font-bold text-white ${project.featured ? 'text-3xl md:text-4xl' : 'text-xl'}`}>{project.title}</h3>
          <p className={`mt-3 text-neutral-400 ${project.featured ? 'max-w-xl text-base md:text-lg' : 'text-sm'}`}>{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </BentoCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading eyebrow="Projects" title="Selected work" subtitle="From Marketing Cloud tooling to hardware experiments." />
      <div className="grid auto-rows-[minmax(280px,auto)] grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
