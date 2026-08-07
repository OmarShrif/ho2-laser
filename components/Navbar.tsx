"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

                {/* Logo */}
                <Link href="/" className="text-3xl font-extrabold tracking-wide">
                    <span className="text-yellow-400">HO2</span>{" "}
                    <span className="text-white">Creations</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex gap-10 text-gray-300 font-medium">

                    <Link
                        href="/"
                        className="hover:text-yellow-400 transition"
                    >
                        Home
                    </Link>

                    <Link
                        href="#services"
                        className="hover:text-yellow-400 transition"
                    >
                        Services
                    </Link>

                    <Link
                        href="#portfolio"
                        className="hover:text-yellow-400 transition"
                    >
                        Portfolio
                    </Link>

                    <Link
                        href="#about"
                        className="hover:text-yellow-400 transition"
                    >
                        About
                    </Link>

                    <Link
                        href="#contact"
                        className="hover:text-yellow-400 transition"
                    >
                        Contact
                    </Link>

                </nav>

                {/* Button */}

                <button className="hidden md:block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                    Request Custom Design
                </button>

            </div>
        </header>
    );
}