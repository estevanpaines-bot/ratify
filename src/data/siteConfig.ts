/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * ----------------------------
 * Este é o único arquivo que você precisa editar para alterar:
 * marca, contatos, redes sociais, textos do hero e do rodapé.
 *
 * ATENÇÃO: nunca coloque senhas, tokens ou chaves privadas aqui.
 */

export const siteConfig = {
  /** Nome exibido na navbar, rodapé e título das páginas. */
  brand: "Nexora Studio",
  slogan: "Do simples ao extraordinário.",
  description:
    "Desenvolvimento de sites e soluções digitais sob medida — de páginas profissionais a sistemas completos.",

  /**
   * Número utilizado para gerar TODOS os links de WhatsApp do site.
   * Formato internacional, apenas dígitos: 55 + DDD + número.
   * PLACEHOLDER — substitua pelo seu número real antes de publicar.
   */
  whatsappNumber: "5500000000000",
  /** Mensagem usada quando um botão não define mensagem própria. */
  whatsappDefaultMessage: "Olá! Gostaria de criar um site.",

  /** Contatos e redes. Deixe vazio ("") para ocultar o link. */
  email: "contato@exemplo.com.br",
  instagram: "https://instagram.com/",
  github: "https://github.com/",
  /** Endereço/atendimento (opcional). */
  location: "Atendimento remoto — Brasil",

  /** Itens da navegação (também usados no rodapé). */
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Projetos", href: "#projetos" },
    { label: "Planos", href: "#planos" },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    headline: "Seu negócio merece mais do que um site.",
    headlineAccent: "Uma presença digital criada para impressionar, conectar e vender.",
    subheadline:
      "Desenvolvemos sites e soluções digitais sob medida — de páginas simples e profissionais a experiências digitais complexas.",
    primaryCta: "Quero criar meu site",
    secondaryCta: "Explorar soluções",
    primaryCtaMessage: "Olá! Gostaria de criar meu site.",
  },

  footer: {
    tagline: "Desenvolvimento de sites e soluções digitais sob medida.",
    copyright: "© 2026 — Todos os direitos reservados.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
