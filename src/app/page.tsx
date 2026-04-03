import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Features from "@/components/Features";
import Platform from "@/components/Platform";
import SocialProof from "@/components/SocialProof";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Metrics />
      <Features />
      <Platform />
      <SocialProof />
      <LeadForm />
      <Footer />
    </main>
  );
}
