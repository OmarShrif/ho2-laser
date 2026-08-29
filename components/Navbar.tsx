"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useQuote } from "@/context/QuoteContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    const { quoteItems } = useQuote();

    const {
        language,
        setLanguage,
        isArabic,
    } = useLanguage();

    const totalQuantity = quoteItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    /*
     * Close mobile menu
     */

    const closeMenu = () => {
        setMenuOpen(false);
    };

    /*
     * Change language
     */

    const changeLanguage = (
        newLanguage: "en" | "ar"
    ) => {
        setLanguage(newLanguage);
        setLanguageOpen(false);
    };

    /*
     * Navigation translations
     */

    const nav = {
        home: isArabic ? "الرئيسية" : "Home",

        services: isArabic
            ? "الخدمات"
            : "Services",

        products: isArabic
            ? "المنتجات"
            : "Products",

        about: isArabic
            ? "من نحن"
            : "About",

        contact: isArabic
            ? "تواصل معنا"
            : "Contact",

        cart: isArabic
            ? "السلة"
            : "Cart",

        requestDesign: isArabic
            ? "اطلب تصميمك"
            : "Request Custom Design",

        language: isArabic
            ? "اللغة"
            : "Language",

        english: "English",

        arabic: "العربية",
    };

    return (
        <header
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                bg-slate-950/90
                backdrop-blur-md
                border-b
                border-slate-800
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    flex
                    items-center
                    justify-between
                    px-6
                    md:px-8
                    py-5
                "
            >

                {/* ========================= */}
                {/* Logo */}
                {/* ========================= */}

                <Link
                    href="/"
                    onClick={closeMenu}
                    className="
                        text-2xl
                        md:text-3xl
                        font-extrabold
                        tracking-wide
                    "
                >

                    <span className="text-yellow-400">
                        HO2
                    </span>{" "}

                    <span className="text-white">
                        Creations
                    </span>

                </Link>


                {/* ========================= */}
                {/* Desktop Navigation */}
                {/* ========================= */}

                <nav
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-8
                        lg:gap-10
                        text-gray-300
                        font-medium
                    "
                >

                    {/* Home */}

                    <Link
                        href="/"
                        className={`
                            transition
                            hover:text-yellow-400
                            ${pathname === "/"
                                ? "text-yellow-400"
                                : ""
                            }
                        `}
                    >
                        {nav.home}
                    </Link>


                    {/* Services */}

                    <Link
                        href="/services"
                        className={`
                            transition
                            hover:text-yellow-400
                            ${pathname === "/services"
                                ? "text-yellow-400"
                                : ""
                            }
                        `}
                    >
                        {nav.services}
                    </Link>


                    {/* Products */}

                    <Link
                        href="/portfolio"
                        className={`
                            transition
                            hover:text-yellow-400
                            ${pathname === "/portfolio"
                                ? "text-yellow-400"
                                : ""
                            }
                        `}
                    >
                        {nav.products}
                    </Link>


                    {/* About */}

                    <Link
                        href="/about"
                        className={`
                            transition
                            hover:text-yellow-400
                            ${pathname === "/about"
                                ? "text-yellow-400"
                                : ""
                            }
                        `}
                    >
                        {nav.about}
                    </Link>


                    {/* Contact */}

                    <Link
                        href="/contact"
                        className={`
                            transition
                            hover:text-yellow-400
                            ${pathname === "/contact"
                                ? "text-yellow-400"
                                : ""
                            }
                        `}
                    >
                        {nav.contact}
                    </Link>


                    {/* ========================= */}
                    {/* Desktop Cart */}
                    {/* ========================= */}

                    <Link
                        href="/quote"
                        className={`
                            relative
                            transition
                            hover:text-yellow-400
                            ${pathname === "/quote"
                                ? "text-yellow-400"
                                : ""
                            }
                        `}
                    >

                        {nav.cart} 🛒

                        {totalQuantity > 0 && (
                            <span
                                className="
                                    absolute
                                    -top-3
                                    -right-5
                                    min-w-5
                                    h-5
                                    px-1
                                    flex
                                    items-center
                                    justify-center
                                    bg-yellow-400
                                    text-black
                                    text-xs
                                    font-bold
                                    rounded-full
                                "
                            >
                                {totalQuantity}
                            </span>
                        )}

                    </Link>


                    {/* ========================= */}
                    {/* Desktop Language */}
                    {/* ========================= */}

                    <div className="relative">

                        <button
                            type="button"
                            onClick={() =>
                                setLanguageOpen(
                                    !languageOpen
                                )
                            }
                            className="
                                flex
                                items-center
                                gap-2
                                px-3
                                py-2
                                rounded-lg
                                border
                                border-slate-700
                                hover:border-yellow-400
                                hover:text-yellow-400
                                transition
                            "
                        >

                            <span>
                                🌐
                            </span>

                            <span>
                                {language === "en"
                                    ? "EN"
                                    : "AR"}
                            </span>

                            <span className="text-xs">
                                ▾
                            </span>

                        </button>


                        {languageOpen && (

                            <div
                                className={`
                                    absolute
                                    top-12
                                    w-36
                                    bg-slate-900
                                    border
                                    border-slate-700
                                    rounded-xl
                                    shadow-xl
                                    overflow-hidden
                                    ${isArabic
                                        ? "left-0"
                                        : "right-0"
                                    }
                                `}
                            >

                                {/* English */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        changeLanguage("en")
                                    }
                                    className={`
                                        w-full
                                        text-left
                                        px-4
                                        py-3
                                        transition
                                        ${language === "en"
                                            ? "bg-yellow-400 text-black"
                                            : "text-gray-300 hover:bg-slate-800 hover:text-yellow-400"
                                        }
                                    `}
                                >
                                    🇬🇧 English
                                </button>


                                {/* Arabic */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        changeLanguage("ar")
                                    }
                                    className={`
                                        w-full
                                        text-left
                                        px-4
                                        py-3
                                        transition
                                        ${language === "ar"
                                            ? "bg-yellow-400 text-black"
                                            : "text-gray-300 hover:bg-slate-800 hover:text-yellow-400"
                                        }
                                    `}
                                >
                                    🇪🇬 العربية
                                </button>

                            </div>

                        )}

                    </div>

                </nav>


                {/* ========================= */}
                {/* Desktop CTA */}
                {/* ========================= */}

                <Link
                    href="/quote"
                    className="
                        hidden
                        md:block
                        bg-yellow-400
                        text-black
                        px-6
                        py-3
                        rounded-full
                        font-semibold
                        hover:bg-yellow-300
                        transition
                    "
                >
                    {nav.requestDesign}
                </Link>


                {/* ========================= */}
                {/* Mobile Controls */}
                {/* ========================= */}

                <div
                    className="
                        md:hidden
                        flex
                        items-center
                        gap-3
                    "
                >

                    {/* Mobile Cart */}

                    <Link
                        href="/quote"
                        className="
                            relative
                            bg-yellow-400
                            text-black
                            px-4
                            py-2
                            rounded-full
                            font-semibold
                        "
                    >

                        {nav.cart} 🛒

                        {totalQuantity > 0 && (
                            <span
                                className="
                                    absolute
                                    -top-2
                                    -right-2
                                    min-w-5
                                    h-5
                                    px-1
                                    flex
                                    items-center
                                    justify-center
                                    bg-black
                                    text-yellow-400
                                    text-xs
                                    font-bold
                                    rounded-full
                                "
                            >
                                {totalQuantity}
                            </span>
                        )}

                    </Link>


                    {/* Mobile Language */}

                    <button
                        type="button"
                        onClick={() =>
                            changeLanguage(
                                language === "en"
                                    ? "ar"
                                    : "en"
                            )
                        }
                        className="
                            w-11
                            h-11
                            flex
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-slate-700
                            text-white
                            hover:border-yellow-400
                            hover:text-yellow-400
                            transition
                            font-semibold
                        "
                        aria-label="Change language"
                    >

                        {language === "en"
                            ? "AR"
                            : "EN"}

                    </button>


                    {/* Hamburger */}

                    <button
                        type="button"
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                        className="
                            w-11
                            h-11
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-1.5
                            rounded-lg
                            border
                            border-slate-700
                            text-white
                            hover:border-yellow-400
                            hover:text-yellow-400
                            transition
                        "
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >

                        <span
                            className={`
                                block
                                w-6
                                h-0.5
                                bg-current
                                transition-transform
                                duration-300
                                ${menuOpen
                                    ? "translate-y-2 rotate-45"
                                    : ""
                                }
                            `}
                        />

                        <span
                            className={`
                                block
                                w-6
                                h-0.5
                                bg-current
                                transition-opacity
                                duration-300
                                ${menuOpen
                                    ? "opacity-0"
                                    : "opacity-100"
                                }
                            `}
                        />

                        <span
                            className={`
                                block
                                w-6
                                h-0.5
                                bg-current
                                transition-transform
                                duration-300
                                ${menuOpen
                                    ? "-translate-y-2 -rotate-45"
                                    : ""
                                }
                            `}
                        />

                    </button>

                </div>

            </div>


            {/* ========================= */}
            {/* Mobile Menu */}
            {/* ========================= */}

            {menuOpen && (

                <div
                    className="
                        md:hidden
                        border-t
                        border-slate-800
                        bg-slate-950
                    "
                >

                    <nav
                        className="
                            flex
                            flex-col
                            px-6
                            py-5
                            space-y-2
                        "
                    >

                        {/* Home */}

                        <Link
                            href="/"
                            onClick={closeMenu}
                            className={`
                                px-4
                                py-3
                                rounded-xl
                                transition
                                ${pathname === "/"
                                    ? "bg-yellow-400 text-black"
                                    : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }
                            `}
                        >
                            {nav.home}
                        </Link>


                        {/* Services */}

                        <Link
                            href="/services"
                            onClick={closeMenu}
                            className={`
                                px-4
                                py-3
                                rounded-xl
                                transition
                                ${pathname === "/services"
                                    ? "bg-yellow-400 text-black"
                                    : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }
                            `}
                        >
                            {nav.services}
                        </Link>


                        {/* Products */}

                        <Link
                            href="/portfolio"
                            onClick={closeMenu}
                            className={`
                                px-4
                                py-3
                                rounded-xl
                                transition
                                ${pathname === "/portfolio"
                                    ? "bg-yellow-400 text-black"
                                    : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }
                            `}
                        >
                            {nav.products}
                        </Link>


                        {/* About */}

                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className={`
                                px-4
                                py-3
                                rounded-xl
                                transition
                                ${pathname === "/about"
                                    ? "bg-yellow-400 text-black"
                                    : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }
                            `}
                        >
                            {nav.about}
                        </Link>


                        {/* Contact */}

                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className={`
                                px-4
                                py-3
                                rounded-xl
                                transition
                                ${pathname === "/contact"
                                    ? "bg-yellow-400 text-black"
                                    : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }
                            `}
                        >
                            {nav.contact}
                        </Link>


                        {/* Mobile Cart */}

                        <Link
                            href="/quote"
                            onClick={closeMenu}
                            className={`
                                px-4
                                py-3
                                rounded-xl
                                flex
                                items-center
                                justify-between
                                transition
                                ${pathname === "/quote"
                                    ? "bg-yellow-400 text-black"
                                    : "text-gray-300 hover:bg-slate-900 hover:text-yellow-400"
                                }
                            `}
                        >

                            <span>
                                {nav.cart} 🛒
                            </span>


                            {totalQuantity > 0 && (

                                <span
                                    className={`
                                        min-w-6
                                        h-6
                                        px-1
                                        flex
                                        items-center
                                        justify-center
                                        rounded-full
                                        text-xs
                                        font-bold
                                        ${pathname === "/quote"
                                            ? "bg-black text-yellow-400"
                                            : "bg-yellow-400 text-black"
                                        }
                                    `}
                                >
                                    {totalQuantity}
                                </span>

                            )}

                        </Link>


                        {/* Mobile Language */}

                        <div
                            className="
                                mt-3
                                pt-4
                                border-t
                                border-slate-800
                            "
                        >

                            <p className="text-gray-500 text-xs uppercase tracking-wider px-4 mb-2">
                                {nav.language}
                            </p>


                            <div className="grid grid-cols-2 gap-2">

                                {/* English */}

                                <button
                                    type="button"
                                    onClick={() => {
                                        changeLanguage("en");
                                        closeMenu();
                                    }}
                                    className={`
                                        px-4
                                        py-3
                                        rounded-xl
                                        transition
                                        ${language === "en"
                                            ? "bg-yellow-400 text-black"
                                            : "bg-slate-900 text-gray-300 hover:text-yellow-400"
                                        }
                                    `}
                                >
                                    🇬🇧 {nav.english}
                                </button>


                                {/* Arabic */}

                                <button
                                    type="button"
                                    onClick={() => {
                                        changeLanguage("ar");
                                        closeMenu();
                                    }}
                                    className={`
                                        px-4
                                        py-3
                                        rounded-xl
                                        transition
                                        ${language === "ar"
                                            ? "bg-yellow-400 text-black"
                                            : "bg-slate-900 text-gray-300 hover:text-yellow-400"
                                        }
                                    `}
                                >
                                    🇪🇬 {nav.arabic}
                                </button>

                            </div>

                        </div>

                    </nav>

                </div>

            )}

        </header>
    );
}