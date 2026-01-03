import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const ContactComponent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">
          Let's build your brand
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Ping us on WhatsApp and we'll reply within one business day. Clear pricing, quick timelines, and a friendly process.
        </p>
        <div className="mt-6 flex gap-3">
          <WhatsAppButton size="lg" label="Open WhatsApp" />
        </div>
        <ul className="mt-6 space-y-3 text-sm dark:text-slate-300">
          <li>📧 chetancreativemindd@gmail.com</li>
          <li>📍 Indore, India</li>
          <li>🔗 Instagram & FrameBrush links in footer</li>
        </ul>
      </div>
      <form 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 transition-colors" 
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm dark:text-slate-300" htmlFor="name">
              Name
            </label>
            <input 
              id="name" 
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 px-3 py-2 outline-none focus:ring-2 ring-slate-400 dark:ring-purple-500 bg-white dark:bg-slate-700 dark:text-white transition-colors" 
              placeholder="Your name" 
            />
          </div>
          <div>
            <label className="text-sm dark:text-slate-300" htmlFor="email">
              Email
            </label>
            <input 
              id="email" 
              type="email" 
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 px-3 py-2 outline-none focus:ring-2 ring-slate-400 dark:ring-purple-500 bg-white dark:bg-slate-700 dark:text-white transition-colors" 
              placeholder="you@example.com" 
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm dark:text-slate-300" htmlFor="message">
              Project details
            </label>
            <textarea 
              id="message" 
              rows={5} 
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 px-3 py-2 outline-none focus:ring-2 ring-slate-400 dark:ring-purple-500 bg-white dark:bg-slate-700 dark:text-white transition-colors" 
              placeholder="What are you building?" 
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              By submitting, you agree to our friendly privacy policy.
            </div>
            <button className="px-5 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-xl hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <ContactComponent />
      </motion.div>
    </section>
  );
};

export default Contact;