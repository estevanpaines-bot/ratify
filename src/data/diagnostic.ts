/**
 * DIAGNÓSTICO COMERCIAL (quiz)
 * Toda a lógica de recomendação está aqui — edite pesos e textos sem tocar na interface.
 */

export type DiagnosticQuestion = {
  id: string;
  question: string;
  /** Permite marcar várias opções (usado em funcionalidades). */
  multiple?: boolean;
  options: { label: string; /** pontuação de complexidade */ score: number }[];
};

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: "negocio",
    question: "Qual é o seu tipo de negócio?",
    options: [
      { label: "Empresa", score: 2 },
      { label: "Profissional", score: 1 },
      { label: "Loja", score: 3 },
      { label: "Restaurante", score: 1 },
      { label: "Serviço", score: 2 },
      { label: "Projeto pessoal", score: 0 },
      { label: "Outro", score: 1 },
    ],
  },
  {
    id: "necessidade",
    question: "O que você precisa?",
    options: [
      { label: "Site", score: 1 },
      { label: "Landing Page", score: 1 },
      { label: "Loja virtual", score: 4 },
      { label: "Sistema", score: 6 },
      { label: "Portal", score: 4 },
      { label: "Ainda não sei", score: 2 },
    ],
  },
  {
    id: "complexidade",
    question: "Qual o nível de complexidade?",
    options: [
      { label: "Simples", score: 0 },
      { label: "Profissional", score: 2 },
      { label: "Avançado", score: 4 },
      { label: "Personalizado", score: 6 },
      { label: "Não sei", score: 2 },
    ],
  },
  {
    id: "funcionalidades",
    question: "Você precisa de alguma destas funcionalidades?",
    multiple: true,
    options: [
      { label: "WhatsApp", score: 0 },
      { label: "Formulários", score: 0 },
      { label: "Agendamento", score: 2 },
      { label: "Login", score: 3 },
      { label: "Área do cliente", score: 3 },
      { label: "Pagamento", score: 3 },
      { label: "Dashboard", score: 4 },
      { label: "Integrações", score: 3 },
      { label: "Nenhuma", score: 0 },
    ],
  },
];

export type DiagnosticResult = {
  planId: string;
  planName: string;
  reason: string;
  highlights: string[];
};

/** Faixas de pontuação → plano recomendado. Ajuste os limites se quiser. */
export function resolveDiagnostic(score: number): DiagnosticResult {
  if (score <= 3) {
    return {
      planId: "start",
      planName: "START",
      reason: "Seu projeto tem escopo enxuto e ganha mais sendo publicado rápido, com o essencial bem feito.",
      highlights: ["Site responsivo", "Páginas essenciais", "WhatsApp e formulário", "SEO básico"],
    };
  }
  if (score <= 8) {
    return {
      planId: "pro",
      planName: "PRO",
      reason: "Você precisa de uma presença digital completa, com identidade própria e estrutura para crescer.",
      highlights: ["Design personalizado", "Múltiplas páginas", "SEO avançado", "Analytics e performance"],
    };
  }
  if (score <= 13) {
    return {
      planId: "business",
      planName: "BUSINESS",
      reason: "Seu projeto envolve integrações e funcionalidades além de um site institucional.",
      highlights: ["Arquitetura personalizada", "Integrações", "Áreas privadas", "Automações"],
    };
  }
  return {
    planId: "custom",
    planName: "CUSTOM",
    reason: "Seu projeto tem características de sistema e pede uma solução desenhada especificamente para ele.",
    highlights: ["Autenticação e permissões", "Banco de dados", "Dashboards", "Integrações e APIs"],
  };
}
