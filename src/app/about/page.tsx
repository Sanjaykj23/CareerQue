import { User, Target } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* About CareerQue */}
        <div className="mb-20 relative">
          <div className="absolute top-0 -left-20 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-8 text-center relative z-10">
            About CareerQue
          </h1>
          
          <div className="glass-panel border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 bg-white/80 dark:bg-slate-900/80 shadow-xl relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent pointer-events-none" />
            
            <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed relative z-10">
              <p className="text-xl font-medium text-brand-blue dark:text-white">
                CareerQue is a growth-focused platform created to help students, institutions, and organizations move forward with clarity and confidence.
              </p>
              <p>
                The brand is built around three core pillars: <span className="font-semibold text-brand-teal">Clarity, Capability, and Growth.</span>
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 py-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">For Students</h3>
                  <p className="text-base">CareerQue supports career direction, communication confidence, academic support, and holistic development.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">For Schools & Colleges</h3>
                  <p className="text-base">CareerQue offers structured programs to improve student readiness, employability, communication, and institutional outcomes.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">For Organizations</h3>
                  <p className="text-base">CareerQue provides consulting and diagnostic solutions in HR effectiveness, leadership, execution, and organizational alignment.</p>
                </div>
              </div>

              <p>
                CareerQue combines practical experience, structured frameworks, and modern AI-enabled thinking where useful. The focus is not just on advice, but on helping people understand what to do next and how to do it.
              </p>
              <p>
                CareerQue’s solutions are designed to be simple, practical, and action-oriented. The aim is to bridge the gap between potential and performance.
              </p>
              <p className="font-semibold text-brand-blue dark:text-white text-xl text-center py-4">
                CareerQue stands for Clarity, Capability, and Growth.
              </p>
            </div>
          </div>
        </div>

        {/* About Founder */}
        <div className="relative">
          <div className="absolute top-20 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue dark:text-white mb-8 text-center relative z-10 flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-brand-orange" />
            About the Founder
          </h2>
          
          <div className="glass-panel border border-brand-orange/20 rounded-3xl p-8 md:p-12 bg-white/80 dark:bg-slate-900/80 shadow-xl relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tl from-brand-orange/5 to-transparent pointer-events-none" />
            
            <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed relative z-10">
              <p className="text-xl font-medium text-brand-blue dark:text-white">
                CareerQue is founded by <span className="font-bold">P R Manikantan</span>, a Strategic HR, Learning, and Organizational Effectiveness professional with over 31 years of experience.
              </p>
              <p>
                He has worked across HR leadership, learning and development, performance management, campus hiring, leadership development, and organizational transformation.
              </p>
              <p>
                His experience includes building capability frameworks, strengthening people processes, developing managers, and supporting business-aligned HR systems. He has also worked closely with students, institutions, and industry-academia initiatives to improve employability and career readiness.
              </p>
              <p>
                Manikantan has led large-scale talent development and fresher hiring initiatives across corporate environments. He has been recognized among the <span className="font-semibold text-brand-orange">Top 100 Training Minds in India</span> and the <span className="font-semibold text-brand-orange">Top 50 Training Minds in Tamil Nadu</span> by the World HRD Congress.
              </p>
              <p>
                His work brings together practical HR experience, learning strategy, leadership development, and structured problem-solving.
              </p>
              
              <div className="bg-brand-blue/5 dark:bg-brand-blue/10 p-6 rounded-2xl border border-brand-blue/10 dark:border-brand-blue/20 mt-8 text-center italic">
                "Through CareerQue, he aims to support students, institutions, and organizations with clear, practical, and outcome-focused guidance. His approach is rooted in simplicity, experience, and actionability. CareerQue reflects his belief that the right clarity can help people and organizations make better choices and grow with confidence."
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
