export function sendWhatsAppMessage(
  phoneNumber: string,
  message: string
) {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}