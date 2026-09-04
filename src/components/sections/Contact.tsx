import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { openWhatsApp } from "@/lib/whatsapp";
import { products } from "@/data/products";

/**
 * CTA final + formulário.
 * Não existe backend: o formulário monta uma mensagem e encaminha ao WhatsApp.
 * Para integrar com um serviço de e-mail futuramente, substitua o corpo de handleSubmit.
 */
export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá! Vim pelo site e gostaria de conversar sobre um projeto.",
      `Nome: ${form.get("nome")}`,
      `E-mail: ${form.get("email")}`,
      `WhatsApp: ${form.get("whatsapp")}`,
      `Tipo de projeto: ${form.get("tipo")}`,
      `Mensagem: ${form.get("mensagem")}`,
    ].join("\n");
    openWhatsApp(message);
    setSending(false);
  }

  return (
    <section id="contato" className="relative border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 glow-bg opacity-70" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionTitle
            label="Contato"
            title="Tem uma ideia? Vamos transformar em um projeto."
            description="Conte o que você precisa e descubra qual solução faz mais sentido para o seu negócio."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message="Olá! Gostaria de conversar sobre um projeto.">
              Falar pelo WhatsApp
            </WhatsAppButton>
            <Button asChild variant="outlineGlow" size="lg">
              <a href="#projetos">
                Ver projetos <ArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="panel space-y-4 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" name="nome" required autoComplete="name" placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" placeholder="voce@email.com" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input id="whatsapp" name="whatsapp" required autoComplete="tel" placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo de projeto</Label>
              <select
                id="tipo"
                name="tipo"
                required
                defaultValue=""
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" disabled>
                  Selecione
                </option>
                {products.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
                <option value="Ainda não sei">Ainda não sei</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="mensagem" name="mensagem" rows={4} required placeholder="Conte um pouco sobre o seu projeto." />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={sending}>
            {sending ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
          </Button>
          <p className="text-xs text-muted-foreground">
            O envio abre o WhatsApp com a sua mensagem já preenchida.
          </p>
        </form>
      </div>
    </section>
  );
}
