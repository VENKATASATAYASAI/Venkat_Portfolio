'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText, Code, Cloud, Cpu, Terminal } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const roles = ["Software Engineer", "Salesforce Specialist", "IoT Innovator"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 150;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950 to-neutral-950 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-1 gap-12 text-center relative">
        
        {/* Floating Icons - Left */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:block text-neutral-700/50"
        >
          <Code size={48} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-32 top-1/3 hidden md:block text-neutral-600/50"
        >
          <Cloud size={40} />
        </motion.div>

        {/* Floating Icons - Right */}
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:block text-neutral-700/50"
        >
          <Cpu size={48} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 25, 0] }} 
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-32 top-2/3 hidden md:block text-neutral-600/50"
        >
          <Terminal size={40} />
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center space-y-8">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-neutral-800 p-2 relative">
                    <div className="w-full h-full rounded-full bg-neutral-900 overflow-hidden relative group">
                        {/* Placeholder for Headshot */}
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-neutral-500 font-bold text-2xl">
                            VST
                        </div>
                        {/* <Image src="/path/to/headshot.jpg" fill alt="Venkata Satya Sai" className="object-cover" /> */}
                    </div>
                </div>
                {/* Floating Ring Effect */}
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border-2 border-neutral-800/30 rounded-full border-dashed"
                 />
            </motion.div>

            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
            >
                <h2 className="text-xl md:text-2xl text-neutral-400 font-light">Hi, I'm</h2>
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                    Venkata Satya Sai Tunikipati
                </h1>
                <div className="h-8 text-2xl md:text-3xl text-blue-400 font-mono">
                    {text}<span className="animate-pulse">|</span>
                </div>
            </motion.div>

            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row gap-4 pt-8"
            >
                <a href="#projects" className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-all flex items-center gap-2 group">
                    View My Work 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="px-8 py-3 rounded-full bg-blue-600/10 hover:bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400 transition-all flex items-center gap-2">
                    Contact Me
                    <Mail size={18} />
                </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
