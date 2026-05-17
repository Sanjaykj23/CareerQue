"use client";

import { motion } from "framer-motion";
import { BookOpen, Mic, GraduationCap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function StudentSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 pb-32">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 rounded-full bg-brand-teal/10 px-3 py-1 text-sm font-medium text-brand-teal mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-teal"></span>
            <span>The Growth Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            Unlock Your <span className="text-brand-teal">True Potential</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive capability frameworks designed to bridge the gap between academia and industry expectations.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">
          
          {/* Main Feature: SpeakSmart (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm overflow-hidden relative group"
          >
            <div className="relative z-10 w-full md:w-1/2">
              <Mic className="h-10 w-10 text-brand-teal mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">SpeakSmart</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                AI-driven communication mastery. Get real-time feedback on your pitch, tone, and confidence.
              </p>
            </div>
            
            {/* AI Waveform Mockup */}
            <div className="absolute right-0 top-0 w-1/2 h-full hidden md:flex items-center justify-center p-8">
              <div className="w-full h-32 flex items-center justify-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [20, Math.random() * 100 + 20, 20] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 bg-brand-teal rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Assessments */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-brand-blue dark:bg-brand-darker border border-brand-blue/50 p-8 shadow-sm text-white flex flex-col justify-between"
          >
            <div>
              <BookOpen className="h-10 w-10 text-brand-orange mb-4" />
              <h3 className="text-2xl font-bold mb-2">Assessments</h3>
              <p className="text-slate-300">Deep-dive psychometric and capability evaluations.</p>
            </div>
            <ArrowRight className="h-6 w-6 text-brand-orange self-end" />
          </motion.div>

          {/* Career Compass */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm"
          >
            <GraduationCap className="h-10 w-10 text-brand-orange mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Career Compass</h3>
            <p className="text-slate-600 dark:text-slate-400">Personalized pathing based on your unique strengths.</p>
            
            {/* Confidence Meter Mockup */}
            <div className="mt-8 space-y-3">
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1 }} className="h-full bg-brand-orange" />
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-brand-teal" />
              </div>
            </div>
          </motion.div>

          {/* Campus Connect (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex items-center"
          >
            <div className="w-full flex justify-between items-center">
              <div>
                <Users className="h-10 w-10 text-brand-blue dark:text-white mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">CampusConnect</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">Bridging institutions with industry experts for massive scale capability building.</p>
              </div>
              <div className="hidden md:flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-16 w-16 rounded-full border-4 border-slate-100 dark:border-slate-900 flex items-center justify-center text-white font-bold bg-brand-blue`}>
                    U{i}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Floating Sticky CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <Button size="lg" className="rounded-full shadow-2xl shadow-brand-teal/30 bg-brand-teal hover:bg-brand-teal/90 text-white h-14 px-8 text-lg animate-pulse" asChild>
          <a href="/contact">Schedule Guidance Session</a>
        </Button>
      </motion.div>
    </div>
  );
}
