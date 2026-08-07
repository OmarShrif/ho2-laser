export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/201094244235"
            target="_blank"
            rel="noopener noreferrer"
            className=" fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white text-3xl shadow-2xl transition duration-300 hover:scale-110 z-50 "
            aria-label="Chat on WhatsApp"
        >
            💬
        </a>
    );
}