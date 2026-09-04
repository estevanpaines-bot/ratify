/**
 * PLANOS
 * Para adicionar um plano, copie um objeto e ajuste os campos.
 * `price` é apenas texto: use "Sob consulta" ou "A partir de R$ X".
 * A seção de planos renderiza automaticamente novos itens.
 */

export type Plan = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceLabel: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
  whatsappMessage: string;
};

export const plans: Plan[] = [
  {
    id: "start",
    name: "START",
    description: "Para projetos simples que precisam de uma presença profissional.",
    price: "Sob consulta",
    priceLabel: "Escopo reduzido",
    features: [
      "Site responsivo",
      "Estrutura profissional",
      "Páginas essenciais",
      "Botão de WhatsApp",
      "Formulário de contato",
      "SEO básico",
      "Otimização para celular",
    ],
    cta: "Quero começar",
    whatsappMessage: "Olá! Tenho interesse no plano START para criação de um site.",
  },
  {
    id: "pro",
    name: "PRO",
    description: "Para empresas que precisam de uma presença digital mais completa.",
    price: "Sob consulta",
    priceLabel: "Escopo completo",
    features: [
      "Design personalizado",
      "Múltiplas páginas",
      "Animações",
      "SEO avançado",
      "Integração com WhatsApp",
      "Formulários",
      "Analytics",
      "Otimização de performance",
      "Estrutura personalizada",
    ],
    highlighted: true,
    badge: "Mais escolhido",
    cta: "Quero meu projeto",
    whatsappMessage: "Olá! Tenho interesse no plano PRO para criação de um site.",
  },
  {
    id: "business",
    name: "BUSINESS",
    description: "Para projetos maiores, com integrações e funcionalidades especiais.",
    price: "Sob consulta",
    priceLabel: "Escopo avançado",
    features: [
      "Arquitetura personalizada",
      "Páginas avançadas",
      "Integrações",
      "Funcionalidades especiais",
      "Áreas privadas",
      "Banco de dados quando necessário",
      "Automações",
      "Recursos avançados",
    ],
    cta: "Solicitar orçamento",
    whatsappMessage: "Olá! Tenho interesse no plano BUSINESS e gostaria de um orçamento.",
  },
  {
    id: "custom",
    name: "CUSTOM",
    description: "Seu projeto não cabe em um pacote? Criamos soluções sob medida para necessidades específicas.",
    price: "Orçamento por escopo",
    priceLabel: "Projetos complexos",
    features: [
      "Sistemas e plataformas",
      "Dashboards",
      "E-commerce avançado",
      "Integrações e APIs",
      "Áreas administrativas",
      "Automações",
      "Ferramentas internas",
    ],
    cta: "Conversar sobre meu projeto",
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para um projeto personalizado.",
  },
];

/**
 * TABELA COMPARATIVA
 * true = incluído, false = não incluído, string = observação curta.
 */
export type ComparisonRow = {
  feature: string;
  values: Record<string, boolean | string>;
};

export const comparison: ComparisonRow[] = [
  { feature: "Design responsivo", values: { start: true, pro: true, business: true, custom: true } },
  { feature: "Design personalizado", values: { start: false, pro: true, business: true, custom: true } },
  { feature: "WhatsApp", values: { start: true, pro: true, business: true, custom: true } },
  { feature: "Formulários", values: { start: true, pro: true, business: true, custom: true } },
  { feature: "SEO", values: { start: "Básico", pro: "Avançado", business: "Avançado", custom: "Sob medida" } },
  { feature: "Animações", values: { start: false, pro: true, business: true, custom: true } },
  { feature: "Analytics", values: { start: false, pro: true, business: true, custom: true } },
  { feature: "Integrações", values: { start: false, pro: false, business: true, custom: true } },
  { feature: "Área privada", values: { start: false, pro: false, business: true, custom: true } },
  { feature: "Banco de dados", values: { start: false, pro: false, business: "Quando necessário", custom: true } },
  { feature: "Sistema personalizado", values: { start: false, pro: false, business: false, custom: true } },
  { feature: "Suporte", values: { start: "Pós-entrega", pro: "Pós-entrega", business: "Acompanhado", custom: "Combinado" } },
];
