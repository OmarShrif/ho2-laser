"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import { products } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import ProductLightbox from "@/components/ProductLightbox";

const categories = [
    "All",
    "MDF Wall Art",
    "Custom Gifts",
    "Business Signs",
    "Interior Decoration",
];

export default function PortfolioContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const categoryFromUrl = searchParams.get("category");

    const activeCategory =
        categoryFromUrl && categories.includes(categoryFromUrl)
            ? categoryFromUrl
            : "All";

    const [selectedProduct, setSelectedProduct] = useState<
        (typeof products)[number] | null
    >(null);

    const { addToQuote, removeFromQuote, isInQuote } = useQuote();

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter(
                (product) => product.category === activeCategory
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

    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="text-center">

                    <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
                        Our Work
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold mt-4">
                        Our{" "}
                        <span className="text-yellow-400">
                            Portfolio
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                        Explore our collection of laser-cut designs,
                        custom decorations, gifts, and wall art.
                    </p>

                </div>


                {/* Categories */}

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
                            {category}
                        </button>

                    ))}

                </div>


                {/* Products Count */}

                <div className="mt-12 mb-6 text-gray-500">

                    Showing{" "}

                    <span className="text-yellow-400 font-semibold">
                        {filteredProducts.length}
                    </span>{" "}

                    {filteredProducts.length === 1
                        ? "product"
                        : "products"}

                    {activeCategory !== "All" && (
                        <>
                            {" "}in{" "}
                            <span className="text-gray-300">
                                {activeCategory}
                            </span>
                        </>
                    )}

                </div>


                {/* Products Grid */}

                {filteredProducts.length > 0 ? (

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {filteredProducts.map((product) => {

                            const alreadyAdded =
                                isInQuote(product.slug);

                            return (

                                <div
                                    key={product.slug}
                                    className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-yellow-400/50 transition duration-300"
                                >

                                    {/* Product Image */}

                                    <div
                                        className="relative h-80 overflow-hidden cursor-zoom-in"
                                        onClick={() =>
                                            setSelectedProduct(product)
                                        }
                                    >

                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover hover:scale-105 transition duration-500"
                                        />

                                    </div>


                                    {/* Details */}

                                    <div className="p-6">

                                        {/* Category */}

                                        <p className="text-yellow-400 text-sm uppercase tracking-wider">
                                            {product.category}
                                        </p>


                                        {/* Title */}

                                        <h2 className="text-2xl font-bold mt-2">
                                            {product.title}
                                        </h2>


                                        {/* Price */}

                                        <div className="mt-4">

                                            <span className="text-3xl font-bold text-yellow-400">
                                                {product.price}
                                            </span>

                                            <span className="text-gray-400 ml-2 text-lg">
                                                LE
                                            </span>

                                        </div>


                                        {/* Description */}

                                        <p className="text-gray-400 mt-3 line-clamp-2">
                                            {product.description}
                                        </p>


                                        {/* Product Information */}

                                        <div className="flex flex-wrap gap-2 mt-4">

                                            <span className="bg-slate-950 border border-slate-700 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                                                {product.material}
                                            </span>

                                            <span className="bg-slate-950 border border-slate-700 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                                                {product.size}
                                            </span>

                                        </div>


                                        {/* Buttons */}

                                        <div className="flex flex-col gap-3 mt-6">

                                            <Link
                                                href={`/product/${product.slug}`}
                                                className="text-center border border-slate-700 text-white py-3 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition"
                                            >
                                                View Details
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
                                                    ? "✓ Added to Cart"
                                                    : "+ Add to Cart"}
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                ) : (

                    /* Empty State */

                    <div className="text-center py-20">

                        <div className="text-6xl mb-6">
                            🔍
                        </div>

                        <h2 className="text-3xl font-bold">
                            No Products Found
                        </h2>

                        <p className="text-gray-400 mt-3">
                            We are currently adding products to this category.
                        </p>

                        <Link
                            href="/quote"
                            className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                        >
                            Request a Custom Design
                        </Link>

                    </div>

                )}


            </div>


            {/* Lightbox */}

            {selectedProduct && (

                <ProductLightbox
                    image={selectedProduct.image}
                    title={selectedProduct.title}
                    onClose={() =>
                        setSelectedProduct(null)
                    }
                />

            )}

        </main>
    );
}