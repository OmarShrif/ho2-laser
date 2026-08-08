import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-400 border-t border-slate-800">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">


                    {/* Company */}

                    <div>

                        <h2 className="text-3xl font-bold text-yellow-400">
                            HO2 Creations
                        </h2>

                        <p className="mt-4 leading-7">
                            Premium laser cutting and engraving services
                            for homes, businesses, and personalized gifts.
                        </p>

                    </div>


                    {/* Quick Links */}

                    <div>

                        <h3 className="text-white font-bold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/portfolio"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Portfolio
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-yellow-400 transition"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/quote"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Request a Quote
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Services */}

                    <div>

                        <h3 className="text-white font-bold mb-4">
                            Services
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    href="/portfolio?category=Laser%20Cutting"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Laser Cutting
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio?category=Custom%20Gifts"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Custom Gifts
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio?category=MDF%20Wall%20Art"
                                    className="hover:text-yellow-400 transition"
                                >
                                    MDF Wall Art
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio?category=Business%20Signs"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Business Signs
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="/portfolio?category=Interior%20Decoration"
                                    className="hover:text-yellow-400 transition"
                                >
                                    Interior Decoration
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Contact */}

                    <div>

                        <h3 className="text-white font-bold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3">

                            <p>
                                📍 Egypt
                            </p>

                            <a
                                href="tel:+201094244235"
                                className="block hover:text-yellow-400 transition"
                            >
                                📞 +20 109 424 4235
                            </a>

                            <a
                                href="mailto:ho2laser@gmail.com"
                                className="block hover:text-yellow-400 transition"
                            >
                                ✉️ ho2laser@gmail.com
                            </a>

                        </div>

                    </div>

                </div>


                {/* Bottom */}

                <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm">

                    © 2026 HO2 Creations. All rights reserved.

                </div>

            </div>

        </footer>
    ); 
}