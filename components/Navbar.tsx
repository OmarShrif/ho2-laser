"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useQuote } from "@/context/QuoteContext";

export default function Navbar() {
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);

    const { quoteItems } = useQuote();

    const totalQuantity = quoteItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">

                {/* Logo */}

                <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-2xl md:text-3xl font-extrabold tracking-wide"
                >
                    <span className="text-yellow-400">
                        HO2
                    </span>{" "}

                    <span className="text-white">
                        Creations
                    </span>
                </Link>


                {/* Desktop Navigation */}

                <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-gray-300 font-medium">

                    <Link
                        href="/"
                        className={`transition hover:text-yellow-400 ${pathname === "/"
                            ? "text-yellow-400"
                            : ""
                            }`}
                    >
                        Home
                    </Link>


                    <Link
                        href="/services"
                        className={`transition hover:text-yellow-400 ${pathname === "/services"
                            ? "text-yellow-400"
                            : ""
                            }`}
                    >
                        Services
                    </Link>


                    <Link
                        href="/portfolio"
                        className={`transition hover:text-yellow-400 ${pathname === "/portfolio"
                            ? "text-yellow-400"
                            : ""
                            }`}
                    >
                        Portfolio
                    </Link>


                    <Link
                        href="/about"
                        className={`transition hover:text-yellow-400 ${pathname === "/about"
                            ? "text-yellow-400"
                            : ""
                            }`}
                    >
                        About
                    </Link>


                    <Link
                        href="/contact"
                        className={`transition hover:text-yellow-400 ${pathname === "/contact"
                            ? "text-yellow-400"
                            : ""
                            }`}
                    >
                        Contact
                    </Link>


                    {/* Desktop Cart */}

                    <Link
                        href="/quote"
                        className={`relative transition hover:text-yellow-400 ${pathname === "/quote"
                            ? "text-yellow-400"
                            : ""
                            }`}
                    >
                        Cart 🛒

                        {totalQuantity > 0 && (
                            <span className="absolute -top-3 -right-5 min-w-5 h-5 px-1 flex items-center justify-center bg-yellow-400 text-black text-xs font-bold rounded-full">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>

                </nav>


                {/* Desktop CTA */}

                <Link
                    href="/quote"
                    className="hidden md:block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                    Request Custom Design
                </Link>


                {/* Mobile Controls */}

                <div className="md:hidden flex items-center gap-3">

                    {/* Mobile Quote */}

                    <Link
                        href="/quote"
                        className="relative bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold"
                    >
                        Quote

                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center bg-black text-yellow-400 text-xs font-bold rounded-full">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>


                    {/* Hamburger Button */}

                    <button
                        type="button"
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                        className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-700 text-white hover:border-yellow-400 hover:text-yellow-400 transition"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >

                        <span
                            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen
                                ? "translate-y-2 rotate-45"
                                : ""
                                }`}
                        />

                        <span
                            className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${menuOpen
                                ? "opacity-0"
                                : "opacity-100"
                                }`}
                        />

                        <span
                            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen
                                ? "-translate-y-2 -rotate-45"
                                : ""
                                }`}
                        />

                    </button>

                </div>

            </div>


            {/* Mobile Menu */}

            {menuOpen && (
                <div className="md:hidden border-t border-slate-800 bg-slate-950">

                    <nav className="flex flex-col px-6 py-5 space-y-2">

                        <Link
                            href="/"
                            onClick={closeMenu}
                            className={`px-4 py-3 rounded-xl transition ${pathname === "/"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }`}
                        >
                            Home
                        </Link>


                        <Link
                            href="/services"
                            onClick={closeMenu}
                            className={`px-4 py-3 rounded-xl transition ${pathname === "/services"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }`}
                        >
                            Services
                        </Link>


                        <Link
                            href="/portfolio"
                            onClick={closeMenu}
                            className={`px-4 py-3 rounded-xl transition ${pathname === "/portfolio"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }`}
                        >
                            Portfolio
                        </Link>


                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className={`px-4 py-3 rounded-xl transition ${pathname === "/about"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }`}
                        >
                            About
                        </Link>


                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className={`px-4 py-3 rounded-xl transition ${pathname === "/contact"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }`}
                        >
                            Contact
                        </Link>


                        {/* Mobile Quote */}

                        <Link
                            href="/quote"
                            onClick={closeMenu}
                            className={`px-4 py-3 rounded-xl flex items-center justify-between transition ${pathname === "/quote"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }`}
                        >

                            <span>
                                Quote
                            </span>

                            {totalQuantity > 0 && (
                                <span className={`min-w-6 h-6 px-1 flex items-center justify-center rounded-full text-xs font-bold ${pathname === "/quote"
                                    ? "bg-black text-yellow-400"
                                    : "bg-yellow-400 text-black"
                                    }`}>
                                    {totalQuantity}
                                </span>
                            )}

                        </Link>

                    </nav>

                </div>
            )}

        </header>
    );
}