import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { ComplexitySection } from "@/components/sections/ComplexitySection";
import { Solutions } from "@/components/sections/Solutions";
import { Portfolio } from "@/components/sections/Portfolio";
import { Plans } from "@/components/sections/Plans";
import { Diagnostic } from "@/components/sections/Diagnostic";
import { Differentials } from "@/components/sections/Differentials";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/data/siteConfig";
import { faq } from "@/data/faq";

const title = `${siteConfig.brand} — Criação de sites e sistemas sob medida`;
const description =
  "Criamos desde sites simples e profissionais até experiências digitais e sistemas complexos sob medida. Fale pelo WhatsApp e descubra a solução ideal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: siteConfig.brand,
          description: siteConfig.description,
          areaServed: "BR",
          serviceType: "Desenvolvimento de sites e sistemas",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <ComplexitySection />
        <Solutions />
        <Portfolio />
        <Plans />
        <Diagnostic />
        <Differentials />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp message="Olá! Gostaria de conversar sobre a criação do meu site." />
    </>
  );
}
