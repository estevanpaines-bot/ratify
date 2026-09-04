import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Props = {
  /** Mensagem que já vem preenchida na conversa. */
  message?: string;
  children?: React.ReactNode;
  className?: string;
  size?: ComponentProps<typeof Button>["size"];
  variant?: ComponentProps<typeof Button>["variant"];
  showIcon?: boolean;
};

/** Botão que abre o WhatsApp com uma mensagem contextual. */
export function WhatsAppButton({
  message,
  children = "Falar pelo WhatsApp",
  className,
  size = "lg",
  variant = "hero",
  showIcon = true,
}: Props) {
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        {showIcon ? <MessageCircle className="size-4" aria-hidden /> : null}
        {children}
      </a>
    </Button>
  );
}

/** Botão flutuante fixo no canto inferior direito. */
export function FloatingWhatsApp({ message }: { message?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={cn(
        "group fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full border border-border",
        "bg-surface/85 p-3 text-foreground shadow-[var(--shadow-elevated)] backdrop-blur-md",
        "transition-transform duration-300 hover:scale-[1.04] sm:bottom-7 sm:right-7",
      )}
    >
      <MessageCircle className="size-5 text-primary" aria-hidden />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-medium transition-all duration-300 group-hover:max-w-[12rem] group-hover:pr-2 sm:inline">
        Falar pelo WhatsApp
      </span>
    </a>
  );
}
