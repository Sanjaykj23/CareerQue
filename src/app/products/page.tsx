"use client";

import { motion } from "framer-motion";
import { Check, Terminal, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Generating comprehensive capability report... \nAnalyzing speech patterns... \nConfidence score: 87% \nRecommendation: Focus on vocal variety during executive summaries.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 pb-32">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 md:px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            Digital <span className="text-brand-orange">Ecosystem</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Proprietary tools engineered to measure, develop, and track capability at scale.
          </p>
        </motion.div>
      </section>

      {/* Live Feature Showcase */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-3 py-1 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-slate-800 dark:text-slate-300">Live Demo</span>
            </div>
            <h2 className="text-3xl font-bold text-brand-blue dark:text-white">SpeakSmart AI Engine</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our flagship digital tool processes audio and video inputs to provide instantaneous, actionable feedback on communication effectiveness.
            </p>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white gap-2">
              <PlayCircle className="h-5 w-5" /> Watch Full Demo
            </Button>
          </motion.div>

          {/* Terminal Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-700"
          >
            <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-950">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs text-slate-500 font-mono flex items-center">
                <Terminal className="h-3 w-3 mr-2" /> speak_smart_core.exe
              </div>
            </div>
            <div className="p-6 font-mono text-sm text-green-400 h-64 overflow-hidden relative">
              <pre className="whitespace-pre-wrap">{typedText}</pre>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Tiers */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-white">
            Licensing Options
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Tier 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Individual</h3>
            <div className="text-3xl font-bold text-brand-blue dark:text-brand-teal mb-6">$49<span className="text-sm text-slate-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              {["Full SpeakSmart access", "1 Career Assessment", "Basic reports"].map((f, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Check className="h-4 w-4 text-brand-teal mr-2 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Get Started</Button>
          </motion.div>

          {/* Tier 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="rounded-2xl bg-brand-blue border border-brand-blue p-8 shadow-xl flex flex-col relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Institution</h3>
            <div className="text-3xl font-bold text-white mb-6">Custom<span className="text-sm text-brand-blue-200 font-normal">/vol</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              {["White-labeled portal", "Bulk Assessments", "Aggregated analytics", "API Access"].map((f, i) => (
                <li key={i} className="flex items-center text-sm text-slate-100">
                  <Check className="h-4 w-4 text-brand-orange mr-2 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-white text-brand-blue hover:bg-slate-100">Contact Sales</Button>
          </motion.div>

          {/* Tier 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-brand-blue dark:text-brand-teal mb-6">Custom</div>
            <ul className="space-y-4 mb-8 flex-1">
              {["OrgPulse integration", "Leadership Engine access", "Dedicated consultant", "SSO integration"].map((f, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Check className="h-4 w-4 text-brand-teal mr-2 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
