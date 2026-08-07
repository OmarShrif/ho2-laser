import Link from "next/link";

export default function CTA() {
    return (
        <section className="bg-gradient-to-r from-yellow-500 to-yellow-400 py-24">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-5xl font-extrabold text-black">
                    Ready to Bring Your Idea to Life?
                </h2>

                <p className="text-black/80 text-xl mt-6 leading-8">
                    Whether it's custom wall art, business signs, personalized gifts,
                    or laser-cut decorations — we're ready to create something unique
                    just for you.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

                    <a
                        href="https://wa.me/201094244235"
                        target="_blank"
                        className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition"
                    >
                        Chat on WhatsApp
                    </a>

                    <Link
                        href="/quote"
                        className="border-2 border-black text-black px-10 py-4 rounded-xl font-bold hover:bg-black hover:text-white transition"
                    >
                        Request Custom Design
                    </Link>

                </div>

            </div>
        </section>
    );
}