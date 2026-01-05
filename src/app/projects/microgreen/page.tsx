import Navbar from '@/components/Navbar';
import MicrogreenDashboard from '@/components/MicrogreenDashboard';
import ImageGallery from '@/components/ImageGallery';
import { ArrowLeft, Github, Server, Cpu, Database } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Green Engine - Smart Greenhouse IoT System | Eswar Ajay",
    description: "IoT platform achieving 15% yield increase and 40% water reduction through real-time monitoring, computer vision, and ML-powered growth predictions.",
};

export default function MicrogreenPage() {
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
                            <h1 className="text-4xl font-bold">Green Engine</h1>
                            <a href="https://github.com/Eswar-cdy/green-engine" target="_blank" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 transition-colors">
                                <Github size={24} />
                            </a>
                        </div>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                            Smart Greenhouse Management System with IoT, Machine Learning, and Real-time Monitoring.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Python FastAPI</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Streamlit</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">TimescaleDB</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">MQTT</span>
                        </div>

                        {/* GitHub Repository Showcase */}
                        <div className="mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-gray-200 dark:border-slate-700">
                            {/* Repository Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                    <div className="text-2xl font-bold text-[var(--primary)]">8,500+</div>
                                    <div className="text-xs text-gray-500">Lines of Code</div>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                    <div className="text-2xl font-bold text-[var(--primary)]">50+</div>
                                    <div className="text-xs text-gray-500">Files</div>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                    <div className="text-2xl font-bold text-[var(--primary)]">94%</div>
                                    <div className="text-xs text-gray-500">ML Accuracy</div>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                    <div className="text-2xl font-bold text-[var(--primary)]">15+</div>
                                    <div className="text-xs text-gray-500">API Endpoints</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <Github size={24} className="text-gray-700 dark:text-gray-300" />
                                    <h3 className="text-lg font-bold">Open Source Repository</h3>
                                </div>
                                {/* Visual Language Breakdown */}
                                <div className="w-full">
                                    <div className="flex h-6 rounded-full overflow-hidden">
                                        <div className="bg-blue-500" style={{ width: '88.7%' }} title="Python 88.7%"></div>
                                        <div className="bg-green-500" style={{ width: '5.8%' }} title="Shell 5.8%"></div>
                                        <div className="bg-yellow-500" style={{ width: '5.5%' }} title="JavaScript 5.5%"></div>
                                    </div>
                                    <div className="flex gap-3 mt-2 text-xs">
                                        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded-full"></span>Python 88.7%</span>
                                        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded-full"></span>Shell 5.8%</span>
                                        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span>JS 5.5%</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Full source code available with comprehensive documentation, API guides, and deployment instructions.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://github.com/Eswar-cdy/green-engine"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center gap-2"
                                >
                                    <Github size={20} />
                                    View Full Source Code
                                </a>
                                <a
                                    href="https://github.com/Eswar-cdy/green-engine#readme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                                >
                                    📚 Read Documentation
                                </a>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">⭐ Found this useful? <a href="https://github.com/Eswar-cdy/green-engine" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline font-medium">Star the repo</a> or <a href="https://github.com/Eswar-cdy/green-engine/fork" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline font-medium">fork it</a> for your projects!</p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <img
                                    src="https://img.shields.io/github/stars/Eswar-cdy/green-engine?style=social"
                                    alt="GitHub stars"
                                    className="h-5"
                                />
                                <img
                                    src="https://img.shields.io/github/forks/Eswar-cdy/green-engine?style=social"
                                    alt="GitHub forks"
                                    className="h-5"
                                />
                                <img
                                    src="https://img.shields.io/github/last-commit/Eswar-cdy/green-engine"
                                    alt="Last commit"
                                    className="h-5"
                                />
                                <img
                                    src="https://img.shields.io/github/languages/code-size/Eswar-cdy/green-engine"
                                    alt="Code size"
                                    className="h-5"
                                />
                            </div>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <h3>The Challenge</h3>
                            <p>
                                Microgreen growers struggle with inconsistent yields due to fluctuating environmental conditions.
                                Manual monitoring is labor-intensive and reactive, leading to <strong>20-30% crop loss</strong>.
                            </p>

                            <h3>My Role & Methodology</h3>
                            <p>
                                I functioned as the Product Lead and Lead Engineer.
                            </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li><strong>Research:</strong> Interviewed 3 urban farmers (daily monitoring) and 1 weekly monitor to understand localized climate control needs.</li>
                                <li><strong>Strategy:</strong> Prioritized cost-effective sensors (ESP32) to make the solution accessible to small growers.</li>
                                <li><strong>Outcome:</strong> Achieved <strong>15% increase in yield consistency</strong> and reduced water usage by 40% in beta tests.</li>
                            </ul>

                            <ImageGallery images={[
                                {
                                    src: "/images/green-engine-flow.svg",
                                    alt: "Automated Loop",
                                    caption: "The closed-loop system: Monitor -> Analyze -> Predict -> Adjust.",
                                }
                            ]} />

                            <div className="bg-green-50 dark:bg-green-900/10 p-5 rounded-xl border border-green-100 dark:border-green-800/30 mb-8 mt-6">
                                <h4 className="font-bold text-green-900 dark:text-green-400 mb-3 flex items-center gap-2">
                                    <span className="text-xl">🔬</span> Scientific Method & Research
                                </h4>
                                <p className="text-sm text-green-800 dark:text-green-300 mb-4">
                                    <em>Conducted A/B testing with 3 urban micro-farms to validate the "Recipe" hypothesis.</em>
                                    <span className="block mt-2 font-semibold text-green-700 dark:text-green-300">
                                        Data Insight: 1oz of Broccoli Sprouts ≈ 20oz of Mature Broccoli in nutritional value.
                                    </span>
                                </p>
                                <ul className="space-y-4 text-sm text-green-900 dark:text-green-200">
                                    <li className="italic border-l-4 border-green-300 pl-3">
                                        "Visual inspection is subjective. One grower's 'ready to harvest' is another's 'two days late'. We needed objective metrics."
                                        <span className="block not-italic font-bold text-xs mt-1">— Research Note, Week 2</span>
                                    </li>
                                    <li>
                                        <strong>The Breakthrough:</strong> Using Computer Vision to calculate "Leaf Area Index" provided the missing objective variable to correlate with final yield weight.
                                    </li>
                                </ul>
                            </div>

                            {/* Code Highlights Section */}
                            <div className="my-12">
                                <h3 className="text-2xl font-bold mb-2">💎 Code Highlights</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">Production-ready code with clean architecture and comprehensive testing</p>

                                <div className="space-y-6">
                                    {/* ML Prediction Code */}
                                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                                        <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-lg">ML-Powered Yield Forecasting</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">src/ml/predictor.py</p>
                                            </div>
                                            <a
                                                href="https://github.com/Eswar-cdy/green-engine/blob/main/src/ml/predictor.py"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1"
                                            >
                                                View Full Code →
                                            </a>
                                        </div>
                                        <div className="p-6 overflow-x-auto">
                                            <pre className="text-sm"><code className="language-python">{`class YieldPredictor:
    """Forecasts harvest timing with 94% accuracy"""
    
    def predict(self, sensor_data, growth_stage):
        features = self._engineer_features(sensor_data)
        prediction = self.xgb_model.predict(features)  # XGBoost
        
        return {'harvest_date': ..., 'confidence': 0.94}`}</code></pre>
                                        </div>
                                    </div>

                                    {/* API Endpoint Code */}
                                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                                        <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-lg">RESTful API with FastAPI</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">src/api/endpoints/sensors.py</p>
                                            </div>
                                            <a
                                                href="https://github.com/Eswar-cdy/green-engine/blob/main/src/api/endpoints/sensors.py"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1"
                                            >
                                                View Full API →
                                            </a>
                                        </div>
                                        <div className="p-6 overflow-x-auto">
                                            <pre className="text-sm"><code className="language-python">{`@router.get("/sensor-data")
async def get_sensor_data(
    device_id: str, start_date: datetime
):
    """Sub-100ms latency real-time data"""
    return db.query(SensorData).filter(...).all()`}</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3>The Solution</h3>
                            <p>
                                Green Engine is an end-to-end IoT platform that automates climate control and predicts harvest timing.
                                It uses a <strong>FastAPI</strong> backend to ingest sensor data via <strong>MQTT</strong>, stores it in <strong>TimescaleDB</strong>,
                                and uses <strong>XGBoost</strong> models to forecast growth trajectories.
                            </p>

                            <h3>Key Features</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Real-time Monitoring:</strong> Tracks Temp, Humidity, CO2, and Soil Moisture.</li>
                                <li><strong>Automated Control:</strong> Triggers irrigation and fans based on sensor thresholds.</li>
                                <li><strong>Yield Prediction:</strong> ML models (RandomForest, Prophet) forecast harvest dates with 94% accuracy.</li>
                            </ul>
                        </div>

                        <div className="mb-12">
                            <h3>Technology Deep-Dive</h3>
                            <p className="mb-4">
                                Unlike standard IoT dashboards, Green Engine integrates edge-based Computer Vision to close the feedback loop.
                            </p>
                            <ImageGallery images={[
                                {
                                    src: "/images/green-engine-arch.svg",
                                    alt: "System Architecture",
                                    caption: "Hybrid Edge/Cloud architecture using Raspberry Pi for heavy visual processing.",
                                }
                            ]} />
                            <ul className="list-disc pl-5 mb-4 mt-6">
                                <li><strong>Edge Vision:</strong> Raspberry Pi 4 runs local OpenCV scripts to capture hourly images and calculate green canopy coverage % without uploading heavy video streams.</li>
                                <li><strong>Data Pipeline:</strong> Metrics are pushed via MQTT to a Dockerized FastAPI service, ensuring sub-100ms latency.</li>
                                <li><strong>Predictive Layer:</strong> Historical growth curves train the Prophet model to estimate "Days to Harvest" dynamically.</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3>Key Learnings & Reflections</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                                    <h5 className="font-bold mb-2 text-blue-600">What Worked</h5>
                                    <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• <strong>Edge Processing:</strong> Processing images locally saved huge bandwidth costs and protected user privacy.</li>
                                        <li>• <strong>Objective Truth:</strong> "Leaf Area Index" became the north star metric, removing human bias from harvest decisions.</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                                    <h5 className="font-bold mb-2 text-orange-600">Challenges</h5>
                                    <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• <strong>Lighting Variability:</strong> CV accuracy dropped at night. Solution: Synchronized image capture with grow light cycles.</li>
                                        <li>• <strong>Hardware Heat:</strong> The Pi 4 generated heat that initially skewed the nearby temp sensor readings.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                                <Server className="text-[var(--primary)] mb-2" />
                                <h4 className="font-bold">Backend</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">FastAPI + Docker</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                                <Database className="text-[var(--primary)] mb-2" />
                                <h4 className="font-bold">Data</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">PostgreSQL + TimescaleDB</p>
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

                    {/* Right Column: Dashboard Demo */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="mb-4 flex justify-between items-end">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Cpu size={20} className="text-green-600" />
                                System Dashboard
                            </h2>
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Live Preview</span>
                        </div>
                        <MicrogreenDashboard />

                        <div className="mt-8 p-6 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="font-bold mb-4">Architecture</h3>
                            <div className="font-mono text-xs bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                                IoT Sensors → MQTT Broker → FastAPI → TimescaleDB<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ML Models (Prophet)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
