import { Check, Minus } from "lucide-react";
import { plans, comparison } from "@/data/plans";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

/** Marcação elegante para a tabela comparativa. */
function Mark({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-4 text-primary" aria-label="Incluído" />;
  if (value === false) return <Minus className="mx-auto size-4 text-muted-foreground/50" aria-label="Não incluído" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export function Plans() {
  return (
    <section id="planos" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Planos"
          title="Escolha o nível do seu projeto."
          description="Os valores dependem do escopo. Os planos servem como referência do que cada nível de projeto costuma incluir."
        />

        <ul className="mt-12 grid gap-5 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal as="li" key={plan.id} delay={i * 70}>
              <article
                className={cn(
                  "panel relative flex h-full flex-col p-6 hover:-translate-y-1",
                  plan.highlighted && "border-primary/50 shadow-[var(--shadow-elevated)]",
                )}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-[0.7rem] font-semibold text-primary-foreground">
                    {plan.badge}
                  </span>
                ) : null}
                <h3 className="font-mono text-sm tracking-[0.2em] text-primary">{plan.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                <div className="mt-6 border-y border-border py-4">
                  <span className="block text-xl font-semibold">{plan.price}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {plan.priceLabel}
                  </span>
                </div>
                <ul className="mt-5 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  className="mt-6 w-full"
                  size="default"
                  variant={plan.highlighted ? "hero" : "outlineGlow"}
                  message={plan.whatsappMessage}
                >
                  {plan.cta}
                </WhatsAppButton>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Tabela comparativa — rolagem horizontal no mobile */}
        <Reveal className="panel mt-12 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="sr-only">Comparação de recursos entre os planos</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="p-4 text-left text-xs uppercase tracking-widest text-muted-foreground">
                    Recurso
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className={cn(
                        "p-4 text-center font-mono text-xs tracking-[0.15em]",
                        plan.highlighted ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/60 last:border-0">
                    <th scope="row" className="p-4 text-left font-normal text-foreground/90">
                      {row.feature}
                    </th>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-4 text-center">
                        <Mark value={row.values[plan.id] ?? false} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="mt-3 text-center text-xs text-muted-foreground lg:hidden">
          Arraste a tabela para o lado para ver todos os planos.
        </p>
      </div>
    </section>
  );
}
