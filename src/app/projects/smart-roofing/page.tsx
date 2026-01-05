import Navbar from '@/components/Navbar';
import SmartRoofingDashboard from '@/components/SmartRoofingDashboard';
import ImageGallery from '@/components/ImageGallery';
import { ArrowLeft, FileText, Users, Target, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function SmartRoofingPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/#projects" className="inline-flex items-center text-gray-500 hover:text-[var(--primary)] mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Projects
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Context */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Smart Roofing Performance Monitor</h1>
                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">IoT</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Product Strategy</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">B2B</span>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <h3>The Problem</h3>
                            <p>
                                Commercial roof failures are often detected too late, leading to expensive water damage and insulation replacement.
                                Contractors lack real-time visibility into roof performance after installation.
                            </p>

                            <h4>Why Existing Solutions Fall Short</h4>
                            <p className="mb-4">
                                The commercial market is dominated by reactive models. After analyzing 3 competing solutions, we identified critical gaps:
                                <strong>High false-alarm rates</strong> (eroding trust), <strong>Prohibitive costs</strong> ($1k+), and <strong>Batch reporting</strong> (too slow).
                            </p>

                            <h4>Competitive Analysis</h4>
                            <div className="overflow-x-auto mb-6">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-gray-500 bg-gray-50 dark:bg-slate-800">
                                        <tr>
                                            <th className="px-4 py-2 rounded-tl-lg">Solution</th>
                                            <th className="px-4 py-2">Cost</th>
                                            <th className="px-4 py-2 rounded-tr-lg">Pros/Cons</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b dark:border-slate-800">
                                            <td className="px-4 py-3 font-medium">Manual Inspect</td>
                                            <td className="px-4 py-3">$1k/visit</td>
                                            <td className="px-4 py-3 text-gray-500">Industry standard, but purely reactive.</td>
                                        </tr>
                                        <tr className="border-b dark:border-slate-800">
                                            <td className="px-4 py-3 font-medium">Thermal Camera</td>
                                            <td className="px-4 py-3">$5k+</td>
                                            <td className="px-4 py-3 text-gray-500">High precision, but requires trained operator.</td>
                                        </tr>
                                        <tr className="bg-blue-50 dark:bg-blue-900/20">
                                            <td className="px-4 py-3 font-bold text-blue-700">Green Engine</td>
                                            <td className="px-4 py-3 font-bold text-blue-700">&lt;$150/node</td>
                                            <td className="px-4 py-3 text-blue-700">Real-time, predictive, affordable.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>The Solution</h3>
                            <p>
                                A sensor-based monitoring platform that tracks temperature and moisture levels within the roof assembly.
                                It alerts facility managers to potential leaks before they penetrate the building envelope.
                            </p>

                            <h3>My Role & Methodology</h3>
                            <p>
                                I led the product definition and prototype development. I utilized a <strong>Double Diamond</strong> approach:
                            </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li><strong>Discovery:</strong> Market research with 5 roofing contractors to validate pain points.</li>
                                <li><strong>Definition:</strong> Created PRD and user personas (Facility Manager vs. Contractor).</li>
                                <li><strong>Development:</strong> Built standard dashboard with React & Recharts.</li>
                                <li><strong>Delivery:</strong> Validated with 2 beta users, refining the alert thresholds.</li>
                            </ul>

                            <ImageGallery images={[
                                {
                                    src: "/images/smart-roofing-personas.svg",
                                    alt: "User Personas",
                                    caption: "Designed for two distinct users: The proactive Manager (Sarah) and the defensive Contractor (Mike).",
                                }
                            ]} />

                            <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30 mb-8 mt-6">
                                <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-3 flex items-center gap-2">
                                    <span className="text-xl">💡</span> Key Research Insights
                                </h4>
                                <p className="text-sm text-amber-800 dark:text-amber-300 mb-4">
                                    <em>From interviews with 5 roofing contractors & 2 facility managers:</em>
                                </p>
                                <ul className="space-y-4 text-sm text-amber-900 dark:text-amber-200">
                                    <li className="italic border-l-4 border-amber-300 pl-3">
                                        "By the time we see water stains on the ceiling, it's already a $40K repair job. We need to know when the moisture enters, not when it trips."
                                        <span className="block not-italic font-bold text-xs mt-1">— Facility Manager, Hospital A</span>
                                    </li>
                                    <li className="italic border-l-4 border-amber-300 pl-3">
                                        "I don't trust sensors anymore. The last system gave us 3 false alarms a week. If it cries wolf, I turn it off."
                                        <span className="block not-italic font-bold text-xs mt-1">— Roofing Contractor</span>
                                    </li>
                                    <li>
                                        <strong>Unexpected Finding:</strong> Contractors were most interested in data to <em>defend against warranty claims</em> (proving it wasn't an installation error) rather than just preventing leaks.
                                    </li>
                                </ul>
                            </div>
                            <h3>Key Design Decisions</h3>
                            <p>
                                <strong>Real-time vs. Batched:</strong> We chose real-time monitoring despite higher cost because water damage happens exponentially fast.
                            </p>
                            <p>
                                <strong>Mobile-First Alerts:</strong> Facility managers are often walking the site, so SMS alerts were prioritized over email.
                            </p>

                            <ImageGallery images={[
                                {
                                    src: "/images/smart-roofing-user-flow.svg",
                                    alt: "User Flow Diagram",
                                    caption: "Mapping the facility manager's journey from alert to resolution.",
                                },
                                {
                                    src: "/images/smart-roofing-wireframes.svg",
                                    alt: "Low-Fidelity Wireframes",
                                    caption: "Evolution from raw data tables to visual KPIs.",
                                }
                            ]} />

                            <h3>Technology Deep-Dive</h3>
                            <p className="mb-4">
                                The system utilizes a distributed edge architecture to ensure reliability even with spotty connectivity.
                            </p>
                            <ImageGallery images={[
                                {
                                    src: "/images/smart-roofing-architecture.svg",
                                    alt: "System Architecture",
                                    caption: "Data flows from Edge (ESP32) to Cloud (FastAPI) to User (Dashboard/SMS).",
                                }
                            ]} />
                            <ul className="list-disc pl-5 mb-4 mt-6">
                                <li><strong>Hardware Layer:</strong> Utilized DHT22 sensors (±0.5°C accuracy) and capacitive soil moisture sensors re-calibrated for roof insulation materials.</li>
                                <li><strong>Edge Computing:</strong> ESP32 microcontrollers perform local anomaly detection to reduce LTE bandwidth costs.</li>
                                <li><strong>Data Pipeline:</strong> Sensor &rarr; MQTT Broker &rarr; Python FastAPI Ingest &rarr; TimescaleDB (Time-series optimization).</li>
                            </ul>

                            <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800 my-6">
                                <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Real-World Validation</h4>
                                <p className="text-sm text-green-700 dark:text-green-400">
                                    While this specific application targets construction, the underlying IoT architecture was validated through my research at Harrisburg University with <strong>Green Engine</strong>.
                                    The same sensor stack successfully automated climate control for microgreens, proving the reliability of the hardware/software interface.
                                </p>
                            </div>

                            <h3>Key Learnings & Future Roadmap</h3>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                                    <h5 className="font-bold mb-2 text-green-600">What Worked</h5>
                                    <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• <strong>Real-time Trust:</strong> SMS alerts had a 95% open rate vs 20% for email, confirming the mobile-first hypothesis.</li>
                                        <li>• <strong>Cost Efficiency:</strong> Edge computing reduced LTE data costs by 60% compared to raw streaming.</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                                    <h5 className="font-bold mb-2 text-orange-600">Challenges Faced</h5>
                                    <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• <strong>Calibration:</strong> Initial soil sensors had 35% false positive rate in fiberglass insulation. Required custom re-calibration.</li>
                                        <li>• <strong>User Fatigue:</strong> Beta User A ignored alerts after 3 false positives. Taught us that accuracy &gt; speed.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg border border-blue-100 dark:border-slate-700 mb-8">
                                <h5 className="font-bold mb-2 text-blue-600">What I'd Do Differently</h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    I would start with a <strong>Temperature-Only MVP</strong>. Adding moisture sensors introduced complexity that delayed field testing.
                                    Validating the connectivity stack with simple temp data first would have accelerated learning by 3 weeks.
                                </p>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h3>Go-to-Market Strategy</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-4 border rounded-lg dark:border-slate-800">
                                    <h5 className="font-bold mb-2">Phase 1: Contractor Channel</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Months 1-6</p>
                                    <ul className="text-sm list-disc pl-4 space-y-1">
                                        <li>Partner with mid-size roofing firms.</li>
                                        <li>Position as "Warranty Protection" add-on.</li>
                                        <li>Pilot on 20 installations (Cost-sharing).</li>
                                    </ul>
                                </div>
                                <div className="p-4 border rounded-lg dark:border-slate-800">
                                    <h5 className="font-bold mb-2">Phase 2: Direct to Facility</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Months 7-12</p>
                                    <ul className="text-sm list-disc pl-4 space-y-1">
                                        <li>Target Hospitals & Schools (10+ bldgs).</li>
                                        <li>Sell on ROI ("Prevent one $40k repair").</li>
                                        <li>Freemium model: Alerts free, Predictive paid.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                                <Users className="text-[var(--primary)] mb-2" />
                                <h4 className="font-bold">Target User</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Commercial Roofing Contractors & Facility Managers</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                                <Target className="text-[var(--primary)] mb-2" />
                                <h4 className="font-bold">Key Metric</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Reduction in emergency repair costs (Target: 20%)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Demo */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="mb-4 flex justify-between items-end">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <BarChart size={20} className="text-[var(--primary)]" />
                                Live Prototype
                            </h2>
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Interactive Demo</span>
                        </div>
                        <SmartRoofingDashboard />

                        <div className="mt-8 p-6 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <FileText size={18} /> Project Artifacts
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="/documents/PRD_Smart_Roofing.md" target="_blank" className="flex items-center text-blue-600 hover:underline">
                                        📄 Product Requirements Doc (PRD)
                                    </a>
                                </li>
                                <li>
                                    <span className="flex items-center text-gray-400 cursor-not-allowed" title="Available upon request">
                                        🎨 Figma Design File (Private)
                                    </span>
                                </li>
                                <li>
                                    <a href="/documents/Interview_Script_Roofing.md" target="_blank" className="flex items-center text-blue-600 hover:underline">
                                        📊 User Interview Script
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-6 border-t pt-4 dark:border-slate-800">
                                <h4 className="font-bold mb-3 text-sm flex items-center gap-2">
                                    <span>🛠️</span> Technical Implementation
                                </h4>
                                <ul className="space-y-3 text-xs">
                                    <li>
                                        <a href="#" className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 cursor-not-allowed opacity-80 group" title="Repository coming soon">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-md text-blue-600 dark:text-blue-400">
                                                <code>ESP32</code>
                                            </div>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Sensor Firmware Code</span>
                                            <span className="ml-auto text-xs text-gray-400 border px-1.5 py-0.5 rounded">Private</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 cursor-not-allowed opacity-80 group" title="Repository coming soon">
                                            <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-md text-green-600 dark:text-green-400">
                                                <code>API</code>
                                            </div>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">FastAPI Backend</span>
                                            <span className="ml-auto text-xs text-gray-400 border px-1.5 py-0.5 rounded">Private</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 cursor-not-allowed opacity-80 group" title="Repository coming soon">
                                            <div className="bg-amber-100 dark:bg-amber-900/30 p-1.5 rounded-md text-amber-600 dark:text-amber-400">
                                                <code>NB</code>
                                            </div>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Sensor Calibration (Jupyter)</span>
                                            <span className="ml-auto text-xs text-gray-400 border px-1.5 py-0.5 rounded">Private</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recruiter CTA */}
            <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-100 dark:border-slate-700 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Interested in discussing this project?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    I'm currently open to Business Analyst and Product Innovation roles where I can apply this same data-driven problem solving.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:geddameswarajay@gmail.com"
                        className="px-8 py-3 bg-[var(--primary)] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Schedule a Chat
                    </a>
                    <a
                        href="/Eswar_Ajay_Product_Innovation.pdf"
                        target="_blank"
                        className="px-8 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 font-bold rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </main>
    );
}
