'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import BentoCard from './ui/bento-card';

function ProjectCard({ title, description, tags, size = "small", image = "" }: { title: string, description: string, tags: string[], size?: "small" | "medium" | "large", image?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const colSpan = size === "large" ? "md:col-span-2 md:row-span-2" : size === "medium" ? "md:col-span-1 md:row-span-2" : "col-span-1";

    return (
        <BentoCard
            className={`group relative overflow-hidden rounded-3xl border-white/10 bg-neutral-900/50 p-0 ${colSpan}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative h-full flex flex-col p-6 z-10">
                <div className="flex-1 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl border border-white/10">
                        🚀
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-100">{title}</h3>
                    <p className="text-neutral-400">{description}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                        {tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-32 container mx-auto px-4 z-10 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Selected Projects</h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                <ProjectCard
                    size="large"
                    title="Raspberry Pi Obstacle Avoidance Robot"
                    description="Autonomous robot navigation system using OpenCV for obstacle detection and path planning. Engineered with Python on Raspberry Pi."
                    tags={["Python", "Raspberry Pi", "OpenCV", "Robotics"]}
                />
                <ProjectCard
                    size="medium"
                    title="Hand Gesture Appliance Control"
                    description="Accessibility-focused IoT system allowing control of home appliances via hand gestures using accelerometers."
                    tags={["Arduino", "C++", "Sensors", "IoT"]}
                />
                <BentoCard className="bg-neutral-900/30 rounded-3xl border border-white/5 p-6 flex items-center justify-center text-center text-neutral-500 hover:text-neutral-400 hover:bg-neutral-900/50 transition-colors">
                    <p>More projects coming soon...</p>
                </BentoCard>
            </div>
        </section>
    );
}

