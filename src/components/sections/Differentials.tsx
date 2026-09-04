import { differentials, technologies, qualityMarkers } from "@/data/process";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function Differentials() {
  return (
    <section id="diferenciais" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Diferenciais"
          title="Por que criar seu projeto conosco?"
          description="Não vendemos apenas páginas. Construímos soluções digitais pensadas para durar e evoluir."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <Reveal as="li" key={item.num} delay={i * 60}>
              <article className="panel h-full p-6 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <Icon name={item.icon} className="size-5 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Marcadores de qualidade (sem dados inventados) */}
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {qualityMarkers.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-surface/30 p-5">
                <h3 className="text-sm font-semibold text-gradient">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Tecnologias */}
        <Reveal className="mt-14 rounded-2xl border border-border bg-surface/30 p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Construído com tecnologias modernas.</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Entre as tecnologias que podem fazer parte dos projetos:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
