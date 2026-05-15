"use client";

import { motion } from "framer-motion";
import { BarChart3, Building2, Workflow, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CorporateSolutionsPage() {
  return (
    // Enforcing dark mode for this page using specific classes if ThemeProvider doesn't override,
    // but the design will inherently use dark colors.
    <div className="min-h-screen bg-brand-darker text-slate-300 pb-32">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 md:px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 rounded-full bg-brand-blue/20 border border-brand-blue/30 px-3 py-1 text-sm font-medium text-brand-blue mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-blue animate-pulse"></span>
            <span>The Intelligence Engine</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Execute Strategy with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Discipline</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Data-driven HR transformation, capability diagnostics, and executive leadership pipelines.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6 space-y-24">
        
        {/* OrgPulse Dashboard Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
              <BarChart3 className="mr-3 h-8 w-8 text-brand-blue" /> OrgPulse
            </h2>
            <p className="text-slate-400 mb-6 text-lg">
              Diagnose organizational health in real-time. Uncover capability gaps before they impact your bottom line.
            </p>
            <ul className="space-y-4 mb-8">
              {["Real-time capability mapping", "Predictive attrition models", "Cultural alignment scoring"].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue mr-3" /> {item}
                </li>
              ))}
            </ul>
            <Button className="bg-brand-blue text-white hover:bg-brand-blue/90" size="lg">Request Demo</Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl relative overflow-hidden"
          >
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
              <div className="text-sm font-semibold text-white">Health Index</div>
              <div className="text-xs bg-brand-blue/20 text-brand-blue px-2 py-1 rounded">Live Data</div>
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">Execution Discipline</div>
                <div className="text-2xl font-bold text-white">84%</div>
                <motion.div initial={{ width: 0 }} whileInView={{ width: "84%" }} className="h-1 mt-2 bg-brand-blue rounded-full" />
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">Leadership Pipeline</div>
                <div className="text-2xl font-bold text-white">Critical</div>
                <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} className="h-1 mt-2 bg-red-500 rounded-full" />
              </div>
            </div>

            {/* Chart Area */}
            <div className="h-32 flex items-end space-x-2">
              {[40, 55, 45, 70, 65, 80, 90].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="w-full bg-brand-blue/50 rounded-t-sm hover:bg-brand-blue transition-colors cursor-pointer"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Leadership Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 shadow-2xl"
          >
             <div className="flex justify-between items-center mb-10">
               <div className="flex space-x-2">
                 <div className="h-3 w-3 rounded-full bg-red-500"></div>
                 <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                 <div className="h-3 w-3 rounded-full bg-green-500"></div>
               </div>
             </div>
             
             <div className="space-y-6">
               {[1, 2, 3].map((i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-800/30 flex items-center justify-between cursor-pointer transition-colors"
                 >
                   <div className="flex items-center space-x-4">
                     <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs">VP</div>
                     <div>
                       <div className="text-sm font-semibold text-white">Executive Profile {i}</div>
                       <div className="text-xs text-slate-500">Readiness: High</div>
                     </div>
                   </div>
                   <div className="text-brand-blue"><ArrowRight className="h-4 w-4" /></div>
                 </motion.div>
               ))}
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
              <Workflow className="mr-3 h-8 w-8 text-brand-orange" /> Leadership Engine
            </h2>
            <p className="text-slate-400 mb-6 text-lg">
              Don't leave succession to chance. Build a robust pipeline of capable leaders ready to execute your strategic vision.
            </p>
            <div className="space-y-4">
              <div className="p-4 border-l-2 border-brand-orange bg-brand-orange/5 text-slate-300">
                <span className="font-bold text-white block mb-1">Identify</span>
                Data-backed identification of high-potential talent.
              </div>
              <div className="p-4 border-l-2 border-brand-blue bg-brand-blue/5 text-slate-300">
                <span className="font-bold text-white block mb-1">Develop</span>
                Targeted coaching frameworks to close capability gaps.
              </div>
            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
}
