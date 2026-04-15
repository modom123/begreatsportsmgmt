const athletes = [
  {
    id: 1,
    name: 'Marcus Johnson',
    sport: 'Basketball',
    position: 'Point Guard',
    team: 'Metro Hawks',
    bio: 'A dynamic point guard known for exceptional court vision and clutch performances. Marcus has earned All-Star honors 3 consecutive years and led his team to back-to-back championships.',
    stats: [
      { label: 'PPG', value: '24.7' },
      { label: 'APG', value: '9.2' },
      { label: 'RBG', value: '4.1' },
    ],
    achievements: ['3x All-Star', '2x Champion', 'MVP 2023'],
    gradient: 'from-orange-500 to-red-600',
    initials: 'MJ',
  },
  {
    id: 2,
    name: 'Taylor Williams',
    sport: 'Football',
    position: 'Wide Receiver',
    team: 'Coastal Lions',
    bio: 'An explosive wide receiver with exceptional route running and hands. Taylor holds multiple franchise records and was named to the Pro Bowl twice in the early years of his career.',
    stats: [
      { label: 'REC', value: '94' },
      { label: 'YDS', value: '1,342' },
      { label: 'TDs', value: '11' },
    ],
    achievements: ['2x Pro Bowl', 'Rookie of Year', '1,000+ Yds 4x'],
    gradient: 'from-blue-500 to-indigo-600',
    initials: 'TW',
  },
  {
    id: 3,
    name: 'Jordan Chen',
    sport: 'Soccer',
    position: 'Midfielder',
    team: 'Capital FC',
    bio: 'A creative midfielder with elite technical skills and game intelligence. Jordan has represented the national team in two World Cups and is renowned for their exceptional passing range.',
    stats: [
      { label: 'Goals', value: '18' },
      { label: 'Assists', value: '24' },
      { label: 'Apps', value: '32' },
    ],
    achievements: ['2x World Cup', 'League MVP', 'Golden Boot'],
    gradient: 'from-emerald-500 to-teal-600',
    initials: 'JC',
  },
  {
    id: 4,
    name: 'Alexis Rivera',
    sport: 'Tennis',
    position: 'Professional',
    team: 'International Tour',
    bio: 'A powerful baseline player with a devastating serve and mental fortitude under pressure. Alexis has claimed four Grand Slam titles and is consistently ranked in the world top 5.',
    stats: [
      { label: 'Ranking', value: '#3' },
      { label: 'Titles', value: '22' },
      { label: 'Slams', value: '4' },
    ],
    achievements: ['4x Grand Slam', 'WTA #3', 'Olympic Silver'],
    gradient: 'from-purple-500 to-pink-600',
    initials: 'AR',
  },
  {
    id: 5,
    name: 'Cameron Davis',
    sport: 'Track & Field',
    position: '200m / 400m Sprinter',
    team: 'National Athletics',
    bio: 'One of the fastest athletes in the world, Cameron holds national records in both the 200m and 400m. A two-time Olympic gold medalist with eight international medals overall.',
    stats: [
      { label: '200m', value: '19.86s' },
      { label: '400m', value: '43.21s' },
      { label: 'Medals', value: '8' },
    ],
    achievements: ['2x Olympic Gold', 'World Champion', 'National Record'],
    gradient: 'from-amber-500 to-orange-600',
    initials: 'CD',
  },
  {
    id: 6,
    name: 'Morgan Thompson',
    sport: 'Swimming',
    position: 'Freestyle / Butterfly',
    team: 'Aquatic Elite',
    bio: 'A versatile swimmer with world-record times in multiple events. Morgan has claimed six Olympic medals across three Games and is considered one of the greatest swimmers of their generation.',
    stats: [
      { label: 'Olympic', value: '6 Medals' },
      { label: 'WRs', value: '2' },
      { label: 'Golds', value: '4' },
    ],
    achievements: ['6 Olympic Medals', '2x World Record', 'Hall of Fame'],
    gradient: 'from-cyan-500 to-blue-600',
    initials: 'MT',
  },
];

export default function AthleteProfiles() {
  return (
    <section id="athletes" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Roster</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Athlete <span className="text-amber-500">Profiles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Download individual athlete media kits including bios, stats, and high-resolution photography.
          </p>
        </div>

        {/* Athletes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {athletes.map((athlete) => (
            <div
              key={athlete.id}
              className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all group"
            >
              {/* Card header with avatar */}
              <div className={`relative bg-gradient-to-br ${athlete.gradient} p-6 flex items-end`} style={{ minHeight: 140 }}>
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                  {athlete.sport}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-2xl font-black text-white">
                  {athlete.initials}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{athlete.name}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {athlete.position} &bull; {athlete.team}
                  </p>
                </div>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed line-clamp-3">{athlete.bio}</p>

                {/* Stats row */}
                <div className="flex gap-4 mt-4 pt-4 border-t border-gray-800">
                  {athlete.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-white font-bold text-base">{stat.value}</div>
                      <div className="text-gray-600 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Achievement pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {athlete.achievements.map((a) => (
                    <span
                      key={a}
                      className="bg-amber-500/10 text-amber-400 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-500/20"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                {/* Download button */}
                <a
                  href={`/media-kits/${athlete.name.toLowerCase().replace(/\s+/g, '-')}-media-kit.pdf`}
                  download
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-amber-500/10 border border-gray-700 hover:border-amber-500/40 text-gray-300 hover:text-amber-400 font-semibold py-2.5 rounded-xl text-sm transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Media Kit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
