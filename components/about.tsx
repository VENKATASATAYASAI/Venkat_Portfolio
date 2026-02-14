'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-32 container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Visual Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="sticky top-24"
                >
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 p-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                        {/* Placeholder for 3D visual */}
                        <div className="text-9xl grayscale opacity-20 animate-pulse">
                            ⚛️
                        </div>
                    </div>
                </motion.div>

                {/* Content Column */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">About & Experience</h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            I am a passionate software engineer specializing in IoT and Salesforce development.
                            With a strong foundation in cloud architecture and embedded systems, I bridge the gap between hardware and software
                            to build intelligent solutions. Currently building the future at the intersection of bits and atoms.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                            <Calendar className="text-blue-500" /> Experience
                        </h3>
                        <div className="relative border-l border-white/10 ml-3 pl-8 space-y-12">
                            {/* Item 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-950 bg-blue-500" />
                                <h4 className="text-xl font-bold text-neutral-200">IoT Intern</h4>
                                <p className="text-blue-400 text-sm mb-2">Technologics Global</p>
                                <p className="text-neutral-400">Engineered home automation solutions with Arduino, focusing on sensor integration and energy efficiency.</p>
                            </motion.div>

                            {/* Item 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative"
                            >
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-950 bg-purple-500" />
                                <h4 className="text-xl font-bold text-neutral-200">AWS Intern</h4>
                                <p className="text-purple-400 text-sm mb-2">APSSDC</p>
                                <p className="text-neutral-400">Managed EC2 instances and VPC cloud architecture, optimizing resource allocation and security protocols.</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                            <GraduationCap className="text-purple-500" /> Education
                        </h3>
                        <div className="grid gap-6">
                            <div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5">
                                <h4 className="text-lg font-bold text-white">M.Eng in Electrical & Computer Engineering</h4>
                                <p className="text-neutral-500">University of Windsor (2024-2025)</p>
                            </div>
                            <div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5">
                                <h4 className="text-lg font-bold text-white">B.Tech in Electronics</h4>
                                <p className="text-neutral-500">SRM University AP</p>
                                <p className="text-blue-400 text-sm mt-1">CGPA: 8.24</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
