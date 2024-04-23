import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navigation from "./components/navigation";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navigation />
      <InfoSection />
      <ContactForm />
      <Hero />
    </main>
  );
}
