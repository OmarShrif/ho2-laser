import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function FeaturedProducts() {
    const featuredProducts = products.filter(
        (product) => product.featured
    );

    return (
        <section className="bg-slate-950 py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    Featured Products
                </h2>

                <p className="text-center text-gray-400 mt-4">
                    A selection of our most popular laser-cut designs.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {featuredProducts.map((product) => (

                        <div
                            key={product.slug}
                            className="bg-slate-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-lg"
                        >

                            <div className="relative h-72">

                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                />

                            </div>

                            <div className="p-6">

                                <p className="text-yellow-400 text-sm uppercase tracking-wider">
                                    {product.category}
                                </p>

                                <h3 className="text-2xl font-bold text-white mt-2">
                                    {product.title}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    {product.description}
                                </p>

                                <Link
                                    href={`/product/${product.slug}`}
                                    className="inline-block mt-6 text-yellow-400 hover:text-yellow-300 transition"
                                >
                                    View Details →
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}