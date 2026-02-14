'use client';

import { motion } from 'framer-motion';

const techs = [
    { name: "Python" },
    { name: "C" },
    { name: "SQL" },
    { name: "Salesforce" },
    { name: "AWS" },
    { name: "Arduino" },
    { name: "Raspberry Pi" },
    { name: "OpenCV" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
];

export default function TechMarquee() {
    return (
        <section className="py-20 relative overflow-hidden bg-neutral-950/50 backdrop-blur-sm border-t border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-10 pointer-events-none" />

            <div className="flex relative overflow-hidden">
                <motion.div
                    className="flex gap-12 sm:gap-24 items-center whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...techs, ...techs, ...techs].map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 group">
                            <span className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-700 group-hover:from-white group-hover:to-neutral-400 transition-colors cursor-default">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
