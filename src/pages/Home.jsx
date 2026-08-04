import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import StatsSection from "../components/StatsSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const location = useLocation();

useEffect(() => {
  if (!location.state?.scrollTo) return;

  // Scroll to Hero (top of page)
  if (location.state.scrollTo === "top") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState({}, document.title);
    return;
  }

  // Scroll to About / Contact
  const element = document.getElementById(location.state.scrollTo);

  if (element) {
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  }

  // Clear state so it doesn't trigger again
  window.history.replaceState({}, document.title);
}, [location]);

  return (
    <>
      <Hero />
      <Features />
      <StatsSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;