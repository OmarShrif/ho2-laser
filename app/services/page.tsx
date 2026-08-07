const services = [
    {
        title: "Laser Cutting",
        icon: "⚡",
        description:
            "High precision laser cutting for MDF, wood, acrylic and custom materials.",
    },
    {
        title: "Custom Gifts",
        icon: "🎁",
        description:
            "Personalized gifts designed especially for birthdays, events and special occasions.",
    },
    {
        title: "MDF Wall Art",
        icon: "🖼️",
        description:
            "Modern decorative wall art with unique laser-cut patterns.",
    },
    {
        title: "Business Signs",
        icon: "🏢",
        description:
            "Professional signs and logos for shops, offices and brands.",
    },
    {
        title: "Interior Decoration",
        icon: "🏠",
        description:
            "Custom decorative pieces that add a special touch to your space.",
    },
];


export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-7xl mx-auto px-6">


                <h1 className="text-6xl font-bold text-center">
                    Our <span className="text-yellow-400">Services</span>
                </h1>


                <p className="text-center text-gray-400 text-xl mt-6">
                    Professional laser cutting solutions for personal and business projects.
                </p>



                <div className="grid md:grid-cols-3 gap-8 mt-20">


                    {services.map((service) => (

                        <div
                            key={service.title}
                            className="
              bg-slate-900
              rounded-3xl
              p-8
              border
              border-slate-800
              hover:border-yellow-400
              transition
              hover:-translate-y-2
              "
                        >

                            <div className="text-5xl">
                                {service.icon}
                            </div>


                            <h2 className="text-3xl font-bold mt-6">
                                {service.title}
                            </h2>


                            <p className="text-gray-400 mt-4 leading-8">
                                {service.description}
                            </p>


                        </div>

                    ))}


                </div>


            </div>

        </main>
    );
}