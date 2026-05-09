import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import SocialProof from "@/components/SocialProof";
import Comparison from "@/components/Comparison";
import LeadForm from "@/components/LeadForm";
import FoundingReviewer from "@/components/FoundingReviewer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Industries />
      <SocialProof />
      <Comparison />
      <LeadForm />
      <FoundingReviewer />
      <FAQ />
      <Footer />
    </main>
  );
}
