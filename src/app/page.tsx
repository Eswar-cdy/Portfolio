import Navbar from '@/components/Navbar';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { ArrowDown, Database, LineChart, Lightbulb, Code, Rocket, Brain, BarChart3, CloudLightning, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--primary)] selection:text-white">
      <Navbar />

      {/* Hero Section - "The Hook" */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">

        {/* Abstract Background Blurs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)] text-transparent rounded-full opacity-20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[var(--accent)] rounded-full opacity-20 blur-[100px]"></div>

        <div className="z-10 text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium animate-fade-in-up">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            Based in Carlisle, PA · Global Mindset
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight">
            Business Analyst. <br />
            <span className="text-gradient">Product Innovator.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--foreground)] opacity-80 max-w-2xl mx-auto font-light">
            Turning <span className="font-bold text-[var(--secondary)]">ambiguous business problems</span> into <span className="font-bold text-[var(--primary)]">data-driven product solutions</span>.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--primary)]">4</div>
              <div className="text-gray-500">Products Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--primary)]">15-40%</div>
              <div className="text-gray-500">Avg Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--primary)]">50%+</div>
              <div className="text-gray-500">User Retention Increase</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a href="#projects" className="group relative px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">View Work <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="#bento" className="px-8 py-4 rounded-full border border-[var(--foreground)] text-[var(--foreground)] font-bold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              About Me
            </a>
            <a
              href="/Eswar_Ajay_Product_Innovation.pdf"
              download
              className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2 border-2 border-gray-200 dark:border-slate-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume (PDF)
            </a>
          </div>

          {/* Contact Info - Visible in Hero */}
          <div className="pt-6 text-sm text-gray-500">
            <a href="mailto:geddameswarajay@gmail.com" className="hover:text-[var(--primary)] transition-colors underline">
              geddameswarajay@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects - "The Proof" */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 relative inline-block">
          Selected Works
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent)] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Collaborative Ecosystem */}
          <Link href="/projects/collaborative-ecosystem" className="group relative block h-[500px] w-full bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div>
                <div className="p-3 bg-white/20 backdrop-blur-md w-fit rounded-xl mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Collaborative Ecosystem</h3>
                <p className="text-white/80 font-light">Two-Sided Academic Marketplace</p>
              </div>
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Platform Strategy</span>
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">System Design</span>
                </div>
                <span className="text-sm font-bold underline decoration-[var(--accent)]">View Case Study →</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Green Engine (Large Span) */}
          <Link href="/projects/microgreen" className="lg:col-span-2 group relative block h-[500px] w-full bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-[url('/images/microgreen-bg.webp')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/40 to-transparent opacity-90"></div>

            <div className="absolute bottom-0 left-0 p-10 w-full text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500 rounded-xl">
                  <CloudLightning size={24} />
                </div>
                <h3 className="text-4xl font-bold">Green Engine</h3>
              </div>
              <p className="text-xl text-green-100 mb-6 max-w-2xl">
                IoT & AI Platform increasing crop yield consistency by <strong>15%</strong>.
              </p>
              <div className="flex gap-3">
                <span className="px-4 py-2 border border-green-400/30 bg-green-900/20 backdrop-blur rounded-full text-sm">Python FastAPI</span>
                <span className="px-4 py-2 border border-green-400/30 bg-green-900/20 backdrop-blur rounded-full text-sm">Computer Vision</span>
              </div>
            </div>
          </Link>

          {/* Card 3: Smart Roofing */}
          <Link href="/projects/smart-roofing" className="group relative block h-[400px] w-full bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">Smart Roofing</h3>
              <p className="text-sm text-white/80 mb-4">Real-time risk mitigation dashboard.</p>
              <span className="text-xs font-bold uppercase tracking-widest border-b w-fit">IoT Strategy</span>
            </div>
          </Link>

          {/* Card 4: Maverick Aim Rush */}
          <Link href="/projects/launch-sim" className="lg:col-span-2 group relative block h-[400px] w-full bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-red-600 opacity-90"></div>
            <div className="absolute inset-0 p-8 flex items-center justify-center text-center text-white">
              <div>
                <h3 className="text-4xl font-bold mb-4">Maverick Aim Rush</h3>
                <p className="text-xl opacity-90 mb-4">Gamified Fitness with +50% DAU</p>
                <button className="px-6 py-2 bg-white text-amber-600 font-bold rounded-full hover:scale-110 transition-transform">See the Growth</button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Bento Grid - "The Personality" */}
      <section id="bento" className="py-24 bg-[var(--muted)]/30 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About The Strategist</h2>

          <BentoGrid className="max-w-6xl mx-auto">
            {/* Bio Block */}
            <BentoGridItem
              title="Business Analysis Toolkit"
              description="Requirements Gathering: User interviews, surveys, journey mapping. Analysis Tools: SQL, PowerBI, Excel (Pivot Tables, VLOOKUP), Tableau. Documentation: PRDs, user stories, process flows, wireframes."
              header={
                <div className="h-full w-full min-h-[6rem] flex flex-col justify-between p-4 bg-gradient-to-br from-[var(--primary)] to-purple-500 rounded-xl text-white">
                  <div className="text-4xl self-center my-auto">📊</div>
                  <div className="mt-2 pt-3 border-t border-white/20 text-xs font-mono">
                    <span className="font-bold opacity-70 block mb-1">CURRENTLY SEEKING:</span>
                    <span className="font-semibold text-white">Business Analyst / Product Roles</span>
                    <span className="block opacity-80">Remote/Hybrid • Immediate Start</span>
                  </div>
                </div>
              }
              className="md:col-span-2"
              icon={<Brain className="h-4 w-4 text-neutral-500" />}
            />

            {/* Tech Stack */}
            <BentoGridItem
              title="Tech Arsenal"
              description="Next.js, Python, SQL, PowerBI. If data flows through it, I can mold it."
              header={<div className="h-full w-full min-h-[6rem] rounded-xl bg-slate-900 flex items-center justify-center text-white"><Code /></div>}
              className="md:col-span-1"
              icon={<Code className="h-4 w-4 text-neutral-500" />}
            />

            {/* Education */}
            <BentoGridItem
              title="ISEM @ Harrisburg"
              description="Master's in Info Systems Eng & Management. Where academic rigor meets agile reality."
              header={<div className="h-full w-full min-h-[6rem] rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600"><Rocket /></div>}
              className="md:col-span-1"
              icon={<Rocket className="h-4 w-4 text-neutral-500" />}
            />

            {/* Product Philosophy */}
            <BentoGridItem
              title="Product Philosophy"
              description="Data > Opinion. User > Features. I believe the best products are born from rigorous hypothesis testing, not boardroom guesses."
              header={<div className="h-full w-full min-h-[6rem] rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600"><Lightbulb /></div>}
              className="md:col-span-2"
              icon={<Lightbulb className="h-4 w-4 text-neutral-500" />}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer className="py-20 text-center border-t border-gray-200 dark:border-slate-800">
        <h2 className="text-6xl md:text-9xl font-bold opacity-10 tracking-widest uppercase select-none pointer-events-none">
          Connect
        </h2>
        <div className="-mt-12 relative z-10">
          <a href="mailto:geddameswarajay@gmail.com" className="text-2xl md:text-4xl font-bold hover:text-[var(--primary)] transition-colors underline decoration-wavy decoration-[var(--accent)] underline-offset-8">
            geddameswarajay@gmail.com
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://linkedin.com/in/eswar-ajay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-[var(--primary)] hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/Eswar-cdy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-[var(--primary)] hover:text-white transition-all"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="mailto:geddameswarajay@gmail.com"
              className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-[var(--primary)] hover:text-white transition-all"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-12">
            © 2026 Eswar Ajay. Built with Next.js & TypeScript.
          </p>
        </div>
      </footer>
    </main>
  );
}
