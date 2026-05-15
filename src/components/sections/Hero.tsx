import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-brand-blue sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Your <span className="text-brand-teal">Capability</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
          CareerQue bridges the gap between potential and performance. Our premium consulting and capability development solutions are designed for students, institutions, and forward-thinking corporates.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <Button size="lg" variant="default">
            <Link href="/student-solutions">Explore Student Solutions</Link>
          </Button>
          <Button size="lg" variant="outline">
            <Link href="/corporate-solutions">View Corporate Services</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -z-10 -ml-[35rem] w-[70.5rem] max-w-none transform-gpu blur-3xl sm:-ml-[40rem]" aria-hidden="true">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#FF914D] to-[#00A6A6] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </section>
  );
}
