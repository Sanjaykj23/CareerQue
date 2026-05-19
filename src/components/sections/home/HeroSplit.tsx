"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Building2, Briefcase, Users } from "lucide-react";

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
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-blue dark:text-white leading-[1.1]">
            Helping Students, Institutions, and Organizations <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-orange">
              Grow with Clarity and Confidence
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            CareerQue helps build clarity, communication, capability, and growth through structured guidance, learning support, HR effectiveness reviews, and consulting solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-8 lg:pt-12 pb-16 lg:pb-24">
            <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-brand-blue/20" asChild>
              <Link href="#solutions">Explore Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent border-slate-300 dark:border-slate-700 dark:text-white dark:hover:bg-white/5" asChild>
              <Link href="/contact">Contact CareerQue</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative min-h-[400px] lg:min-h-[500px] w-full rounded-2xl border border-slate-800 bg-slate-900/50 flex items-center justify-center overflow-hidden shadow-2xl"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-brand-teal/5 to-brand-orange/10 mix-blend-overlay"></div>
          
          {/* Central Hub */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <motion.div
              animate={{ 
                boxShadow: ["0px 0px 15px 0px rgba(0,166,166,0.2)", "0px 0px 45px 15px rgba(0,166,166,0.5)", "0px 0px 15px 0px rgba(0,166,166,0.2)"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-16 w-48 sm:h-20 sm:w-56 rounded-xl border border-brand-teal/30 bg-white flex items-center justify-center z-20 shadow-xl px-3 sm:px-4"
            >
              <Image src="/logo.jpg" alt="CareerQue Logo" width={200} height={60} className="object-contain w-full h-full py-1.5" />
            </motion.div>
          </div>

          {/* Floating Entities */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            {/* Student 1 */}
            <motion.div
              initial={{ x: -100, y: -150, opacity: 0 }}
              animate={{ x: [-20, 10, -20], y: [-20, 20, -20], opacity: 1 }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] flex items-center gap-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-full shadow-lg"
            >
              <div className="bg-brand-blue/20 p-2 rounded-full text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Student</span>
                <span className="text-[10px] text-slate-400">Needs Clarity</span>
              </div>
            </motion.div>

            {/* Organization 1 */}
            <motion.div
              initial={{ x: 100, y: -100, opacity: 0 }}
              animate={{ x: [20, -10, 20], y: [-10, 30, -10], opacity: 1 }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[15%] right-[2%] md:top-[20%] md:right-[5%] flex items-center gap-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-full shadow-lg"
            >
              <div className="bg-brand-orange/20 p-2 rounded-full text-brand-orange">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Organization</span>
                <span className="text-[10px] text-slate-400">Needs Capability</span>
              </div>
            </motion.div>

            {/* Professional 1 */}
            <motion.div
              initial={{ x: -80, y: 150, opacity: 0 }}
              animate={{ x: [-30, 10, -30], y: [10, -20, 10], opacity: 1 }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[15%] left-[2%] md:bottom-[20%] md:left-[10%] flex items-center gap-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-full shadow-lg"
            >
              <div className="bg-brand-teal/20 p-2 rounded-full text-brand-teal">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Professional</span>
                <span className="text-[10px] text-slate-400">Needs Growth</span>
              </div>
            </motion.div>

            {/* Institution 1 */}
            <motion.div
              initial={{ x: 100, y: 150, opacity: 0 }}
              animate={{ x: [20, -20, 20], y: [20, -10, 20], opacity: 1 }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[10%] right-[5%] md:bottom-[15%] md:right-[10%] flex items-center gap-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-full shadow-lg"
            >
              <div className="bg-purple-500/20 p-2 rounded-full text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Institution</span>
                <span className="text-[10px] text-slate-400">Needs Frameworks</span>
              </div>
            </motion.div>
            
            {/* Pulsing connection nodes */}
            <motion.div 
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[35%] left-[30%] w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(15,76,129,0.8)]"
            />
            <motion.div 
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[40%] right-[35%] w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(255,145,77,0.8)]"
            />
            <motion.div 
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[40%] left-[35%] w-2 h-2 rounded-full bg-brand-teal shadow-[0_0_10px_rgba(0,166,166,0.8)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
