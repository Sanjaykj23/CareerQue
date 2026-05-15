"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, MessageSquare, Globe, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

type Tab = "student" | "institution" | "business";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<Tab>("business");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and automation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success animation
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  const tabs = [
    { id: "business", label: "Corporate / Business" },
    { id: "institution", label: "Institution" },
    { id: "student", label: "Student / Individual" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark transition-colors duration-300 pb-32">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white mb-6">
            Let's <span className="text-brand-orange">Connect</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Select your profile below so we can direct you to the right capability experts.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
              
              {/* Tab Navigation */}
              <div className="flex flex-col sm:flex-row border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Tab)}
                    className={`flex-1 py-4 px-6 text-sm font-semibold transition-colors relative ${activeTab === tab.id ? 'text-brand-teal' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-teal" />
                    )}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-12 relative min-h-[400px]">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-slate-900 z-10 rounded-b-3xl"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle className="h-24 w-24 text-green-500 mb-6" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Inquiry Received!</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-center max-w-sm">
                        Our experts will analyze your request and reach out within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                          <Input required placeholder="Jane Doe" className="dark:bg-slate-950 dark:border-slate-800" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                          <Input required type="email" placeholder="jane@example.com" className="dark:bg-slate-950 dark:border-slate-800" />
                        </div>
                      </div>

                      {activeTab === "business" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Name</label>
                            <Input required placeholder="Acme Corp" className="dark:bg-slate-950 dark:border-slate-800" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Interested In</label>
                            <select className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">
                              <option>OrgPulse Diagnostics</option>
                              <option>Leadership Engine</option>
                              <option>Culture Architecture</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {activeTab === "institution" && (
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Institution Name</label>
                          <Input required placeholder="University of Science" className="dark:bg-slate-950 dark:border-slate-800" />
                        </div>
                      )}

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                        <Textarea required placeholder="How can we help you achieve your goals?" className="min-h-[120px] dark:bg-slate-950 dark:border-slate-800" />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className={`w-full h-14 text-lg transition-all ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-blue hover:bg-brand-blue/90'}`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <motion.div 
                              animate={{ rotate: 360 }} 
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                              className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Inquiry <Send className="ml-2 h-5 w-5" />
                          </span>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Quick Connect Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Online & Ready</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-blue/10 dark:bg-slate-800 p-3 rounded-xl text-brand-blue dark:text-brand-teal">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">WhatsApp Direct</h4>
                    <p className="text-sm text-slate-500 mb-2">Instant responses for quick queries.</p>
                    <a href="#" className="text-brand-teal hover:underline text-sm font-medium">+1 (555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-blue/10 dark:bg-slate-800 p-3 rounded-xl text-brand-blue dark:text-brand-teal">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Email Us</h4>
                    <p className="text-sm text-slate-500 mb-2">Detailed inquiries and proposals.</p>
                    <a href="mailto:hello@careerque.com" className="text-brand-teal hover:underline text-sm font-medium">hello@careerque.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-blue/10 dark:bg-slate-800 p-3 rounded-xl text-brand-blue dark:text-brand-teal">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Global HQ</h4>
                    <p className="text-sm text-slate-500">100 Innovation Drive<br/>Tech District, CA 94103</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800/50">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect on Socials</h4>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-brand-blue hover:text-white rounded-full flex items-center justify-center text-slate-500 transition-colors">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
