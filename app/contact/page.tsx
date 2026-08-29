"use client";

import { FormEvent } from "react";
import { sendWhatsAppMessage } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {

    const { isArabic } = useLanguage();

    const text = {
        contact: isArabic ? "تواصل مع" : "Contact",
        intro: isArabic
            ? "لديك مشروع في ذهنك؟ دعنا نصنع شيئًا مميزًا معًا."
            : "Have a project in mind? Let's create something amazing together.",

        getInTouch: isArabic
            ? "تواصل معنا"
            : "Get In Touch",

        phone: isArabic
            ? "الهاتف"
            : "Phone",

        whatsapp: isArabic
            ? "واتساب"
            : "WhatsApp",

        whatsappAvailable: isArabic
            ? "متاح يوميًا"
            : "Available every day",

        email: isArabic
            ? "البريد الإلكتروني"
            : "Email",

        location: isArabic
            ? "الموقع"
            : "Location",

        egypt: isArabic
            ? "مصر"
            : "Egypt",

        chatWhatsApp: isArabic
            ? "تحدث معنا على واتساب"
            : "Chat on WhatsApp",

        sendMessage: isArabic
            ? "إرسال رسالة"
            : "Send Message",

        yourName: isArabic
            ? "اسمك"
            : "Your Name",

        phoneNumber: isArabic
            ? "رقم الهاتف"
            : "Phone Number",

        emailAddress: isArabic
            ? "البريد الإلكتروني"
            : "Email Address",

        projectMessage: isArabic
            ? "أخبرنا عن مشروعك..."
            : "Tell us about your project...",

        newContactMessage: isArabic
            ? "رسالة تواصل جديدة"
            : "New Contact Message",

        nameLabel: isArabic
            ? "الاسم"
            : "Name",

        phoneLabel: isArabic
            ? "الهاتف"
            : "Phone",

        emailLabel: isArabic
            ? "البريد الإلكتروني"
            : "Email",

        messageLabel: isArabic
            ? "الرسالة"
            : "Message",
    };


    const handleSubmit = (
        e: FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const name = data.get("name");
        const phone = data.get("phone");
        const email = data.get("email");
        const message = data.get("message");

        const whatsappMessage = `${text.newContactMessage}

${text.nameLabel}:
${name}

${text.phoneLabel}:
${phone}

${text.emailLabel}:
${email}

${text.messageLabel}:
${message}`;

        const whatsappNumber = "201158636667";

        sendWhatsAppMessage(
            whatsappNumber,
            whatsappMessage
        );

        form.reset();
    };


    return (
        <main
            dir={isArabic ? "rtl" : "ltr"}
            className="min-h-screen bg-slate-950 text-white py-32"
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <h1 className="text-5xl md:text-6xl font-bold text-center">

                    {text.contact}{" "}

                    <span className="text-yellow-400">
                        HO2
                    </span>

                </h1>


                <p className="text-center text-gray-400 text-xl mt-6 leading-8">
                    {text.intro}
                </p>


                {/* Main Grid */}

                <div className="grid lg:grid-cols-2 gap-12 mt-20">


                    {/* =========================
                        Contact Information
                    ========================= */}

                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

                        <h2 className="text-3xl font-bold">
                            {text.getInTouch}
                        </h2>


                        <div className="mt-8 space-y-6">


                            {/* Phone */}

                            <div>

                                <p className="text-yellow-400 font-semibold">
                                    📞 {text.phone}
                                </p>

                                <p className="text-gray-300 mt-2" dir="ltr">
                                    +20 115 863 6667
                                </p>

                            </div>


                            {/* WhatsApp */}

                            <div>

                                <p className="text-yellow-400 font-semibold">
                                    💬 {text.whatsapp}
                                </p>

                                <p className="text-gray-300 mt-2">
                                    {text.whatsappAvailable}
                                </p>

                            </div>


                            {/* Email */}

                            <div>

                                <p className="text-yellow-400 font-semibold">
                                    ✉ {text.email}
                                </p>

                                <p
                                    className="text-gray-300 mt-2"
                                    dir="ltr"
                                >
                                    ho2laser@gmail.com
                                </p>

                            </div>


                            {/* Location */}

                            <div>

                                <p className="text-yellow-400 font-semibold">
                                    📍 {text.location}
                                </p>

                                <p className="text-gray-300 mt-2">
                                    {text.egypt}
                                </p>

                            </div>

                        </div>


                        {/* WhatsApp Button */}

                        <a
                            href="https://wa.me/201158636667"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                        >
                            {text.chatWhatsApp}
                        </a>

                    </div>


                    {/* =========================
                        Contact Form
                    ========================= */}

                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

                        <h2 className="text-3xl font-bold">
                            {text.sendMessage}
                        </h2>


                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >


                            {/* Name */}

                            <input
                                name="name"
                                type="text"
                                placeholder={text.yourName}
                                required
                                dir={isArabic ? "rtl" : "ltr"}
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 placeholder:text-gray-500"
                            />


                            {/* Phone */}

                            <input
                                name="phone"
                                type="tel"
                                placeholder={text.phoneNumber}
                                required
                                dir="ltr"
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 placeholder:text-gray-500"
                            />


                            {/* Email */}

                            <input
                                name="email"
                                type="email"
                                placeholder={text.emailAddress}
                                required
                                dir="ltr"
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 placeholder:text-gray-500"
                            />


                            {/* Message */}

                            <textarea
                                name="message"
                                placeholder={text.projectMessage}
                                rows={6}
                                required
                                dir={isArabic ? "rtl" : "ltr"}
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 placeholder:text-gray-500 resize-none"
                            />


                            {/* Submit */}

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                            >
                                {text.sendMessage}
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </main>
    );
}