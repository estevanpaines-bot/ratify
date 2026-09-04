import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import {
  diagnosticQuestions,
  resolveDiagnostic,
  type DiagnosticResult,
} from "@/data/diagnostic";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Diagnóstico comercial: soma pontos das respostas e recomenda um plano.
 * A lógica de pontuação está em src/data/diagnostic.ts.
 */
export function Diagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const question = diagnosticQuestions[step]!;
  const current = answers[question.id] ?? [];
  const progress = ((step + (result ? 1 : 0)) / diagnosticQuestions.length) * 100;

  function toggle(label: string) {
    setAnswers((prev) => {
      const selected = prev[question.id] ?? [];
      if (question.multiple) {
        return {
          ...prev,
          [question.id]: selected.includes(label)
            ? selected.filter((l) => l !== label)
            : [...selected, label],
        };
      }
      return { ...prev, [question.id]: [label] };
    });
  }

  function finish(final: Record<string, string[]>) {
    const score = diagnosticQuestions.reduce((total, q) => {
      const chosen = final[q.id] ?? [];
      return (
        total +
        q.options.filter((o) => chosen.includes(o.label)).reduce((s, o) => s + o.score, 0)
      );
    }, 0);
    setResult(resolveDiagnostic(score));
  }

  function next() {
    if (step < diagnosticQuestions.length - 1) setStep(step + 1);
    else finish(answers);
  }

  function restart() {
    setAnswers({});
    setResult(null);
    setStep(0);
  }

  return (
    <section id="diagnostico" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="center"
          label="Diagnóstico"
          title="Descubra qual solução combina com seu projeto."
          description="Quatro perguntas rápidas para indicar o caminho mais adequado ao seu momento."
        />

        <div className="panel mt-10 p-6 sm:p-8">
          {/* Barra de progresso */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <span
                className="block h-full rounded-full bg-[image:var(--gradient-primary)] transition-all duration-500"
                style={{ width: `${result ? 100 : progress}%` }}
              />
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {result ? "Concluído" : `${step + 1}/${diagnosticQuestions.length}`}
            </span>
          </div>

          {!result ? (
            <div key={question.id} className="mt-7 animate-in fade-in slide-in-from-bottom-2 duration-400">
              <h3 className="text-xl font-semibold">{question.question}</h3>
              {question.multiple ? (
                <p className="mt-1 text-xs text-muted-foreground">Você pode escolher mais de uma opção.</p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {question.options.map((option) => {
                  const active = current.includes(option.label);
                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => toggle(option.label)}
                      aria-pressed={active}
                      className={cn(
                        "rounded-xl border px-4 py-2.5 text-sm transition-all duration-200",
                        active
                          ? "border-primary/60 bg-surface-2 text-foreground"
                          : "border-border bg-surface/40 text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center gap-3">
                {step > 0 ? (
                  <Button variant="ghost" onClick={() => setStep(step - 1)}>
                    Voltar
                  </Button>
                ) : null}
                <Button variant="hero" disabled={current.length === 0} onClick={next}>
                  {step === diagnosticQuestions.length - 1 ? "Ver recomendação" : "Continuar"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-7 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="text-xs uppercase tracking-widest text-primary">Recomendação</span>
              <h3 className="mt-2 text-2xl font-semibold">
                Seu projeto parece se encaixar melhor em uma solução{" "}
                <span className="text-gradient">{result.planName}</span>.
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{result.reason}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {result.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message={`Olá! Fiz o diagnóstico no site e acredito que meu projeto se encaixa na solução ${result.planName}. Gostaria de conversar sobre um orçamento.`}
                >
                  Falar pelo WhatsApp
                </WhatsAppButton>
                <Button variant="outlineGlow" size="lg" onClick={restart}>
                  <RotateCcw className="size-4" /> Refazer diagnóstico
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
