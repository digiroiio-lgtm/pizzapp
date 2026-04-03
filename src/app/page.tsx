import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Platform from "@/components/Platform";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Metrics />
      <SocialProof />
      <Features />
      <Platform />
      <LeadForm />
      <Footer />
    </main>
  );
}
