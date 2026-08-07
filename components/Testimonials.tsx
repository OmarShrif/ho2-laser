const reviews = [
    {
        name: "Ahmed Hassan",
        text: "Amazing quality and attention to detail. The laser-cut wall art exceeded my expectations.",
    },
    {
        name: "Mariam Ali",
        text: "Professional service, fast delivery, and beautiful craftsmanship. Highly recommended!",
    },
    {
        name: "Mohamed Samy",
        text: "Ordered a custom business sign and it turned out exactly as I imagined.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-slate-950 py-28">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    What Our Customers Say
                </h2>

                <p className="text-center text-gray-400 mt-4">
                    Customer satisfaction is our biggest achievement.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {reviews.map((review) => (

                        <div
                            key={review.name}
                            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-yellow-500 transition"
                        >

                            <div className="text-yellow-400 text-2xl">
                                ★★★★★
                            </div>

                            <p className="text-gray-300 mt-6 leading-8 italic">
                                "{review.text}"
                            </p>

                            <h3 className="mt-8 font-bold text-white">
                                {review.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}