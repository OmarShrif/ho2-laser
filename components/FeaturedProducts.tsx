"use client";

import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";
import { productTranslations } from "@/data/productTranslations";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedProducts() {
    const { language, isArabic } = useLanguage();

    const featuredProducts = products.filter(
        (product) => product.featured
    );

    return (
        <section
            className="bg-slate-950 py-24"
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* ========================= */}
                {/* Heading */}
                {/* ========================= */}

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    {isArabic
                        ? "منتجات مميزة"
                        : "Featured Products"}
                </h2>

                {/* ========================= */}
                {/* Description */}
                {/* ========================= */}

                <p className="text-center text-gray-400 mt-4">
                    {isArabic
                        ? "مجموعة من أشهر تصميماتنا المصنوعة بالقص بالليزر."
                        : "A selection of our most popular laser-cut designs."}
                </p>

                {/* ========================= */}
                {/* Products */}
                {/* ========================= */}

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {featuredProducts.map((product) => {

                        const translation =
                            productTranslations[
                            product.slug as keyof typeof productTranslations
                            ]?.[language];

                        const title =
                            translation?.title ??
                            product.title;

                        const category =
                            translation?.category ??
                            product.category;

                        const description =
                            translation?.description ??
                            product.description;

                        return (
                            <div
                                key={product.slug}
                                className="
                                    bg-slate-900
                                    rounded-2xl
                                    overflow-hidden
                                    hover:-translate-y-2
                                    transition
                                    duration-300
                                    shadow-lg
                                "
                            >

                                {/* ========================= */}
                                {/* Product Image */}
                                {/* ========================= */}

                                <div className="relative h-72">

                                    <Image
                                        src={product.image}
                                        alt={title}
                                        fill
                                        className="object-cover"
                                    />

                                </div>

                                {/* ========================= */}
                                {/* Product Info */}
                                {/* ========================= */}

                                <div className="p-6">

                                    {/* Category */}

                                    <p className="text-yellow-400 text-sm uppercase tracking-wider">
                                        {category}
                                    </p>

                                    {/* Title */}

                                    <h3 className="text-2xl font-bold text-white mt-2">
                                        {title}
                                    </h3>

                                    {/* Description */}

                                    <p className="text-gray-400 mt-2 leading-7">
                                        {description}
                                    </p>

                                    {/* Price */}

                                    <p className="text-yellow-400 font-bold text-xl mt-4">
                                        {product.price} LE
                                    </p>

                                    {/* View Details */}

                                    <Link
                                        href={`/product/${product.slug}`}
                                        className="
                                            inline-block
                                            mt-6
                                            text-yellow-400
                                            hover:text-yellow-300
                                            transition
                                        "
                                    >
                                        {isArabic
                                            ? "عرض التفاصيل ←"
                                            : "View Details →"}
                                    </Link>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}