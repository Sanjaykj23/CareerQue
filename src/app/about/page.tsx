import { CheckCircle2 } from "lucide-react";

export default function About() {
  const expertiseAreas = [
    "Strategic HR leadership",
    "Learning and development",
    "Leadership development",
    "Performance management",
    "Competency development",
    "Industry-academia partnerships",
    "Student development",
    "Organizational effectiveness",
    "HR effectiveness review",
    "AI-enabled consulting frameworks"
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            About CareerQue
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            CareerQue was created to help students, institutions, and organizations grow through clarity, communication, structured learning support, HR effectiveness reviews, and consulting solutions.
          </p>
        </div>

        {/* Founder / Experience */}
        <div className="mb-20 glass-panel border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 bg-white/80 dark:bg-slate-900/80 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Built on Experience</h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed relative z-10">
            <p>
              CareerQue is built on over 31 years of experience across HR leadership, learning and development, leadership development, industry-academia partnerships, performance management, talent development, and organizational consulting.
            </p>
            <p>
              The focus is to combine practical experience with modern frameworks and AI-enabled thinking to create meaningful, scalable, and action-oriented growth solutions.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-panel border border-brand-orange/20 rounded-3xl p-8 bg-brand-orange/5 dark:bg-brand-orange/10 flex flex-col justify-center text-center shadow-lg">
            <h2 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Mission</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              To help students, institutions, and organizations build clarity, communication, capability, and confidence through structured and practical development solutions.
            </p>
          </div>
          <div className="glass-panel border border-brand-teal/20 rounded-3xl p-8 bg-brand-teal/5 dark:bg-brand-teal/10 flex flex-col justify-center text-center shadow-lg">
            <h2 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">Vision</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              To build a future-ready growth ecosystem that supports student readiness, institutional effectiveness, leadership effectiveness, and organizational transformation.
            </p>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="glass-panel border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 bg-white/50 dark:bg-slate-900/50 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-10">Areas of Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
