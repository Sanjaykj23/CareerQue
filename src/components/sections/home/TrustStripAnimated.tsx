"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Building2, Briefcase } from "lucide-react";

export function TrustStripAnimated() {
  const cards = [
    {
      id: 1,
      title: "31+ Years Experience",
      desc: "Built on deep experience in HR, learning, leadership, and organizational effectiveness.",
      icon: Award,
    },
    {
      id: 2,
      title: "Student Development",
      desc: "Career clarity, communication, academic support, and holistic growth.",
      icon: GraduationCap,
    },
    {
      id: 3,
      title: "Institution Support",
      desc: "Programs for schools and colleges to improve readiness, communication, and outcomes.",
      icon: Building2,
    },
    {
      id: 4,
      title: "Corporate Consulting",
      desc: "Leadership effectiveness, HR effectiveness review, execution discipline, and organizational alignment.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="relative -mt-10 md:-mt-20 z-20 container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel bg-white/90 dark:bg-slate-900/90 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-2">
              <card.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-brand-blue dark:text-white">
              {card.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
