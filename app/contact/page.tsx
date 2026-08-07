export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-7xl mx-auto px-6">


                <h1 className="text-6xl font-bold text-center">
                    Contact <span className="text-yellow-400">HO2</span>
                </h1>


                <p className="text-center text-gray-400 text-xl mt-6">
                    Have a project in mind? Let's create something unique together.
                </p>



                <div className="grid lg:grid-cols-2 gap-12 mt-20">


                    {/* Contact Information */}

                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">


                        <h2 className="text-3xl font-bold">
                            Get In Touch
                        </h2>


                        <div className="mt-8 space-y-6 text-lg">


                            <div>
                                <p className="text-yellow-400">
                                    📞 Phone
                                </p>

                                <p className="text-gray-300 mt-2">
                                    +20 109 424 4235
                                </p>
                            </div>



                            <div>
                                <p className="text-yellow-400">
                                    💬 WhatsApp
                                </p>

                                <p className="text-gray-300 mt-2">
                                    Available 24/7 for inquiries
                                </p>
                            </div>



                            <div>
                                <p className="text-yellow-400">
                                    ✉ Email
                                </p>

                                <p className="text-gray-300 mt-2">
                                    ho2laser@gmail.com
                                </p>
                            </div>



                            <div>
                                <p className="text-yellow-400">
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
                            className="
              inline-block
              mt-10
              bg-yellow-400
              text-black
              px-10
              py-4
              rounded-xl
              font-bold
              hover:bg-yellow-300
              transition
              "
                        >
                            Chat on WhatsApp
                        </a>


                    </div>





                    {/* Contact Form */}


                    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">


                        <h2 className="text-3xl font-bold">
                            Send Message
                        </h2>



                        <form className="mt-8 space-y-5">


                            <input
                                type="text"
                                placeholder="Your Name"
                                className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                "
                            />



                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                "
                            />



                            <input
                                type="email"
                                placeholder="Email Address"
                                className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                "
                            />



                            <textarea
                                placeholder="Tell us about your project..."
                                rows={5}
                                className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                "
                            />



                            <button
                                className="
                w-full
                bg-yellow-400
                text-black
                py-4
                rounded-xl
                font-bold
                hover:bg-yellow-300
                transition
                "
                            >
                                Send Request
                            </button>


                        </form>


                    </div>


                </div>


            </div>

        </main>
    );
}