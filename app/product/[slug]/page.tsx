import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";


export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );


    if (!product) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                    Product Not Found
                </h1>
            </div>
        );
    }


    return (
        <section className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">


                    {/* Product Image */}

                    <div className="relative h-[600px]">

                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover rounded-3xl"
                        />

                    </div>


                    {/* Product Details */}

                    <div>

                        <p className="text-yellow-400 uppercase tracking-widest">
                            {product.category}
                        </p>


                        <h1 className="text-6xl font-bold mt-5">
                            {product.title}
                        </h1>


                        <p className="text-gray-300 text-xl mt-8 leading-9">
                            {product.description}
                        </p>


                        <div className="mt-10 space-y-4 text-lg">

                            <p>
                                🪵 Material:
                                <span className="text-yellow-400 ml-2">
                                    {product.material}
                                </span>
                            </p>


                            <p>
                                📏 Size:
                                <span className="text-yellow-400 ml-2">
                                    {product.size}
                                </span>
                            </p>

                        </div>


                        <Link
                            href={`/quote?product=${encodeURIComponent(product.title)}`}
                            className="inline-block mt-12 bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                        >
                            Request This Design
                        </Link>


                    </div>


                </div>

            </div>

        </section>
    );
}