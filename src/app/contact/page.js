'use client';

import { useState } from 'react';
import Link from 'next/link';

const inquiryTypes = [
  'Athlete Representation',
  'Media / Press Inquiry',
  'Sponsorship / Partnership',
  'Speaking Engagement',
  'General Inquiry',
  'Other',
];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.inquiryType) e.inquiryType = 'Please select a type';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  const inputClass = (field) =>
    `w-full bg-[#111827] border ${errors[field] ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500 transition-colors`;

  if (status === 'success') {
    return (
      <div className="bg-[#0a0f1e] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Message Sent!</h2>
          <p className="text-gray-400 mb-2">
            Thank you, <span className="text-white font-semibold">{form.firstName}</span>.
          </p>
          <p className="text-gray-500 mb-8">Our team will respond to <span className="text-amber-400">{form.email}</span> within 1–2 business days.</p>
          <button
            onClick={() => { setStatus('idle'); setForm(initialForm); }}
            className="text-sm text-gray-500 hover:text-amber-400 transition-colors underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0f1e] min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-400">Contact</span>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Get In Touch</div>
          <h1 className="text-5xl md:text-6xl font-black mb-5">
            Let&rsquo;s <span className="text-amber-500">Talk</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            Whether you&rsquo;re an athlete, a brand, or a member of the press — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-5">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">General</div>
                    <a href="mailto:info@begreatsportsmgmt.com" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">info@begreatsportsmgmt.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Media</div>
                    <a href="mailto:media@begreatsportsmgmt.com" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">media@begreatsportsmgmt.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Phone</div>
                    <a href="tel:+18002437328" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">+1 (800) 243-7328</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Offices</h3>
              <div className="space-y-4">
                {[
                  { city: 'Atlanta, GA', label: 'Headquarters', addr: '100 Peachtree St NE, Suite 2400' },
                  { city: 'Los Angeles, CA', label: 'West Coast', addr: '10250 Constellation Blvd, Suite 1800' },
                ].map((o) => (
                  <div key={o.city} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{o.city}</div>
                      <div className="text-xs text-amber-400/70">{o.label}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{o.addr}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Response Times</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { type: 'Representation inquiries', time: '3–5 business days' },
                  { type: 'Media requests', time: '24–48 hours' },
                  { type: 'Sponsorship inquiries', time: '2–3 business days' },
                  { type: 'General inquiries', time: '1–2 business days' },
                ].map((r) => (
                  <li key={r.type} className="flex justify-between">
                    <span className="text-gray-500">{r.type}</span>
                    <span className="text-amber-400 text-xs font-medium">{r.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-7">Send Us a Message</h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name <span className="text-amber-500">*</span></label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" className={inputClass('firstName')} />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name <span className="text-amber-500">*</span></label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith" className={inputClass('lastName')} />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email <span className="text-amber-500">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass('email')} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass('phone')} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Company / Organization</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company, team, or outlet" className={inputClass('company')} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Inquiry Type <span className="text-amber-500">*</span></label>
                  <select
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    className={`${inputClass('inquiryType')} appearance-none ${form.inquiryType ? 'text-white' : 'text-gray-600'}`}
                  >
                    <option value="" disabled>Select inquiry type...</option>
                    {inquiryTypes.map((t) => <option key={t} value={t} className="bg-[#111827] text-white">{t}</option>)}
                  </select>
                  {errors.inquiryType && <p className="text-red-400 text-xs mt-1">{errors.inquiryType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Message <span className="text-amber-500">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-70 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl text-base transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-gray-600 text-xs text-center">
                  We respect your privacy. Your information is never shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
