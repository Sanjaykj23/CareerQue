"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const INQUIRY_TYPES = ["student", "institution", "corporate"] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  inquiryType: z.enum(INQUIRY_TYPES, {
    message: "Please select an inquiry type",
  }),

  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "student",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Backend logic to be handled by user
    console.log("Form submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    reset();
    alert("Thank you! We will get in touch soon.");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
      {/* Interactive Light Mode Background */}
      <div className="absolute inset-0 z-0 overflow-hidden dark:hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[10%] w-[40%] h-[40%] rounded-full bg-brand-teal/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl">Get in Touch</CardTitle>
              <CardDescription className="text-base mt-2">
                Select how we can help you and we'll direct your inquiry to the right team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="text-sm font-medium text-slate-700">I am inquiring as a...</label>
                  <select
                    {...register("inquiryType")}
                    id="inquiryType"
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                  >
                    <option value="student">Student / Parent</option>
                    <option value="institution">Educational Institution</option>
                    <option value="corporate">Corporate Organization</option>
                  </select>
                  {errors.inquiryType && <p className="text-sm text-red-500">{errors.inquiryType.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <Input id="name" placeholder="John Doe" {...register("name")} />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" {...register("email")} />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" {...register("message")} />
                  {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                </div>

                <Button type="submit" className="w-full h-12 text-lg" variant="accent" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
