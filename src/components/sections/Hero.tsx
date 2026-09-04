import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Gauge, Palette, Smartphone, Cpu } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero.jpg";

/**
 * HERO — grade "bento" arquitetônica: cada célula tem propósito próprio
 * e um estado de hover. Para trocar a foto, substitua src/assets/hero.jpg.
 */

/** Etapas do projeto exibidas na célula interativa. */
const stages = [
  { name: "Ideia", detail: "Entendimento do negócio e dos objetivos." },
  { name: "Design", detail: "Interface sob medida, sem template pronto." },
  { name: "Desenvolvimento", detail: "Código limpo, rápido e escalável." },
  { name: "Lançamento", detail: "Publicação, testes e acompanhamento." },
];

const indicators = [
  { icon: Gauge, label: "Performance" },
  { icon: Palette, label: "Design" },
  { icon: Smartphone, label: "Responsividade" },
  { icon: Cpu, label: "Tecnologia" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Avança a etapa automaticamente; pausa quando o usuário interage.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % stages.length), 2800);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = stages[active]!;

  return (
    <section id="inicio" className="relative pt-24 pb-8 lg:pt-28">
      <div className="glow-bg pointer-events-none absolute inset-x-0 top-0 h-[36rem] -z-10" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        {/* Célula principal: proposta de valor + CTAs */}
        <SpotlightCard className="flex flex-col justify-between p-8 md:col-span-8 md:p-14">
          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="size-2 animate-pulse rounded-full bg-accent" aria-hidden />
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                {siteConfig.slogan}
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.92] text-balance">
              {siteConfig.hero.headline}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.hero.headlineAccent}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <WhatsAppButton size="lg" message={siteConfig.hero.primaryCtaMessage}>
              {siteConfig.hero.primaryCta}
            </WhatsAppButton>
            <Button asChild size="lg" variant="outlineGlow" className="group">
              <a href="#solucoes">
                {siteConfig.hero.secondaryCta}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
            </Button>
          </div>
        </SpotlightCard>

        {/* Célula visual */}
        <div className="group bento relative min-h-[18rem] overflow-hidden bg-foreground md:col-span-4 md:row-span-2">
          <img
            src={heroImage}
            alt="Detalhe fotográfico em tons quentes representando cuidado com o design"
            width={800}
            height={1200}
            loading="lazy"
            className="size-full object-cover opacity-70 transition-transform duration-[1200ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[oklch(0.16_0.03_45)]/85 to-transparent p-8">
            <span className="mb-4 block h-px w-12 bg-accent transition-all duration-500 group-hover:w-24" aria-hidden />
            <p className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-[oklch(0.98_0.01_85)]">
              Padrão {siteConfig.brand.split(" ")[0]}
              <br />
              de qualidade
            </p>
          </div>
        </div>

        {/* Célula de etapas — interativa */}
        <SpotlightCard
          className="p-8 md:col-span-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="space-y-6">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-muted-foreground">
              Como seu projeto nasce
            </p>
            <p className="min-h-[3.5rem] text-xl font-medium text-foreground">{current.detail}</p>
            <ul className="flex flex-wrap gap-2">
              {stages.map((stage, index) => (
                <li key={stage.name}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={index === active}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300",
                      index === active
                        ? "border-transparent bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-accent hover:text-accent",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")} {stage.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </SpotlightCard>

        {/* Indicadores de qualidade */}
        <SpotlightCard className="p-8 md:col-span-4">
          <ul className="grid grid-cols-2 gap-5">
            {indicators.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <item.icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span className="text-[0.7rem] font-bold uppercase leading-tight tracking-[0.15em] text-muted-foreground">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </SpotlightCard>

        {/* Métrica honesta (sem inventar números) */}
        <SpotlightCard className="flex flex-col justify-center gap-2 p-8 md:col-span-4">
          <span className="font-display text-4xl font-bold text-accent">100%</span>
          <span className="text-[0.7rem] font-bold uppercase leading-tight tracking-[0.2em] text-muted-foreground">
            Projetos sob medida,
            <br />
            do zero
          </span>
        </SpotlightCard>

        {/* Atalho para o portfólio */}
        <a
          href="#projetos"
          className="group bento bento-hover flex items-center justify-between gap-4 bg-surface px-8 py-7 md:col-span-4"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em]">Ver portfólio</span>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-foreground/30 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </a>

        {/* Frase de apoio */}
        <div className="bento flex items-center bg-foreground px-8 py-7 text-[oklch(0.98_0.01_85)] md:col-span-8">
          <p className="text-base leading-snug">{siteConfig.hero.subheadline}</p>
        </div>
      </div>
    </section>
  );
}
