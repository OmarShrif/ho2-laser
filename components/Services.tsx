"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
    const { isArabic } = useLanguage();

    const services = [
        {
            title: isArabic
                ? "قص الليزر"
                : "Laser Cutting",

            description: isArabic
                ? "قص بالليزر عالي الدقة للخشب وMDF والأكريليك والجلد وغيرها من الخامات."
                : "High-precision laser cutting for wood, MDF, acrylic, leather, and more.",

            category: "Laser Cutting",
        },

        {
            title: isArabic
                ? "الهدايا المخصصة"
                : "Custom Gifts",

            description: isArabic
                ? "هدايا مميزة بأسماء وشعارات وتصميمات خاصة تناسب كل مناسبة."
                : "Personalized gifts with custom names, logos, and unique designs.",

            category: "Custom Gifts",
        },

        {
            title: isArabic
                ? "ديكورات MDF للحائط"
                : "MDF Wall Art",

            description: isArabic
                ? "ديكورات حائط عصرية للمنازل والمكاتب والمساحات التجارية."
                : "Modern decorative wall art for homes, offices, and commercial spaces.",

            category: "MDF Wall Art",
        },

        {
            title: isArabic
                ? "اللافتات التجارية"
                : "Business Signs",

            description: isArabic
                ? "لافتات احترافية داخلية وخارجية للمحلات والكافيهات والشركات."
                : "Professional indoor and outdoor signs for shops, cafés, and companies.",

            category: "Business Signs",
        },

        {
            title: isArabic
                ? "الديكور الداخلي"
                : "Interior Decoration",

            description: isArabic
                ? "قطع ديكورية إبداعية وعناصر تصميم داخلي مخصصة حسب احتياجاتك."
                : "Creative decorative pieces and customized interior design elements.",

            category: "Interior Decoration",
        },
    ];

    return (
        <section
            className="
                bg-slate-900
                text-white
                py-24
                px-6
            "
        >
            <div className="max-w-6xl mx-auto">

                {/* ========================= */}
                {/* Heading */}
                {/* ========================= */}

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    {isArabic
                        ? "خدماتنا"
                        : "Our Services"}
                </h2>


                <p className="text-center text-gray-400 mt-4">
                    {isArabic
                        ? "كل ما تحتاجه لتصنيع احترافي باستخدام الليزر وCNC."
                        : "Everything you need for professional laser and CNC manufacturing."}
                </p>


                {/* ========================= */}
                {/* Services */}
                {/* ========================= */}

                <div className="grid md:grid-cols-3 gap-8 mt-16">

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
                                    bg-slate-800
                                    rounded-2xl
                                    p-8
                                    border
                                    border-transparent
                                    hover:border-yellow-400/50
                                    hover:scale-105
                                    transition
                                    duration-300
                                    cursor-pointer
                                "
                            >

                                {/* Service Title */}

                                <h3
                                    className="
                                        text-2xl
                                        font-bold
                                        text-yellow-400
                                        group-hover:text-yellow-300
                                        transition
                                    "
                                >
                                    {service.title}
                                </h3>


                                {/* Description */}

                                <p className="text-gray-300 mt-4 leading-7">
                                    {service.description}
                                </p>


                                {/* Explore */}

                                <div
                                    className="
                                        mt-6
                                        text-yellow-400
                                        font-semibold
                                        opacity-0
                                        group-hover:opacity-100
                                        transition
                                    "
                                >
                                    {isArabic
                                        ? "استكشف التصميمات ←"
                                        : "Explore Designs →"}
                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>
        </section>
    );
}