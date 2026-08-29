"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { isArabic } = useLanguage();

    const text = {
        title: isArabic ? "عن HO2" : "About HO2",

        intro: isArabic
            ? "نبتكر تصميمات فريدة بالقص بالليزر لتحويل الأفكار إلى منتجات جميلة مصنوعة بعناية."
            : "Creating unique laser-cut designs that transform ideas into beautiful handcrafted products.",

        storyTitle: isArabic
            ? "قصتنا"
            : "Our Story",

        story: isArabic
            ? "بدأت HO2 بشغف نحو الإبداع والدقة وتحويل الخامات البسيطة إلى تصميمات تحمل معنى وقيمة. باستخدام أحدث تقنيات القص بالليزر، نقدم منتجات مخصصة للمنازل والشركات والمناسبات الخاصة."
            : "HO2 started with a passion for creativity, precision, and transforming simple materials into meaningful designs. Using modern laser cutting technology, we create custom products for homes, businesses, and special occasions.",

        missionTitle: isArabic
            ? "مهمتنا"
            : "Our Mission",

        mission: isArabic
            ? "مهمتنا هي تقديم منتجات عالية الجودة منفذة بالقص بالليزر، مع تشطيب احترافي وتصميمات إبداعية وحلول مخصصة تناسب احتياجات كل عميل."
            : "Our mission is to deliver high-quality laser-cut products with professional finishing, creative designs, and personalized solutions for every customer.",

        precisionTitle: isArabic
            ? "الدقة"
            : "Precision",

        precision: isArabic
            ? "قص دقيق بالليزر للحصول على نتائج احترافية ومتناسقة."
            : "Accurate laser cutting with professional results.",

        creativityTitle: isArabic
            ? "الإبداع"
            : "Creativity",

        creativity: isArabic
            ? "نحوّل أفكارك إلى تصميمات فريدة ومميزة."
            : "Turning your ideas into unique designs.",

        qualityTitle: isArabic
            ? "الجودة"
            : "Quality",

        quality: isArabic
            ? "خامات عالية الجودة واهتمام بأدق التفاصيل."
            : "Premium materials and attention to detail.",
    };

    return (
        <main
            className="min-h-screen bg-slate-950 text-white py-32"
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* =========================
                    Header
                ========================= */}

                <div className="text-center">

                    <h1 className="text-6xl font-bold">
                        {isArabic ? (
                            <>
                                عن{" "}
                                <span className="text-yellow-400">
                                    HO2
                                </span>
                            </>
                        ) : (
                            <>
                                About{" "}
                                <span className="text-yellow-400">
                                    HO2
                                </span>
                            </>
                        )}
                    </h1>

                    <p className="text-center text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-9">
                        {text.intro}
                    </p>

                </div>

                {/* =========================
                    Story & Mission
                ========================= */}

                <div className="grid md:grid-cols-2 gap-12 mt-20">

                    {/* Our Story */}

                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

                        <h2 className="text-3xl font-bold text-yellow-400">
                            {text.storyTitle}
                        </h2>

                        <p className="text-gray-300 mt-6 leading-8">
                            {text.story}
                        </p>

                    </div>

                    {/* Our Mission */}

                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

                        <h2 className="text-3xl font-bold text-yellow-400">
                            {text.missionTitle}
                        </h2>

                        <p className="text-gray-300 mt-6 leading-8">
                            {text.mission}
                        </p>

                    </div>

                </div>

                {/* =========================
                    Values
                ========================= */}

                <div className="mt-20 grid md:grid-cols-3 gap-8">

                    {/* Precision */}

                    <div className="text-center bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-yellow-400/50 transition duration-300">

                        <div className="text-5xl">
                            🎯
                        </div>

                        <h3 className="text-2xl font-bold mt-5">
                            {text.precisionTitle}
                        </h3>

                        <p className="text-gray-400 mt-3 leading-7">
                            {text.precision}
                        </p>

                    </div>

                    {/* Creativity */}

                    <div className="text-center bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-yellow-400/50 transition duration-300">

                        <div className="text-5xl">
                            💡
                        </div>

                        <h3 className="text-2xl font-bold mt-5">
                            {text.creativityTitle}
                        </h3>

                        <p className="text-gray-400 mt-3 leading-7">
                            {text.creativity}
                        </p>

                    </div>

                    {/* Quality */}

                    <div className="text-center bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-yellow-400/50 transition duration-300">

                        <div className="text-5xl">
                            ⭐
                        </div>

                        <h3 className="text-2xl font-bold mt-5">
                            {text.qualityTitle}
                        </h3>

                        <p className="text-gray-400 mt-3 leading-7">
                            {text.quality}
                        </p>

                    </div>

                </div>

            </div>
        </main>
    );
}