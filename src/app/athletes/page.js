import Link from 'next/link';

export const metadata = {
  title: 'Our Athletes | BeGreat Sports Management',
  description: 'Meet the world-class athletes represented by BeGreat Sports Management across all major sports.',
};

const sports = ['All', 'Basketball', 'Football', 'Soccer', 'Tennis', 'Track & Field', 'Swimming'];

const athletes = [
  {
    id: 1,
    name: 'Marcus Johnson',
    sport: 'Basketball',
    position: 'Point Guard',
    team: 'Metro Hawks',
    nationality: 'USA',
    bio: 'A dynamic point guard known for exceptional court vision and clutch performances. Marcus has earned All-Star honors 3 consecutive years.',
    stats: [{ label: 'PPG', value: '24.7' }, { label: 'APG', value: '9.2' }, { label: 'RBG', value: '4.1' }],
    achievements: ['3x All-Star', '2x Champion', 'MVP 2023'],
    gradient: 'from-orange-500 to-red-600',
    initials: 'MJ',
    since: '2019',
  },
  {
    id: 2,
    name: 'Taylor Williams',
    sport: 'Football',
    position: 'Wide Receiver',
    team: 'Coastal Lions',
    nationality: 'USA',
    bio: 'An explosive wide receiver with exceptional route running. Taylor holds multiple franchise records and is a 2x Pro Bowler.',
    stats: [{ label: 'REC', value: '94' }, { label: 'YDS', value: '1,342' }, { label: 'TDs', value: '11' }],
    achievements: ['2x Pro Bowl', 'Rookie of Year', '1,000+ Yds 4x'],
    gradient: 'from-blue-500 to-indigo-600',
    initials: 'TW',
    since: '2020',
  },
  {
    id: 3,
    name: 'Jordan Chen',
    sport: 'Soccer',
    position: 'Midfielder',
    team: 'Capital FC',
    nationality: 'Canada',
    bio: 'A creative midfielder with elite technical skills. Jordan has represented the national team in two World Cups.',
    stats: [{ label: 'Goals', value: '18' }, { label: 'Assists', value: '24' }, { label: 'Apps', value: '32' }],
    achievements: ['2x World Cup', 'League MVP', 'Golden Boot'],
    gradient: 'from-emerald-500 to-teal-600',
    initials: 'JC',
    since: '2018',
  },
  {
    id: 4,
    name: 'Alexis Rivera',
    sport: 'Tennis',
    position: 'Professional',
    team: 'International Tour',
    nationality: 'Puerto Rico',
    bio: 'A powerful baseline player with a devastating serve. Alexis has claimed four Grand Slam titles and is ranked world #3.',
    stats: [{ label: 'Ranking', value: '#3' }, { label: 'Titles', value: '22' }, { label: 'Slams', value: '4' }],
    achievements: ['4x Grand Slam', 'WTA #3', 'Olympic Silver'],
    gradient: 'from-purple-500 to-pink-600',
    initials: 'AR',
    since: '2017',
  },
  {
    id: 5,
    name: 'Cameron Davis',
    sport: 'Track & Field',
    position: '200m / 400m Sprinter',
    team: 'National Athletics',
    nationality: 'Jamaica',
    bio: 'One of the fastest athletes in the world. Cameron holds national records in both the 200m and 400m and is a 2x Olympic gold medalist.',
    stats: [{ label: '200m', value: '19.86s' }, { label: '400m', value: '43.21s' }, { label: 'Medals', value: '8' }],
    achievements: ['2x Olympic Gold', 'World Champion', 'National Record'],
    gradient: 'from-amber-500 to-orange-600',
    initials: 'CD',
    since: '2016',
  },
  {
    id: 6,
    name: 'Morgan Thompson',
    sport: 'Swimming',
    position: 'Freestyle / Butterfly',
    team: 'Aquatic Elite',
    nationality: 'Australia',
    bio: 'A versatile swimmer with world-record times. Morgan has claimed six Olympic medals across three Games.',
    stats: [{ label: 'Olympic', value: '6 Medals' }, { label: 'WRs', value: '2' }, { label: 'Golds', value: '4' }],
    achievements: ['6 Olympic Medals', '2x World Record', 'Hall of Fame'],
    gradient: 'from-cyan-500 to-blue-600',
    initials: 'MT',
    since: '2015',
  },
  {
    id: 7,
    name: 'Devon Harris',
    sport: 'Basketball',
    position: 'Small Forward',
    team: 'Eastside Thunder',
    nationality: 'USA',
    bio: 'A versatile forward known for his tenacious defense and clutch shooting. Devon is a two-way player capable of changing games on both ends.',
    stats: [{ label: 'PPG', value: '19.3' }, { label: 'RPG', value: '7.8' }, { label: 'SPG', value: '2.1' }],
    achievements: ['Defensive Player of Year', '1x All-Star', 'Finals MVP'],
    gradient: 'from-red-500 to-rose-600',
    initials: 'DH',
    since: '2021',
  },
  {
    id: 8,
    name: 'Sofia Reyes',
    sport: 'Soccer',
    position: 'Forward',
    team: 'United FC',
    nationality: 'Mexico',
    bio: 'A prolific striker with elite finishing ability. Sofia is the all-time leading scorer in her league and a national team captain.',
    stats: [{ label: 'Goals', value: '31' }, { label: 'Assists', value: '14' }, { label: 'Apps', value: '34' }],
    achievements: ['3x Golden Boot', 'National Team Captain', 'Liga MVP'],
    gradient: 'from-green-500 to-emerald-600',
    initials: 'SR',
    since: '2022',
  },
];

export default function AthletesPage() {
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
          <span className="text-gray-400">Athletes</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Roster</div>
          <h1 className="text-5xl md:text-6xl font-black mb-5">
            World-Class <span className="text-amber-500">Athletes</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We represent champions across every major sport. Each athlete is hand-selected — not for fame, but for character, drive, and potential.
          </p>
        </div>

        {/* Sport filter pills — static display (would be interactive with client component) */}
        <div className="relative z-10 flex flex-wrap justify-center gap-2 mt-10">
          {sports.map((sport, i) => (
            <span
              key={sport}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                i === 0
                  ? 'bg-amber-500 border-amber-500 text-black'
                  : 'bg-[#111827] border-gray-700 text-gray-400 hover:border-amber-500/50 hover:text-amber-400'
              }`}
            >
              {sport}
            </span>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-gray-800 bg-[#0d1220] py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
          {[
            { value: '50+', label: 'Athletes Represented' },
            { value: '15+', label: 'Sports' },
            { value: '12', label: 'Nationalities' },
            { value: '$200M+', label: 'In Contracts' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black text-amber-500">{s.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Athletes grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {athletes.map((athlete) => (
              <div
                key={athlete.id}
                className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 hover:-translate-y-1 transition-all group"
              >
                {/* Card header */}
                <div className={`relative bg-gradient-to-br ${athlete.gradient} p-5 flex items-end`} style={{ minHeight: 120 }}>
                  <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-semibold text-white">
                    {athlete.sport}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/20 rounded-full px-2 py-0.5 text-xs text-white/70">
                    Since {athlete.since}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-xl font-black text-white">
                    {athlete.initials}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="font-bold text-white">{athlete.name}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{athlete.position} &bull; {athlete.team}</p>
                  <p className="text-gray-400 text-xs mt-2.5 leading-relaxed line-clamp-2">{athlete.bio}</p>

                  {/* Stats */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-800">
                    {athlete.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-white font-bold text-sm">{stat.value}</div>
                        <div className="text-gray-600 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {athlete.achievements.slice(0, 2).map((a) => (
                      <span key={a} className="bg-amber-500/10 text-amber-400 text-xs px-2 py-0.5 rounded-full border border-amber-500/20">
                        {a}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/media-kits"
                    className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-amber-400 bg-white/5 hover:bg-amber-500/10 border border-gray-700 hover:border-amber-500/30 py-2 rounded-xl transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Media Kit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representation CTA */}
      <section className="py-20 px-6 bg-[#0d1220]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Looking for <span className="text-amber-500">Representation?</span></h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We selectively take on new clients who demonstrate elite talent, character, and commitment to greatness.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-amber-500/20"
          >
            Apply for Representation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
