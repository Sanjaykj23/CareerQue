"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900/50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel border border-slate-200 dark:border-slate-800 rounded-3xl p-10 md:p-16 text-center bg-white/80 dark:bg-slate-900/80 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6 relative z-10">
            Let’s Build Clarity and Capability Together
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
            Whether you are a parent, student, school, college, or organization, CareerQue can help design the right growth pathway.
          </p>
          
          <div className="relative z-10">
            <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-brand-blue/20" asChild>
              <Link href="/contact" className="group flex items-center gap-2">
                Schedule a Discussion
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
