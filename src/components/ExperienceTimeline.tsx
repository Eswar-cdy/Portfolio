'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Product Strategy & Development",
        company: "Freelance",
        period: "2024 - Present",
        description: "Developing 'Green Engine' (AgriTech) and 'Collaborative Ecosystem' platforms. Applying product thinking to solve real-world efficiency problems.",
        skills: ["Product Vision", "Full Stack Dev", "GTM Strategy"]
    },
    {
        role: "Master's in Information Systems",
        company: "Harrisburg University",
        period: "Aug 2023 - Dec 2025",
        description: "Specializing in Tech Entrepreneurship and Project Management.",
        skills: ["Agile", "System Design", "Leadership"]
    },
    {
        role: "Project Lead",
        company: "Apr Hub Technologies",
        period: "Dec 2022 – Jun 2023",
        description: "Led data-driven projects utilizing Machine Learning and Statistical Analysis to drive actionable business insights.",
        skills: ["Machine Learning", "Statistical Analysis", "Team Leadership"]
    },
    {
        role: "Senior Data Analyst",
        company: "Apr Hub Technologies",
        period: "Sep 2021 – Dec 2022",
        description: "Conducted Exploratory Data Analysis and implemented predictive models using KNN, Random Forest, and Decision Trees.",
        skills: ["EDA", "Python", "Matplotlib", "Random Forest", "KNN"]
    },
    {
        role: "Data Analyst",
        company: "Apr Hub Technologies",
        period: "Sep 2020 – Nov 2021",
        description: "Specialized in ETL processes, data visualization with Power BI, and complex T-SQL queries for reporting automation.",
        skills: ["Power BI", "DAX", "T-SQL", "SSIS", "ETL"]
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
