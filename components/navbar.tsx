'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
        >
            <nav className="flex items-center gap-6 px-6 py-3 rounded-full bg-neutral-900/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20">
                <Link href="/" className="text-neutral-200 hover:text-white transition-colors font-medium">Home</Link>
                <Link href="#projects" className="text-neutral-400 hover:text-white transition-colors">Projects</Link>
                <Link href="#about" className="text-neutral-400 hover:text-white transition-colors">About</Link>
                <div className="h-4 w-px bg-neutral-800" />
                <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:tunikipativenkat310@gmail.com" className="text-neutral-400 hover:text-blue-400 transition-colors">
                        <Mail size={18} />
                    </a>
                </div>
            </nav>
        </motion.header>
    );
}
