"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Lightbulb, Building } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = to;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to]);

  return <span>{count}{suffix}</span>;
}

export function TrustStripAnimated() {
  const stats = [
    { id: 1, name: "Years Experience", value: 31, suffix: "+", icon: Trophy },
    { id: 2, name: "Students Mentored", value: 10000, suffix: "+", icon: Users },
    { id: 3, name: "Corporate Partners", value: 50, suffix: "+", icon: Building },
    { id: 4, name: "Frameworks", value: 15, suffix: "+", icon: Lightbulb },
  ];

  return (
    <div className="relative -mt-10 z-20 container mx-auto px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-2xl p-8 shadow-xl"
      >
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex flex-col gap-y-2">
              <dt className="text-sm font-medium leading-7 text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                <stat.icon className="h-4 w-4 text-brand-teal" />
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-4xl">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </div>
  );
}
