"use client";

import Image from "next/image";
import { useEffect } from "react";

type ProductLightboxProps = {
    image: string;
    title: string;
    onClose: () => void;
};

export default function ProductLightbox({
    image,
    title,
    onClose,
}: ProductLightboxProps) {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={onClose}
        >

            {/* Close Button */}

            <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-900 text-white text-2xl hover:bg-yellow-400 hover:text-black transition z-10"
                aria-label="Close image"
            >
                ✕
            </button>


            {/* Image Container */}

            <div
                className="relative w-full max-w-5xl h-[80vh]"
                onClick={(e) => e.stopPropagation()}
            >

                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-contain"
                />

            </div>

        </div>
    );
}