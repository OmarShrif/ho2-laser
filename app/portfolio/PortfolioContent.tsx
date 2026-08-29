"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import { products } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import { useLanguage } from "@/context/LanguageContext";
import { productTranslations } from "@/data/productTranslations";
import ProductLightbox from "@/components/ProductLightbox";

const categories = [
    "All",
    "MDF Wall Art",
    "Custom Gifts",
    "Business Signs",
    "Interior Decoration",
];

type Language = "en" | "ar";

export default function PortfolioContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const { isArabic } = useLanguage();

    const language: Language = isArabic ? "ar" : "en";

    const categoryFromUrl = searchParams.get("category");

    const activeCategory =
        categoryFromUrl && categories.includes(categoryFromUrl)
            ? categoryFromUrl
            : "All";

    const [selectedProduct, setSelectedProduct] = useState<
        (typeof products)[number] | null
    >(null);

    const {
        addToQuote,
        removeFromQuote,
        isInQuote,
    } = useQuote();

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter(
                (product) =>
                    product.category === activeCategory
            );

    const handleCategoryChange = (category: string) => {
        if (category === "All") {
            router.push("/portfolio");
        } else {
            router.push(
                `/portfolio?category=${encodeURIComponent(category)}`
            );
        }
    };

    /*
     * Category translations
     *
     * Internal category values remain English
     * so filtering and URLs continue to work.
     */

    const getCategoryName = (category: string) => {
        if (!isArabic) {
            return category;
        }

        switch (category) {
            case "All":
                return "الكل";

            case "MDF Wall Art":
                return "ديكورات حائط MDF";

            case "Custom Gifts":
                return "هدايا مخصصة";

            case "Business Signs":
                return "لافتات تجارية";

            case "Interior Decoration":
                return "ديكور داخلي";

            default:
                return category;
        }
    };

    /*
     * Portfolio translations
     */

    const text = {
        work: isArabic
            ? "أعمالنا"
            : "Our Work",

        products: isArabic
            ? "منتجاتنا"
            : "Our Products",

        description: isArabic
            ? "استكشف مجموعتنا من التصميمات المنفذة بالليزر، والديكورات المخصصة، والهدايا، وديكورات الحائط."
            : "Explore our collection of laser-cut designs, custom decorations, gifts, and wall art.",

        showing: isArabic
            ? "عرض"
            : "Showing",

        product: isArabic
            ? "منتج"
            : "product",

        productsPlural: isArabic
            ? "منتجات"
            : "products",

        in: isArabic
            ? "في"
            : "in",

        viewDetails: isArabic
            ? "عرض التفاصيل"
            : "View Details",

        addedToCart: isArabic
            ? "✓ تمت الإضافة إلى السلة"
            : "✓ Added to Cart",

        addToCart: isArabic
            ? "+ أضف إلى السلة"
            : "+ Add to Cart",

        noProducts: isArabic
            ? "لا توجد منتجات"
            : "No Products Found",

        emptyDescription: isArabic
            ? "نقوم حاليًا بإضافة منتجات إلى هذه الفئة."
            : "We are currently adding products to this category.",

        customDesign: isArabic
            ? "اطلب تصميمًا مخصصًا"
            : "Request a Custom Design",
    };

    return (
        <main
            className="min-h-screen bg-slate-950 text-white py-32"
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* =========================
                    Header
                ========================= */}

                <div className="text-center">

                    <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
                        {text.work}
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold mt-4">
                        {isArabic ? (
                            <>
                                {text.products}
                            </>
                        ) : (
                            <>
                                Our{" "}
                                <span className="text-yellow-400">
                                    Products
                                </span>
                            </>
                        )}
                    </h1>

                    <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                        {text.description}
                    </p>

                </div>

                {/* =========================
                    Categories
                ========================= */}

                <div className="flex flex-wrap justify-center gap-3 mt-14">

                    {categories.map((category) => (

                        <button
                            key={category}
                            onClick={() =>
                                handleCategoryChange(category)
                            }
                            className={`px-6 py-3 rounded-full font-semibold transition ${activeCategory === category
                                    ? "bg-yellow-400 text-black"
                                    : "bg-slate-900 text-gray-300 border border-slate-700 hover:border-yellow-400 hover:text-yellow-400"
                                }`}
                        >
                            {getCategoryName(category)}
                        </button>

                    ))}

                </div>

                {/* =========================
                    Products Count
                ========================= */}

                <div
                    className={`mt-12 mb-6 text-gray-500 ${isArabic
                            ? "text-right"
                            : "text-left"
                        }`}
                >
                    {text.showing}{" "}

                    <span className="text-yellow-400 font-semibold">
                        {filteredProducts.length}
                    </span>{" "}

                    {filteredProducts.length === 1
                        ? text.product
                        : text.productsPlural}

                    {activeCategory !== "All" && (
                        <>
                            {" "}
                            {text.in}{" "}

                            <span className="text-gray-300">
                                {getCategoryName(activeCategory)}
                            </span>
                        </>
                    )}
                </div>

                {/* =========================
                    Products Grid
                ========================= */}

                {filteredProducts.length > 0 ? (

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {filteredProducts.map((product) => {

                            const alreadyAdded =
                                isInQuote(product.slug);

                            /*
                             * Get translated product data.
                             *
                             * productTranslations is safely
                             * accessed using the product slug.
                             *
                             * If translation is missing,
                             * original product data is used.
                             */

                            const translatedProduct =
                                productTranslations[
                                product.slug as keyof typeof productTranslations
                                ]?.[language];

                            const productTitle =
                                translatedProduct?.title ??
                                product.title;

                            const productCategory =
                                translatedProduct?.category ??
                                product.category;

                            const productDescription =
                                translatedProduct?.description ??
                                product.description;

                            const productMaterial =
                                translatedProduct?.material ??
                                product.material;

                            const productSize =
                                translatedProduct?.size ??
                                product.size;

                            return (

                                <div
                                    key={product.slug}
                                    className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-yellow-400/50 transition duration-300"
                                >

                                    {/* =========================
                                        Product Image
                                    ========================= */}

                                    <div
                                        className="relative h-80 overflow-hidden cursor-zoom-in"
                                        onClick={() =>
                                            setSelectedProduct(product)
                                        }
                                    >

                                        <Image
                                            src={product.image}
                                            alt={productTitle}
                                            fill
                                            className="object-cover hover:scale-105 transition duration-500"
                                        />

                                    </div>

                                    {/* =========================
                                        Details
                                    ========================= */}

                                    <div className="p-6">

                                        {/* Category */}

                                        <p
                                            className={`text-yellow-400 text-sm uppercase tracking-wider ${isArabic
                                                    ? "text-right"
                                                    : "text-left"
                                                }`}
                                        >
                                            {productCategory}
                                        </p>

                                        {/* Title */}

                                        <h2
                                            className={`text-2xl font-bold mt-2 ${isArabic
                                                    ? "text-right"
                                                    : "text-left"
                                                }`}
                                        >
                                            {productTitle}
                                        </h2>

                                        {/* Price */}

                                        <div
                                            className={`mt-4 ${isArabic
                                                    ? "text-right"
                                                    : "text-left"
                                                }`}
                                        >

                                            <span className="text-3xl font-bold text-yellow-400">
                                                {product.price}
                                            </span>

                                            <span
                                                className={`text-gray-400 text-lg ${isArabic
                                                        ? "mr-2"
                                                        : "ml-2"
                                                    }`}
                                            >
                                                LE
                                            </span>

                                        </div>

                                        {/* Description */}

                                        <p
                                            className={`text-gray-400 mt-3 line-clamp-2 ${isArabic
                                                    ? "text-right"
                                                    : "text-left"
                                                }`}
                                        >
                                            {productDescription}
                                        </p>

                                        {/* =========================
                                            Product Information
                                        ========================= */}

                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${isArabic
                                                    ? "justify-end"
                                                    : "justify-start"
                                                }`}
                                        >

                                            <span className="bg-slate-950 border border-slate-700 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                                                {productMaterial}
                                            </span>

                                            <span className="bg-slate-950 border border-slate-700 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                                                {productSize}
                                            </span>

                                        </div>

                                        {/* =========================
                                            Buttons
                                        ========================= */}

                                        <div className="flex flex-col gap-3 mt-6">

                                            <Link
                                                href={`/product/${product.slug}`}
                                                className="text-center border border-slate-700 text-white py-3 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition"
                                            >
                                                {text.viewDetails}
                                            </Link>

                                            <button
                                                onClick={() => {

                                                    if (alreadyAdded) {

                                                        removeFromQuote(
                                                            product.slug
                                                        );

                                                    } else {

                                                        addToQuote(
                                                            product
                                                        );

                                                    }

                                                }}
                                                className={`py-3 rounded-xl font-bold transition ${alreadyAdded
                                                        ? "bg-slate-700 text-gray-300 hover:bg-red-500 hover:text-white"
                                                        : "bg-yellow-400 text-black hover:bg-yellow-300"
                                                    }`}
                                            >
                                                {alreadyAdded
                                                    ? text.addedToCart
                                                    : text.addToCart}
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                ) : (

                    /* =========================
                        Empty State
                    ========================= */

                    <div className="text-center py-20">

                        <div className="text-6xl mb-6">
                            🔍
                        </div>

                        <h2 className="text-3xl font-bold">
                            {text.noProducts}
                        </h2>

                        <p className="text-gray-400 mt-3">
                            {text.emptyDescription}
                        </p>

                        <Link
                            href="/quote"
                            className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                        >
                            {text.customDesign}
                        </Link>

                    </div>

                )}

            </div>

            {/* =========================
                Lightbox
            ========================= */}

            {selectedProduct && (

                <ProductLightbox
                    image={selectedProduct.image}
                    title={
                        productTranslations[
                            selectedProduct.slug as keyof typeof productTranslations
                        ]?.[language]?.title ??
                        selectedProduct.title
                    }
                    onClose={() =>
                        setSelectedProduct(null)
                    }
                />

            )}

        </main>
    );
}