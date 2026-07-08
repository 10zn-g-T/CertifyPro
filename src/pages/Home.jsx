import Hero from "../components/Hero";
import Features from "../components/Features";
import CertificatePreview from "../components/CertificatePreview";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CertificatePreview />
      <StatsSection />
      <Footer />
    </>
  );
}

export default Home;