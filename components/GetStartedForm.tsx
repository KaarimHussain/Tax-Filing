'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function FormContent() {
  const searchParams = useSearchParams();
  const [service, setService] = useState('Marketing');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setService(serviceParam);
    }
  }, [searchParams]);

  return (
    <form className="space-y-6 bg-white p-8 md:p-12 rounded-2xl border border-brand-navy/5 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-brand-navy/60 mb-2">Full Name</label>
          <input type="text" className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all" placeholder="John Doe" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy/60 mb-2">Email Address</label>
          <input type="email" className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all" placeholder="john@example.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-brand-navy/60 mb-2">Phone Number</label>
          <input type="tel" className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all" placeholder="+1 (555) 000-0000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy/60 mb-2">Country</label>
          <input type="text" className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all" placeholder="Pakistan / USA / Global" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-brand-navy/60 mb-2">Business Name</label>
          <input type="text" className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all" placeholder="Your Brand Name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy/60 mb-2">Website / Store Link</label>
          <input type="url" className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all" placeholder="https://yourstore.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-brand-navy/60 mb-2">Are you a brand, seller, agency, or startup?</label>
          <select className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer">
            <option>Brand</option>
            <option>Seller</option>
            <option>Agency</option>
            <option>Startup</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy/60 mb-2">Preferred Platform</label>
          <select className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer">
            <option>Amazon</option>
            <option>Shopify</option>
            <option>TikTok Shop</option>
            <option>Walmart</option>
            <option>Meta / Google</option>
            <option>Other</option>
          </select>
        </div>
      </div>



      <div>
        <label className="block text-sm font-medium text-brand-navy/60 mb-2">Which service do you need?</label>
        <select 
          value={service} 
          onChange={(e) => setService(e.target.value)}
          className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer"
        >
          <option>Marketing</option>
          <option>E-commerce</option>
          <option>Trade</option>
          <option>Marketing + E-commerce</option>
          <option>E-commerce + Trade</option>
          <option>Full Service Support</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy/60 mb-2">Message / Notes</label>
        <textarea rows={4} className="w-full bg-slate-50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red transition-all" placeholder="Tell us about your business, current challenges, and the type of support you need."></textarea>
      </div>

      <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-red/20 uppercase tracking-widest">
        Submit Request
      </button>
    </form>
  );
}

export default function GetStartedForm() {
  return (
    <Suspense fallback={<div className="text-brand-navy text-center">Loading form...</div>}>
      <FormContent />
    </Suspense>
  );
}
