'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export default function BentoCard({ children, className = '', ...props }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }} // Lifts the card slightly
      transition={{
        type: "spring",
        stiffness: 50,   // Low tension for a slow start
        damping: 20,     // High friction for a smooth stop
        mass: 1.5        // Extra weight for momentum
      }}
      className={`bg-neutral-900 border border-neutral-800 rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
