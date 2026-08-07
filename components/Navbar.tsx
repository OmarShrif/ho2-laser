"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-3xl font-extrabold tracking-wide"
                    onClick={() => setMenuOpen(false)}
                >
                    <span className="text-yellow-400">HO2</span>{" "}
                    <span className="text-white">Creations</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-10 font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition ${pathname === link.href
                                    ? "text-yellow-400"
                                    : "text-gray-300 hover:text-yellow-400"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Button */}
                <Link
                    href="/quote"
                    className="hidden md:block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                    Request Custom Design
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white text-3xl"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800">

                    <nav className="flex flex-col items-center py-6 space-y-6">

                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`text-lg transition ${pathname === link.href
                                        ? "text-yellow-400"
                                        : "text-gray-300 hover:text-yellow-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/quote"
                            onClick={() => setMenuOpen(false)}
                            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                        >
                            Request Custom Design
                        </Link>

                    </nav>

                </div>
            )}
        </header>
    );
}