import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BookOpen, Mic, Briefcase, GraduationCap, Building2, BarChart } from "lucide-react";
import Link from "next/link";

export function SolutionsGrid() {
  const studentSolutions = [
    { title: "Assessments", description: "Comprehensive capability and psychometric evaluations.", icon: BookOpen },
    { title: "SpeakSmart", description: "Communication and soft skills mastery programs.", icon: Mic },
    { title: "Career Compass", description: "Personalized career pathing and guidance.", icon: GraduationCap },
  ];

  const corporateSolutions = [
    { title: "OrgPulse", description: "Organizational health and capability diagnostics.", icon: BarChart },
    { title: "Leadership Engine", description: "Executive coaching and leadership pipelines.", icon: Briefcase },
    { title: "Culture Architect", description: "Building high-performance corporate cultures.", icon: Building2 },
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
      {/* Interactive Light Mode Background */}
      <div className="absolute inset-0 z-0 overflow-hidden dark:hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-brand-teal/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-blue/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Student Solutions */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">Student & Institution Solutions</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Unlock the full potential of students with our targeted developmental frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentSolutions.map((solution, idx) => (
              <Card key={idx} className="group border-slate-200 hover:border-brand-teal transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors text-brand-teal">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-brand-teal hover:text-brand-teal hover:bg-brand-teal/10 p-0" >
                    <Link href="/student-solutions">Learn more &rarr;</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Solutions */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">Corporate Solutions</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Drive organizational excellence through strategic capability building.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateSolutions.map((solution, idx) => (
              <Card key={idx} className="group border-slate-200 hover:border-brand-blue transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10 p-0" >
                    <Link href="/corporate-solutions">Learn more &rarr;</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
