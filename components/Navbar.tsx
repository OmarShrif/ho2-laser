"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuote } from "@/context/QuoteContext";

export default function Navbar() {
    const pathname = usePathname();

    const { quoteItems } = useQuote();

    const quoteCount = quoteItems.length;

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

                {/* Logo */}

                <Link
                    href="/"
                    className="text-3xl font-extrabold tracking-wide"
                >
                    <span className="text-yellow-400">
                        HO2
                    </span>{" "}
                    <span className="text-white">
                        Creations
                    </span>
                </Link>


                {/* Navigation */}

                <nav className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

                    <Link
                        href="/"
                        className="hover:text-yellow-400 transition"
                    >
                        Home
                    </Link>


                    <Link
                        href="/services"
                        className={`transition hover:text-yellow-400 ${pathname === "/services"
                                ? "text-yellow-400"
                                : "text-white"
                            }`}
                    >
                        Services
                    </Link>


                    <Link
                        href="/portfolio"
                        className={`transition hover:text-yellow-400 ${pathname === "/portfolio"
                                ? "text-yellow-400"
                                : "text-white"
                            }`}
                    >
                        Portfolio
                    </Link>


                    <Link
                        href="/about"
                        className={`transition hover:text-yellow-400 ${pathname === "/about"
                                ? "text-yellow-400"
                                : "text-white"
                            }`}
                    >
                        About
                    </Link>


                    <Link
                        href="/contact"
                        className={`transition hover:text-yellow-400 ${pathname === "/contact"
                                ? "text-yellow-400"
                                : "text-white"
                            }`}
                    >
                        Contact
                    </Link>


                    {/* Quote List */}

                    <Link
                        href="/quote"
                        className={`relative transition hover:text-yellow-400 ${pathname === "/quote"
                                ? "text-yellow-400"
                                : "text-white"
                            }`}
                    >
                        Quote

                        {quoteCount > 0 && (
                            <span className="absolute -top-3 -right-5 bg-yellow-400 text-black text-xs font-bold min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">
                                {quoteCount}
                            </span>
                        )}
                    </Link>

                </nav>


                {/* Request Custom Design */}

                <Link
                    href="/quote"
                    className="hidden md:block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                    Request Custom Design
                </Link>

            </div>

        </header>
    );
}