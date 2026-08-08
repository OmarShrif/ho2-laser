"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";

const categories = [
  "All",
  "MDF Wall Art",
  "Custom Gifts",
  "Business Signs",
  "Interior Decoration"
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
        (product) => product.category === activeCategory
      );

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
              onClick={() => setActiveCategory(category)}
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
        </div>


        {/* Products Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((product) => (

            <div
              key={product.slug}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-yellow-400/50 hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}

              <Link
                href={`/product/${product.slug}`}
              >

                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />

                </div>

              </Link>


              {/* Details */}

              <div className="p-6">

                <p className="text-yellow-400 text-sm uppercase tracking-wider">
                  {product.category}
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {product.title}
                </h2>

                <p className="text-gray-400 mt-3 line-clamp-2">
                  {product.description}
                </p>


                <Link
                  href={`/product/${product.slug}`}
                  className="inline-block mt-6 text-yellow-400 font-semibold hover:text-yellow-300 transition"
                >
                  View Details →
                </Link>

              </div>

            </div>

          ))}

        </div>


        {/* Empty State */}

        {filteredProducts.length === 0 && (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold">
              No Products Found
            </h2>

            <p className="text-gray-400 mt-3">
              We are currently adding products to this category.
            </p>

          </div>

        )}

      </div>

    </main>
  );
}