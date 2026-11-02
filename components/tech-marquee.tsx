import { skills } from '@/lib/data';

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
      <div className={`flex shrink-0 gap-4 pr-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-neutral-300 md:text-base"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const half = Math.ceil(skills.length / 2);
  return (
    <section className="relative space-y-4 border-y border-white/5 bg-white/[0.01] py-10" aria-label="Skills">
      <Row items={skills.slice(0, half)} />
      <Row items={skills.slice(half)} reverse />
    </section>
  );
}
