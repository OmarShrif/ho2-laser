"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { isArabic } = useLanguage();

    return (
        <section
            className="
                min-h-screen
                bg-slate-950
                text-white
                flex
                items-center
            "
        >
            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-8
                    py-24
                    w-full
                "
            >

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-16
                        items-center
                    "
                >

                    {/* ========================= */}
                    {/* Left Side */}
                    {/* ========================= */}

                    <div>

                        {/* Small Heading */}

                        <span
                            className="
                                text-yellow-400
                                uppercase
                                tracking-[6px]
                                font-semibold
                            "
                        >
                            {isArabic
                                ? "قص ليزر احترافي"
                                : "Premium Laser Cutting"}
                        </span>


                        {/* Main Heading */}

                        <h1
                            className="
                                mt-6
                                text-6xl
                                lg:text-8xl
                                font-extrabold
                                leading-tight
                            "
                        >
                            {isArabic ? (
                                <>
                                    نحول{" "}
                                    <span className="text-yellow-400">
                                        أفكارك
                                    </span>{" "}
                                    إلى واقع
                                </>
                            ) : (
                                <>
                                    Bringing
                                    <span className="text-yellow-400">
                                        {" "}Ideas{" "}
                                    </span>
                                    Into Reality
                                </>
                            )}
                        </h1>


                        {/* Description */}

                        <p
                            className="
                                mt-8
                                text-xl
                                text-gray-300
                                leading-9
                                max-w-3xl
                            "
                        >
                            {isArabic
                                ? "نقدم منتجات مميزة مصممة بتقنية القص بالليزر، تشمل ديكورات الحائط، اللافتات التجارية، الهدايا المخصصة، ديكورات المنزل، وتصميمات MDF حسب الطلب، مع دقة وجودة عالية."
                                : "We create premium laser-cut products including wall art, business signs, personalized gifts, interior decorations, and custom MDF designs with exceptional precision."}
                        </p>


                        {/* Buttons */}

                        <div
                            className="
                                mt-12
                                flex
                                flex-wrap
                                gap-5
                            "
                        >

                            {/* View Products */}

                            <Link
                                href="/portfolio"
                                className="
                                    bg-yellow-400
                                    text-black
                                    px-8
                                    py-4
                                    rounded-xl
                                    font-bold
                                    hover:bg-yellow-300
                                    transition
                                "
                            >
                                {isArabic
                                    ? "عرض المنتجات"
                                    : "View Products"}
                            </Link>


                            {/* Custom Design */}

                            <Link
                                href="/quote"
                                className="
                                    border
                                    border-yellow-400
                                    text-yellow-400
                                    px-8
                                    py-4
                                    rounded-xl
                                    hover:bg-yellow-400
                                    hover:text-black
                                    transition
                                "
                            >
                                {isArabic
                                    ? "اطلب تصميمًا مخصصًا"
                                    : "Request Custom Design"}
                            </Link>

                        </div>

                    </div>


                    {/* ========================= */}
                    {/* Right Side */}
                    {/* ========================= */}

                    <div
                        className="
                            relative
                            flex
                            justify-center
                        "
                    >

                        {/* Glow */}

                        <div
                            className="
                                absolute
                                w-96
                                h-96
                                bg-yellow-400/20
                                blur-3xl
                                rounded-full
                            "
                        ></div>


                        {/* Product Image */}

                        <Image
                            src="/products/tree.jpeg"
                            alt={
                                isArabic
                                    ? "منتج من HO2 Creations"
                                    : "HO2 Creations"
                            }
                            width={600}
                            height={700}
                            priority
                            className="
                                relative
                                rounded-3xl
                                shadow-2xl
                                border
                                border-yellow-500/20
                                hover:scale-105
                                transition
                                duration-500
                                object-cover
                            "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}