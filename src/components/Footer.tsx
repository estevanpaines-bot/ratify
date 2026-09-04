import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  const socials = [
    { label: "WhatsApp", href: whatsappLink(), icon: MessageCircle },
    { label: "Instagram", href: siteConfig.instagram, icon: Instagram },
    { label: "GitHub", href: siteConfig.github, icon: Github },
    { label: "E-mail", href: `mailto:${siteConfig.email}`, icon: Mail },
  ].filter((s) => s.href && !s.href.endsWith("mailto:"));

  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <span className="flex items-center gap-2 font-display text-base font-semibold">
            <span className="grid size-7 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-[0.7rem] font-bold text-primary-foreground">
              {siteConfig.brand.charAt(0)}
            </span>
            {siteConfig.brand}
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.footer.tagline}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">{siteConfig.location}</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Navegação</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Contato</h2>
          <ul className="mt-4 space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  <s.icon className="size-4" aria-hidden />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          {siteConfig.footer.copyright} — {siteConfig.brand}.
        </p>
      </div>
    </footer>
  );
}
