export default function Hero() {
    return (
        <section className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center text-center px-6">

            <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400">
                HO2 Laser
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-gray-300">
                Premium Laser Cutting, Custom Woodworking,
                Personalized Gifts, and Business Signage.
            </p>

            <div className="mt-10 flex gap-4">
                <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition">
                    View Portfolio
                </button>

                <button className="border border-yellow-500 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition">
                    Request a Quote
                </button>
            </div>

        </section>
    );
}