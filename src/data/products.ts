/**
 * SOLUÇÕES / PRODUTOS
 * Para adicionar uma nova solução, copie um objeto abaixo e altere os campos.
 * A interface renderiza automaticamente novos itens.
 * `icon` deve ser o nome de um ícone da biblioteca lucide-react.
 */

export type Product = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  highlighted?: boolean;
  whatsappMessage: string;
};

export const products: Product[] = [
  {
    id: "institucional",
    title: "Site Institucional",
    category: "Institucional",
    shortDescription: "Para empresas e profissionais que precisam de presença digital.",
    description:
      "Um site que apresenta sua empresa com clareza: quem você é, o que faz e por que contratar. Estrutura pensada para credibilidade e para ser encontrado.",
    features: ["Páginas essenciais", "Design responsivo", "SEO básico", "Contato por WhatsApp"],
    icon: "Building2",
    whatsappMessage: "Olá! Gostaria de saber mais sobre um Site Institucional.",
  },
  {
    id: "landing",
    title: "Landing Pages",
    category: "Landing Page",
    shortDescription: "Páginas focadas em campanhas, vendas e conversão.",
    description:
      "Página única e objetiva, construída em torno de uma ação. Ideal para campanhas, lançamentos e captação de contatos.",
    features: ["Copy orientada a conversão", "Formulários", "Integração com analytics", "Alta performance"],
    icon: "Rocket",
    highlighted: true,
    whatsappMessage: "Olá! Gostaria de saber mais sobre uma Landing Page.",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    category: "E-commerce",
    shortDescription: "Lojas virtuais e experiências de compra.",
    description:
      "Catálogo, carrinho e fluxo de compra pensados para reduzir atrito. Estrutura preparada para crescer junto com o seu estoque.",
    features: ["Catálogo de produtos", "Carrinho e checkout", "Gestão de pedidos", "Integrações de pagamento"],
    icon: "ShoppingBag",
    whatsappMessage: "Olá! Gostaria de saber mais sobre um E-commerce.",
  },
  {
    id: "local",
    title: "Sites para negócios locais",
    category: "Institucional",
    shortDescription: "Restaurantes, clínicas, lojas e prestadores de serviço.",
    description:
      "Foco em ser encontrado e contatado: localização, serviços, horários e um caminho curto até o WhatsApp ou o agendamento.",
    features: ["Mapa e horários", "Cardápio ou serviços", "Agendamento", "Contato imediato"],
    icon: "Store",
    whatsappMessage: "Olá! Gostaria de saber mais sobre um site para meu negócio local.",
  },
  {
    id: "portais",
    title: "Portais",
    category: "Portal",
    shortDescription: "Projetos com múltiplas áreas e funcionalidades.",
    description:
      "Projetos com muitas seções, conteúdo dinâmico e navegação complexa, organizados de forma que o usuário nunca se perca.",
    features: ["Múltiplas áreas", "Busca e filtros", "Conteúdo dinâmico", "Arquitetura escalável"],
    icon: "LayoutGrid",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o desenvolvimento de um portal.",
  },
  {
    id: "sistemas",
    title: "Sistemas personalizados",
    category: "Sistema",
    shortDescription: "Dashboards, áreas privadas, autenticação e funcionalidades específicas.",
    description:
      "Quando o seu processo não cabe em uma ferramenta pronta. Construímos a solução em volta da sua operação, não o contrário.",
    features: ["Autenticação e permissões", "Dashboards", "Banco de dados", "Automações"],
    icon: "Terminal",
    whatsappMessage: "Olá! Gostaria de conversar sobre um sistema personalizado.",
  },
  {
    id: "sob-medida",
    title: "Projetos sob medida",
    category: "Personalizado",
    shortDescription: "Para necessidades que não se encaixam em um modelo tradicional.",
    description:
      "Ideias fora do padrão, ferramentas internas, integrações específicas. Partimos do problema e desenhamos a solução.",
    features: ["Escopo desenhado junto", "Integrações e APIs", "Ferramentas internas", "Evolução contínua"],
    icon: "Sparkles",
    whatsappMessage: "Olá! Tenho um projeto sob medida e gostaria de conversar.",
  },
];

/** Níveis de complexidade exibidos na seção "Do simples ao extraordinário". */
export type ComplexityLevel = {
  level: string;
  title: string;
  description: string;
  features: string[];
  complexity: number; // 1 a 5
  audience: string;
  range: string;
};

export const complexityLevels: ComplexityLevel[] = [
  {
    level: "Nível 01",
    title: "Site Essencial",
    description: "Uma presença digital enxuta, rápida e profissional para começar do jeito certo.",
    features: ["Página única ou poucas páginas", "Responsivo", "Botão de WhatsApp", "SEO básico"],
    complexity: 1,
    audience: "Profissionais autônomos e negócios em início",
    range: "Projeto de escopo reduzido",
  },
  {
    level: "Nível 02",
    title: "Site Profissional",
    description: "Estrutura completa, identidade própria e conteúdo organizado para gerar confiança.",
    features: ["Múltiplas páginas", "Design personalizado", "Formulários", "SEO estruturado"],
    complexity: 2,
    audience: "Empresas e prestadores de serviço estabelecidos",
    range: "Projeto de escopo médio",
  },
  {
    level: "Nível 03",
    title: "Landing Page Avançada",
    description: "Página construída ao redor de uma meta comercial, com animações e medição de resultado.",
    features: ["Copy de conversão", "Animações refinadas", "Analytics", "Testes de estrutura"],
    complexity: 3,
    audience: "Campanhas, lançamentos e captação de leads",
    range: "Projeto orientado a performance",
  },
  {
    level: "Nível 04",
    title: "E-commerce",
    description: "Loja virtual com catálogo, carrinho e integrações necessárias para vender online.",
    features: ["Catálogo e categorias", "Carrinho e checkout", "Integrações de pagamento", "Painel de pedidos"],
    complexity: 4,
    audience: "Lojas e marcas que vendem produtos",
    range: "Projeto de escopo avançado",
  },
  {
    level: "Nível 05",
    title: "Sistema Personalizado",
    description: "Plataformas com login, áreas privadas, banco de dados e regras específicas do seu negócio.",
    features: ["Autenticação", "Área do cliente", "Banco de dados", "Dashboards e automações"],
    complexity: 5,
    audience: "Operações que precisam de software próprio",
    range: "Projeto sob medida, orçado por escopo",
  },
];
