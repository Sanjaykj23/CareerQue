"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function Contact() {
  const inquiryOptions = [
    "Student Growth Solutions",
    "Institution Solutions",
    "Corporate Solutions",
    "SpeakSmart",
    "CareerQue Academy",
    "OrgPulse",
    "HR Effectiveness Review",
    "Other"
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            Connect with CareerQue
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We would be happy to understand your needs and explore how CareerQue can support your growth journey.
          </p>
        </div>

        <div className="glass-panel border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 bg-white/90 dark:bg-slate-900/90 shadow-xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300">Name</label>
                <Input id="name" placeholder="Your full name" className="bg-slate-50 dark:bg-slate-800" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300">Email</label>
                <Input id="email" type="email" placeholder="Your email address" className="bg-slate-50 dark:bg-slate-800" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300">Mobile Number</label>
                <Input id="mobile" type="tel" placeholder="Your mobile number" className="bg-slate-50 dark:bg-slate-800" />
              </div>
              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300">Organization / Institution Name</label>
                <Input id="organization" placeholder="Your organization or school" className="bg-slate-50 dark:bg-slate-800" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300">Area of Interest</label>
              <select 
                id="interest" 
                defaultValue=""
                className="flex h-10 w-full rounded-md border border-input bg-slate-50 dark:bg-slate-800 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-white"
              >
                <option value="" disabled>Select an option</option>
                {inquiryOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300">Message</label>
              <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] bg-slate-50 dark:bg-slate-800" />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8">
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}
