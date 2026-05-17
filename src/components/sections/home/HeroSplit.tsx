"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function HeroSplit() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-brand-dark transition-colors duration-300 py-24 md:py-0">
      {/* Light Mode Interactive Background */}
      <div className="absolute inset-0 z-0 overflow-hidden dark:hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-teal/10 blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-brand-blue/10 blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -40, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-brand-orange/10 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8 md:mt-16 lg:mt-24"
        >
          <div className="inline-flex items-center space-x-2 rounded-full bg-brand-teal/10 px-3 py-1 text-sm font-medium text-brand-teal dark:text-teal-400 w-max">
            <span className="flex h-2 w-2 rounded-full bg-brand-teal animate-pulse"></span>
            <span>Career • Communication • Capability</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-blue dark:text-white leading-[1.1]">
            Helping Students and Organizations <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-orange">
              Grow with Clarity, Capability, and Confidence
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            CareerQue helps students, institutions, and organizations build clarity, communication, capability, and growth through structured guidance, modern frameworks, and practical development solutions
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-8 lg:pt-12 pb-16 lg:pb-24">
            <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-brand-blue/20" asChild>
              <Link href="/student-solutions">Explore Student Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent border-slate-300 dark:border-slate-700 dark:text-white dark:hover:bg-white/5" asChild>
              <Link href="/corporate-solutions">Explore Corporate Solutions</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] w-full rounded-2xl border border-white/20 glass dark:bg-white/5 bg-white/40 flex items-center justify-center overflow-hidden shadow-2xl"
        >
          {/* 3D Abstract Visual Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-brand-teal/10 to-brand-orange/20 dark:from-brand-blue/40 dark:via-brand-teal/20 dark:to-brand-orange/20 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ 
                rotateY: [0, 180, 360],
                rotateX: [0, 45, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border-4 border-brand-teal/50 rounded-xl flex items-center justify-center shadow-[0_0_50px_rgba(0,166,166,0.3)] backdrop-blur-md"
            >
              <div className="w-24 h-24 bg-brand-orange/80 rounded-full blur-xl animate-pulse"></div>
            </motion.div>
            <p className="mt-8 text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              [ Interactive 3D Growth Visual ]
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
