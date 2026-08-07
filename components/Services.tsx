export default function Services() {
    const services = [
        {
            title: "Laser Cutting",
            description:
                "High-precision laser cutting for wood, MDF, acrylic, leather, and more.",
        },
        {
            title: "Custom Gifts",
            description:
                "Personalized gifts with custom names, logos, and unique designs.",
        },
        {
            title: "MDF Wall Art",
            description:
                "Modern decorative wall art for homes, offices, and commercial spaces.",
        },
        {
            title: "Business Signs",
            description:
                "Professional indoor and outdoor signs for shops, cafés, and companies.",
        },
        {
            title: "Interior Decoration",
            description:
                "Creative decorative pieces and customized interior design elements.",
        },
    ];

    return (
        <section className="bg-slate-900 text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    Our Services
                </h2>

                <p className="text-center text-gray-400 mt-4">
                    Everything you need for professional laser and CNC manufacturing.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300"
                        >
                            <h3 className="text-2xl font-bold text-yellow-400">
                                {service.title}
                            </h3>

                            <p className="text-gray-300 mt-4">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}