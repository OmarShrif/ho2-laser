"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
    const { isArabic } = useLanguage();

    const features = [
        {
            icon: "🎯",

            title: isArabic
                ? "دقة عالية في القص"
                : "Precision Cutting",

            description: isArabic
                ? "يتم قص كل تصميم بدقة عالية للحصول على تشطيب نظيف واحترافي."
                : "Every design is cut with high accuracy for a clean professional finish.",
        },

        {
            icon: "🪵",

            title: isArabic
                ? "خامات عالية الجودة"
                : "Premium Materials",

            description: isArabic
                ? "نستخدم MDF عالي الجودة وخامات مختارة بعناية لضمان المتانة وجودة المنتج."
                : "We use high-quality MDF and carefully selected materials for durability.",
        },

        {
            icon: "⚡",

            title: isArabic
                ? "سرعة في التنفيذ"
                : "Fast Turnaround",

            description: isArabic
                ? "تنفيذ سريع للطلبات دون التنازل عن الجودة أو الاهتمام بأدق التفاصيل."
                : "Quick production without compromising quality or attention to detail.",
        },

        {
            icon: "💡",

            title: isArabic
                ? "تصميمات مخصصة"
                : "Custom Designs",

            description: isArabic
                ? "لديك فكرة خاصة؟ سنحولها إلى منتج فريد مصمم ومقصوص بالليزر خصيصًا لك."
                : "Have your own idea? We'll transform it into a unique laser-cut product.",
        },
    ];

    return (
        <section className="bg-slate-900 py-24">

            <div className="max-w-7xl mx-auto px-8">

                {/* ========================= */}
                {/* Heading */}
                {/* ========================= */}

                <h2 className="text-5xl font-bold text-center text-white">
                    {isArabic ? (
                        <>
                            لماذا تختار{" "}
                            <span className="text-yellow-400">
                                HO2
                            </span>
                            ؟
                        </>
                    ) : (
                        <>
                            Why Choose{" "}
                            <span className="text-yellow-400">
                                HO2
                            </span>
                            ?
                        </>
                    )}
                </h2>


                {/* ========================= */}
                {/* Description */}
                {/* ========================= */}

                <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
                    {isArabic
                        ? "نجمع بين الإبداع والدقة والحرفية العالية لنقدم منتجات مصممة بالليزر تفخر بامتلاكها."
                        : "We combine creativity, precision, and premium craftsmanship to deliver laser-cut products you'll be proud to own."}
                </p>


                {/* ========================= */}
                {/* Features */}
                {/* ========================= */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="
                                bg-slate-950
                                rounded-2xl
                                p-8
                                text-center
                                hover:-translate-y-2
                                transition
                                duration-300
                                border
                                border-slate-800
                                hover:border-yellow-400
                            "
                        >

                            {/* Icon */}

                            <div className="text-6xl">
                                {feature.icon}
                            </div>


                            {/* Title */}

                            <h3 className="mt-6 text-2xl font-bold text-white">
                                {feature.title}
                            </h3>


                            {/* Description */}

                            <p className="mt-4 text-gray-400 leading-7">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}