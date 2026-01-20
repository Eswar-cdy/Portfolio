'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Code, Database, Search, Layout } from 'lucide-react';

export default function PhilosophySection() {
    return (
        <section className="py-32 px-4 bg-gray-50 dark:bg-slate-950/50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 p-20 opacity-5 dark:opacity-[0.02]">
                <Code size={400} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--primary)] font-bold tracking-widest uppercase text-sm"
                    >
                        My Approach
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mt-3 text-[var(--foreground)]"
                    >
                        The "Why" Behind The Code
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* 1. Product Philosophy (Large Card) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-7 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-10 shadow-xl shadow-gray-200/50 dark:shadow-none flex flex-col justify-between"
                    >
                        <div>
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                                <Lightbulb size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Product Philosophy</h3>
                            <blockquote className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 italic border-l-4 border-emerald-500 pl-6 my-6">
                                "I believe the best products are born from rigorous hypothesis testing, not boardroom guesses. Data &gt; Opinion."
                            </blockquote>
                        </div>
                        <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                Start from problem framing and constraints.
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                Define success metrics and basic experiment before writing code.
                            </li>
                        </ul>
                    </motion.div>

                    {/* 2. Education (Side Card) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-5 bg-[var(--primary)] text-white rounded-3xl p-10 shadow-xl shadow-indigo-500/20 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                        <div>
                            <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white backdrop-blur-sm">
                                <Rocket size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Education</h3>
                            <div className="text-indigo-100 text-lg font-medium mb-1">M.S. Info Systems Eng & Management</div>
                            <div className="text-indigo-200 text-sm">Harrisburg University</div>
                        </div>

                        <p className="mt-8 text-indigo-100 leading-relaxed opacity-90">
                            "Where academic rigor meets agile reality. Bridging the gap between theory and execution."
                        </p>
                    </motion.div>

                    {/* 3. Tech Arsenal (Bottom Grid) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 shadow-lg section-glass"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Code className="text-slate-500" />
                            <h3 className="text-xl font-bold">Tech Arsenal</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                            This is the toolkit used across the projects above to turn raw data into decisions.
                            <br /><br />
                            <span className="font-semibold text-slate-700 dark:text-slate-300">Strategy:</span> Next.js + FastAPI for fast experiments, SQL/Python for analytics.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "Python", "SQL", "FastAPI", "OpenAI API"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. Business Toolkit (Bottom Wide) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Layout className="text-purple-500" />
                            <h3 className="text-xl font-bold">Business Analysis Toolkit</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-2 text-sm">
                                    <Search size={16} className="text-purple-500" /> Discovery
                                </h4>
                                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                    <li>User Interviews → JTBD summaries & opportunity areas.</li>
                                    <li>Journey Mapping</li>
                                    <li>Requirement Gathering</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-2 text-sm">
                                    <Database size={16} className="text-purple-500" /> Analysis
                                </h4>
                                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                    <li>SQL/Power BI → dashboards used to monitor KPIs.</li>
                                    <li>Excel (Advanced)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-2 text-sm">
                                    <Layout size={16} className="text-purple-500" /> Documentation
                                </h4>
                                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                    <li>PRDs & User Stories → used to align dev scope.</li>
                                    <li>Process Flows (Jira)</li>
                                    <li>Wireframing Tools</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
}
