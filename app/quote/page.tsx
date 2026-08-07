"use client";
import { sendWhatsAppMessage } from "@/lib/whatsapp";

export default function QuotePage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const form = e.currentTarget;

        const data = new FormData(form);


        const name = data.get("name");
        const phone = data.get("phone");
        const email = data.get("email");
        const service = data.get("service");
        const size = data.get("size");
        const quantity = data.get("quantity");
        const message = data.get("message");


        const whatsappMessage = `
New HO2 Laser Quote Request

Name:
${name}

Phone:
${phone}

Email:
${email}

Service:
${service}

Size:
${size}

Quantity:
${quantity}

Details:
${message}
  `;


        const whatsappNumber = "201094244235";


        sendWhatsAppMessage(
            whatsappNumber,
            whatsappMessage
        );

    };
    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-6xl mx-auto px-6">

                <h1 className="text-6xl font-bold text-center">
                    Request Your <span className="text-yellow-400">Custom </span>Design
                </h1>


                <p className="text-center text-gray-400 text-xl mt-6">
                    Tell us about your design and we will create a custom solution for you.
                </p>



                <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10 mt-16">


                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-6"
                    >


                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4"
                        />


                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4"
                        />


                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4"
                        />


                        <select
                            name="service"
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4"
                        >

                            <option>
                                Select Service
                            </option>

                            <option>
                                Laser Cutting
                            </option>

                            <option>
                                Custom Gifts
                            </option>

                            <option>
                                MDF Wall Art
                            </option>

                            <option>
                                Business Signs
                            </option>

                            <option>
                                Interior Decoration
                            </option>

                        </select>



                        <input
                            name="size"
                            type="text"
                            placeholder="Required Size (Example: 50x70 cm)"
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4"
                        />


                        <input
                            name="quantity"
                            type="number"
                            placeholder="Quantity"
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4"
                        />



                        <textarea
                            name="message"
                            placeholder="Describe your idea..."
                            rows={6}
                            className="md:col-span-2 bg-slate-950 border border-slate-700 rounded-xl px-5 py-4"
                        />



                        <div className="md:col-span-2">

                            <label className="block mb-3 text-gray-300">
                                Upload Design (Optional)
                            </label>


                            <input
                                type="file"
                                className="bg-slate-950 border border-slate-700 rounded-xl p-4 w-full"
                            />

                        </div>



                        <button
                            type="submit"
                            className="md:col-span-2 bg-yellow-400 text-black py-5 rounded-xl font-bold text-lg hover:bg-yellow-300 transition "
                        >
                            Submit Request
                        </button>


                    </form>


                </div>


            </div>

        </main>
    );
}