'use client';

import { Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 relative z-10 bg-neutral-950 text-neutral-500 text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <p>© 2026 Venkata Satya Sai Tunikipati. Built with precision.</p>
                </div>
                <div className="flex items-center gap-6">
                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Linkedin size={16} />
                        <span>LinkedIn</span>
                    </a>
                    <a 
                        href="https://trailblazer.me" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <ExternalLink size={16} />
                        <span>Salesforce Trailblazer</span>
                    </a>
                    <a 
                        href="mailto:tunikipativenkat310@gmail.com" 
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Mail size={16} />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

