import Hero from "./components/Hero";
import TomorrowSection from "./components/TomorrowSection";
import OffersSection from "./components/OffersSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg overflow-x-hidden">
      <Hero />
      <TomorrowSection />
      <OffersSection />
      <Footer />
    </div>
  );
}