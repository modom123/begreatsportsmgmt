import Link from 'next/link';

export const metadata = {
  title: 'Services | BeGreat Sports Management',
  description: 'Full-service sports management: contract negotiation, brand development, endorsements, media relations, and financial planning.',
};

const services = [
  {
    id: 1,
    title: 'Contract Negotiation',
    tagline: 'Every dollar you deserve.',
    description:
      'Our legal and negotiation team fights for maximum value on every contract — from rookie deals to supermax extensions. We leverage deep league relationships and market data to ensure you never leave money on the table.',
    features: [
      'Comprehensive market analysis & comparable deals',
      'Multi-year contract structuring & guarantees',
      'Incentive clauses, no-trade provisions & opt-outs',
      'International league contract expertise',
      'Renegotiation & extension strategy',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    stat: '$200M+',
    statLabel: 'In contracts negotiated',
    gradient: 'from-amber-500/20 to-orange-600/10',
    border: 'border-amber-500/30',
  },
  {
    id: 2,
    title: 'Brand Development',
    tagline: 'Beyond the game.',
    description:
      'Your name is a brand. We build, protect, and grow it strategically — helping you create a lasting identity that resonates with fans, sponsors, and the public long after your playing days.',
    features: [
      'Personal brand strategy & positioning',
      'Social media strategy & content direction',
      'Logo, visual identity & style guidelines',
      'Public image management & messaging',
      'Community & legacy program development',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    stat: '100+',
    statLabel: 'Brand campaigns launched',
    gradient: 'from-purple-500/20 to-pink-600/10',
    border: 'border-purple-500/30',
  },
  {
    id: 3,
    title: 'Endorsements & Sponsorships',
    tagline: 'The right deal with the right brand.',
    description:
      'We connect athletes with brand partners that align with their values, image, and audience — negotiating deals that maximize value while protecting your reputation. No mismatches, no conflicts, no compromises.',
    features: [
      'Brand partnership identification & vetting',
      'Deal structuring, negotiation & closing',
      'Multi-year sponsorship agreements',
      'Exclusivity & category conflict management',
      'NIL strategy for collegiate athletes',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '300+',
    statLabel: 'Endorsement deals closed',
    gradient: 'from-green-500/20 to-teal-600/10',
    border: 'border-green-500/30',
  },
  {
    id: 4,
    title: 'Media & Public Relations',
    tagline: 'Your story, told right.',
    description:
      'We manage your media presence from daily press requests to major campaign launches. Our PR team ensures every interview, appearance, and statement represents you exactly as intended.',
    features: [
      'Press release writing & distribution',
      'Interview scheduling & media prep',
      'Crisis communications & reputation management',
      'Red carpet, event & appearance management',
      'Sports media & journalist relationship network',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stat: '500+',
    statLabel: 'Media placements secured',
    gradient: 'from-blue-500/20 to-indigo-600/10',
    border: 'border-blue-500/30',
  },
  {
    id: 5,
    title: 'Financial Planning',
    tagline: 'Protect what you earn.',
    description:
      'Athletic careers are short. We work alongside certified financial advisors to ensure your wealth is structured, invested, and protected — so your money works as hard as you do.',
    features: [
      'Budget planning & spending accountability',
      'Investment strategy & portfolio diversification',
      'Tax optimization & planning',
      'Insurance & risk management',
      'Post-career financial independence planning',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stat: '98%',
    statLabel: 'Client financial satisfaction',
    gradient: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/30',
  },
  {
    id: 6,
    title: 'Career Transition',
    tagline: 'Life after the game.',
    description:
      'We prepare athletes for the next chapter — whether that\'s broadcasting, business ownership, coaching, or public service. Your career in sports is chapter one, not the whole story.',
    features: [
      'Post-career identity & vision planning',
      'Business venture evaluation & launch support',
      'Broadcasting & media career development',
      'Higher education & certification guidance',
      'Speaking, coaching & mentorship opportunities',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stat: '40+',
    statLabel: 'Successful career transitions',
    gradient: 'from-orange-500/20 to-red-600/10',
    border: 'border-orange-500/30',
  },
];

export default function ServicesPage() {
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
          <span className="text-gray-400">Services</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">What We Do</div>
          <h1 className="text-5xl md:text-6xl font-black mb-5">
            Full-Service <span className="text-amber-500">Management</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            From contract day one to life after sport — we cover every aspect of an athlete&rsquo;s professional and personal growth.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-gradient-to-br ${service.gradient} border ${service.border} rounded-2xl p-8 md:p-10`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
                {/* Icon + stat */}
                <div className="shrink-0 flex flex-col items-center md:items-start gap-4 md:w-48">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10">
                    {service.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-black text-amber-400">{service.stat}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{service.statLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-amber-400/60 text-xs font-semibold uppercase tracking-widest mb-1">{service.tagline}</div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{service.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#0d1220]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">How It Works</div>
            <h2 className="text-4xl font-black">Our <span className="text-amber-500">Process</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We learn your goals, career stage, and what you need from a management partner.' },
              { step: '02', title: 'Strategy Development', desc: 'We build a customized plan covering contracts, brand, endorsements, and finances.' },
              { step: '03', title: 'Execution', desc: 'Our team goes to work — negotiating, building, pitching, and protecting.' },
              { step: '04', title: 'Ongoing Partnership', desc: 'We stay actively involved, adapting strategy as your career evolves.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#111827] border border-gray-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-amber-500/30 mb-3">{item.step}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">
            Ready to <span className="text-amber-500">Work Together?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Let&rsquo;s talk about how BeGreat can help you maximize your career, your brand, and your future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition-all text-lg shadow-lg shadow-amber-500/20"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
