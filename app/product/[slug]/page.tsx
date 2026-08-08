"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { products } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";

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

    const [added, setAdded] = useState(false);

    useEffect(() => {
        if (product) {
            setAdded(isInQuote(product.slug));
        }
    }, [product, isInQuote]);

    if (!product) {
        return (
            <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

                <div className="text-center">

                    <h1 className="text-4xl font-bold">
                        Product Not Found
                    </h1>

                    <Link
                        href="/portfolio"
                        className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
                    >
                        Back to Portfolio
                    </Link>

                </div>

            </main>
        );
    }


    const handleQuote = () => {

        if (isInQuote(product.slug)) {

            removeFromQuote(product.slug);

            setAdded(false);

        } else {

            addToQuote(product);

            setAdded(true);

        }
    };


    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">


                    {/* Product Image */}

                    <div className="relative h-[500px] lg:h-[600px]">

                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            priority
                            className="object-cover rounded-3xl"
                        />

                    </div>


                    {/* Product Details */}

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


                        {/* Product Information */}

                        <div className="mt-10 space-y-5 text-lg">

                            <p>
                                🪵{" "}
                                <span className="text-gray-300">
                                    Material:
                                </span>

                                <span className="text-yellow-400 ml-2">
                                    {product.material}
                                </span>
                            </p>


                            <p>
                                📏{" "}
                                <span className="text-gray-300">
                                    Size:
                                </span>

                                <span className="text-yellow-400 ml-2">
                                    {product.size}
                                </span>
                            </p>

                        </div>


                        {/* Actions */}

                        <div className="flex flex-col sm:flex-row gap-4 mt-12">


                            {/* Add To Quote */}

                            <button
                                onClick={handleQuote}
                                className={`px-8 py-4 rounded-xl font-bold transition ${added
                                        ? "bg-slate-700 text-white hover:bg-red-500"
                                        : "bg-yellow-400 text-black hover:bg-yellow-300"
                                    }`}
                            >

                                {added
                                    ? "✓ Added to Quote"
                                    : "+ Add to Quote"}

                            </button>


                            {/* View Quote */}

                            <Link
                                href="/quote"
                                className="px-8 py-4 rounded-xl border border-slate-700 text-white font-semibold text-center hover:border-yellow-400 hover:text-yellow-400 transition"
                            >
                                View Quote
                            </Link>


                        </div>


                        {/* Back */}

                        <Link
                            href="/portfolio"
                            className="inline-block mt-8 text-gray-400 hover:text-yellow-400 transition"
                        >
                            ← Back to Portfolio
                        </Link>

                    </div>

                </div>

            </div>

        </main>
    );
}