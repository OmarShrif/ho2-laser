import Link from "next/link";

const services = [
    {
        title: "Laser Cutting",
        icon: "⚡",
        description:
            "High precision laser cutting for MDF, wood, acrylic and custom materials.",
        category: "Laser Cutting",
    },

    {
        title: "Custom Gifts",
        icon: "🎁",
        description:
            "Personalized gifts designed especially for birthdays, events and special occasions.",
        category: "Custom Gifts",
    },

    {
        title: "MDF Wall Art",
        icon: "🖼️",
        description:
            "Modern decorative wall art with unique laser-cut patterns.",
        category: "MDF Wall Art",
    },

    {
        title: "Business Signs",
        icon: "🏢",
        description:
            "Professional signs and logos for shops, offices and brands.",
        category: "Business Signs",
    },

    {
        title: "Interior Decoration",
        icon: "🏠",
        description:
            "Custom decorative pieces that add a special touch to your space.",
        category: "Interior Decoration",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-7xl mx-auto px-6">


                {/* Header */}

                <h1 className="text-6xl font-bold text-center">

                    Our{" "}

                    <span className="text-yellow-400">
                        Services
                    </span>

                </h1>


                <p className="text-center text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
                    Professional laser cutting solutions for personal and business projects.
                </p>


                {/* Services Grid */}

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    {services.map((service) => (

                        <Link
                            key={service.title}
                            href={`/portfolio?category=${encodeURIComponent(
                                service.category
                            )}`}
                            className="group"
                        >

                            <div
                                className="
                                    h-full
                                    bg-slate-900
                                    rounded-3xl
                                    p-8
                                    border
                                    border-slate-800
                                    hover:border-yellow-400
                                    transition
                                    duration-300
                                    hover:-translate-y-2
                                    cursor-pointer
                                "
                            >

                                {/* Icon */}

                                <div className="text-5xl group-hover:scale-110 transition duration-300">
                                    {service.icon}
                                </div>


                                {/* Title */}

                                <h2 className="text-3xl font-bold mt-6 group-hover:text-yellow-400 transition">
                                    {service.title}
                                </h2>


                                {/* Description */}

                                <p className="text-gray-400 mt-4 leading-8">
                                    {service.description}
                                </p>


                                {/* Explore */}

                                <div className="mt-8 text-yellow-400 font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                                    Explore Designs →
                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </main>
    );
}