"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { products } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import ProductLightbox from "@/components/ProductLightbox";

const categories = [
  "All",
  "MDF Wall Art",
  "Custom Gifts",
  "Business Signs",
  "Interior Decoration"
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

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

          {filteredProducts.map((product) => {

            const alreadyAdded = isInQuote(product.slug);

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

                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition flex items-center justify-center pointer-events-none">

                    <span className="opacity-0 group-hover:opacity-100 text-white bg-black/60 px-4 py-2 rounded-full">
                      Click to enlarge
                    </span>

                  </div>

                </div>


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
                          addToQuote(product);
                        }
                      }}
                      className={`py-3 rounded-xl font-bold transition ${alreadyAdded
                        ? "bg-slate-700 text-gray-300 hover:bg-red-500 hover:text-white"
                        : "bg-yellow-400 text-black hover:bg-yellow-300"
                        }`}
                    >
                      {alreadyAdded
                        ? "✓ Added to Quote"
                        : "+ Add to Quote"}
                    </button>

                  </div>

                </div>

              </div>

            );
          })}

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


      {/* Lightbox */}

      {selectedProduct && (

        <ProductLightbox
          image={selectedProduct.image}
          title={selectedProduct.title}
          onClose={() => setSelectedProduct(null)}
        />

      )}

    </main>
  );
}