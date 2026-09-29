import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SpiderInteractions from "@/components/SpiderInteractions";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <SpiderInteractions />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
