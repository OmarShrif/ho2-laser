"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { sendWhatsAppMessage } from "@/lib/whatsapp";
import { useQuote } from "@/context/QuoteContext";
import { useLanguage } from "@/context/LanguageContext";
import { productTranslations } from "@/data/productTranslations";

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

    const { language, isArabic } = useLanguage();

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
    // Product Translation
    // =========================

    const getProductTranslation = (
        slug: string,
        fallbackTitle: string,
        fallbackCategory: string
    ) => {
        const translation =
            productTranslations[
            slug as keyof typeof productTranslations
            ];

        if (!translation) {
            return {
                title: fallbackTitle,
                category: fallbackCategory,
            };
        }

        return {
            title:
                translation[language]?.title ??
                fallbackTitle,

            category:
                translation[language]?.category ??
                fallbackCategory,
        };
    };

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

                const translatedProduct =
                    getProductTranslation(
                        item.product.slug,
                        item.product.title,
                        item.product.category
                    );

                if (isArabic) {
                    productsMessage +=
                        `${index + 1}. ${translatedProduct.title}\n` +
                        `   الكمية: ${item.quantity}\n` +
                        `   السعر: ${item.product.price} جنيه\n` +
                        `   الإجمالي: ${subtotal} جنيه\n\n`;
                } else {
                    productsMessage +=
                        `${index + 1}. ${translatedProduct.title}\n` +
                        `   Quantity: ${item.quantity}\n` +
                        `   Price: ${item.product.price} LE\n` +
                        `   Subtotal: ${subtotal} LE\n\n`;
                }
            });
        } else {
            const customProductName =
                productFromUrl ?? "Custom Design";

            if (isArabic) {
                productsMessage =
                    `1. ${customProductName}\n` +
                    `   الكمية: ${quantity ?? 1}\n`;
            } else {
                productsMessage =
                    `1. ${customProductName}\n` +
                    `   Quantity: ${quantity ?? 1}\n`;
            }
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
            if (isArabic) {
                deliveryMessage =
                    `طريقة التوصيل: الاستلام من الموقع\n` +
                    `الموقع: نادي الطيران الرياضي – فرع مصر الجديدة – قسم النزهة\n` +
                    `تكلفة التوصيل: مجانًا`;
            } else {
                deliveryMessage =
                    `Delivery Method: Warehouse Pickup\n` +
                    `Location: Aviation Sports Club – Heliopolis Branch – El Nozha Section\n` +
                    `Shipping Cost: FREE`;
            }
        }

        if (deliveryMethod === "metro") {
            if (isArabic) {
                deliveryMessage =
                    `طريقة التوصيل: أقرب محطة مترو\n` +
                    `المحطة المختارة: ${metroStation}\n` +
                    `تكلفة التوصيل: 50 جنيه`;
            } else {
                deliveryMessage =
                    `Delivery Method: Nearest Metro Station\n` +
                    `Selected Station: ${metroStation}\n` +
                    `Shipping Cost: 50 LE`;
            }
        }

        if (deliveryMethod === "home") {
            if (isArabic) {
                deliveryMessage =
                    `طريقة التوصيل: التوصيل للمنزل\n` +
                    `العنوان: ${deliveryAddress}\n` +
                    `تكلفة التوصيل: 150 جنيه`;
            } else {
                deliveryMessage =
                    `Delivery Method: Home Delivery\n` +
                    `Address: ${deliveryAddress}\n` +
                    `Shipping Cost: 150 LE`;
            }
        }

        // =========================
        // Final Total
        // =========================

        const finalTotal =
            productsTotal + shippingCost;

        // =========================
        // WhatsApp Message
        // =========================

        let whatsappMessage = "";

        if (isArabic) {
            whatsappMessage = `
طلب تصميم جديد من HO2 Laser

━━━━━━━━━━━━━━━━━━

المنتجات المختارة

${productsMessage}

━━━━━━━━━━━━━━━━━━

إجمالي المنتجات:
${quoteItems.length > 0
                    ? `${productsTotal} جنيه`
                    : "السعر حسب التصميم"}

التوصيل:
${deliveryMethod === "warehouse"
                    ? "مجانًا"
                    : `${shippingCost} جنيه`}

${quoteItems.length > 0
                    ? `الإجمالي النهائي:\n${finalTotal} جنيه`
                    : "السعر النهائي:\nسيتم تحديده"}

━━━━━━━━━━━━━━━━━━

تفاصيل التوصيل

${deliveryMessage}

━━━━━━━━━━━━━━━━━━

بيانات العميل

الاسم:
${name}

الهاتف:
${phone}

البريد الإلكتروني:
${email}

الخدمة:
${service}

المقاس المطلوب:
${size || "غير محدد"}

الكمية المطلوبة:
${quantity || "غير محددة"}

التفاصيل:
${message || "لا توجد تفاصيل إضافية"}

━━━━━━━━━━━━━━━━━━

يمكن للعميل إرفاق التصميم أو الصورة المرجعية
مباشرة في WhatsApp قبل إرسال الرسالة.
`;
        } else {
            whatsappMessage = `
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
        }

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
        <main
            className={`min-h-screen bg-slate-950 text-white py-32 ${isArabic ? "text-right" : "text-left"
                }`}
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* ========================= */}
                {/* Header */}
                {/* ========================= */}

                <div className="text-center">

                    <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
                        {isArabic
                            ? "اطلب تصميمك"
                            : "Get Your Design"}
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold mt-4">

                        {isArabic
                            ? "اطلب تصميمك "
                            : "Request Your "}

                        <span className="text-yellow-400">
                            {isArabic
                                ? "المخصص"
                                : "Custom"}
                        </span>

                        {!isArabic && " Design"}

                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto">

                        {isArabic
                            ? "أخبرنا بتفاصيل مشروعك وسنجهز لك الحل المناسب."
                            : "Tell us about your project and we will prepare a custom solution for you."}

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

                        <h2
                            className="
                                text-2xl
                                md:text-3xl
                                font-bold
                                text-green-400
                                mt-5
                            "
                        >
                            {isArabic
                                ? "تم تجهيز طلبك بنجاح."
                                : "Your request has been prepared successfully."}
                        </h2>

                        <p
                            className="
                                text-gray-300
                                mt-4
                                text-base
                                md:text-lg
                            "
                        >
                            {isArabic
                                ? "تم فتح WhatsApp مع تفاصيل طلبك."
                                : "WhatsApp has been opened with your request details."}
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

                                {isArabic
                                    ? "📎 لا تنسَ إرفاق التصميم!"
                                    : "📎 Don't forget your design!"}

                            </p>

                            <p
                                className="
                                    text-gray-400
                                    text-sm
                                    md:text-base
                                    mt-2
                                    leading-7
                                "
                            >

                                {isArabic
                                    ? "يرجى إرفاق الصورة أو الرسم أو الملف المرجعي أو PDF أو SVG أو DXF أو أي ملف تصميم آخر مباشرة في WhatsApp قبل إرسال الرسالة."
                                    : "Please attach your image, drawing, reference, PDF, SVG, DXF, or any other design file directly in WhatsApp before sending the message."}

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
                            {isArabic
                                ? "متابعة التسوق"
                                : "Continue Shopping"}
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

                                <div
                                    className="
                                        flex
                                        flex-col
                                        sm:flex-row
                                        sm:items-center
                                        sm:justify-between
                                        gap-4
                                        mb-7
                                    "
                                >

                                    <div>

                                        <p
                                            className="
                                                text-gray-500
                                                text-sm
                                                uppercase
                                                tracking-wider
                                            "
                                        >
                                            {isArabic
                                                ? "اختياراتك"
                                                : "Your Selection"}
                                        </p>

                                        <h2
                                            className="
                                                text-3xl
                                                md:text-4xl
                                                font-bold
                                                mt-1
                                            "
                                        >

                                            {isArabic
                                                ? "سلة "
                                                : "Your "}

                                            <span className="text-yellow-400">
                                                {isArabic
                                                    ? "الطلبات"
                                                    : "Cart"}
                                            </span>

                                        </h2>

                                    </div>

                                    <div className="flex items-center gap-4">

                                        <span className="text-gray-400">

                                            {quoteItems.length}{" "}

                                            {isArabic
                                                ? quoteItems.length === 1
                                                    ? "منتج"
                                                    : "منتجات"
                                                : quoteItems.length === 1
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
                                            {isArabic
                                                ? "مسح السلة"
                                                : "Clear Cart"}
                                        </button>

                                    </div>

                                </div>

                                {/* Cart Items */}

                                <div className="space-y-4">

                                    {quoteItems.map((item) => {

                                        const subtotal =
                                            getItemSubtotal(item);

                                        const translatedProduct =
                                            getProductTranslation(
                                                item.product.slug,
                                                item.product.title,
                                                item.product.category
                                            );

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
                                                            alt={translatedProduct.title}
                                                            fill
                                                            className="object-cover"
                                                        />

                                                    </div>

                                                    {/* Product Info */}

                                                    <div className="flex-1 min-w-0">

                                                        <p
                                                            className="
                                                                text-yellow-400
                                                                text-xs
                                                                uppercase
                                                                tracking-wider
                                                            "
                                                        >
                                                            {
                                                                translatedProduct.category
                                                            }
                                                        </p>

                                                        <h3
                                                            className="
                                                                text-xl
                                                                md:text-2xl
                                                                font-bold
                                                                mt-1
                                                            "
                                                        >
                                                            {
                                                                translatedProduct.title
                                                            }
                                                        </h3>

                                                        <p
                                                            className="
                                                                text-gray-400
                                                                text-sm
                                                                mt-2
                                                            "
                                                        >
                                                            {item.product.price}{" "}
                                                            {isArabic
                                                                ? "جنيه / قطعة"
                                                                : "LE / item"}
                                                        </p>

                                                    </div>

                                                    {/* Quantity */}

                                                    <div
                                                        className="
                                                            flex
                                                            items-center
                                                            justify-between
                                                            md:justify-center
                                                            gap-4
                                                        "
                                                    >

                                                        <span
                                                            className="
                                                                text-gray-500
                                                                text-sm
                                                                md:hidden
                                                            "
                                                        >
                                                            {isArabic
                                                                ? "الكمية"
                                                                : "Quantity"}
                                                        </span>

                                                        <div
                                                            className="
                                                                flex
                                                                items-center
                                                                gap-3
                                                            "
                                                        >

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

                                                            <span
                                                                className="
                                                                    text-lg
                                                                    font-bold
                                                                    min-w-[30px]
                                                                    text-center
                                                                "
                                                            >
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

                                                        <p
                                                            className="
                                                                text-gray-500
                                                                text-xs
                                                                uppercase
                                                                tracking-wider
                                                            "
                                                        >
                                                            {isArabic
                                                                ? "الإجمالي"
                                                                : "Subtotal"}
                                                        </p>

                                                        <p
                                                            className="
                                                                text-2xl
                                                                font-bold
                                                                text-yellow-400
                                                                mt-1
                                                            "
                                                        >
                                                            {subtotal}{" "}
                                                            {isArabic
                                                                ? "جنيه"
                                                                : "LE"}
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
                                                        title={
                                                            isArabic
                                                                ? "إزالة المنتج"
                                                                : "Remove product"
                                                        }
                                                    >
                                                        ✕
                                                    </button>

                                                </div>

                                            </div>

                                        );
                                    })}

                                </div>

                            </div>

                        )}

                        {/* ================================================== */}
                        {/* CUSTOM ORDER */}
                        {/* ================================================== */}

                        {quoteItems.length === 0 && (

                            <div className="mt-12">

                                <div
                                    className="
                                        bg-slate-900
                                        border
                                        border-yellow-400/40
                                        rounded-2xl
                                        p-6
                                        md:p-8
                                    "
                                >

                                    <div className="flex gap-4">

                                        <div
                                            className="
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
                                            "
                                        >
                                            🎨
                                        </div>

                                        <div>

                                            <h2
                                                className="
                                                    text-2xl
                                                    font-bold
                                                "
                                            >

                                                {isArabic
                                                    ? "طلب "
                                                    : "Custom "}

                                                <span className="text-yellow-400">
                                                    {isArabic
                                                        ? "مخصص"
                                                        : "Order"}
                                                </span>

                                            </h2>

                                            <p
                                                className="
                                                    text-gray-400
                                                    mt-2
                                                    leading-7
                                                "
                                            >

                                                {isArabic ? (
                                                    <>
                                                        لا تجد ما تبحث عنه؟
                                                        <br />
                                                        أرسل لنا الصورة أو الرسم أو المرجع الخاص بك وسنقدم لك سعرًا مخصصًا.
                                                    </>
                                                ) : (
                                                    <>
                                                        Don't see what you're
                                                        looking for?
                                                        <br />
                                                        Send us your image,
                                                        drawing, or reference
                                                        and we will provide
                                                        you with a custom price.
                                                    </>
                                                )}

                                            </p>

                                            <p
                                                className="
                                                    text-gray-500
                                                    text-sm
                                                    mt-3
                                                "
                                            >

                                                {isArabic
                                                    ? "سيتم تحديد السعر النهائي بناءً على التصميم والمقاس والخامة والكمية."
                                                    : "The final price will be determined based on the design, size, material, and quantity."}

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

                                <h2
                                    className="
                                        text-2xl
                                        md:text-3xl
                                        font-bold
                                    "
                                >

                                    {isArabic
                                        ? "طريقة "
                                        : "Delivery "}

                                    <span className="text-yellow-400">
                                        {isArabic
                                            ? "التوصيل"
                                            : "Method"}
                                    </span>

                                </h2>

                                <p className="text-gray-400 mt-2">
                                    {isArabic
                                        ? "اختر الطريقة التي تفضل استلام طلبك بها."
                                        : "Choose how you would like to receive your order."}
                                </p>

                            </div>

                            <div
                                className="
                                    grid
                                    md:grid-cols-3
                                    gap-4
                                "
                            >

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
                                        ${isArabic ? "text-right" : "text-left"}
                                        ${deliveryMethod === "warehouse"
                                            ? "border-yellow-400 bg-yellow-400/10"
                                            : "border-slate-700 bg-slate-900 hover:border-yellow-400/50"
                                        }
                                    `}
                                >

                                    <div className="text-3xl">
                                        🏭
                                    </div>

                                    <h3 className="text-xl font-bold mt-4">
                                        {isArabic
                                            ? "الاستلام من الموقع"
                                            : "Warehouse Pickup"}
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2">
                                        {isArabic
                                            ? "الاستلام من نادي الطيران الرياضي – فرع مصر الجديدة – قسم النزهة"
                                            : "Pickup from Aviation Sports Club – Heliopolis Branch – El Nozha Section"}
                                    </p>

                                    <p className="text-green-400 font-bold mt-4">
                                        {isArabic
                                            ? "مجانًا"
                                            : "FREE"}
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
                                        rounded-2xl
                                        p-5
                                        border
                                        transition
                                        ${isArabic ? "text-right" : "text-left"}
                                        ${deliveryMethod === "metro"
                                            ? "border-yellow-400 bg-yellow-400/10"
                                            : "border-slate-700 bg-slate-900 hover:border-yellow-400/50"
                                        }
                                    `}
                                >

                                    <div className="text-3xl">
                                        🚇
                                    </div>

                                    <h3 className="text-xl font-bold mt-4">
                                        {isArabic
                                            ? "أقرب محطة مترو"
                                            : "Nearest Metro Station"}
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2">
                                        {isArabic
                                            ? "مقابلة العميل في محطة المترو التي يحددها"
                                            : "Meet at your selected metro station"}
                                    </p>

                                    <p className="text-yellow-400 font-bold mt-4">
                                        {isArabic
                                            ? "50 جنيه"
                                            : "50 LE"}
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
                                        rounded-2xl
                                        p-5
                                        border
                                        transition
                                        ${isArabic ? "text-right" : "text-left"}
                                        ${deliveryMethod === "home"
                                            ? "border-yellow-400 bg-yellow-400/10"
                                            : "border-slate-700 bg-slate-900 hover:border-yellow-400/50"
                                        }
                                    `}
                                >

                                    <div className="text-3xl">
                                        🏠
                                    </div>

                                    <h3 className="text-xl font-bold mt-4">
                                        {isArabic
                                            ? "التوصيل للمنزل"
                                            : "Home Delivery"}
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2">
                                        {isArabic
                                            ? "توصيل الطلب مباشرة إلى منزلك"
                                            : "Delivery directly to your home"}
                                    </p>

                                    <p className="text-yellow-400 font-bold mt-4">
                                        {isArabic
                                            ? "150 جنيه"
                                            : "150 LE"}
                                    </p>

                                </button>

                            </div>

                            {/* Metro Station Select */}

                            {deliveryMethod === "metro" && (

                                <div className="mt-5">

                                    <label
                                        className="
                                            block
                                            text-gray-300
                                            font-semibold
                                            mb-2
                                        "
                                    >
                                        {isArabic
                                            ? "اختر محطة المترو"
                                            : "Select Metro Station"}
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
                                            {isArabic
                                                ? "اختر محطة المترو"
                                                : "Select your metro station"}
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

                                    <label
                                        className="
                                            block
                                            text-gray-300
                                            font-semibold
                                            mb-2
                                        "
                                    >
                                        {isArabic
                                            ? "عنوان التوصيل"
                                            : "Delivery Address"}
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
                                        placeholder={
                                            isArabic
                                                ? "اكتب عنوان التوصيل بالتفصيل..."
                                                : "Enter your full delivery address..."
                                        }
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
                        {/* ORDER SUMMARY */}
                        {/* ================================================== */}

                        {quoteItems.length > 0 && (

                            <div className="mt-8">

                                <div
                                    className="
                                        bg-slate-900
                                        border
                                        border-yellow-400/30
                                        rounded-2xl
                                        p-6
                                        md:p-7
                                    "
                                >

                                    <h2
                                        className="
                                            text-2xl
                                            font-bold
                                            mb-6
                                        "
                                    >

                                        {isArabic
                                            ? "ملخص "
                                            : "Order "}

                                        <span className="text-yellow-400">
                                            {isArabic
                                                ? "الطلب"
                                                : "Summary"}
                                        </span>

                                    </h2>

                                    {/* Products Total */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <span className="text-gray-400">
                                            {isArabic
                                                ? "إجمالي المنتجات"
                                                : "Products Total"}
                                        </span>

                                        <span className="font-semibold">
                                            {getTotal()}{" "}
                                            {isArabic
                                                ? "جنيه"
                                                : "LE"}
                                        </span>

                                    </div>

                                    {/* Shipping */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            mt-4
                                        "
                                    >

                                        <span className="text-gray-400">
                                            {isArabic
                                                ? "التوصيل"
                                                : "Shipping"}
                                        </span>

                                        <span
                                            className={
                                                deliveryMethod === "warehouse"
                                                    ? "text-green-400 font-semibold"
                                                    : "text-yellow-400 font-semibold"
                                            }
                                        >
                                            {deliveryMethod === "warehouse"
                                                ? isArabic
                                                    ? "مجانًا"
                                                    : "FREE"
                                                : `${shippingCost} ${isArabic
                                                    ? "جنيه"
                                                    : "LE"
                                                }`}
                                        </span>

                                    </div>

                                    {/* Divider */}

                                    <div
                                        className="
                                            border-t
                                            border-slate-800
                                            my-5
                                        "
                                    />

                                    {/* Final Total */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <span
                                            className="
                                                text-lg
                                                font-bold
                                            "
                                        >
                                            {isArabic
                                                ? "الإجمالي النهائي"
                                                : "Final Total"}
                                        </span>

                                        <span
                                            className="
                                                text-3xl
                                                font-bold
                                                text-yellow-400
                                            "
                                        >
                                            {getTotal() + shippingCost}{" "}
                                            {isArabic
                                                ? "جنيه"
                                                : "LE"}
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

                                <h2
                                    className="
                                        text-3xl
                                        font-bold
                                    "
                                >

                                    {isArabic
                                        ? "تفاصيل "
                                        : "Project "}

                                    <span className="text-yellow-400">
                                        {isArabic
                                            ? "المشروع"
                                            : "Details"}
                                    </span>

                                </h2>

                                <p className="text-gray-400 mt-2">
                                    {isArabic
                                        ? "أدخل بياناتك وأخبرنا بما تحتاج إليه."
                                        : "Fill in your information and tell us what you need."}
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
                                    placeholder={
                                        isArabic
                                            ? "الاسم بالكامل"
                                            : "Full Name"
                                    }
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
                                    placeholder={
                                        isArabic
                                            ? "رقم الهاتف"
                                            : "Phone Number"
                                    }
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
                                    placeholder={
                                        isArabic
                                            ? "البريد الإلكتروني"
                                            : "Email Address"
                                    }
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
                                        {isArabic
                                            ? "اختر الخدمة"
                                            : "Select Service"}
                                    </option>

                                    <option value="Laser Cutting">
                                        {isArabic
                                            ? "القص بالليزر"
                                            : "Laser Cutting"}
                                    </option>

                                    <option value="Custom Gifts">
                                        {isArabic
                                            ? "هدايا مخصصة"
                                            : "Custom Gifts"}
                                    </option>

                                    <option value="MDF Wall Art">
                                        {isArabic
                                            ? "ديكورات حائط MDF"
                                            : "MDF Wall Art"}
                                    </option>

                                    <option value="Business Signs">
                                        {isArabic
                                            ? "لافتات الأعمال"
                                            : "Business Signs"}
                                    </option>

                                    <option value="Interior Decoration">
                                        {isArabic
                                            ? "ديكور داخلي"
                                            : "Interior Decoration"}
                                    </option>

                                </select>

                                {/* Size */}

                                <input
                                    name="size"
                                    type="text"
                                    placeholder={
                                        isArabic
                                            ? "المقاس المطلوب (مثال: 50×70 سم)"
                                            : "Required Size (Example: 50x70 cm)"
                                    }
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
                                    placeholder={
                                        isArabic
                                            ? "الكمية"
                                            : "Quantity"
                                    }
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
                                    placeholder={
                                        isArabic
                                            ? "صف لنا فكرتك..."
                                            : "Describe your idea..."
                                    }
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

                                            <h3
                                                className="
                                                    text-yellow-400
                                                    font-semibold
                                                    text-lg
                                                "
                                            >
                                                {isArabic
                                                    ? "لديك تصميم أو صورة مرجعية؟"
                                                    : "Have a design or reference?"}
                                            </h3>

                                            <p
                                                className="
                                                    text-gray-400
                                                    text-sm
                                                    mt-2
                                                    leading-6
                                                "
                                            >
                                                {isArabic
                                                    ? "يرجى إرفاق الصورة أو الرسم أو المرجع أو PDF أو SVG أو DXF أو أي ملف تصميم آخر مباشرة في WhatsApp بعد إرسال الطلب."
                                                    : "Please attach your image, drawing, reference, PDF, SVG, DXF, or other design file directly in WhatsApp after submitting your request."}
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
                                    {isArabic
                                        ? "إرسال الطلب"
                                        : "Submit Request"}
                                </button>

                            </form>

                        </div>

                    </>

                )}

            </div>

        </main>
    );
}