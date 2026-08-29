"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
    const { isArabic } = useLanguage();

    return (
        <section
            className="
                bg-gradient-to-r
                from-yellow-500
                to-yellow-400
                py-24
            "
        >
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* ========================= */}
                {/* Heading */}
                {/* ========================= */}

                <h2 className="text-5xl font-extrabold text-black">
                    {isArabic
                        ? "جاهز لتحويل فكرتك إلى حقيقة؟"
                        : "Ready to Bring Your Idea to Life?"}
                </h2>


                {/* ========================= */}
                {/* Description */}
                {/* ========================= */}

                <p className="text-black/80 text-xl mt-6 leading-8">
                    {isArabic
                        ? "سواء كنت تبحث عن ديكور حائط مخصص، لافتات تجارية، هدايا شخصية، أو ديكورات مقصوصة بالليزر — نحن مستعدون لصنع شيء مميز لك."
                        : "Whether it's custom wall art, business signs, personalized gifts, or laser-cut decorations — we're ready to create something unique just for you."}
                </p>


                {/* ========================= */}
                {/* Buttons */}
                {/* ========================= */}

                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

                    {/* WhatsApp */}

                    <a
                        href="https://wa.me/201094244235"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            bg-black
                            text-white
                            px-10
                            py-4
                            rounded-xl
                            font-bold
                            hover:scale-105
                            transition
                        "
                    >
                        {isArabic
                            ? "تواصل معنا على واتساب"
                            : "Chat on WhatsApp"}
                    </a>


                    {/* Custom Design */}

                    <Link
                        href="/quote"
                        className="
                            border-2
                            border-black
                            text-black
                            px-10
                            py-4
                            rounded-xl
                            font-bold
                            hover:bg-black
                            hover:text-white
                            transition
                        "
                    >
                        {isArabic
                            ? "اطلب تصميمًا مخصصًا"
                            : "Request Custom Design"}
                    </Link>

                </div>

            </div>
        </section>
    );
}