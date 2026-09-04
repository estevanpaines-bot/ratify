/** ETAPAS DO PROCESSO exibidas na timeline. */

export type ProcessStep = { step: string; title: string; description: string };

export const process: ProcessStep[] = [
  { step: "01", title: "Briefing", description: "Entendemos o negócio, o público e os objetivos do projeto." },
  { step: "02", title: "Planejamento", description: "Definimos estrutura, conteúdo e funcionalidades." },
  { step: "03", title: "Design", description: "Criamos a experiência visual e a identidade da interface." },
  { step: "04", title: "Desenvolvimento", description: "Transformamos o projeto em uma solução funcional." },
  { step: "05", title: "Testes", description: "Validamos responsividade, desempenho e funcionamento." },
  { step: "06", title: "Lançamento", description: "Publicamos o projeto e acompanhamos a entrada no ar." },
];

/** Diferenciais. */
export const differentials = [
  { num: "01", title: "Design personalizado", text: "Seu site não precisa parecer com o site de todo mundo.", icon: "PenTool" },
  { num: "02", title: "Responsividade", text: "Experiência pensada para celular, tablet e computador.", icon: "Smartphone" },
  { num: "03", title: "Performance", text: "Projetos rápidos, leves e otimizados.", icon: "Gauge" },
  { num: "04", title: "Escalabilidade", text: "Comece simples e evolua quando seu negócio crescer.", icon: "TrendingUp" },
  { num: "05", title: "Tecnologia moderna", text: "Arquitetura preparada para projetos atuais e futuros.", icon: "Cpu" },
  { num: "06", title: "Atendimento próximo", text: "Comunicação direta durante o desenvolvimento.", icon: "MessagesSquare" },
];

/** Tecnologias que PODEM fazer parte dos projetos (não são obrigatórias em todos). */
export const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "APIs",
  "Banco de dados",
  "Integrações",
];

/** Marcadores de qualidade — substitua por dados reais quando existirem. */
export const qualityMarkers = [
  { title: "Projetos personalizados", text: "Cada interface é construída a partir do seu negócio." },
  { title: "Design responsivo", text: "Testado do celular pequeno ao monitor grande." },
  { title: "Experiência multiplataforma", text: "Mesma qualidade em qualquer dispositivo." },
  { title: "Arquitetura escalável", text: "Preparada para receber novas funcionalidades." },
];
