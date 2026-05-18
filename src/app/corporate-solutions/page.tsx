import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ActivitySquare, Target, Search, Compass } from "lucide-react";

export default function CorporateSolutions() {
  const sections = [
    {
      title: "OrgPulse Organizational Diagnostics",
      desc: "OrgPulse helps organizations identify leadership gaps, execution issues, communication patterns, accountability challenges, HR process gaps, and organizational improvement areas.",
      points: [
        "Organizational diagnostics",
        "Leadership insights",
        "Execution gap identification",
        "HR effectiveness review",
        "Action-oriented recommendations"
      ],
      icon: ActivitySquare,
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Leadership and Execution Effectiveness",
      desc: "CareerQue helps leadership teams improve alignment, accountability, communication, decision quality, and execution discipline.",
      points: [
        "Leadership effectiveness",
        "Meeting and decision insights",
        "Accountability culture",
        "Execution discipline",
        "Governance rhythm"
      ],
      icon: Target,
      color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20"
    },
    {
      title: "HR Effectiveness Review",
      desc: "CareerQue reviews key HR practices, systems, and people processes to identify gaps, strengthen alignment, and improve organizational effectiveness.",
      points: [
        "HR process review",
        "Performance management review",
        "Competency framework review",
        "Learning and development review",
        "Employee engagement and support review",
        "HR compliance and risk observations"
      ],
      icon: Search,
      color: "text-teal-500 bg-teal-50 dark:bg-teal-900/20"
    },
    {
      title: "Strategic HR Advisory",
      desc: "CareerQue provides consulting support to strengthen performance systems, competency frameworks, leadership development, HR processes, and people practices.",
      points: [
        "Performance management",
        "Competency frameworks",
        "Leadership development",
        "HR process strengthening",
        "People practice improvement"
      ],
      icon: Compass,
      color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            Corporate Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            CareerQue supports organizations with leadership diagnostics, HR effectiveness reviews, execution frameworks, and strategic HR consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="glass-panel border border-slate-200 dark:border-slate-800 rounded-3xl p-8 bg-white/80 dark:bg-slate-900/80 shadow-lg flex flex-col">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${section.color}`}>
                <section.icon className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{section.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1">
                {section.desc}
              </p>
              <div className="space-y-3 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2 block">Key Areas:</span>
                {section.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-panel border border-brand-teal/20 bg-brand-teal/5 dark:bg-brand-teal/10 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Want to improve leadership and organizational effectiveness?</h3>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/contact">Explore Corporate Consulting</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
