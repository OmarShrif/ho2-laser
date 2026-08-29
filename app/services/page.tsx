"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
    const { isArabic } = useLanguage();

    const services = [
        {
            title: isArabic
                ? "قص الليزر"
                : "Laser Cutting",

            icon: "⚡",

            description: isArabic
                ? "قص بالليزر عالي الدقة للـ MDF والخشب والأكريليك والخامات المختلفة حسب التصميم."
                : "High precision laser cutting for MDF, wood, acrylic and custom materials.",

            category: "Laser Cutting",
        },

        {
            title: isArabic
                ? "هدايا مخصصة"
                : "Custom Gifts",

            icon: "🎁",

            description: isArabic
                ? "هدايا مخصصة بتصميمات مميزة لأعياد الميلاد والمناسبات والأحداث الخاصة."
                : "Personalized gifts designed especially for birthdays, events and special occasions.",

            category: "Custom Gifts",
        },

        {
            title: isArabic
                ? "ديكورات حائط MDF"
                : "MDF Wall Art",

            icon: "🖼️",

            description: isArabic
                ? "ديكورات حائط عصرية بتصميمات فريدة يتم تنفيذها بدقة باستخدام القطع بالليزر."
                : "Modern decorative wall art with unique laser-cut patterns.",

            category: "MDF Wall Art",
        },

        {
            title: isArabic
                ? "لافتات الشركات"
                : "Business Signs",

            icon: "🏢",

            description: isArabic
                ? "لافتات وشعارات احترافية للمحلات والمكاتب والعلامات التجارية."
                : "Professional signs and logos for shops, offices and brands.",

            category: "Business Signs",
        },

        {
            title: isArabic
                ? "ديكور داخلي"
                : "Interior Decoration",

            icon: "🏠",

            description: isArabic
                ? "قطع ديكورية مخصصة تضيف لمسة مميزة وأنيقة إلى المساحات الداخلية."
                : "Custom decorative pieces that add a special touch to your space.",

            category: "Interior Decoration",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <h1 className="text-6xl font-bold text-center">

                    {isArabic ? "خدماتنا" : "Our "}

                    {!isArabic && (
                        <span className="text-yellow-400">
                            Services
                        </span>
                    )}

                </h1>

                <p className="text-center text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
                    {isArabic
                        ? "حلول احترافية للقص بالليزر لمشروعاتك الشخصية والتجارية."
                        : "Professional laser cutting solutions for personal and business projects."}
                </p>


                {/* Services Grid */}

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    {services.map((service) => (

                        <Link
                            key={service.title}
                            href={`/portfolio?category=${encodeURIComponent(
                                service.category
                            )}`}
                            className="group"
                        >

                            <div
                                className="
                                    h-full
                                    bg-slate-900
                                    rounded-3xl
                                    p-8
                                    border
                                    border-slate-800
                                    hover:border-yellow-400
                                    transition
                                    duration-300
                                    hover:-translate-y-2
                                    cursor-pointer
                                "
                            >

                                {/* Icon */}

                                <div className="text-5xl group-hover:scale-110 transition duration-300">
                                    {service.icon}
                                </div>


                                {/* Title */}

                                <h2 className="text-3xl font-bold mt-6 group-hover:text-yellow-400 transition">
                                    {service.title}
                                </h2>


                                {/* Description */}

                                <p className="text-gray-400 mt-4 leading-8">
                                    {service.description}
                                </p>


                                {/* Explore */}

                                <div className="mt-8 text-yellow-400 font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                                    {isArabic
                                        ? "استكشف التصميمات ←"
                                        : "Explore Designs →"}
                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </main>
    );
}