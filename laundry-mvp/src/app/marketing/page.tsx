import Hero from "@/components/sections/Hero";
import Steps from "@/components/sections/Steps";
import PricingTable from "@/components/sections/PricingTable";
import Section from "@/components/layout/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section>
        <Steps />
      </Section>
      <Section>
        <PricingTable />
      </Section>
    </>
  );
}