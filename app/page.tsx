import { FAQs } from "./components/FAQs/FAQs";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { GetStarted } from "./components/GetStarted";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  // font-[family-name:var(--font-geist-sans)]
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQs />
      <GetStarted />
      <Footer />
    </>
  );
}
