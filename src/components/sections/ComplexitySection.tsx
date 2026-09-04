import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { complexityLevels } from "@/data/products";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Seção "Do simples ao extraordinário" com slider de níveis. */
export function ComplexitySection() {
  const [index, setIndex] = useState(1);
  const level = complexityLevels[index]!;

  return (
    <section id="niveis" className="relative border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Complexidade"
          title="Do simples ao extraordinário."
          description="Cada projeto possui uma necessidade diferente. Por isso, desenvolvemos soluções que acompanham o nível de complexidade do seu negócio."
        />

        {/* Seletor de níveis */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {complexityLevels.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              className={cn(
                "shrink-0 rounded-xl border px-4 py-3 text-left transition-all duration-300",
                i === index
                  ? "border-primary/60 bg-surface-2 shadow-[var(--shadow-elevated)]"
                  : "border-border bg-surface/40 hover:border-primary/30",
              )}
            >
              <span className="block font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                {item.level}
              </span>
              <span className={cn("mt-1 block text-sm font-medium", i !== index && "text-muted-foreground")}>
                {item.title}
              </span>
            </button>
          ))}
        </div>

        <div key={level.title} className="panel mt-6 grid animate-in fade-in slide-in-from-bottom-2 gap-8 p-6 duration-500 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{level.level}</span>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{level.title}</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{level.description}</p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {level.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                size="default"
                message={`Olá! Tenho interesse em um projeto do tipo "${level.title}".`}
              >
                Conversar sobre este nível
              </WhatsAppButton>
              <div className="flex gap-2">
                <Button
                  variant="outlineGlow"
                  size="icon"
                  aria-label="Nível anterior"
                  onClick={() => setIndex((i) => (i - 1 + complexityLevels.length) % complexityLevels.length)}
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="outlineGlow"
                  size="icon"
                  aria-label="Próximo nível"
                  onClick={() => setIndex((i) => (i + 1) % complexityLevels.length)}
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <dl className="grid gap-4 rounded-2xl border border-border bg-surface/40 p-5 sm:p-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Complexidade</dt>
              <dd className="mt-2 flex gap-1.5" aria-label={`Nível ${level.complexity} de 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-2 flex-1 rounded-full transition-colors duration-500",
                      i < level.complexity ? "bg-[image:var(--gradient-primary)]" : "bg-muted",
                    )}
                  />
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Indicado para</dt>
              <dd className="mt-1 text-sm">{level.audience}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Faixa de projeto</dt>
              <dd className="mt-1 text-sm">{level.range}</dd>
            </div>
            {/* Exemplo visual esquemático do layout típico deste nível */}
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Exemplo visual</dt>
              <dd className="mt-2 space-y-1.5 rounded-xl border border-border bg-background/60 p-3" aria-hidden>
                <span className="block h-2 w-1/3 rounded bg-primary/60" />
                <span className="block h-8 rounded bg-muted" />
                <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${level.complexity}, minmax(0,1fr))` }}>
                  {Array.from({ length: level.complexity }).map((_, i) => (
                    <span key={i} className="block h-6 rounded bg-muted/70" />
                  ))}
                </div>
                <span className="block h-2 w-2/3 rounded bg-muted" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
