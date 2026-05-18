"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { GraduationCap, Building2, Briefcase } from "lucide-react";

export function WhatWeOffer() {
  const offerings = [
    {
      id: "student",
      title: "Student Growth Solutions",
      description: "Career guidance, communication confidence, academic support, and holistic development for students.",
      features: [
        "Career guidance and assessments",
        "SpeakSmart communication development",
        "CareerQue Academy after-school learning support",
        "Study habits and confidence building",
      ],
      link: "/student-growth",
      linkText: "Explore Student Growth",
      icon: GraduationCap,
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800/50",
    },
    {
      id: "institution",
      title: "Institution Solutions",
      description: "Structured programs for schools and colleges to improve student readiness, communication, employability, faculty capability, and institutional outcomes.",
      features: [
        "CampusConnect programs",
        "Placement readiness",
        "Faculty development",
        "Student communication programs",
        "Institutional branding support",
      ],
      link: "/institution-solutions",
      linkText: "Explore Institution Solutions",
      icon: Building2,
      color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
      borderColor: "border-teal-200 dark:border-teal-800/50",
    },
    {
      id: "corporate",
      title: "Corporate Solutions",
      description: "Consulting and diagnostic solutions to strengthen leadership effectiveness, HR practices, execution discipline, and organizational alignment.",
      features: [
        "OrgPulse diagnostics",
        "Leadership insights",
        "HR effectiveness review",
        "Execution excellence",
        "Strategic HR advisory",
      ],
      link: "/corporate-solutions",
      linkText: "Explore Corporate Solutions",
      icon: Briefcase,
      color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-200 dark:border-orange-800/50",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6"
          >
            What CareerQue Offers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            CareerQue brings together student development, institutional support, and corporate consulting under one clarity and growth-focused ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`flex flex-col h-full rounded-3xl border ${offering.borderColor} bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all hover:shadow-lg`}
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${offering.color}`}>
                  <offering.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {offering.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed min-h-[100px]">
                  {offering.description}
                </p>
                <div className="space-y-3 mb-8 flex-1">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Includes:</span>
                  <ul className="space-y-2 list-disc pl-5 marker:text-brand-teal">
                    {offering.features.map((feature, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm pl-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 mt-auto border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <Button variant="outline" className="w-full justify-between group h-12" asChild>
                  <Link href={offering.link}>
                    {offering.linkText}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
