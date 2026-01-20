'use client';

import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Briefcase, TrendingUp, Database, Calendar, Building2 } from 'lucide-react';

const experiences = [
    {
        role: "Product Strategy & Development",
        company: "Freelance",
        period: "2024 - Present",
        description: "Personal/freelance MVP builds for 'Green Engine' (AgriTech) and 'Collaborative Ecosystem'; not yet in production. Leaning on prior analytics experience to define metrics and instrumentation for MVPs from day one.",
        skills: ["Product Vision", "Full Stack Dev", "GTM Strategy"],
        icon: Rocket,
        color: "text-pink-500"
    },
    {
        role: "Master's in Information Systems",
        company: "Harrisburg University",
        period: "Aug 2023 - Dec 2025",
        description: "Specializing in Tech Entrepreneurship and Project Management.",
        skills: ["Agile", "System Design", "Leadership"],
        icon: GraduationCap,
        color: "text-purple-500"
    },
    {
        role: "Project Lead",
        company: "Apr Hub Technologies",
        period: "Dec 2022 – Jun 2023",
        description: "Led data-driven projects utilizing Machine Learning. Coordinated a team of 4 to deliver ML models under tight deadlines, aligning stakeholders via JIRA.",
        skills: ["JIRA", "Statistical Analysis", "Team Leadership"],
        icon: TrendingUp,
        color: "text-blue-500"
    },
    {
        role: "Senior Data Analyst",
        company: "Apr Hub Technologies",
        period: "Sep 2021 – Dec 2022",
        description: "Conducted Exploratory Data Analysis and implemented predictive models. Built classification models for customer segmentation, enabling targeted marketing strategies.",
        skills: ["Python", "Matplotlib", "Random Forest", "KNN"],
        icon: Briefcase,
        color: "text-indigo-500"
    },
    {
        role: "Data Analyst",
        company: "Apr Hub Technologies",
        period: "Sep 2020 – Nov 2021",
        description: "Specialized in ETL processes and Power BI. Automated 5+ recurring weekly reports, reducing manual data processing effort by 40%.",
        skills: ["Power BI", "DAX", "SQL Server", "ETL"],
        icon: Database,
        color: "text-cyan-500"
    }
];

export default function ExperienceTimeline() {
    return (
        <div className="max-w-4xl mx-auto px-4 md:px-0 pb-24">
            <div className="relative space-y-12">
                {/* Continuous Vertical Date Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent opacity-20" />

                {experiences.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex gap-8 group"
                        >
                            {/* Icon Node */}
                            <div className="relative z-10 flex-none w-16 h-16 rounded-full glass-card flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <div className={`absolute inset-0 rounded-full opacity-20 blur-lg ${exp.color.replace('text', 'bg')}`} />
                                <Icon className={`w-7 h-7 ${exp.color}`} />
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 glass-card p-6 rounded-2xl hover:border-[var(--primary)]/30 transition-colors duration-300 group-hover:shadow-2xl group-hover:shadow-[var(--primary)]/5">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-500 mt-1 dark:text-gray-400">
                                            <Building2 size={16} />
                                            <span className="font-medium text-sm md:text-base">{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-xs font-semibold uppercase tracking-wider text-gray-500 w-fit">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(s => (
                                        <span
                                            key={s}
                                            className="px-3 py-1 bg-[var(--background)]/50 border border-gray-200 dark:border-slate-800 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:border-[var(--primary)]/20 transition-colors"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
