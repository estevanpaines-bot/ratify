import { process } from "@/data/process";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";

/** Timeline do processo, revelada progressivamente durante o scroll. */
export function Process() {
  return (
    <section id="processo" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Processo"
          title="Como o seu projeto sai do papel."
          description="Um caminho claro, com validação em cada etapa. Você sempre sabe em que ponto o projeto está."
        />

        <ol className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 90}>
              <article className="panel h-full p-6 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-semibold text-gradient">{item.step}</span>
                  <span className="h-px flex-1 bg-border" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold uppercase tracking-wider">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
