'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-slate-900/80 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
                            Eswar Ajay
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-6 items-center">
                        <Link href="/#about" className="text-gray-700 hover:text-[var(--primary)] dark:text-gray-300 transition-colors text-sm font-medium">
                            About
                        </Link>
                        <Link href="/#projects" className="text-gray-700 hover:text-[var(--primary)] dark:text-gray-300 transition-colors text-sm font-medium">
                            Projects
                        </Link>
                        <Link href="/#skills" className="text-gray-700 hover:text-[var(--primary)] dark:text-gray-300 transition-colors text-sm font-medium">
                            Skills
                        </Link>
                        <Link href="/blog" className="text-gray-700 hover:text-[var(--primary)] dark:text-gray-300 transition-colors text-sm font-medium">
                            Blog
                        </Link>

                        <div className="h-4 w-px bg-gray-300 dark:bg-slate-700 mx-2"></div>

                        <a href="mailto:geddameswarajay@gmail.com" className="text-gray-700 hover:text-[var(--primary)] dark:text-gray-300 transition-colors text-sm font-medium flex items-center gap-1">
                            Let's Connect
                        </a>

                        <a
                            href="/Eswar_Ajay_Resume_Jan_2026.docx"
                            target="_blank"
                            className="px-4 py-2 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition-opacity text-sm font-bold flex items-center gap-2 shadow-sm"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download Resume
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--primary)] dark:text-gray-300">
                            About
                        </Link>
                        <Link href="/#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--primary)] dark:text-gray-300">
                            Projects
                        </Link>
                        <Link href="/#skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--primary)] dark:text-gray-300">
                            Skills
                        </Link>
                        <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--primary)] dark:text-gray-300">
                            Blog
                        </Link>
                        <a href="/Eswar_Ajay_Resume_Jan_2026.docx" target="_blank" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--primary)] font-bold">
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
