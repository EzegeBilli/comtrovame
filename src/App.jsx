import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import AccessAnywhere from "./components/AccessAnywhere/AccessAnywhere";
import Stakeholders from "./components/Stakeholders/Stakeholders";
import AdminSection from "./components/AdminSection/AdminSection";
import CtaBanner from "./components/CtaBanner/CtaBanner";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AccessAnywhere />
        <Stakeholders />
        <AdminSection />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
    </>
  );
}