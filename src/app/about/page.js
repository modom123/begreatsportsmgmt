import Link from 'next/link';

export const metadata = {
  title: 'About Us | BeGreat Sports Management',
  description: 'Learn about BeGreat Sports Management — our story, mission, leadership team, and values.',
};

const values = [
  {
    title: 'Integrity First',
    description: 'Every deal, every negotiation, every relationship is built on honesty and transparency.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Athlete First',
    description: 'Our athletes are not clients — they are partners. Their success is our only metric.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Excellence Always',
    description: 'We hold ourselves to the same standard we expect from the elite athletes we represent.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Vision',
    description: 'We don\'t chase short wins. We build careers that outlast the playing years.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'Marcus Odom',
    title: 'Founder & CEO',
    bio: 'Former professional athlete turned agent. Marcus founded BeGreat with a single mission: give athletes the representation he wished he had.',
    initials: 'MO',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Danielle Carter',
    title: 'VP of Athlete Relations',
    bio: 'With 12 years in sports management, Danielle oversees day-to-day athlete support, scheduling, and relationship management.',
    initials: 'DC',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'James Whitfield',
    title: 'Head of Contract Negotiations',
    bio: 'A former sports attorney, James has negotiated over $120M in contracts and endorsement deals across NBA, NFL, and international leagues.',
    initials: 'JW',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Serena Vega',
    title: 'Director of Brand & Media',
    bio: 'Serena leads all brand development, PR, and media strategy — building athlete brands that connect authentically with fans and sponsors.',
    initials: 'SV',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const milestones = [
  { year: '2014', event: 'BeGreat Sports Management founded in Atlanta, GA' },
  { year: '2016', event: 'Reached $10M in negotiated contracts. First NFL client signed.' },
  { year: '2018', event: 'Expanded to Los Angeles. First international athlete represented.' },
  { year: '2020', event: 'Crossed 25 active athletes. Launched brand development division.' },
  { year: '2022', event: '$100M+ in total negotiated contracts. Named top 10 boutique agency.' },
  { year: '2024', event: '50+ athletes across 15+ sports. Expanded media & endorsement unit.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0f1e] min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-20 text-center overflow-hidden">
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
          <span className="text-gray-400">About Us</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Built by Athletes,{' '}
            <span className="text-amber-500">For Athletes</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
            BeGreat Sports Management was founded on a simple belief: athletes deserve representation that fights as hard for them as they fight on the field.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 px-6 bg-[#0d1220] border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl text-amber-500 mb-6">&ldquo;</div>
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
            Our mission is to maximize every athlete&rsquo;s potential — on the field, in the boardroom, and beyond their playing career.
          </blockquote>
          <div className="mt-6 text-gray-500">— Marcus Odom, Founder & CEO</div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Stand For</div>
            <h2 className="text-4xl font-black">Our <span className="text-amber-500">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#111827] border border-gray-800 rounded-2xl p-7 hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-[#0d1220]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">History</div>
            <h2 className="text-4xl font-black">Our <span className="text-amber-500">Journey</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gray-800" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-[72px] shrink-0 text-right">
                    <span className="text-amber-500 font-black text-sm">{m.year}</span>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-[#0d1220]" />
                    <p className="text-gray-300 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Leadership</div>
            <h2 className="text-4xl font-black">Meet the <span className="text-amber-500">Team</span></h2>
            <p className="text-gray-400 text-lg mt-3 max-w-xl mx-auto">
              Industry veterans who have walked the walk — former athletes, attorneys, and brand builders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all">
                <div className={`h-32 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-2xl font-black text-white">
                    {member.initials}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mt-0.5 mb-3">{member.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to <span className="text-amber-500">Be Great?</span></h2>
          <p className="text-gray-400 mb-8">Join the roster of elite athletes who trust BeGreat to build their legacy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition-all">
              Contact Us
            </Link>
            <Link href="/athletes" className="border border-gray-700 hover:border-amber-500 text-gray-300 hover:text-amber-400 font-semibold px-8 py-4 rounded-lg transition-all">
              View Our Roster
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
