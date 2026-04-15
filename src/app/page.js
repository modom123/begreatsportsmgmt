import Link from 'next/link';

const stats = [
  { value: '50+', label: 'Athletes Represented' },
  { value: '$200M+', label: 'Contracts Negotiated' },
  { value: '15+', label: 'Sports Covered' },
  { value: '10+', label: 'Years of Excellence' },
];

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Contract Negotiation',
    description: 'Securing the best deals and ensuring athletes are compensated at their true market value.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Brand Development',
    description: 'Building powerful personal brands that extend beyond the playing field and create lasting legacies.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Media Relations',
    description: 'Managing media appearances, press coverage, and public relations to keep athletes in the spotlight.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Endorsements',
    description: 'Connecting athletes with the right brand partners to maximize endorsement value and alignment.',
  },
];

export default function Home() {
  return (
    <div className="bg-[#0a0f1e] min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[92vh] text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Elite Sports Management
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
            BE{' '}
            <span className="text-amber-500">GREAT</span>
            <br />
            <span className="text-gray-300 text-4xl md:text-5xl font-bold tracking-widest uppercase">
              Sports Management
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Representing world-class athletes. Building legendary careers. Delivering results that speak for themselves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/media-kits"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition-all text-lg shadow-lg shadow-amber-500/20"
            >
              View Media Kits
            </Link>
            <a
              href="#services"
              className="border border-gray-700 hover:border-amber-500 hover:text-amber-400 text-gray-300 font-semibold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-800 bg-[#0d1220] py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-black text-amber-500">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Our <span className="text-amber-500">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Everything an elite athlete needs to succeed on and off the field.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-7 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kits CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-3xl p-12 text-center">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Press & Media</div>
          <h2 className="text-4xl font-black mb-4">
            Access Our <span className="text-amber-500">Media Kits</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Athlete profiles, brand assets, downloadable press packages, and everything you need for comprehensive coverage.
          </p>
          <Link
            href="/media-kits"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition-all text-lg shadow-lg shadow-amber-500/20"
          >
            Access Media Kits
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
