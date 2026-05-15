"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Network, LineChart, Target, UserCheck, Briefcase } from "lucide-react";

export default function AboutPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  const timeline = [
    { year: "1993", title: "Foundation", desc: "Started as a boutique coaching center." },
    { year: "2005", title: "Corporate Expansion", desc: "Launched executive training programs." },
    { year: "2015", title: "Digital Transformation", desc: "Introduced early AI-driven assessments." },
    { year: "2024", title: "CareerQue Platform", desc: "Unified ecosystem for students and enterprises." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 pb-32 overflow-hidden">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 md:px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            The <span className="text-brand-teal">Authority</span> in Capability
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            For over three decades, we have engineered frameworks that transform raw potential into execution discipline.
          </p>
        </motion.div>
      </section>

      {/* Experience Path Timeline */}
      <section className="py-24 bg-white dark:bg-slate-900" ref={targetRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue dark:text-white">31+ Years of Excellence</h2>
          </div>
          
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
              <motion.div 
                className="w-full bg-brand-teal absolute top-0 left-0" 
                style={{ height: timelineHeight }} 
              />
            </div>

            {timeline.map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-brand-teal -translate-x-1/2 z-10 shadow-lg group-hover:scale-150 transition-transform"></div>
                
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <div className="text-brand-orange font-bold text-xl mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Visual */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue dark:text-white">The CareerQue Ecosystem</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            How our frameworks bridge individual capability to organizational effectiveness.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-16 border border-slate-200 dark:border-slate-800 shadow-xl relative">
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10 items-center">
            {/* Left Node */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-brand-teal/10 border border-brand-teal p-6 rounded-2xl text-center relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
              <UserCheck className="h-10 w-10 text-brand-teal mx-auto mb-4" />
              <h3 className="font-bold text-brand-blue dark:text-white">Individual Capability</h3>
              <p className="text-xs text-slate-500 mt-2">Skills, Psychometrics, Communication</p>
            </motion.div>

            {/* Center Node */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="hidden md:flex items-center justify-center h-32 w-32 mx-auto rounded-full border-4 border-dashed border-brand-orange/50 text-brand-orange bg-white dark:bg-slate-900">
              <Network className="h-10 w-10 animate-pulse" />
            </motion.div>

            {/* Right Node */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-brand-blue/10 border border-brand-blue p-6 rounded-2xl text-center relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
              <Briefcase className="h-10 w-10 text-brand-blue mx-auto mb-4" />
              <h3 className="font-bold text-brand-blue dark:text-white">Organizational ROI</h3>
              <p className="text-xs text-slate-500 mt-2">Execution, Leadership, Health</p>
            </motion.div>
          </div>

          {/* Animated Connecting Lines SVG (Desktop only) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" style={{ filter: "drop-shadow(0 0 8px rgba(0,166,166,0.5))" }}>
            <motion.path 
              d="M 250 150 C 350 150, 400 150, 500 150" 
              fill="transparent" stroke="var(--color-brand-teal)" strokeWidth="3" strokeDasharray="5 5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path 
              d="M 500 150 C 600 150, 650 150, 750 150" 
              fill="transparent" stroke="var(--color-brand-blue)" strokeWidth="3" strokeDasharray="5 5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </svg>

        </div>
      </section>

    </div>
  );
}
