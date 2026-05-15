import { Trophy, Users, Lightbulb, Building } from "lucide-react";

export function TrustStrip() {
  const stats = [
    { id: 1, name: "Years Experience", value: "31+", icon: Trophy },
    { id: 2, name: "Students Mentored", value: "10,000+", icon: Users },
    { id: 3, name: "Corporate Partners", value: "50+", icon: Building },
    { id: 4, name: "Proprietary Frameworks", value: "15+", icon: Lightbulb },
  ];

  return (
    <div className="bg-brand-blue py-12 sm:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-3">
              <dt className="text-base leading-7 text-slate-300 flex items-center justify-center gap-2">
                <stat.icon className="h-5 w-5 text-brand-teal" />
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
