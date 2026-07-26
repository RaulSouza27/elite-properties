import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Listings } from "@/components/landing/Listings";
import { Service } from "@/components/landing/Service";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const title = "Ávila Residências — Aluguel de imóveis de alto padrão em SP";
const description =
  "Curadoria fechada de casas, apartamentos e coberturas para alugar em São Paulo e litoral. Contrato transparente, suporte jurídico e visita em 24h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Listings />
        <Service />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
