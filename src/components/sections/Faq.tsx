import { faq } from "@/data/faq";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <SectionTitle label="FAQ" title="Perguntas frequentes." description="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp." />
          <div className="mt-6">
            <WhatsAppButton size="default" variant="outlineGlow" message="Olá! Tenho uma dúvida sobre a criação do meu site.">
              Tirar uma dúvida
            </WhatsAppButton>
          </div>
        </div>

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
