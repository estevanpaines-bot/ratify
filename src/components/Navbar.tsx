import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Navbar fixa: muda discretamente ao rolar e vira menu hambúrguer no mobile. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Impede o scroll do fundo com o menu mobile aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Sobre o hero (topo) a navbar é transparente com texto claro.
  

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <a
          href="#inicio"
          className="font-display text-xl font-bold tracking-tight"
        >
          {siteConfig.brand.split(" ")[0]?.toUpperCase()}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="underline-sweep text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton
            size="default"
            className="text-[0.7rem] font-bold uppercase tracking-[0.2em]"
            message={siteConfig.hero.primaryCtaMessage}
          >
            WhatsApp
          </WhatsAppButton>
        </div>


        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top border-b border-border bg-background/97 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-surface"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <WhatsAppButton className="w-full" message={siteConfig.hero.primaryCtaMessage}>
              Falar pelo WhatsApp
            </WhatsAppButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
