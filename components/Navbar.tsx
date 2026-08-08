"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useQuote } from "@/context/QuoteContext";

export default function Navbar() {

    const pathname = usePathname();

    const {
        quoteItems,
    } = useQuote();


    /*
     * Total quantity
     *
     * Example:
     *
     * Wolf x2
     * Batman x1
     *
     * Quote = 3
     */

    const totalQuantity = quoteItems.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    return (

        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">


                {/* Logo */}

                <Link
                    href="/"
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

                <nav className="hidden md:flex gap-8 lg:gap-10 text-gray-300 font-medium">


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


                    {/* Quote */}

                    <Link
                        href="/quote"
                        className={`relative transition hover:text-yellow-400 ${pathname === "/quote"
                                ? "text-yellow-400"
                                : ""
                            }`}
                    >

                        Quote


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


                {/* Mobile Quote */}

                <Link
                    href="/quote"
                    className="md:hidden relative flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold"
                >

                    <span>
                        Quote
                    </span>


                    {totalQuantity > 0 && (

                        <span className="min-w-5 h-5 px-1 flex items-center justify-center bg-black text-yellow-400 text-xs font-bold rounded-full">

                            {totalQuantity}

                        </span>

                    )}

                </Link>

            </div>

        </header>

    );
}