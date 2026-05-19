"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  organization?: string;
  interest?: string;
  message?: string;
}

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

if (GOOGLE_SCRIPT_URL == "") {
  console.error("Missing NEXT_PUBLIC_GOOGLE_SCRIPT_URL environment variable!");
} else {
  console.log("Crt URL")
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
    interest: "",
    message: "",
  });
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

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    // Mobile validation (Allows optional + and 10 to 15 digits)
    const mobileRegex = /^\+?[0-9]{10,15}$/;
    if (!formData.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required.";
    } else if (!mobileRegex.test(formData.mobile.replace(/[\s-]/g, ""))) {
      tempErrors.mobile = "Please enter a valid mobile number (10-15 digits).";
    }

    // Organization validation
    if (!formData.organization.trim()) {
      tempErrors.organization = "Organization or Institution name is required.";
    }

    // Area of Interest validation
    if (!formData.interest) {
      tempErrors.interest = "Please select an area of interest.";
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Please write a bit more detail (at least 10 characters).";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    // Clear specific error dynamically as user types
    if (errors[id as keyof FormErrors]) {
      setErrors({
        ...errors,
        [id]: undefined,
      });
    }
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Stop form submission if validation fails
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Convert formData to URLSearchParams to avoid CORS preflight issues
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // Bypasses CORS preflight triggering
        },
        body: JSON.stringify(formData),
      });
      alert("Inquiry submitted successfully!");

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        mobile: "",
        organization: "",
        interest: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <form onSubmit={handleSubmit} noValidate className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">Name</label>
                <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className={`bg-slate-50 dark:bg-slate-800 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
                {errors.name && <p className="text-xs font-medium text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">Email</label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email address" className={`bg-slate-50 dark:bg-slate-800 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
                {errors.email && <p className="text-xs font-medium text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">Mobile Number</label>
                <Input id="mobile" type="tel" value={formData.mobile} onChange={handleChange} placeholder="Your mobile number" className={`bg-slate-50 dark:bg-slate-800 ${errors.mobile ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
                {errors.mobile && <p className="text-xs font-medium text-red-500 mt-1">{errors.mobile}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">Organization / Institution Name</label>
                <Input id="organization" value={formData.organization} onChange={handleChange} placeholder="Your organization or school" className={`bg-slate-50 dark:bg-slate-800 ${errors.organization ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
                {errors.organization && <p className="text-xs font-medium text-red-500 mt-1">{errors.organization}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">Area of Interest</label>
              <select
                id="interest"
                value={formData.interest}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border bg-slate-50 dark:bg-slate-800 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-slate-700 dark:text-white ${errors.interest ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              >
                <option value="" disabled>Select an option</option>
                {inquiryOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
              {errors.interest && <p className="text-xs font-medium text-red-500 mt-1">{errors.interest}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">Message</label>
              <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" className={`min-h-[150px] bg-slate-50 dark:bg-slate-800 ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
              {errors.message && <p className="text-xs font-medium text-red-500 mt-1">{errors.message}</p>}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto h-12 px-8">
                {loading ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}