'use client';

import { useState } from 'react';

const athletes = [
  'Marcus Johnson',
  'Taylor Williams',
  'Jordan Chen',
  'Alexis Rivera',
  'Cameron Davis',
  'Morgan Thompson',
];

const purposes = [
  'Press Feature / Article',
  'Interview Request',
  'Broadcast / TV Coverage',
  'Podcast / Radio',
  'Social Media Feature',
  'Sponsorship / Brand Partnership',
  'Other',
];

const initialForm = {
  name: '',
  email: '',
  organization: '',
  purpose: '',
  athletes: [],
  message: '',
};

export default function MediaKitRequestForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.organization.trim()) e.organization = 'Organization is required.';
    if (!form.purpose) e.purpose = 'Please select a purpose.';
    return e;
  };

  const toggleAthlete = (name) => {
    setForm((prev) => ({
      ...prev,
      athletes: prev.athletes.includes(name)
        ? prev.athletes.filter((a) => a !== name)
        : [...prev.athletes, name],
    }));
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

    // Simulate API call — replace with your email service (e.g. Resend, SendGrid)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <section id="request" className="py-24 px-6 bg-[#0d1220]">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Request Received!</h2>
          <p className="text-gray-400 text-lg mb-2">
            Thank you, <span className="text-white font-semibold">{form.name}</span>.
          </p>
          <p className="text-gray-500">
            Our media team will review your request and follow up at{' '}
            <span className="text-amber-400">{form.email}</span> within 24&ndash;48 hours.
          </p>
          <button
            onClick={() => { setStatus('idle'); setForm(initialForm); }}
            className="mt-8 text-sm text-gray-500 hover:text-amber-400 transition-colors underline underline-offset-4"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="request" className="py-24 px-6 bg-[#0d1220]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Request a <span className="text-amber-500">Media Kit</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Need custom materials or have a specific media inquiry? Fill out the form below and our team will respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Full Name <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className={`w-full bg-[#111827] border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500 transition-colors`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email Address <span className="text-amber-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@outlet.com"
                className={`w-full bg-[#111827] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500 transition-colors`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Organization */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Media Outlet / Organization <span className="text-amber-500">*</span>
            </label>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              placeholder="ESPN, Sports Illustrated, Your Podcast..."
              className={`w-full bg-[#111827] border ${errors.organization ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500 transition-colors`}
            />
            {errors.organization && <p className="text-red-400 text-xs mt-1">{errors.organization}</p>}
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Purpose of Request <span className="text-amber-500">*</span>
            </label>
            <select
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              className={`w-full bg-[#111827] border ${errors.purpose ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors appearance-none ${form.purpose ? 'text-white' : 'text-gray-600'}`}
            >
              <option value="" disabled>Select a purpose...</option>
              {purposes.map((p) => (
                <option key={p} value={p} className="bg-[#111827] text-white">{p}</option>
              ))}
            </select>
            {errors.purpose && <p className="text-red-400 text-xs mt-1">{errors.purpose}</p>}
          </div>

          {/* Athlete selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Athlete(s) of Interest{' '}
              <span className="text-gray-600 font-normal">(select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {athletes.map((athlete) => {
                const selected = form.athletes.includes(athlete);
                return (
                  <button
                    key={athlete}
                    type="button"
                    onClick={() => toggleAthlete(athlete)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${
                      selected
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                        : 'bg-[#111827] border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {selected && <span className="mr-1">&#10003;</span>}
                    {athlete}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Additional Details
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us more about your project, publication, publication date, or any specific requests..."
              className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
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
                Submitting...
              </>
            ) : (
              <>
                Submit Media Kit Request
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>

          <p className="text-gray-600 text-xs text-center">
            By submitting, you agree to our privacy policy. We typically respond within 24 business hours.
          </p>
        </form>
      </div>
    </section>
  );
}
