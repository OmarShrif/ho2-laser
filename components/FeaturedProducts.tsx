import Image from "next/image";

const products = [
    {
        title: "Twin Wolf Shadows",
        category: "MDF Wall Art",
        image: "/products/wolf.jpeg",
    },
    {
        title: "Batman Logo",
        category: "Wall Decor",
        image: "/products/batman.jpeg",
    },
    {
        title: "Deer",
        category: "Wood Decoration",
        image: "/products/deer.jpeg",
    },
    {
        title: "Horse",
        category: "Laser Art",
        image: "/products/horse.jpeg",
    },
    {
        title: "Anchor",
        category: "Home Decor",
        image: "/products/anchor.jpeg",
    },
    {
        title: "Cat",
        category: "Wall Art",
        image: "/products/cat.jpeg",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-slate-950 py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    Featured Products
                </h2>

                <p className="text-center text-gray-400 mt-4">
                    Handmade laser-cut designs crafted with precision.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {products.map((product) => (
                        <div
                            key={product.title}
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
                                <h3 className="text-2xl font-bold text-white">
                                    {product.title}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    {product.category}
                                </p>

                                <button className="mt-6 text-yellow-400 hover:text-yellow-300">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}