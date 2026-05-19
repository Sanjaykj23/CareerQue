import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 md:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* Logo Space */}
              <div className="h-16 w-56 flex items-center justify-start">
                <Image
                  src="/logo.jpg"
                  alt="CareerQue Logo"
                  width={250}
                  height={60}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              CareerQue helps students, institutions, and organizations grow through clarity, communication, structured learning support, HR effectiveness reviews, and consulting solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-brand-blue dark:text-brand-teal uppercase">Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/student-growth" className="hover:text-brand-teal transition-colors">Student Growth Solutions</Link></li>
              <li><Link href="/institution-solutions" className="hover:text-brand-teal transition-colors">Institution Solutions</Link></li>
              <li><Link href="/corporate-solutions" className="hover:text-brand-teal transition-colors">Corporate Solutions</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">SpeakSmart</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">CareerQue Academy</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">OrgPulse</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">HR Effectiveness Review</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-brand-blue dark:text-brand-teal uppercase">Company</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/" className="hover:text-brand-teal transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-teal transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-brand-blue dark:text-brand-teal uppercase">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="mailto:info@careerque.com" className="hover:text-brand-teal transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; 2026 CareerQue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
