"use client";

import { motion } from "framer-motion";
import { FileText, Download, ZoomIn, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function SampleReportsPage() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 pb-32">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            Data in <span className="text-brand-orange">Action</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Preview the depth and precision of CareerQue's capability diagnostics.
          </p>
        </motion.div>
      </section>

      {/* PDF Viewer Mockup */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-200 dark:bg-slate-800 rounded-t-2xl p-4 flex justify-between items-center border border-slate-300 dark:border-slate-700 border-b-0"
        >
          <div className="flex items-center space-x-4">
            <FileText className="text-slate-500 h-5 w-5" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Executive_Leadership_Diagnostic_Sample.pdf</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-brand-blue">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-1 bg-white dark:bg-slate-900 rounded px-2 py-1 text-xs">
              <button onClick={() => setActivePage(Math.max(1, activePage - 1))} className="text-slate-500 hover:text-brand-blue"><ChevronLeft className="h-4 w-4" /></button>
              <span className="w-8 text-center text-slate-700 dark:text-slate-300">{activePage} / {totalPages}</span>
              <button onClick={() => setActivePage(Math.min(totalPages, activePage + 1))} className="text-slate-500 hover:text-brand-blue"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </motion.div>

        {/* Viewer Content Area */}
        <div className="bg-slate-300 dark:bg-slate-900 h-[600px] rounded-b-2xl border border-slate-300 dark:border-slate-700 flex items-center justify-center p-8 overflow-hidden relative shadow-inner">
          <motion.div 
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl bg-white shadow-2xl h-full rounded flex flex-col p-8 relative overflow-hidden"
          >
            {/* Mock PDF Content based on page */}
            <div className="border-b-2 border-brand-blue pb-4 mb-8 flex justify-between items-end">
              <h2 className="text-2xl font-bold text-slate-900">Leadership Execution Index</h2>
              <div className="text-sm text-slate-500">Page {activePage}</div>
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              
              {activePage === 1 && (
                <div className="mt-12 p-6 bg-brand-blue/10 border border-brand-blue/20 rounded-xl">
                   <div className="flex items-center justify-between mb-4">
                     <span className="font-bold text-slate-900">Overall Score</span>
                     <span className="text-2xl font-bold text-brand-blue">84/100</span>
                   </div>
                   <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} animate={{ width: "84%" }} className="h-full bg-brand-blue" transition={{ duration: 1 }} />
                   </div>
                </div>
              )}
              
              {(activePage > 1) && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                  <Lock className="h-12 w-12 text-slate-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Detailed Analytics Locked</h3>
                  <p className="text-slate-600 mb-6 text-center max-w-sm">Request the full sample report to view detailed breakdowns, heatmaps, and actionable recommendations.</p>
                  <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg">
                    <Download className="mr-2 h-4 w-4" /> Request Full PDF
                  </Button>
                </div>
              )}
            </div>
            
            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-slate-100 -rotate-45 pointer-events-none uppercase opacity-50">
              SAMPLE
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
