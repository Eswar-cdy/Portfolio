import Navbar from '@/components/Navbar';
import ImageGallery from '@/components/ImageGallery';
import { ArrowLeft, Github, Users, Database, Layout } from 'lucide-react';
import Link from 'next/link';

export default function CollaborativeEcosystemPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/#projects" className="inline-flex items-center text-gray-500 hover:text-[var(--primary)] mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Projects
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-4xl font-bold">Collaborative Ecosystem</h1>
                        </div>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                            A two-sided marketplace bridging the gap between academic talent and business needs through data-driven project matching.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Platform Strategy</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">System Architecture</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Data Modeling</span>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <h3>The Challenge</h3>
                            <p>
                                Students often struggle to find real-world projects to apply their skills, while businesses lack a streamlined pipeline to identify emerging talent.
                                Existing solutions are often fragmented, lacking a structured feedback loop to align academic output with industry requirements.
                            </p>

                            <h3>My Role & Strategy</h3>
                            <p>
                                As the <strong>Product Strategist & System Architect</strong>, I defined the platform's core value proposition and data structure.
                            </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li><strong>Ecosystem Design:</strong> Conceptualized a "Projects-First" approach where businesses post challenges and students form teams to solve them.</li>
                                <li><strong>Data Strategy:</strong> Architected a relational database schema to track user interactions and project outcomes for analytics.</li>
                                <li><strong>User Flow:</strong> Designed the "Survey" entity to gather structured feedback, closing the loop between deliverables and expectations.</li>
                            </ul>

                            <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-8 mt-6">
                                <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-3 flex items-center gap-2">
                                    <span className="text-xl">🏗️</span> Integration Architecture
                                </h4>
                                <p className="text-sm text-blue-800 dark:text-blue-300 mb-4">
                                    <em>Designed a robust Entity-Relationship model to support scaling to thousands of users:</em>
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded shadow-sm text-blue-600">
                                            <Users size={18} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-sm text-blue-900 dark:text-blue-200">The Actors</h5>
                                            <p className="text-xs text-blue-800 dark:text-blue-300">
                                                <strong>Student:</strong> Application, Team Formation, Submission.<br />
                                                <strong>Business:</strong> Problem Definition, Mentorship, Evaluation.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded shadow-sm text-purple-600">
                                            <Layout size={18} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-sm text-blue-900 dark:text-blue-200">The Core Entity (Project)</h5>
                                            <p className="text-xs text-blue-800 dark:text-blue-300">
                                                Acts as the central node connecting Students and Businesses. Metadata includes: Skills Required, Duration, and Success Metrics.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded shadow-sm text-green-600">
                                            <Database size={18} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-sm text-blue-900 dark:text-blue-200">Data & Feedback</h5>
                                            <p className="text-xs text-blue-800 dark:text-blue-300">
                                                <strong>Survey Entity:</strong> Captures quantitative data on student performance and business satisfaction, feeding into the platform's recommendation engine.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3>Key Features</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Smart Matching:</strong> Algorithms matching student skill sets (tagged in their profile) with project requirements.</li>
                                <li><strong>Collaborative Workspaces:</strong> Shared digital spaces for teams to manage deliverables and receive business mentorship.</li>
                                <li><strong>Verified Credentials:</strong> Successful project completion generates immutable "Experience Badges" for student portfolios.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="lg:sticky lg:top-24 h-fit space-y-8">
                        <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Database size={20} className="text-purple-600" />
                                Data Schema (ERD)
                            </h3>
                            <div className="aspect-video bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-4 flex items-center justify-center">
                                {/* Visual representation of the ERD described in the PDF */}
                                <div className="flex flex-col items-center gap-4 w-full">
                                    <div className="flex justify-between w-full px-8">
                                        <div className="p-3 bg-blue-100 text-blue-800 rounded-lg text-center w-24 border border-blue-200">
                                            <span className="text-xs font-bold block">Business</span>
                                            <span className="text-[10px] text-blue-600">Creates</span>
                                        </div>
                                        <div className="p-3 bg-green-100 text-green-800 rounded-lg text-center w-24 border border-green-200">
                                            <span className="text-xs font-bold block">Student</span>
                                            <span className="text-[10px] text-green-600">Applies</span>
                                        </div>
                                    </div>
                                    <div className="h-8 w-px bg-gray-300 dark:bg-gray-600 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400"></div>
                                    </div>
                                    <div className="p-4 bg-purple-100 text-purple-900 rounded-lg text-center w-40 border-2 border-purple-200 shadow-sm z-10">
                                        <span className="text-sm font-bold block">PROJECT</span>
                                        <span className="text-[10px] text-purple-700 block mt-1">Central Entity</span>
                                    </div>
                                    <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="p-3 bg-orange-100 text-orange-800 rounded-lg text-center w-32 border border-orange-200 border-dashed">
                                        <span className="text-xs font-bold block">Survey / Data</span>
                                        <span className="text-[10px] text-orange-600">Feedback Loop</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-center text-gray-500 mt-3">
                                Simplified Entity-Relationship Diagram showing the core data flow.
                            </p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-xl text-white shadow-lg">
                            <h3 className="font-bold text-lg mb-2">Value Proposition</h3>
                            <p className="text-sm opacity-90 mb-4">
                                "Bridging the gap between theory and practice."
                            </p>
                            <ul className="text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                                    Student Experience
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                                    Business ROI
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                                    Institutional Data
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
