"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sendWhatsAppMessage } from "@/lib/whatsapp";
import { useSearchParams } from "next/navigation";

import { useQuote } from "@/context/QuoteContext";

const metroStations = [
    // Line 1
    "Helwan",
    "Ain Helwan",
    "Helwan University",
    "Wadi Hof",
    "Hadayek Helwan",
    "El-Maasara",
    "Tora El-Asmant",
    "Kozzika",
    "Tora El-Balad",
    "Thakanat El-Maadi",
    "Maadi",
    "Hadayek El-Maadi",
    "Dar El-Salam",
    "El-Zahraa",
    "Mar Girgis",
    "El-Malek El-Saleh",
    "El-Sayeda Zeinab",
    "Saad Zaghloul",
    "Sadat",
    "Gamal Abdel Nasser",
    "Ahmed Orabi",
    "El-Shohadaa",
    "Ghamra",
    "El-Demerdash",
    "Manshiet El-Sadr",
    "Kobri El-Qobba",
    "Hammamat El-Qobba",
    "Saray El-Qobba",
    "Hadayek El-Zaitoun",
    "Helmeyet El-Zaitoun",
    "El-Matareyya",
    "Ain Shams",
    "Ezbet El-Nakhl",
    "El-Marg",
    "New El-Marg",

    // Line 2
    "El-Mounib",
    "Sakiat Mekky",
    "Omm El-Misryeen",
    "Giza",
    "Faisal",
    "Cairo University",
    "Al-Bohoth",
    "Dokki",
    "Opera",
    "Mohamed Naguib",
    "Ataba",
    "Masarra",
    "Rod El-Farag",
    "St. Teresa",
    "El-Khalfawy",
    "Mezallat",
    "Kolleyet El-Zeraa",
    "Shubra El-Khaima",

    // Line 3
    "Bab El-Shaaria",
    "El-Geish",
    "Abdo Pasha",
    "Abbasia",
    "Fair Zone",
    "Stadium",
    "Koleyet El-Banat",
    "Al-Ahram",
    "Haroun",
    "Heliopolis",
    "Alf Maskan",
    "Hesham Barakat",
    "Quba",
    "Omar Ibn El-Khattab",
    "Hikestep",
    "Adly Mansour",
    "Maspero",
    "Safaa Hegazi",
    "Kit Kat",
    "Sudan",
    "Imbaba",
    "El-Bouhi",
    "Al-Qawmeya Al-Arabiya",
    "Ring Road",
    "Rod El-Farag Axis",
    "Al-Tawfiqia",
    "Wadi El-Nil",
    "Gameat El-Dewal",
    "Boulaq El-Dakrour",
];

export default function QuoteForm() {
    const searchParams = useSearchParams();

    const productFromUrl = searchParams.get("product");

    const {
        quoteItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromQuote,
        getItemSubtotal,
        getTotal,
        clearQuote,
    } = useQuote();

    // =========================
    // Delivery
    // =========================

    const [deliveryMethod, setDeliveryMethod] =
        useState("warehouse");

    const [metroStation, setMetroStation] =
        useState("");

    const [deliveryAddress, setDeliveryAddress] =
        useState("");

    // =========================
    // Submit
    // =========================

    const [submitted, setSubmitted] =
        useState(false);

    // =========================
    // Shipping Price
    // =========================

    const shippingCost =
        deliveryMethod === "warehouse"
            ? 0
            : deliveryMethod === "metro"
                ? 50
                : 150;

    // =========================
    // Handle Submit
    // =========================

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
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

        // =========================
        // Build Products Message
        // =========================

        let productsMessage = "";

        if (quoteItems.length > 0) {
            quoteItems.forEach((item, index) => {
                const subtotal =
                    getItemSubtotal(item);

                productsMessage +=
                    `${index + 1}. ${item.product.title}\n` +
                    `   Quantity: ${item.quantity}\n` +
                    `   Price: ${item.product.price} LE\n` +
                    `   Subtotal: ${subtotal} LE\n\n`;
            });
        } else {
            productsMessage =
                `1. ${productFromUrl ?? "Custom Design"}\n` +
                `   Quantity: ${quantity ?? 1}\n`;
        }

        // =========================
        // Product Total
        // =========================

        const productsTotal =
            quoteItems.length > 0
                ? getTotal()
                : 0;

        // =========================
        // Delivery Details
        // =========================

        let deliveryMessage = "";

        if (deliveryMethod === "warehouse") {
            deliveryMessage =
                `Delivery Method: Warehouse Pickup\n` +
                `Location: Aviation Sports Club – Heliopolis Branch – El Nozha Section\n` +
                `Shipping Cost: FREE`;
        }

        if (deliveryMethod === "metro") {
            deliveryMessage =
                `Delivery Method: Nearest Metro Station\n` +
                `Selected Station: ${metroStation}\n` +
                `Shipping Cost: 50 LE`;
        }

        if (deliveryMethod === "home") {
            deliveryMessage =
                `Delivery Method: Home Delivery\n` +
                `Address: ${deliveryAddress}\n` +
                `Shipping Cost: 150 LE`;
        }

        // =========================
        // Final Total
        // =========================

        const finalTotal =
            productsTotal + shippingCost;

        // =========================
        // WhatsApp Message
        // =========================

        const whatsappMessage = `
New HO2 Laser Design Request

━━━━━━━━━━━━━━━━━━

SELECTED PRODUCTS

${productsMessage}

━━━━━━━━━━━━━━━━━━

PRODUCTS TOTAL:
${quoteItems.length > 0
                ? `${productsTotal} LE`
                : "Custom Price"}

SHIPPING:
${deliveryMethod === "warehouse"
                ? "FREE"
                : `${shippingCost} LE`}

${quoteItems.length > 0
                ? `FINAL TOTAL:\n${finalTotal} LE`
                : "FINAL PRICE:\nTo be determined"}

━━━━━━━━━━━━━━━━━━

DELIVERY DETAILS

${deliveryMessage}

━━━━━━━━━━━━━━━━━━

CUSTOMER DETAILS

Name:
${name}

Phone:
${phone}

Email:
${email}

Service:
${service}

Required Size:
${size || "Not specified"}

Requested Quantity:
${quantity || "Not specified"}

Details:
${message || "No additional details"}

━━━━━━━━━━━━━━━━━━

The customer may attach a design or reference
file directly in WhatsApp.
`;

        // =========================
        // Open WhatsApp
        // =========================

        sendWhatsAppMessage(
            "201158636667",
            whatsappMessage
        );

        // =========================
        // Success
        // =========================

        setSubmitted(true);

        // =========================
        // Clear Cart
        // =========================

        clearQuote();

        // =========================
        // Reset Form
        // =========================

        form.reset();

        setDeliveryMethod("warehouse");
        setMetroStation("");
        setDeliveryAddress("");

        // =========================
        // Scroll To Success
        // =========================

        setTimeout(() => {
            const successElement =
                document.getElementById(
                    "quote-success"
                );

            successElement?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 200);
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white py-32">

            <div className="max-w-6xl mx-auto px-6">

                {/* ========================= */}
                {/* Header */}
                {/* ========================= */}

                <div className="text-center">

                    <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
                        Get Your Design
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold mt-4">

                        Request Your{" "}

                        <span className="text-yellow-400">
                            Custom
                        </span>{" "}

                        Design

                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto">

                        Tell us about your project and we will
                        prepare a custom solution for you.

                    </p>

                </div>


                {/* ========================= */}
                {/* Success Message */}
                {/* ========================= */}

                {submitted && (

                    <div
                        id="quote-success"
                        className="
                            mt-12
                            bg-green-950/50
                            border
                            border-green-500/40
                            rounded-3xl
                            p-8
                            md:p-10
                            text-center
                            shadow-lg
                        "
                    >

                        <div
                            className="
                                mx-auto
                                w-16
                                h-16
                                rounded-full
                                bg-green-500/20
                                border
                                border-green-500/40
                                flex
                                items-center
                                justify-center
                                text-3xl
                            "
                        >
                            ✓
                        </div>


                        <h2 className="
                            text-2xl
                            md:text-3xl
                            font-bold
                            text-green-400
                            mt-5
                        ">
                            Your request has been prepared successfully.
                        </h2>


                        <p className="
                            text-gray-300
                            mt-4
                            text-base
                            md:text-lg
                        ">
                            WhatsApp has been opened with your
                            request details.
                        </p>


                        <div
                            className="
                                mt-6
                                bg-slate-950/70
                                border
                                border-green-500/20
                                rounded-2xl
                                p-5
                            "
                        >

                            <p className="text-white font-semibold">
                                📎 Don't forget your design!
                            </p>

                            <p className="
                                text-gray-400
                                text-sm
                                md:text-base
                                mt-2
                                leading-7
                            ">
                                Please attach your image, drawing,
                                reference, PDF, SVG, DXF, or any
                                other design file directly in WhatsApp
                                before sending the message.
                            </p>

                        </div>


                        <Link
                            href="/portfolio"
                            className="
                                inline-block
                                mt-7
                                bg-yellow-400
                                text-black
                                px-7
                                py-3
                                rounded-xl
                                font-bold
                                hover:bg-yellow-300
                                transition
                            "
                        >
                            Continue Shopping
                        </Link>

                    </div>
                )}


                {/* ================================================== */}
                {/* EVERYTHING BELOW IS HIDDEN AFTER SUBMIT */}
                {/* ================================================== */}

                {!submitted && (

                    <>

                        {/* ================================================== */}
                        {/* CART */}
                        {/* ================================================== */}

                        {quoteItems.length > 0 && (

                            <div className="mt-14">

                                {/* Cart Header */}

                                <div className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    gap-4
                                    mb-7
                                ">

                                    <div>

                                        <p className="
                                            text-gray-500
                                            text-sm
                                            uppercase
                                            tracking-wider
                                        ">
                                            Your Selection
                                        </p>

                                        <h2 className="
                                            text-3xl
                                            md:text-4xl
                                            font-bold
                                            mt-1
                                        ">

                                            Your{" "}

                                            <span className="text-yellow-400">
                                                Cart
                                            </span>

                                        </h2>

                                    </div>


                                    <div className="flex items-center gap-4">

                                        <span className="text-gray-400">

                                            {quoteItems.length}{" "}

                                            {quoteItems.length === 1
                                                ? "product"
                                                : "products"}

                                        </span>


                                        <button
                                            type="button"
                                            onClick={clearQuote}
                                            className="
                                                text-sm
                                                text-red-400
                                                hover:text-red-300
                                                transition
                                                border
                                                border-red-500/20
                                                hover:border-red-500/50
                                                px-4
                                                py-2
                                                rounded-lg
                                            "
                                        >
                                            Clear Cart
                                        </button>

                                    </div>

                                </div>


                                {/* Cart Items */}

                                <div className="space-y-4">

                                    {quoteItems.map((item) => {

                                        const subtotal =
                                            getItemSubtotal(item);

                                        return (

                                            <div
                                                key={item.product.slug}
                                                className="
                                                    bg-slate-900
                                                    border
                                                    border-slate-800
                                                    hover:border-yellow-400/40
                                                    rounded-2xl
                                                    p-4
                                                    md:p-5
                                                    transition
                                                "
                                            >

                                                <div
                                                    className="
                                                        flex
                                                        flex-col
                                                        md:flex-row
                                                        md:items-center
                                                        gap-5
                                                    "
                                                >

                                                    {/* Product Image */}

                                                    <div
                                                        className="
                                                            relative
                                                            w-full
                                                            md:w-28
                                                            h-40
                                                            md:h-28
                                                            flex-shrink-0
                                                            rounded-xl
                                                            overflow-hidden
                                                            bg-slate-950
                                                        "
                                                    >

                                                        <Image
                                                            src={item.product.image}
                                                            alt={item.product.title}
                                                            fill
                                                            className="object-cover"
                                                        />

                                                    </div>


                                                    {/* Product Info */}

                                                    <div className="
                                                        flex-1
                                                        min-w-0
                                                    ">

                                                        <p className="
                                                            text-yellow-400
                                                            text-xs
                                                            uppercase
                                                            tracking-wider
                                                        ">
                                                            {item.product.category}
                                                        </p>


                                                        <h3 className="
                                                            text-xl
                                                            md:text-2xl
                                                            font-bold
                                                            mt-1
                                                        ">
                                                            {item.product.title}
                                                        </h3>


                                                        <p className="
                                                            text-gray-400
                                                            text-sm
                                                            mt-2
                                                        ">
                                                            {item.product.price} LE / item
                                                        </p>

                                                    </div>


                                                    {/* Quantity */}

                                                    <div className="
                                                        flex
                                                        items-center
                                                        justify-between
                                                        md:justify-center
                                                        gap-4
                                                    ">

                                                        <span className="
                                                            text-gray-500
                                                            text-sm
                                                            md:hidden
                                                        ">
                                                            Quantity
                                                        </span>


                                                        <div className="
                                                            flex
                                                            items-center
                                                            gap-3
                                                        ">

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    decreaseQuantity(
                                                                        item.product.slug
                                                                    )
                                                                }
                                                                className="
                                                                    w-10
                                                                    h-10
                                                                    rounded-xl
                                                                    bg-slate-800
                                                                    border
                                                                    border-slate-700
                                                                    hover:border-yellow-400
                                                                    hover:text-yellow-400
                                                                    transition
                                                                    font-bold
                                                                    text-xl
                                                                "
                                                            >
                                                                −
                                                            </button>


                                                            <span className="
                                                                text-lg
                                                                font-bold
                                                                min-w-[30px]
                                                                text-center
                                                            ">
                                                                {item.quantity}
                                                            </span>


                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    increaseQuantity(
                                                                        item.product.slug
                                                                    )
                                                                }
                                                                className="
                                                                    w-10
                                                                    h-10
                                                                    rounded-xl
                                                                    bg-slate-800
                                                                    border
                                                                    border-slate-700
                                                                    hover:border-yellow-400
                                                                    hover:text-yellow-400
                                                                    transition
                                                                    font-bold
                                                                    text-xl
                                                                "
                                                            >
                                                                +
                                                            </button>

                                                        </div>

                                                    </div>


                                                    {/* Subtotal */}

                                                    <div
                                                        className="
                                                            md:w-32
                                                            md:text-right
                                                            border-t
                                                            md:border-t-0
                                                            border-slate-800
                                                            pt-4
                                                            md:pt-0
                                                        "
                                                    >

                                                        <p className="
                                                            text-gray-500
                                                            text-xs
                                                            uppercase
                                                            tracking-wider
                                                        ">
                                                            Subtotal
                                                        </p>

                                                        <p className="
                                                            text-2xl
                                                            font-bold
                                                            text-yellow-400
                                                            mt-1
                                                        ">
                                                            {subtotal} LE
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
                                                        className="
                                                            self-end
                                                            md:self-center
                                                            w-9
                                                            h-9
                                                            rounded-lg
                                                            text-gray-500
                                                            hover:text-red-400
                                                            hover:bg-red-500/10
                                                            transition
                                                        "
                                                        title="Remove product"
                                                    >
                                                        ✕
                                                    </button>

                                                </div>

                                            </div>

                                        );
                                    })}

                                </div>

                                {/* IMPORTANT:
                                    No Total here.
                                    Total appears after Delivery Method.
                                */}

                            </div>

                        )}


                        {/* ================================================== */}
                        {/* CUSTOM ORDER */}
                        {/* ================================================== */}

                        {quoteItems.length === 0 && (

                            <div className="mt-12">

                                <div className="
                                    bg-slate-900
                                    border
                                    border-yellow-400/40
                                    rounded-2xl
                                    p-6
                                    md:p-8
                                ">

                                    <div className="flex gap-4">

                                        <div className="
                                            w-12
                                            h-12
                                            rounded-xl
                                            bg-yellow-400/10
                                            border
                                            border-yellow-400/30
                                            flex
                                            items-center
                                            justify-center
                                            text-2xl
                                            flex-shrink-0
                                        ">
                                            🎨
                                        </div>


                                        <div>

                                            <h2 className="
                                                text-2xl
                                                font-bold
                                            ">

                                                Custom{" "}

                                                <span className="text-yellow-400">
                                                    Order
                                                </span>

                                            </h2>


                                            <p className="
                                                text-gray-400
                                                mt-2
                                                leading-7
                                            ">

                                                Don't see what you're
                                                looking for?

                                                <br />

                                                Send us your image,
                                                drawing, or reference
                                                and we will provide
                                                you with a custom price.

                                            </p>


                                            <p className="
                                                text-gray-500
                                                text-sm
                                                mt-3
                                            ">

                                                The final price will be
                                                determined based on the
                                                design, size, material,
                                                and quantity.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        )}


                        {/* ================================================== */}
                        {/* DELIVERY METHOD */}
                        {/* ================================================== */}

                        <div className="mt-12">

                            <div className="mb-6">

                                <h2 className="
                                    text-2xl
                                    md:text-3xl
                                    font-bold
                                ">

                                    Delivery{" "}

                                    <span className="text-yellow-400">
                                        Method
                                    </span>

                                </h2>


                                <p className="
                                    text-gray-400
                                    mt-2
                                ">
                                    Choose how you would like to
                                    receive your order.
                                </p>

                            </div>


                            <div className="
                                grid
                                md:grid-cols-3
                                gap-4
                            ">

                                {/* Warehouse */}

                                <button
                                    type="button"
                                    onClick={() => {
                                        setDeliveryMethod("warehouse");
                                        setMetroStation("");
                                        setDeliveryAddress("");
                                    }}
                                    className={`
                                        text-left
                                        rounded-2xl
                                        p-5
                                        border
                                        transition
                                        ${deliveryMethod === "warehouse"
                                            ? "border-yellow-400 bg-yellow-400/10"
                                            : "border-slate-700 bg-slate-900 hover:border-yellow-400/50"
                                        }
                                    `}
                                >

                                    <div className="text-3xl">
                                        🏭
                                    </div>

                                    <h3 className="
                                        text-xl
                                        font-bold
                                        mt-4
                                    ">
                                        Warehouse
                                    </h3>

                                    <p className="
                                        text-gray-400
                                        text-sm
                                        mt-2
                                    ">
                                        Pickup from Aviation Sports Club – Heliopolis Branch – El Nozha Section
                                    </p>

                                    <p className="
                                        text-green-400
                                        font-bold
                                        mt-4
                                    ">
                                        FREE
                                    </p>

                                </button>


                                {/* Metro */}

                                <button
                                    type="button"
                                    onClick={() => {
                                        setDeliveryMethod("metro");
                                        setDeliveryAddress("");
                                    }}
                                    className={`
                                        text-left
                                        rounded-2xl
                                        p-5
                                        border
                                        transition
                                        ${deliveryMethod === "metro"
                                            ? "border-yellow-400 bg-yellow-400/10"
                                            : "border-slate-700 bg-slate-900 hover:border-yellow-400/50"
                                        }
                                    `}
                                >

                                    <div className="text-3xl">
                                        🚇
                                    </div>

                                    <h3 className="
                                        text-xl
                                        font-bold
                                        mt-4
                                    ">
                                        Nearest Metro Station
                                    </h3>

                                    <p className="
                                        text-gray-400
                                        text-sm
                                        mt-2
                                    ">
                                        Meet at your selected
                                        metro station
                                    </p>

                                    <p className="
                                        text-yellow-400
                                        font-bold
                                        mt-4
                                    ">
                                        50 LE
                                    </p>

                                </button>


                                {/* Home */}

                                <button
                                    type="button"
                                    onClick={() => {
                                        setDeliveryMethod("home");
                                        setMetroStation("");
                                    }}
                                    className={`
                                        text-left
                                        rounded-2xl
                                        p-5
                                        border
                                        transition
                                        ${deliveryMethod === "home"
                                            ? "border-yellow-400 bg-yellow-400/10"
                                            : "border-slate-700 bg-slate-900 hover:border-yellow-400/50"
                                        }
                                    `}
                                >

                                    <div className="text-3xl">
                                        🏠
                                    </div>

                                    <h3 className="
                                        text-xl
                                        font-bold
                                        mt-4
                                    ">
                                        Home Delivery
                                    </h3>

                                    <p className="
                                        text-gray-400
                                        text-sm
                                        mt-2
                                    ">
                                        Delivery directly to
                                        your home
                                    </p>

                                    <p className="
                                        text-yellow-400
                                        font-bold
                                        mt-4
                                    ">
                                        150 LE
                                    </p>

                                </button>

                            </div>


                            {/* Metro Station Select */}

                            {deliveryMethod === "metro" && (

                                <div className="mt-5">

                                    <label className="
                                        block
                                        text-gray-300
                                        font-semibold
                                        mb-2
                                    ">
                                        Select Metro Station
                                    </label>


                                    <select
                                        value={metroStation}
                                        onChange={(e) =>
                                            setMetroStation(
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="
                                            w-full
                                            bg-slate-950
                                            border
                                            border-slate-700
                                            rounded-xl
                                            px-5
                                            py-4
                                            outline-none
                                            focus:border-yellow-400
                                            transition
                                        "
                                    >

                                        <option value="">
                                            Select your metro station
                                        </option>

                                        {metroStations.map(
                                            (station) => (
                                                <option
                                                    key={station}
                                                    value={station}
                                                >
                                                    {station}
                                                </option>
                                            )
                                        )}

                                    </select>

                                </div>

                            )}


                            {/* Home Address */}

                            {deliveryMethod === "home" && (

                                <div className="mt-5">

                                    <label className="
                                        block
                                        text-gray-300
                                        font-semibold
                                        mb-2
                                    ">
                                        Delivery Address
                                    </label>


                                    <textarea
                                        value={deliveryAddress}
                                        onChange={(e) =>
                                            setDeliveryAddress(
                                                e.target.value
                                            )
                                        }
                                        required
                                        rows={3}
                                        placeholder="Enter your full delivery address..."
                                        className="
                                            w-full
                                            bg-slate-950
                                            border
                                            border-slate-700
                                            rounded-xl
                                            px-5
                                            py-4
                                            outline-none
                                            focus:border-yellow-400
                                            transition
                                        "
                                    />

                                </div>

                            )}

                        </div>


                        {/* ================================================== */}
                        {/* ORDER SUMMARY - PRODUCTS ONLY */}
                        {/* ================================================== */}

                        {quoteItems.length > 0 && (

                            <div className="mt-8">

                                <div className="
                                    bg-slate-900
                                    border
                                    border-yellow-400/30
                                    rounded-2xl
                                    p-6
                                    md:p-7
                                ">

                                    <h2 className="
                                        text-2xl
                                        font-bold
                                        mb-6
                                    ">

                                        Order{" "}

                                        <span className="text-yellow-400">
                                            Summary
                                        </span>

                                    </h2>


                                    {/* Products Total */}

                                    <div className="
                                        flex
                                        items-center
                                        justify-between
                                    ">

                                        <span className="text-gray-400">
                                            Products Total
                                        </span>

                                        <span className="font-semibold">
                                            {getTotal()} LE
                                        </span>

                                    </div>


                                    {/* Shipping */}

                                    <div className="
                                        flex
                                        items-center
                                        justify-between
                                        mt-4
                                    ">

                                        <span className="text-gray-400">
                                            Shipping
                                        </span>

                                        <span
                                            className={
                                                deliveryMethod === "warehouse"
                                                    ? "text-green-400 font-semibold"
                                                    : "text-yellow-400 font-semibold"
                                            }
                                        >
                                            {deliveryMethod === "warehouse"
                                                ? "FREE"
                                                : `${shippingCost} LE`}
                                        </span>

                                    </div>


                                    {/* Divider */}

                                    <div className="
                                        border-t
                                        border-slate-800
                                        my-5
                                    " />


                                    {/* Final Total */}

                                    <div className="
                                        flex
                                        items-center
                                        justify-between
                                    ">

                                        <span className="
                                            text-lg
                                            font-bold
                                        ">
                                            Final Total
                                        </span>


                                        <span className="
                                            text-3xl
                                            font-bold
                                            text-yellow-400
                                        ">
                                            {getTotal() + shippingCost} LE
                                        </span>

                                    </div>

                                </div>

                            </div>

                        )}


                        {/* ================================================== */}
                        {/* CUSTOMER FORM */}
                        {/* ================================================== */}

                        <div
                            className="
                                bg-slate-900
                                rounded-3xl
                                border
                                border-slate-800
                                p-6
                                md:p-10
                                mt-12
                            "
                        >

                            <div className="mb-8">

                                <h2 className="
                                    text-3xl
                                    font-bold
                                ">

                                    Project{" "}

                                    <span className="text-yellow-400">
                                        Details
                                    </span>

                                </h2>


                                <p className="
                                    text-gray-400
                                    mt-2
                                ">
                                    Fill in your information and tell
                                    us what you need.
                                </p>

                            </div>


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
                                    className="
                                        bg-slate-950
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-yellow-400
                                        transition
                                    "
                                />


                                {/* Phone */}

                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    className="
                                        bg-slate-950
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-yellow-400
                                        transition
                                    "
                                />


                                {/* Email */}

                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className="
                                        bg-slate-950
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-yellow-400
                                        transition
                                    "
                                />


                                {/* Service */}

                                <select
                                    name="service"
                                    required
                                    className="
                                        bg-slate-950
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-yellow-400
                                        transition
                                    "
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
                                    className="
                                        bg-slate-950
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-yellow-400
                                        transition
                                    "
                                />


                                {/* Quantity */}

                                <input
                                    name="quantity"
                                    type="number"
                                    min="1"
                                    placeholder="Quantity"
                                    className="
                                        bg-slate-950
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-yellow-400
                                        transition
                                    "
                                />


                                {/* Details */}

                                <textarea
                                    name="message"
                                    placeholder="Describe your idea..."
                                    rows={6}
                                    className="
                                        md:col-span-2
                                        bg-slate-950
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-yellow-400
                                        transition
                                    "
                                />


                                {/* WhatsApp Design Note */}

                                <div
                                    className="
                                        md:col-span-2
                                        bg-slate-950
                                        border
                                        border-yellow-400/40
                                        rounded-2xl
                                        p-5
                                        md:p-6
                                    "
                                >

                                    <div className="flex gap-4">

                                        <div className="text-2xl">
                                            📎
                                        </div>


                                        <div>

                                            <h3 className="
                                                text-yellow-400
                                                font-semibold
                                                text-lg
                                            ">
                                                Have a design or reference?
                                            </h3>


                                            <p className="
                                                text-gray-400
                                                text-sm
                                                mt-2
                                                leading-6
                                            ">
                                                Please attach your image,
                                                drawing, reference, PDF,
                                                SVG, DXF, or other design
                                                file directly in WhatsApp
                                                after submitting your request.
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* Submit */}

                                <button
                                    type="submit"
                                    className="
                                        md:col-span-2
                                        bg-yellow-400
                                        text-black
                                        py-5
                                        rounded-xl
                                        font-bold
                                        text-lg
                                        hover:bg-yellow-300
                                        transition
                                    "
                                >
                                    Submit Request
                                </button>

                            </form>

                        </div>

                    </>

                )}

            </div>

        </main>
    );
}