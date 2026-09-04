import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { products, type Product } from "@/data/products";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/** Cards de soluções gerados automaticamente a partir de src/data/products.ts */
export function Solutions() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="solucoes" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Soluções"
          title="O que podemos criar para você?"
          description="Não vendemos apenas páginas: construímos soluções digitais dimensionadas para o objetivo do seu negócio."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal as="li" key={product.id} delay={i * 60}>
              <article
                className={cn(
                  "panel group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-primary/40",
                  product.highlighted && "border-primary/40",
                )}
              >
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-primary transition-colors group-hover:border-primary/40">
                  <Icon name={product.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{product.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.shortDescription}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-5 w-fit px-0 text-primary hover:bg-transparent hover:text-primary-glow"
                  onClick={() => setSelected(product)}
                >
                  Quero saber mais
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          {selected ? (
            <>
              <DialogHeader>
                <span className="mb-2 flex size-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary">
                  <Icon name={selected.icon} className="size-5" />
                </span>
                <DialogTitle className="text-xl">{selected.title}</DialogTitle>
                <DialogDescription className="text-left leading-relaxed">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <ul className="grid gap-2">
                {selected.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <WhatsAppButton className="mt-2 w-full" message={selected.whatsappMessage}>
                Falar pelo WhatsApp
              </WhatsAppButton>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
