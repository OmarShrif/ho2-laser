const features = [
    {
        icon: "🎯",
        title: "Precision Cutting",
        description:
            "Every design is cut with high accuracy for a clean professional finish.",
    },
    {
        icon: "🪵",
        title: "Premium Materials",
        description:
            "We use high-quality MDF and carefully selected materials for durability.",
    },
    {
        icon: "⚡",
        title: "Fast Turnaround",
        description:
            "Quick production without compromising quality or attention to detail.",
    },
    {
        icon: "💡",
        title: "Custom Designs",
        description:
            "Have your own idea? We'll transform it into a unique laser-cut product.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-slate-900 py-24">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-5xl font-bold text-center text-white">
                    Why Choose <span className="text-yellow-400">HO2</span>?
                </h2>

                <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
                    We combine creativity, precision, and premium craftsmanship to
                    deliver laser-cut products you'll be proud to own.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="bg-slate-950 rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300 border border-slate-800 hover:border-yellow-400"
                        >

                            <div className="text-6xl">
                                {feature.icon}
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-gray-400 leading-7">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}