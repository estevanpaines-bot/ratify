import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Célula "bento" interativa: acompanha o cursor com um brilho suave
 * e eleva levemente no hover. Use em qualquer bloco do site.
 */
export function SpotlightCard({
  as: Tag = "div",
  className,
  children,
  ...rest
}: {
  as?: "div" | "article" | "li" | "section";
  className?: string;
  children: ReactNode;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);

  // Converte a posição do mouse em variáveis CSS (--mx / --my).
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const Component = Tag as "div";

  return (
    <Component
      ref={ref as never}
      onMouseMove={handleMove}
      className={cn("bento bento-hover spotlight", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
