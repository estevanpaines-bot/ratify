import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { portfolio, portfolioCategories, type Project } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/** Espaço reservado para quando o projeto ainda não tem imagem real. */
function ProjectVisual({ project, tall = false }: { project: Project; tall?: boolean }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Prévia do projeto ${project.title}`}
        loading="lazy"
        decoding="async"
        className={cn("w-full rounded-xl object-cover", tall ? "aspect-video" : "aspect-[16/10]")}
      />
    );
  }
  return (
    <div
      className={cn(
        "grid place-items-center rounded-xl border border-dashed border-border bg-background/50",
        tall ? "aspect-video" : "aspect-[16/10]",
      )}
      aria-hidden
    >
      <div className="w-3/4 space-y-2 opacity-70">
        <span className="block h-2 w-1/3 rounded bg-primary/60" />
        <span className="block h-10 rounded bg-muted" />
        <div className="grid grid-cols-3 gap-2">
          <span className="block h-5 rounded bg-muted/70" />
          <span className="block h-5 rounded bg-muted/70" />
          <span className="block h-5 rounded bg-muted/70" />
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<string>("Todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const list = useMemo(
    () => (filter === "Todos" ? portfolio : portfolio.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projetos" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Portfólio"
          title="Projetos que transformam ideias em experiências digitais."
          description="Os itens abaixo são projetos demonstrativos, criados para ilustrar tipos de solução. Serão substituídos por projetos reais."
        />

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all duration-200",
                filter === cat
                  ? "border-primary/60 bg-surface-2 text-foreground"
                  : "border-border bg-surface/30 text-muted-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((project, i) => (
            <Reveal as="li" key={project.id} delay={i * 60}>
              <article className="panel group flex h-full flex-col p-4 hover:-translate-y-1 hover:border-primary/40">
                <ProjectVisual project={project} />
                <div className="flex flex-1 flex-col p-2 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                      {project.category}
                    </span>
                    {project.demo ? (
                      <span className="text-[0.7rem] text-primary">Projeto demonstrativo</span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <li key={t} className="rounded-md bg-surface-2 px-2 py-1 text-[0.7rem] text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 w-fit px-0 text-primary hover:bg-transparent hover:text-primary-glow"
                    onClick={() => setSelected(project)}
                  >
                    Ver projeto
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl">
          {selected ? (
            <>
              <ProjectVisual project={selected} tall />
              <DialogHeader>
                <span className="text-xs uppercase tracking-widest text-primary">{selected.category}</span>
                <DialogTitle className="text-xl">{selected.title}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Objetivo</h4>
                  <p className="mt-1 text-sm leading-relaxed">{selected.goal}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Solução</h4>
                  <p className="mt-1 text-sm leading-relaxed">{selected.solution}</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Funcionalidades</h4>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {selected.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/90">
                      — {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Tecnologias</h4>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {selected.technologies.map((t) => (
                    <li key={t} className="rounded-md bg-surface-2 px-2 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <WhatsAppButton
                  className="flex-1"
                  size="default"
                  message={`Olá! Gostaria de conversar sobre o projeto ${selected.title}.`}
                >
                  Quero algo assim
                </WhatsAppButton>
                {selected.url ? (
                  <Button asChild variant="outlineGlow">
                    <a href={selected.url} target="_blank" rel="noopener noreferrer">
                      Abrir projeto <ExternalLink className="size-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
