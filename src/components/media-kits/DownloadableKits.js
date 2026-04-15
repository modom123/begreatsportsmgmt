'use client';

import { useState } from 'react';

const kits = [
  {
    id: 1,
    name: 'Standard Press Kit',
    description:
      'Essential materials for print and online media. Includes full athlete bios, high-res headshots, career statistics, and career highlights.',
    includes: ['Full athlete biographies', 'High-res headshots (300 dpi)', 'Career statistics sheet', 'Press quotes & soundbites'],
    size: '12.4 MB',
    format: 'PDF + ZIP',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    featured: false,
    file: '/media-kits/standard-press-kit.zip',
  },
  {
    id: 2,
    name: 'Digital Media Package',
    description:
      'Optimized assets for digital, web, and social media use. Includes web-ready images, social graphics, and digital-first content.',
    includes: ['Social media graphics (all sizes)', 'Web-optimized images (72 dpi)', 'Digital athlete bio (HTML)', 'Brand-compliant templates'],
    size: '28.7 MB',
    format: 'ZIP',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    featured: false,
    file: '/media-kits/digital-media-package.zip',
  },
  {
    id: 3,
    name: 'Broadcast Package',
    description:
      'Comprehensive materials for TV and radio coverage. Includes B-roll footage, talking points, and broadcast-ready content.',
    includes: ['Video B-roll clips (HD)', 'Interview talking points', 'On-air bio (30s & 60s)', 'Broadcast usage guidelines'],
    size: '156 MB',
    format: 'ZIP',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    featured: false,
    file: '/media-kits/broadcast-package.zip',
  },
  {
    id: 4,
    name: 'Premium Full Package',
    description:
      'The complete press resource collection. Everything you need for comprehensive coverage across all media channels — print, digital, and broadcast.',
    includes: ['All press kit materials', 'Exclusive photography', 'HD video content', 'Priority media contact access'],
    size: '245 MB',
    format: 'ZIP',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    featured: true,
    file: '/media-kits/premium-full-package.zip',
  },
];

export default function DownloadableKits() {
  const [downloaded, setDownloaded] = useState(null);

  const handleDownload = (kitId, file) => {
    setDownloaded(kitId);
    // Reset the confirmation after 3s
    setTimeout(() => setDownloaded(null), 3000);
    // In production, trigger the actual file download here.
    // e.g. window.location.href = file;
  };

  return (
    <section id="download-kits" className="py-24 px-6 bg-[#0d1220]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Press Resources</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Downloadable <span className="text-amber-500">Kits</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Choose the package that fits your media needs. All kits are updated regularly with the latest assets.
          </p>
        </div>

        {/* Kits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className={`relative bg-[#111827] rounded-2xl p-7 border transition-all ${
                kit.featured
                  ? 'border-amber-500/50 shadow-lg shadow-amber-500/10'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              {kit.featured && (
                <div className="absolute -top-3 left-6 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Most Complete
                </div>
              )}

              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    kit.featured
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-white/5 text-gray-400'
                  }`}
                >
                  {kit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{kit.name}</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{kit.format}</span>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{kit.size}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">{kit.description}</p>

              {/* Includes list */}
              <ul className="space-y-2 mb-6">
                {kit.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleDownload(kit.id, kit.file)}
                className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl text-sm transition-all ${
                  downloaded === kit.id
                    ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                    : kit.featured
                    ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-500 text-gray-300'
                }`}
              >
                {downloaded === kit.id ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Request Sent!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download {kit.name}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Need a custom package?{' '}
          <a href="#request" className="text-amber-500 hover:text-amber-400 transition-colors">
            Submit a media kit request
          </a>{' '}
          and our team will get back to you within 24 hours.
        </p>
      </div>
    </section>
  );
}
