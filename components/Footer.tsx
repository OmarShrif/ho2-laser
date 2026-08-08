import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-14">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-3xl font-bold text-yellow-400">
                        HO2 Creations
                    </h2>

                    <p className="mt-4">
                        Premium laser cutting and engraving services for homes,
                        businesses, and personalized gifts.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-4">
                        Services
                    </h3>

                    <ul className="space-y-2">
                        <li>Laser Cutting</li>
                        <li>Custom Gifts</li>
                        <li>MDF Wall Art</li>
                        <li>Business Signs</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-4">
                        Contact
                    </h3>

                    <p>📍 Egypt</p>
                    <p>📞 +20 109 424 4235</p>
                    <p>✉️ ho2laser@gmail.com</p>
                </div>

            </div>

            <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm">
                © 2026 HO2 Creations. All rights reserved.
            </div>
        </footer>
    );
}