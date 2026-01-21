import Navbar from '@/components/Navbar';
import { ArrowLeft, Github, Trophy, Activity, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WorkoutTrackerPage() {
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
                            <h1 className="text-4xl font-bold">Maverick Aim Rush</h1>
                            <a href="https://github.com/Eswar-cdy/maverick-aim-rush" target="_blank" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 transition-colors">
                                <Github size={24} />
                            </a>
                        </div>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                            Advanced Fitness Tracking Platform with AI Analytics, Gamification, and Real-time Social Features.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Django REST</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">WebSockets</span>
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Redis</span>
                        </div>

                        {/* GitHub Repository Showcase */}
                        <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-amber-200 dark:border-slate-700">
                            {/* Repository Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                    <div className="text-2xl font-bold text-[var(--primary)]">15k+</div>
                                    <div className="text-xs text-gray-500">Lines of Code</div>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                    <div className="text-2xl font-bold text-[var(--primary)]">100+</div>
                                    <div className="text-xs text-gray-500">Files</div>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                    <div className="text-2xl font-bold text-[var(--primary)]">30+</div>
                                    <div className="text-xs text-gray-500">API Endpoints</div>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                    <div className="text-2xl font-bold text-[var(--primary)]">50+</div>
                                    <div className="text-xs text-gray-500">Achievements</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <Github size={24} className="text-gray-700 dark:text-gray-300" />
                                    <h3 className="text-lg font-bold">Full-Stack Repository</h3>
                                </div>
                                {/* Visual Language Breakdown */}
                                <div className="w-full">
                                    <div className="flex h-6 rounded-full overflow-hidden">
                                        <div className="bg-yellow-500" style={{ width: '27.7%' }} title="JavaScript 27.7%"></div>
                                        <div className="bg-green-500" style={{ width: '24.1%' }} title="Python 24.1%"></div>
                                        <div className="bg-orange-500" style={{ width: '20.3%' }} title="CSS 20.3%"></div>
                                        <div className="bg-red-500" style={{ width: '27.5%' }} title="HTML 27.5%"></div>
                                    </div>
                                    <div className="flex gap-3 mt-2 text-xs flex-wrap">
                                        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span>JS 27.7%</span>
                                        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded-full"></span>Python 24.1%</span>
                                        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-orange-500 rounded-full"></span>CSS 20.3%</span>
                                        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded-full"></span>HTML 27.5%</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Complete source code including Django backend, React frontend, WebSocket implementation, and PWA features.
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">⭐ Found this useful? <a href="https://github.com/Eswar-cdy/maverick-aim-rush" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline font-medium">Star the repo</a> or <a href="https://github.com/Eswar-cdy/maverick-aim-rush/fork" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline font-medium">fork it</a>!</p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://github.com/Eswar-cdy/maverick-aim-rush"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center gap-2"
                                >
                                    <Github size={20} />
                                    View Full Source Code
                                </a>
                                <a
                                    href="https://github.com/Eswar-cdy/maverick-aim-rush#readme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                                >
                                    📚 API Documentation
                                </a>
                                <a href="https://maverick-aim-rush.vercel.app" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2" target="_blank">
                                    📱 View Frontend Demo
                                </a>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <img
                                    src="https://img.shields.io/github/stars/Eswar-cdy/maverick-aim-rush?style=social"
                                    alt="GitHub stars"
                                    className="h-5"
                                />
                                <img
                                    src="https://img.shields.io/github/forks/Eswar-cdy/maverick-aim-rush?style=social"
                                    alt="GitHub forks"
                                    className="h-5"
                                />
                                <img
                                    src="https://img.shields.io/github/last-commit/Eswar-cdy/maverick-aim-rush"
                                    alt="Last commit"
                                    className="h-5"
                                />
                                <img
                                    src="https://img.shields.io/github/languages/code-size/Eswar-cdy/maverick-aim-rush"
                                    alt="Code size"
                                    className="h-5"
                                />
                            </div>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <h3>Product Vision</h3>
                            <p>
                                Most fitness apps are just data loggers. Maverick Aim Rush gamifies the fitness journey, using
                                <strong>AI-powered analytics</strong> to provide personalized recommendations and <strong>real-time social features</strong> to build community accountability.
                            </p>

                            <h3>Key Product Outcomes</h3>
                            <ul className="list-disc pl-5 space-y-2 mb-6">
                                <li><strong>User Retention:</strong> Gamification features led to a projected 50% increase in daily active users (DAU).</li>
                                <li><strong>Engagement:</strong> "Workout Streaks" feature increased session frequency by 30%.</li>
                            </ul>

                            <h3>Technical Highlights (v2.0)</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Real-time Architecture:</strong> Implemented Django Channels (WebSockets) for live activity feeds and notifications.</li>
                                <li><strong>Gamification Engine:</strong> Built a comprehensive system for achievements, streaks, and leaderboards.</li>
                                <li><strong>Performance:</strong> Optimized for &lt;2s load time with Redis caching and PWA capabilities.</li>
                                <li><strong>AI Integration:</strong> Smart workout recommendations based on user history and goals.</li>
                            </ul>

                            {/* Architecture Decisions */}
                            <div className="my-12">
                                <h3 className="text-2xl font-bold mb-6">🏗️ Architecture Decisions</h3>

                                <div className="grid gap-6">
                                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
                                        <h4 className="font-bold text-lg mb-2 text-purple-600">Why Django Channels + WebSockets?</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Traditional REST APIs poll every few seconds. With WebSockets, I achieved <strong>sub-100ms latency</strong> for live workout updates, making the social feed feel instant.
                                        </p>
                                    </div>

                                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
                                        <h4 className="font-bold text-lg mb-2 text-red-600">Why Redis for Caching?</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Leaderboards query 1000+ users. Redis caching reduced response time from <strong>850ms to 45ms</strong> (95% improvement).
                                        </p>
                                    </div>

                                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
                                        <h4 className="font-bold text-lg mb-2 text-blue-600">Why PWA over Native App?</h4>
                                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                                            <li><strong>Instant access:</strong> No app store approval or downloads.</li>
                                            <li><strong>Cross-platform:</strong> Same codebase for iOS, Android, and desktop.</li>
                                            <li><strong>Offline-first:</strong> Service workers cache data for gym dead zones.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* System Architecture Visual */}
                            <div className="mb-12 p-8 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700 font-mono text-sm overflow-x-auto">
                                <h3 className="text-xl font-bold mb-4 font-sans">System Architecture</h3>
                                <pre className="leading-relaxed text-gray-700 dark:text-gray-300">
                                    {`┌─────────────────┐         ┌──────────────────┐
│  React Frontend │◄──WS───►│  Django Backend  │
│   (PWA + Redux) │         │ (Channels + REST)│
└─────────────────┘         └──────────────────┘
                                      │
                           ┌──────────┼──────────┐
                           │          │          │
                    ┌──────▼─────┐ ┌─▼────┐  ┌─▼─────┐
                    │ PostgreSQL │ │Redis │  │ Celery│
                    │  (25+ models)│ │Cache │  │ Tasks │
                    └────────────┘ └──────┘  └───────┘`}
                                </pre>
                            </div>

                            {/* Code Highlights Section */}
                            <div className="my-12">
                                <h3 className="text-2xl font-bold mb-2">💎 Code Highlights</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">Full-stack implementation with real-time features and clean architecture</p>

                                <div className="space-y-6">
                                    {/* WebSocket Implementation */}
                                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                                        <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-lg">Real-Time WebSocket Handler</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">backend/consumers.py</p>
                                            </div>
                                            <a
                                                href="https://github.com/Eswar-cdy/maverick-aim-rush/blob/main/backend/tracker/consumers.py"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1"
                                            >
                                                View Full Code →
                                            </a>
                                        </div>
                                        <div className="p-6 overflow-x-auto">
                                            <pre className="text-sm"><code className="language-python">{`class WorkoutConsumer(AsyncWebsocketConsumer):
    """Real-time workout updates using Django Channels"""
    
    async def connect(self):
        # Join user-specific channel for live updates
        await self.channel_layer.group_add(
            f"user_{self.user_id}", self.channel_name
        )
        await self.accept()
    
    async def workout_update(self, event):
        # Push metrics to frontend (<100ms latency)
        await self.send(text_data=json.dumps(event['metrics']))`}</code></pre>
                                        </div>
                                    </div>

                                    {/* Gamification Logic */}
                                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                                        <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-lg">Achievement System</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">backend/achievements/engine.py</p>
                                            </div>
                                            <a
                                                href="https://github.com/Eswar-cdy/maverick-aim-rush/blob/main/backend/tracker/achievements/engine.py"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1"
                                            >
                                                View Full Code →
                                            </a>
                                        </div>
                                        <div className="p-6 overflow-x-auto">
                                            <pre className="text-sm"><code className="language-python">{`def check_achievements(user, workout):
    """Award badges based on streaks and PRs"""
    achievements = []
    
    # Check 7-day streak
    if user.consecutive_days >= 7:
        achievements.append(Achievement.award(user, 'WEEK_WARRIOR'))
    
    return achievements`}</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Zap size={20} className="text-amber-500" />
                            Core Features
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm flex gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg h-fit text-blue-600">
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Advanced Tracking</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        150+ exercises with form guides. Tracks sets, reps, and RPE with live performance metrics.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm flex gap-4">
                                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg h-fit text-amber-600">
                                    <Trophy size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Gamification System</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        Earn badges, maintain streaks, and compete on leaderboards. Makes fitness addictive.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm flex gap-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg h-fit text-purple-600">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Progressive Web App</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        Installable on mobile. Works offline with service workers and local storage sync.
                                    </p>
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
                            href="/Eswar_Ajay_Resume_Jan_2026.docx"
                            target="_blank"
                            className="px-8 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 font-bold rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
