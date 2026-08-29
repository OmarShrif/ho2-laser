"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { products } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductPage() {
    const params = useParams();

    const slug = params.slug as string;

    const product = products.find(
        (item) => item.slug === slug
    );

    const {
        addToQuote,
        removeFromQuote,
        isInQuote,
    } = useQuote();

    const { isArabic } = useLanguage();

    /*
     * =========================
     * Product Page Translations
     * =========================
     */

    const text = {
        productNotFound: isArabic
            ? "المنتج غير موجود"
            : "Product Not Found",

        backToPortfolio: isArabic
            ? "العودة إلى المنتجات"
            : "Back to Portfolio",

        price: isArabic
            ? "السعر"
            : "Price",

        material: isArabic
            ? "الخامة"
            : "Material",

        size: isArabic
            ? "المقاس"
            : "Size",

        addedToCart: isArabic
            ? "✓ تمت الإضافة إلى السلة"
            : "✓ Added to Cart",

        addToCart: isArabic
            ? "+ أضف إلى السلة"
            : "+ Add to Cart",

        viewCart: isArabic
            ? "🛒 عرض السلة"
            : "🛒 View Cart",

        cartInfo: isArabic
            ? "💡 يمكنك إضافة أكثر من منتج إلى السلة وتعديل الكمية قبل إرسال طلبك."
            : "💡 You can add multiple products to your cart and adjust the quantity before submitting your request.",
    };

    /*
     * =========================
     * Product Not Found
     * =========================
     */

    if (!product) {
        return (
            <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

                <div className="text-center">

                    <h1 className="text-4xl font-bold">
                        {text.productNotFound}
                    </h1>

                    <Link
                        href="/portfolio"
                        className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
                    >
                        {text.backToPortfolio}
                    </Link>

                </div>

            </main>
        );
    }

    /*
     * =========================
     * Product Data
     * =========================
     *
     * حالياً بيانات المنتجات نفسها موجودة بالإنجليزي
     * في products.ts.
     *
     * لذلك سنستخدم البيانات كما هي مؤقتاً.
     *
     * ترجمة أسماء ووصف المنتجات نضيفها بعد ذلك
     * في translations.ts.
     */

    const added = isInQuote(product.slug);

    /*
     * =========================
     * Add / Remove Product
     * =========================
     */

    const handleQuote = () => {
        if (added) {
            removeFromQuote(product.slug);
        } else {
            addToQuote(product);
        }
    };

    return (
        <main
            className={`min-h-screen bg-slate-950 text-white py-32 ${isArabic ? "text-right" : "text-left"
                }`}
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* =========================
                        Product Image
                    ========================= */}

                    <div className="relative h-[500px] lg:h-[600px]">

                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            priority
                            className="object-cover rounded-3xl"
                        />

                    </div>


                    {/* =========================
                        Product Details
                    ========================= */}

                    <div>

                        {/* Category */}

                        <p className="text-yellow-400 uppercase tracking-[0.2em] text-sm font-semibold">
                            {product.category}
                        </p>


                        {/* Title */}

                        <h1 className="text-5xl md:text-6xl font-bold mt-5">
                            {product.title}
                        </h1>


                        {/* Description */}

                        <p className="text-gray-300 text-lg md:text-xl mt-8 leading-9">
                            {product.description}
                        </p>


                        {/* =========================
                            Price
                        ========================= */}

                        <div className="mt-8">

                            <p className="text-gray-400 text-sm uppercase tracking-wider">
                                {text.price}
                            </p>

                            <p className="text-4xl font-bold text-yellow-400 mt-1">
                                {product.price} LE
                            </p>

                        </div>


                        {/* =========================
                            Product Information
                        ========================= */}

                        <div className="mt-8 space-y-5 text-lg">

                            <p>
                                🪵{" "}

                                <span className="text-gray-300">
                                    {text.material}:
                                </span>

                                <span
                                    className={`text-yellow-400 ${isArabic
                                        ? "mr-2"
                                        : "ml-2"
                                        }`}
                                >
                                    {product.material}
                                </span>
                            </p>


                            <p>
                                📏{" "}

                                <span className="text-gray-300">
                                    {text.size}:
                                </span>

                                <span
                                    className={`text-yellow-400 ${isArabic
                                        ? "mr-2"
                                        : "ml-2"
                                        }`}
                                >
                                    {product.size}
                                </span>
                            </p>

                        </div>


                        {/* =========================
                            Actions
                        ========================= */}

                        <div
                            className={`flex flex-col sm:flex-row gap-4 mt-12 ${isArabic
                                ? "sm:flex-row-reverse"
                                : ""
                                }`}
                        >

                            {/* Add To Cart */}

                            <button
                                onClick={handleQuote}
                                className={`px-8 py-4 rounded-xl font-bold transition ${added
                                    ? "bg-slate-700 text-white hover:bg-red-500"
                                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                                    }`}
                            >
                                {added
                                    ? text.addedToCart
                                    : text.addToCart}
                            </button>


                            {/* View Cart */}

                            <Link
                                href="/quote"
                                className="px-8 py-4 rounded-xl border border-slate-700 text-white font-semibold text-center hover:border-yellow-400 hover:text-yellow-400 transition"
                            >
                                {text.viewCart}
                            </Link>

                        </div>


                        {/* =========================
                            Info
                        ========================= */}

                        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-5">

                            <p className="text-gray-400 text-sm leading-6">
                                {text.cartInfo}
                            </p>

                        </div>


                        {/* Back */}

                        <Link
                            href="/portfolio"
                            className="inline-block mt-8 text-gray-400 hover:text-yellow-400 transition"
                        >
                            {text.backToPortfolio}
                        </Link>

                    </div>

                </div>

            </div>

        </main>
    );
}