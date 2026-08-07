"use client";
import { sendWhatsAppMessage } from "@/lib/whatsapp";

export default function ContactPage() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const name = data.get("name");
        const phone = data.get("phone");
        const email = data.get("email");
        const message = data.get("message");

        const whatsappMessage = `New Contact Message

Name:
${name}

Phone:
${phone}

Email:
${email}

Message:
${message}`;

        const whatsappNumber = "201094244235";

        sendWhatsAppMessage(
            whatsappNumber,
            whatsappMessage
        );

        form.reset();
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">
            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-6xl font-bold text-center">
                    Contact <span className="text-yellow-400">HO2</span>
                </h1>

                <p className="text-center text-gray-400 text-xl mt-6">
                    Have a project in mind? Let's create something amazing together.
                </p>

                <div className="grid lg:grid-cols-2 gap-12 mt-20">

                    {/* Contact Information */}

                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

                        <h2 className="text-3xl font-bold">
                            Get In Touch
                        </h2>

                        <div className="mt-8 space-y-6">

                            <div>
                                <p className="text-yellow-400 font-semibold">
                                    📞 Phone
                                </p>

                                <p className="text-gray-300 mt-2">
                                    +20 109 424 4235
                                </p>
                            </div>

                            <div>
                                <p className="text-yellow-400 font-semibold">
                                    💬 WhatsApp
                                </p>

                                <p className="text-gray-300 mt-2">
                                    Available every day
                                </p>
                            </div>

                            <div>
                                <p className="text-yellow-400 font-semibold">
                                    ✉ Email
                                </p>

                                <p className="text-gray-300 mt-2">
                                    ho2laser@gmail.com
                                </p>
                            </div>

                            <div>
                                <p className="text-yellow-400 font-semibold">
                                    📍 Location
                                </p>

                                <p className="text-gray-300 mt-2">
                                    Egypt
                                </p>
                            </div>

                        </div>

                        <a
                            href="https://wa.me/201094244235"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                        >
                            Chat on WhatsApp
                        </a>

                    </div>

                    {/* Contact Form */}

                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

                        <h2 className="text-3xl font-bold">
                            Send Message
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >

                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                            />

                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone Number"
                                required
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                            />

                            <textarea
                                name="message"
                                placeholder="Tell us about your project..."
                                rows={6}
                                required
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                            />

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </main>
    );
}