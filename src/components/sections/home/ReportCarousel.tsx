"use client";

import { motion } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const reports = [
  { id: 1, title: "Executive Leadership Diagnostic", type: "Corporate", color: "bg-brand-blue" },
  { id: 2, title: "SpeakSmart AI Feedback Report", type: "Student", color: "bg-brand-teal" },
  { id: 3, title: "OrgPulse Health Index", type: "Corporate", color: "bg-brand-blue" },
  { id: 4, title: "Career Compass Pathing", type: "Student", color: "bg-brand-orange" },
];

export function ReportCarousel() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-brand-darker overflow-hidden transition-colors duration-300 relative">
      {/* Interactive Light Mode Background */}
      <div className="absolute inset-0 z-0 overflow-hidden dark:hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-[40%] h-[60%] rounded-full bg-brand-orange/5 blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-10 w-[50%] h-[50%] rounded-full bg-brand-teal/5 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-4xl">
              Sample <span className="text-brand-orange">Report & Insights</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Preview our comprehensive analytical reports and diagnostics.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex mt-4 md:mt-0 text-brand-teal" asChild>
            <Link href="/sample-reports">
              View All Samples <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
            {reports.map((report) => (
              <motion.div
                key={report.id}
                whileHover={{ y: -10 }}
                className="snap-center shrink-0 w-[300px] h-[400px] rounded-2xl glass-panel p-6 flex flex-col relative overflow-hidden group cursor-pointer"
              >
                <div className={`absolute top-0 left-0 w-full h-2 ${report.color}`}></div>
                <div className="flex-1 flex flex-col">
                  <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl w-max mb-6">
                    <FileText className={`h-6 w-6 ${report.color.replace('bg-', 'text-')}`} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    {report.type}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {report.title}
                  </h3>
                  
                  {/* Simulated Content */}
                  <div className="mt-auto space-y-3 opacity-50">
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-full"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-4/5"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-5/6"></div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-blue/90 dark:bg-slate-900/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium flex items-center">
                    Preview <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradients for smooth fade on edges */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-slate-50 dark:from-brand-darker to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-slate-50 dark:from-brand-darker to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
