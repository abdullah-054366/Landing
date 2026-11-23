import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Roles from "./sections/Roles";
import Steps from "./sections/Steps";
import Download from "./sections/Download";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div id="top" dir="rtl" className="min-h-screen overflow-x-hidden bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roles />
        <Steps />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
