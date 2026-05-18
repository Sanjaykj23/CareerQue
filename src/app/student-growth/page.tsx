import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Compass, Mic, BookOpen } from "lucide-react";

export default function StudentGrowth() {
  const sections = [
    {
      title: "Career Guidance & Assessments",
      desc: "CareerQue helps students understand their strengths, interests, skills, personality, and career direction through structured guidance and assessment-based insights.",
      points: [
        "Career clarity",
        "Stream selection support",
        "Skill and interest mapping",
        "Student-friendly reports",
        "Parent guidance"
      ],
      icon: Compass,
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "SpeakSmart Communication Development",
      desc: "SpeakSmart helps students and young professionals improve communication confidence, speaking ability, interview readiness, and self-expression through structured practice and feedback.",
      points: [
        "Speaking practice",
        "Communication feedback",
        "Interview readiness",
        "Confidence building",
        "Voice-based learning support"
      ],
      icon: Mic,
      color: "text-teal-500 bg-teal-50 dark:bg-teal-900/20"
    },
    {
      title: "CareerQue Academy - After-School Learning",
      desc: "CareerQue Academy is a structured after-school learning and development program for school students. It supports academics, study habits, communication, physical activity, creativity, and holistic growth.",
      points: [
        "Homework and academic support",
        "Concept clarity",
        "Study discipline",
        "Communication confidence",
        "Physical activity and wind-down routines",
        "Creative workshops",
        "Holistic development"
      ],
      icon: BookOpen,
      color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            Student Growth Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            CareerQue supports students through career clarity, communication development, academic support, study habits, and holistic growth.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="glass-panel border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 bg-white/80 dark:bg-slate-900/80 shadow-lg flex flex-col md:flex-row gap-8 items-start">
              <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${section.color}`}>
                <section.icon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{section.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {section.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {section.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center glass-panel border border-brand-teal/20 bg-brand-teal/5 dark:bg-brand-teal/10 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Want to explore student support options?</h3>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/contact">Contact CareerQue</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
