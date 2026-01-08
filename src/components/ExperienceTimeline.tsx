'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Product Strategy & Development",
        company: "Freelance / Concept",
        period: "2024 - Present",
        description: "Developing 'Green Engine' (AgriTech) and 'Collaborative Ecosystem' platforms. Applying product thinking to solve real-world efficiency problems.",
        skills: ["Product Vision", "Full Stack Dev", "GTM Strategy"]
    },
    {
        role: "Business Analyst Trainee",
        company: "Tech Mahindra",
        period: "2022 - 2023",
        description: "Analyzed business requirements for telecom clients. Reduced reporting turnaround time by 40% using automated SQL pipelines.",
        skills: ["SQL", "PowerBI", "Requirement Gathering", "JIRA"]
    },
    {
        role: "Master's in Information Systems",
        company: "Harrisburg University",
        period: "2023 - 2025",
        description: "specializing in Tech Entrepreneurship and Project Management.",
        skills: ["Agile", "System Design", "Leadership"]
    }
];

export default function ExperienceTimeline() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-slate-800 last:border-0"
                >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-[var(--primary)] ring-4 ring-white dark:ring-slate-950" />

                    <div className="mb-1 text-sm text-[var(--primary)] font-bold uppercase tracking-wider">
                        {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">
                        {exp.role} <span className="text-gray-400 font-normal">@ {exp.company}</span>
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
                        {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map(s => (
                            <span key={s} className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-xs rounded-md text-gray-500">
                                {s}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
