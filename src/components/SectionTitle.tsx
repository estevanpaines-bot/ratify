import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Cabeçalho padrão das seções (etiqueta + título + texto de apoio). */
export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {label ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden />
          {label}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
