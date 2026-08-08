"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { sendWhatsAppMessage } from "@/lib/whatsapp";
import { products } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";


export default function QuoteForm() {

    const searchParams =
        useSearchParams();

    const productFromUrl =
        searchParams.get("product");


    const {
        quoteItems,
        addToQuote,
        removeFromQuote,
        increaseQuantity,
        decreaseQuantity,
        clearQuote,
    } = useQuote();


    const [submitted, setSubmitted] =
        useState(false);


    /*
     * Add Product From URL
     */

    useEffect(() => {

        if (!productFromUrl) return;


        const product =
            products.find(
                (item) =>
                    item.title ===
                    productFromUrl
            );


        if (!product) return;


        const alreadyAdded =
            quoteItems.some(
                (item) =>
                    item.product.slug ===
                    product.slug
            );


        if (!alreadyAdded) {

            addToQuote(product);

        }

    }, [
        productFromUrl,
        quoteItems,
        addToQuote,
    ]);


    /*
     * Submit Quote
     */

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();


        const form =
            e.currentTarget;


        const data =
            new FormData(form);


        const name =
            data.get("name");

        const phone =
            data.get("phone");

        const email =
            data.get("email");

        const service =
            data.get("service");

        const size =
            data.get("size");

        const quantity =
            data.get("quantity");

        const message =
            data.get("message");


        /*
         * Products List
         */

        const selectedProducts =
            quoteItems.length > 0
                ? quoteItems
                    .map(
                        (item, index) =>
                            `${index + 1}. ${item.product.title}
   Quantity: ${item.quantity}
   Size: ${item.product.size}
   Material: ${item.product.material}`
                    )
                    .join("\n\n")
                : "Custom Design";


        /*
         * WhatsApp Message
         */

        const whatsappMessage = `New HO2 Laser Quote Request

Selected Products:

${selectedProducts}

Customer Information:

Name:
${name}

Phone:
${phone}

Email:
${email}

Service:
${service}

Requested Size:
${size}

Additional Quantity:
${quantity}

Details:
${message}

Please attach any reference image or design file directly in WhatsApp.`;


        /*
         * Send WhatsApp
         */

        sendWhatsAppMessage(
            "201094244235",
            whatsappMessage
        );


        /*
         * Success
         */

        setSubmitted(true);


        /*
         * Reset Form
         */

        form.reset();


        /*
         * Clear Cart
         */

        clearQuote();

    };


    return (

        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-6xl mx-auto px-6">


                {/* Heading */}

                <h1 className="text-5xl md:text-6xl font-bold text-center">

                    Request Your{" "}

                    <span className="text-yellow-400">
                        Custom
                    </span>{" "}

                    Design

                </h1>


                <p className="text-center text-gray-400 text-xl mt-6">

                    Tell us about your design and we will
                    create a custom solution for you.

                </p>


                {/* Selected Products */}

                {quoteItems.length > 0 && (

                    <div className="mt-12">

                        <div className="flex items-center justify-between mb-6">

                            <h2 className="text-3xl font-bold">

                                Your{" "}

                                <span className="text-yellow-400">
                                    Selected Products
                                </span>

                            </h2>


                            <span className="text-gray-400">

                                {quoteItems.length}{" "}

                                {quoteItems.length === 1
                                    ? "product"
                                    : "products"}

                            </span>

                        </div>


                        <div className="space-y-5">

                            {quoteItems.map(
                                (item) => (

                                    <div
                                        key={item.product.slug}
                                        className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                                    >

                                        <div className="flex items-center gap-5">


                                            {/* Image */}

                                            <div className="relative w-24 h-24 flex-shrink-0">

                                                <img
                                                    src={
                                                        item.product.image
                                                    }
                                                    alt={
                                                        item.product.title
                                                    }
                                                    className="w-full h-full object-cover rounded-xl"
                                                />

                                            </div>


                                            {/* Product Info */}

                                            <div className="flex-1">

                                                <p className="text-yellow-400 text-sm uppercase tracking-wider">

                                                    {
                                                        item.product.category
                                                    }

                                                </p>


                                                <h3 className="text-xl font-bold mt-1">

                                                    {
                                                        item.product.title
                                                    }

                                                </h3>


                                                <p className="text-gray-400 text-sm mt-1">

                                                    {
                                                        item.product.material
                                                    }

                                                    {" • "}

                                                    {
                                                        item.product.size
                                                    }

                                                </p>

                                            </div>


                                            {/* Remove */}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeFromQuote(
                                                        item.product.slug
                                                    )
                                                }
                                                className="w-9 h-9 rounded-full bg-slate-800 text-gray-400 hover:bg-red-500 hover:text-white transition"
                                                aria-label={`Remove ${item.product.title}`}
                                            >
                                                ×
                                            </button>

                                        </div>


                                        {/* Quantity */}

                                        <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-800">


                                            <span className="text-gray-400">
                                                Quantity
                                            </span>


                                            <div className="flex items-center gap-3">


                                                {/* Minus */}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            item.product.slug
                                                        )
                                                    }
                                                    className="w-10 h-10 rounded-lg bg-slate-800 text-white text-xl font-bold hover:bg-slate-700 transition"
                                                >
                                                    −
                                                </button>


                                                {/* Quantity */}

                                                <span className="w-12 text-center text-xl font-bold">

                                                    {
                                                        item.quantity
                                                    }

                                                </span>


                                                {/* Plus */}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        increaseQuantity(
                                                            item.product.slug
                                                        )
                                                    }
                                                    className="w-10 h-10 rounded-lg bg-yellow-400 text-black text-xl font-bold hover:bg-yellow-300 transition"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                )}


                {/* Empty Quote */}

                {quoteItems.length === 0 &&
                    !productFromUrl && (

                        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">

                            <p className="text-gray-300">

                                No products selected yet.

                            </p>

                            <p className="text-gray-500 mt-2">

                                You can still use this form
                                to request a completely
                                custom design.

                            </p>

                        </div>

                    )}


                {/* Form */}

                <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-10 mt-12">

                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-6"
                    >


                        {/* Name */}

                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                        />


                        {/* Phone */}

                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                        />


                        {/* Email */}

                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                        />


                        {/* Service */}

                        <select
                            name="service"
                            required
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                        >

                            <option value="">
                                Select Service
                            </option>

                            <option value="Laser Cutting">
                                Laser Cutting
                            </option>

                            <option value="Custom Gifts">
                                Custom Gifts
                            </option>

                            <option value="MDF Wall Art">
                                MDF Wall Art
                            </option>

                            <option value="Business Signs">
                                Business Signs
                            </option>

                            <option value="Interior Decoration">
                                Interior Decoration
                            </option>

                        </select>


                        {/* Size */}

                        <input
                            name="size"
                            type="text"
                            placeholder="Required Size (Example: 50x70 cm)"
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                        />


                        {/* Additional Quantity */}

                        <input
                            name="quantity"
                            type="number"
                            min="1"
                            placeholder="Additional Quantity"
                            className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                        />


                        {/* Details */}

                        <textarea
                            name="message"
                            placeholder="Describe your idea..."
                            rows={6}
                            className="md:col-span-2 bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition resize-none"
                        />


                        {/* WhatsApp Note */}

                        <div className="md:col-span-2 bg-slate-950 border border-yellow-400/40 rounded-xl p-5">

                            <h3 className="text-yellow-400 font-semibold text-lg">

                                Have a design or reference image?

                            </h3>


                            <p className="text-gray-400 text-sm mt-2 leading-6">

                                If you have an image, drawing,
                                reference, or design file, you can
                                attach it directly in WhatsApp after
                                submitting your request.

                            </p>


                            <p className="text-gray-500 text-sm mt-2">

                                Supported files can include images,
                                PDF, SVG, DXF, or other design formats.

                            </p>

                        </div>


                        {/* Submit */}

                        <button
                            type="submit"
                            className="md:col-span-2 bg-yellow-400 text-black py-5 rounded-xl font-bold text-lg hover:bg-yellow-300 transition"
                        >

                            {quoteItems.length > 0
                                ? "Request Quote for Selected Products"
                                : "Submit Request"}

                        </button>

                    </form>

                </div>


                {/* Success */}

                {submitted && (

                    <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center">

                        <p className="text-green-400 font-semibold text-lg">

                            Your request has been prepared successfully.

                        </p>


                        <p className="text-gray-400 mt-2">

                            Please attach your image or design
                            in WhatsApp before sending the message.

                        </p>

                    </div>

                )}

            </div>

        </main>

    );

}