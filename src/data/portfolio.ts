/**
 * PORTFÓLIO
 * Os itens abaixo são PROJETOS DEMONSTRATIVOS (não são clientes reais).
 * Substitua por projetos reais mantendo a mesma estrutura de campos.
 * `image` pode ser uma URL ou um caminho em /public/images.
 * Deixe `image` vazio ("") para exibir o espaço reservado elegante.
 */

export type Project = {
  id: string;
  title: string;
  category: "Institucional" | "Landing Page" | "E-commerce" | "Sistema" | "Personalizado";
  description: string;
  goal: string;
  solution: string;
  image: string;
  technologies: string[];
  features: string[];
  url?: string;
  /** Marque como true enquanto for um exemplo demonstrativo. */
  demo?: boolean;
};

export const portfolioCategories = [
  "Todos",
  "Institucional",
  "Landing Page",
  "E-commerce",
  "Sistema",
  "Personalizado",
] as const;

export const portfolio: Project[] = [
  {
    id: "demo-institucional",
    title: "Site institucional para escritório",
    category: "Institucional",
    description: "Presença digital sóbria, com foco em credibilidade e captação de contatos.",
    goal: "Comunicar autoridade e facilitar o primeiro contato.",
    solution: "Estrutura de páginas enxuta, hierarquia tipográfica forte e CTA de WhatsApp presente em cada seção.",
    image: "/institucionalescritorio.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Páginas institucionais", "Formulário de contato", "SEO estruturado", "Responsivo"],
    demo: false,
  },
  {
    id: "demo-landing",
    title: "Landing page de lançamento",
    category: "Landing Page",
    description: "Página única construída em torno de uma única ação de conversão.",
    goal: "Maximizar cadastros durante uma campanha de tempo limitado.",
    solution: "Narrativa em blocos curtos, prova visual e formulário sempre a um clique de distância.",
    image: "/pagelançamento.png",
    technologies: ["React", "Tailwind CSS", "Analytics"],
    features: ["Copy de conversão", "Animações de entrada", "Medição de eventos", "Carregamento rápido"],
    demo: false,
  },
  {
    id: "demo-ecommerce",
    title: "Loja virtual de produtos autorais",
    category: "E-commerce",
    description: "Catálogo, carrinho e checkout com foco em reduzir atrito na compra.",
    goal: "Vender online sem depender de marketplaces.",
    solution: "Navegação por categorias, ficha de produto objetiva e fluxo de compra em poucas etapas.",
    image: "/ecomerce.png",
    technologies: ["React", "TypeScript", "Banco de dados", "Integrações"],
    features: ["Catálogo", "Carrinho", "Checkout", "Painel de pedidos"],
    demo: false,
  },
  {
    id: "demo-sistema",
    title: "Dashboard de gestão interna",
    category: "Sistema",
    description: "Área privada com autenticação e indicadores operacionais.",
    goal: "Centralizar dados que estavam espalhados em planilhas.",
    solution: "Login, permissões por perfil e painéis com os números que a operação consulta todo dia.",
    image: "/deshboard.png",
    technologies: ["React", "TypeScript", "APIs", "Banco de dados"],
    features: ["Autenticação", "Permissões", "Relatórios", "Automações"],
    demo: false,
  },
  {
    id: "demo-personalizado",
    title: "Ferramenta interna sob medida",
    category: "Personalizado",
    description: "Solução desenhada a partir de um processo específico do cliente.",
    goal: "Substituir um fluxo manual e repetitivo.",
    solution: "Mapeamento do processo, interface mínima e automação das etapas que não exigem decisão humana.",
    image: "",
    technologies: ["React", "TypeScript", "APIs"],
    features: ["Fluxo customizado", "Integrações", "Automação", "Histórico"],
    demo: true,
  },
  {
    id: "demo-local",
    title: "Site para negócio local",
    category: "Institucional",
    description: "Informações essenciais e contato imediato para quem busca perto de você.",
    goal: "Ser encontrado e receber contatos direto no WhatsApp.",
    solution: "Serviços, horários e localização acima da dobra, com botão de contato fixo no mobile.",
    image: "/negociolocal.png",
    technologies: ["React", "Tailwind CSS", "SEO local"],
    features: ["Horários e mapa", "Serviços", "WhatsApp fixo", "Mobile first"],
    demo: false,
  },
];
