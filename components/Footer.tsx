"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { isArabic } = useLanguage();

    return (
        <footer
            className="
                bg-slate-950
                text-gray-400
                border-t
                border-slate-800
            "
        >

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">


                    {/* ========================= */}
                    {/* Company */}
                    {/* ========================= */}

                    <div>

                        <h2 className="text-3xl font-bold text-yellow-400">
                            HO2 Creations
                        </h2>

                        <p className="mt-4 leading-7">
                            {isArabic
                                ? "خدمات قص وحفر بالليزر بجودة عالية للمنازل والشركات والهدايا المخصصة."
                                : "Premium laser cutting and engraving services for homes, businesses, and personalized gifts."}
                        </p>

                    </div>


                    {/* ========================= */}
                    {/* Quick Links */}
                    {/* ========================= */}

                    <div>

                        <h3 className="text-white font-bold mb-4">
                            {isArabic
                                ? "روابط سريعة"
                                : "Quick Links"}
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic ? "الرئيسية" : "Home"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic ? "الخدمات" : "Services"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic ? "المنتجات" : "Products"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic ? "من نحن" : "About"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic ? "تواصل معنا" : "Contact"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/quote"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic
                                        ? "اطلب عرض سعر"
                                        : "Request a Quote"}
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* ========================= */}
                    {/* Services */}
                    {/* ========================= */}

                    <div>

                        <h3 className="text-white font-bold mb-4">
                            {isArabic
                                ? "الخدمات"
                                : "Services"}
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    href="/portfolio?category=Laser%20Cutting"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic
                                        ? "قص بالليزر"
                                        : "Laser Cutting"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio?category=Custom%20Gifts"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic
                                        ? "هدايا مخصصة"
                                        : "Custom Gifts"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio?category=MDF%20Wall%20Art"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic
                                        ? "ديكورات MDF للحائط"
                                        : "MDF Wall Art"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio?category=Business%20Signs"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic
                                        ? "لافتات تجارية"
                                        : "Business Signs"}
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio?category=Interior%20Decoration"
                                    className="hover:text-yellow-400 transition"
                                >
                                    {isArabic
                                        ? "ديكور داخلي"
                                        : "Interior Decoration"}
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* ========================= */}
                    {/* Contact */}
                    {/* ========================= */}

                    <div>

                        <h3 className="text-white font-bold mb-4">
                            {isArabic
                                ? "تواصل معنا"
                                : "Contact"}
                        </h3>


                        <div className="space-y-3">

                            <p>
                                📍{" "}
                                {isArabic
                                    ? "مصر"
                                    : "Egypt"}
                            </p>


                            <a
                                href="tel:+201158636667"
                                className="block hover:text-yellow-400 transition"
                            >
                                📞 +20 115 863 6667
                            </a>


                            <a
                                href="mailto:ho2laser@gmail.com"
                                className="block hover:text-yellow-400 transition"
                            >
                                ✉️ ho2laser@gmail.com
                            </a>

                        </div>

                    </div>

                </div>


                {/* ========================= */}
                {/* Bottom */}
                {/* ========================= */}

                <div
                    className="
                        border-t
                        border-slate-800
                        mt-12
                        pt-6
                        text-center
                        text-sm
                    "
                >

                    {isArabic
                        ? "© 2026 HO2 Creations. جميع الحقوق محفوظة."
                        : "© 2026 HO2 Creations. All rights reserved."}

                </div>

            </div>

        </footer>
    );
}