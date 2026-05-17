"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function DualCore() {
  return (
    <section className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
      {/* Light theme interactive background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden dark:hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-4xl">
            Choose Your <span className="text-brand-teal">Growth Path</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tailored capability frameworks designed for individual excellence and organizational dominance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Student Panel - Vibrant/Light */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col justify-end p-8 md:p-10 min-h-[400px] h-full"
          >
            <div className="absolute top-8 right-8 md:top-10 md:right-10 p-4 bg-brand-teal/10 rounded-2xl transition-transform group-hover:scale-110 duration-300">
              <GraduationCap className="h-10 w-10 md:h-12 md:w-12 text-brand-teal" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">For Students & Institutions</h3>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md">
                Master communication, map your career trajectory, and build the capabilities that top employers demand.
              </p>
              <Button size="lg" className="group/btn bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full pl-6 pr-2" asChild>
                <Link href="/student-solutions">
                  Enter Growth Hub
                  <span className="ml-4 bg-white/20 p-2 rounded-full group-hover/btn:translate-x-1 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
            
            {/* Background Graphic */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 md:w-96 md:h-96 bg-brand-teal/10 dark:bg-brand-teal/10 rounded-full blur-3xl group-hover:bg-brand-teal/20 transition-colors"></div>
          </motion.div>

          {/* Corporate Panel - Premium/Light to Dark */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-brand-blue dark:to-slate-900 border border-blue-100 dark:border-slate-800 shadow-lg flex flex-col justify-end p-8 md:p-10 min-h-[400px] h-full"
          >
            <div className="absolute top-8 right-8 md:top-10 md:right-10 p-4 bg-brand-blue/10 dark:bg-white/10 rounded-2xl backdrop-blur-sm transition-transform group-hover:scale-110 duration-300">
              <Building2 className="h-10 w-10 md:h-12 md:w-12 text-brand-orange" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">For Corporate Organizations</h3>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md">
                Diagnose organizational health, build leadership pipelines, and execute strategy with unparalleled discipline.
              </p>
              <Button size="lg" className="group/btn bg-brand-blue hover:bg-brand-blue/90 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-brand-blue rounded-full pl-6 pr-2" asChild>
                <Link href="/corporate-solutions">
                  Enter Intelligence Engine
                  <span className="ml-4 bg-white/20 dark:bg-brand-blue/10 p-2 rounded-full group-hover/btn:translate-x-1 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
            
            {/* Background Graphic */}
            <div className="absolute -top-20 -left-20 w-80 h-80 md:w-96 md:h-96 bg-brand-orange/10 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-colors"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
