import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";

export default function FeaturedProducts() {
    return (
        <section className="bg-slate-950 py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    Our Featured Collection
                </h2>

                <p className="text-center text-gray-400 mt-4">
                    Crafted with precision. Designed to inspire.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {products.map((product) => (
                        <div
                            key={product.title}
                            className="group bg-slate-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-yellow-500/20"
                        >
                            <Link
                                href={`/product/${product.slug}`}
                                className="relative h-56 overflow-hidden block"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                                    <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                                        View Product
                                    </button>
                                </div>
                            </Link>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white">
                                    {product.title}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    {product.category}
                                </p>

                                <Link
                                    href={`/product/${product.slug}`}
                                    className="mt-6 inline-block text-yellow-400 hover:text-yellow-300 font-semibold"
                                >
                                    Customize & Order →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </section >
    );
}