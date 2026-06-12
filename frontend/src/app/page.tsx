import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { MotionProvider } from "@/components/motion";

export default function Home() {
  return (
    <MotionProvider>
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <div
        aria-hidden="true"
        className="noise pointer-events-none fixed inset-0 z-[100]"
      />
    </MotionProvider>
  );
}
