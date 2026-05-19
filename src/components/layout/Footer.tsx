import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
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
            <ul className="space-y-3.5 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start space-x-1.5">
                <MapPin className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <a className="hover:text-brand-teal transition-colors break-all" href="https://www.google.com/maps/place/PUSHKAR'S+KALPATARU/@13.102876,80.1840004,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5263d86c9c3989:0xd3881e00be99b43e!8m2!3d13.1028708!4d80.1865753!16s%2Fg%2F11stpgyczf?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D">
                 H-68/2A, Pushkar&apos;s Kalpataru,<br />
                  East Avenue Road, Korattur,<br />
                  Chennai - 600080
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-5 w-5 text-brand-teal shrink-0" />
                <a 
                  href="mailto:manikantanramachandran23@gmail.com" 
                  className="hover:text-brand-teal transition-colors break-all"
                >
                  manikantanramachandran23@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-brand-teal shrink-0"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <a 
                  href="https://www.linkedin.com/in/manikantan-ramachandran-4620411b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-teal transition-colors"
                >
                  Manikantan Ramachandran
                </a>
              </li>
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
