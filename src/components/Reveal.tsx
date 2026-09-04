import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

/** Envolve qualquer conteúdo com a animação de entrada por scroll. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(delay);
  return (
    <Tag ref={ref as never} className={cn("reveal", visible && "reveal-visible", className)}>
      {children}
    </Tag>
  );
}
