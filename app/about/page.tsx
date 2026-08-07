export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-6xl mx-auto px-6">


                <h1 className="text-6xl font-bold text-center">
                    About <span className="text-yellow-400">HO2</span>
                </h1>


                <p className="text-center text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
                    Creating unique laser-cut designs that transform ideas into
                    beautiful handcrafted products.
                </p>


                <div className="grid md:grid-cols-2 gap-12 mt-20">


                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

                        <h2 className="text-3xl font-bold text-yellow-400">
                            Our Story
                        </h2>

                        <p className="text-gray-300 mt-6 leading-8">
                            HO2 started with a passion for creativity, precision,
                            and transforming simple materials into meaningful designs.
                            Using modern laser cutting technology, we create custom
                            products for homes, businesses, and special occasions.
                        </p>

                    </div>



                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

                        <h2 className="text-3xl font-bold text-yellow-400">
                            Our Mission
                        </h2>

                        <p className="text-gray-300 mt-6 leading-8">
                            Our mission is to deliver high-quality laser-cut products
                            with professional finishing, creative designs, and
                            personalized solutions for every customer.
                        </p>

                    </div>


                </div>


                <div className="mt-20 grid md:grid-cols-3 gap-8">


                    <div className="text-center bg-slate-900 p-8 rounded-2xl">

                        <div className="text-5xl">
                            🎯
                        </div>

                        <h3 className="text-2xl font-bold mt-5">
                            Precision
                        </h3>

                        <p className="text-gray-400 mt-3">
                            Accurate laser cutting with professional results.
                        </p>

                    </div>



                    <div className="text-center bg-slate-900 p-8 rounded-2xl">

                        <div className="text-5xl">
                            💡
                        </div>

                        <h3 className="text-2xl font-bold mt-5">
                            Creativity
                        </h3>

                        <p className="text-gray-400 mt-3">
                            Turning your ideas into unique designs.
                        </p>

                    </div>



                    <div className="text-center bg-slate-900 p-8 rounded-2xl">

                        <div className="text-5xl">
                            ⭐
                        </div>

                        <h3 className="text-2xl font-bold mt-5">
                            Quality
                        </h3>

                        <p className="text-gray-400 mt-3">
                            Premium materials and attention to details.
                        </p>

                    </div>


                </div>


            </div>

        </main>
    );
}