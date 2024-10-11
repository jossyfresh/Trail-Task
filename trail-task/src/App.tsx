import CTA from "./components/CTA";
import CreditCardLandscape from "./components/CreditCardLandscape";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-[#F8F8FF] flex flex-col gap-10">
      <Navbar />
      <Hero />
      <CreditCardLandscape />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
