import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

import { Services } from "@/components/sections/Services";
import BenefitsCost from "@/components/sections/BenefitsCost";
import { AboutUs } from "@/components/sections/AboutUs";
import { FAQSection } from "@/components/sections/FAQSection";


export default function Home() {
  return (
    <Container>
      <Hero id="home" />

      <section id="services">
        <Services />
      </section>

      <section id="benefits-costs">
        <BenefitsCost />
      </section>

      <section id="about-us">
        <AboutUs imgPos="left" />
      </section>

      <section id="faq-section">
        <FAQSection />
      </section>
    </Container>
  );
}
