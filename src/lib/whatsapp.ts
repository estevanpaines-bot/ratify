import { siteConfig } from "@/data/siteConfig";

/**
 * Gera o link do WhatsApp com a mensagem já preenchida.
 * O número fica somente em src/data/siteConfig.ts.
 */
export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

/** Abre o WhatsApp em uma nova aba. Use em onClick de botões. */
export function openWhatsApp(message?: string) {
  if (typeof window === "undefined") return;
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}
