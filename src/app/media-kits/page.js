import Link from 'next/link';
import AthleteProfiles from '@/components/media-kits/AthleteProfiles';
import DownloadableKits from '@/components/media-kits/DownloadableKits';
import BrandAssets from '@/components/media-kits/BrandAssets';
import MediaKitRequestForm from '@/components/media-kits/MediaKitRequestForm';

export const metadata = {
  title: 'Media Kits | BeGreat Sports Management',
  description:
    'Download athlete media kits, brand assets, and press materials from BeGreat Sports Management.',
};

const quickLinks = [
  { href: '#athletes', label: 'Athlete Profiles', icon: '👤' },
  { href: '#download-kits', label: 'Download Kits', icon: '📥' },
  { href: '#brand-assets', label: 'Brand Assets', icon: '🎨' },
  { href: '#request', label: 'Request a Kit', icon: '✉️' },
];

export default function MediaKitsPage() {
  return (
    <div className="bg-[#0a0f1e] min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Breadcrumb */}
        <div className="relative z-10 flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-400">Media Kits</span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Press Resources</div>
          <h1 className="text-5xl md:text-6xl font-black mb-5">
            Media Kits &amp;{' '}
            <span className="text-amber-500">Press Resources</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Everything the press needs to tell the stories of our athletes. Download kits, access brand assets, or submit a custom request.
          </p>
        </div>

        {/* Quick nav */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-10">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 bg-[#111827] border border-gray-700 hover:border-amber-500/50 hover:text-amber-400 text-gray-300 text-sm font-medium px-4 py-2.5 rounded-xl transition-all"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-gray-800 bg-[#0d1220] py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
          {[
            { value: '6', label: 'Featured Athletes' },
            { value: '4', label: 'Kit Packages' },
            { value: '24hr', label: 'Response Time' },
            { value: 'Free', label: 'All Assets' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black text-amber-500">{s.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <AthleteProfiles />
      <DownloadableKits />
      <BrandAssets />
      <MediaKitRequestForm />
    </div>
  );
}
