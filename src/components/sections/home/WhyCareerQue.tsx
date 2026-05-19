"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyCareerQue() {
  const points = [
    "Experience-led and practical",
    "Structured frameworks",
    "Human-centered development",
    "Student, institution, and organization focused",
    "Simple, clear, action-oriented guidance",
    "Modern AI-enabled thinking where useful",
    "Strong understanding of HR, learning, leadership, and education ecosystems"
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-brand-teal/5 dark:bg-brand-teal/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6">
              Why CareerQue
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              CareerQue is built on practical experience, structured thinking, and a human-centered approach to growth.
            </p>
            
            <div className="grid sm:grid-cols-1 gap-4">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-full min-h-[400px] lg:min-h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl glass-panel border border-slate-200 dark:border-slate-800 flex items-center justify-center p-8 bg-white/50 dark:bg-slate-900/50"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-orange/10 mix-blend-overlay"></div>
             
             <div className="relative z-10 text-center">
                <div className="mx-auto flex items-center justify-center mb-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 max-w-[200px] md:max-w-[240px]">
                  <img src="/logodark.jpeg" alt="CareerQue" className="w-full h-auto object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-2">Practical Growth</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto">Built on decades of real-world organizational and learning experience.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
