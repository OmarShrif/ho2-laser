"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
    const { isArabic } = useLanguage();

    const reviews = [
        {
            name: "Ahmed Hassan",

            text: isArabic
                ? "جودة رائعة واهتمام كبير بالتفاصيل. ديكور الحائط المصنوع بالليزر فاق توقعاتي."
                : "Amazing quality and attention to detail. The laser-cut wall art exceeded my expectations.",
        },

        {
            name: "Mariam Ali",

            text: isArabic
                ? "خدمة احترافية، توصيل سريع، وحرفية جميلة جدًا. أنصح بهم بشدة!"
                : "Professional service, fast delivery, and beautiful craftsmanship. Highly recommended!",
        },

        {
            name: "Mohamed Samy",

            text: isArabic
                ? "طلبت لافتة مخصصة لشركتي والنتيجة كانت تمامًا كما تخيلتها."
                : "Ordered a custom business sign and it turned out exactly as I imagined.",
        },
    ];

    return (
        <section className="bg-slate-950 py-28">

            <div className="max-w-7xl mx-auto px-6">

                {/* ========================= */}
                {/* Heading */}
                {/* ========================= */}

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    {isArabic
                        ? "آراء عملائنا"
                        : "What Our Customers Say"}
                </h2>


                {/* ========================= */}
                {/* Subtitle */}
                {/* ========================= */}

                <p className="text-center text-gray-400 mt-4">
                    {isArabic
                        ? "رضا عملائنا هو أكبر إنجاز لنا."
                        : "Customer satisfaction is our biggest achievement."}
                </p>


                {/* ========================= */}
                {/* Reviews */}
                {/* ========================= */}

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {reviews.map((review) => (

                        <div
                            key={review.name}
                            className="
                                bg-slate-900
                                rounded-2xl
                                p-8
                                border
                                border-slate-800
                                hover:border-yellow-500
                                transition
                            "
                        >

                            {/* Stars */}

                            <div className="text-yellow-400 text-2xl">
                                ★★★★★
                            </div>


                            {/* Review */}

                            <p
                                className="
                                    text-gray-300
                                    mt-6
                                    leading-8
                                    italic
                                "
                            >
                                "{review.text}"
                            </p>


                            {/* Customer Name */}

                            <h3 className="mt-8 font-bold text-white">
                                {review.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}