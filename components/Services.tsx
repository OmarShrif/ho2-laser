import Link from "next/link";

export default function Services() {

    const services = [

        {
            title: "Laser Cutting",

            description:
                "High-precision laser cutting for wood, MDF, acrylic, leather, and more.",

            category: "Laser Cutting",
        },

        {
            title: "Custom Gifts",

            description:
                "Personalized gifts with custom names, logos, and unique designs.",

            category: "Custom Gifts",
        },

        {
            title: "MDF Wall Art",

            description:
                "Modern decorative wall art for homes, offices, and commercial spaces.",

            category: "MDF Wall Art",
        },

        {
            title: "Business Signs",

            description:
                "Professional indoor and outdoor signs for shops, cafés, and companies.",

            category: "Business Signs",
        },

        {
            title: "Interior Decoration",

            description:
                "Creative decorative pieces and customized interior design elements.",

            category: "Interior Decoration",
        },

    ];


    return (

        <section className="bg-slate-900 text-white py-24 px-6">

            <div className="max-w-6xl mx-auto">


                {/* Heading */}

                <h2 className="text-5xl font-bold text-center text-yellow-400">
                    Our Services
                </h2>


                <p className="text-center text-gray-400 mt-4">
                    Everything you need for professional laser and CNC manufacturing.
                </p>


                {/* Services */}

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {services.map((service) => (

                        <Link
                            key={service.title}
                            href={`/portfolio?category=${encodeURIComponent(
                                service.category
                            )}`}
                            className="group"
                        >

                            <div
                                className="h-full bg-slate-800 rounded-2xl p-8 border border-transparent hover:border-yellow-400/50 hover:scale-105 transition duration-300 cursor-pointer"
                            >

                                <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition">
                                    {service.title}
                                </h3>


                                <p className="text-gray-300 mt-4">
                                    {service.description}
                                </p>


                                <div className="mt-6 text-yellow-400 font-semibold opacity-0 group-hover:opacity-100 transition">
                                    Explore Designs →
                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

    );
}