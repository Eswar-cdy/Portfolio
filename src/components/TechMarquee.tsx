'use client';

import { motion } from 'framer-motion';

const skills = [
    "Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL",
    "Supabase", "TailwindCSS", "Framer Motion", "Pandas", "Scikit-Learn",
    "Product Strategy", "User Research", "Agile/Scrum", "Figma"
];

export default function TechMarquee() {
    return (
        <div className="relative flex overflow-x-hidden py-10 bg-[var(--background)]">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

            <motion.div
                className="flex whitespace-nowrap gap-12"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30, // Adjust speed
                }}
            >
                {/* Repeating Content 3 times to ensure smooth loop */}
                {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 text-2xl font-bold text-gray-300 hover:text-[var(--primary)] transition-colors cursor-default">
                        <span className="text-[var(--accent)] not-italic">#</span> {skill}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
