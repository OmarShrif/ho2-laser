import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";


export default function PortfolioPage() {

  return (
    <section className="min-h-screen bg-slate-950 text-white py-32">

      <div className="max-w-7xl mx-auto px-6">


        <h1 className="text-6xl font-bold text-center">
          Our <span className="text-yellow-400">Portfolio</span>
        </h1>


        <p className="text-center text-gray-400 mt-6 text-xl">
          Explore our custom laser-cut designs and handcrafted creations.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-20">


          {products.map((product) => (

            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group"
            >

              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-yellow-400 transition">


                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>


                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {product.title}
                  </h2>


                  <p className="text-yellow-400 mt-2">
                    {product.category}
                  </p>


                </div>


              </div>

            </Link>

          ))}


        </div>


      </div>


    </section>
  );
}