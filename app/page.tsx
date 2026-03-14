import Hero from "./components/Hero";
import MemoryGallery from "./components/MemoryGallery";
import MemoryVideo from "./components/MemoryVideo";
import Message from "./components/Message";
import Footer from "./components/Footer";
import FloatingHearts from "./components/FloatingHearts";

export default function Home() {
  return (
    <main className="relative">
      <FloatingHearts />

      <Hero />
      <MemoryGallery />
      <MemoryVideo />
      <Message />
      <Footer />
    </main>
  );
}
