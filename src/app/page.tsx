import { Hero } from "@/components/Hero/Hero";
import { Logo } from "@/components/Logo/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <section>
        <div className="px-4 h-24 bg-blue-700 flex items-center">
          <Logo />
        </div>
      </section>
      <section>
        <div className="">
          <Hero />
        </div>
      </section>
      <section>
        <div className="absolute bottom-0 left-0 w-full px-4 h-20 bg-blue-700 flex items-center"></div>
      </section>
    </main>
  );
}
