'use client';

import { useState } from 'react';

const colors = [
  { name: 'Gold', hex: '#F59E0B', rgb: '245, 158, 11', usage: 'Primary accent, CTAs, highlights' },
  { name: 'Navy Dark', hex: '#0A0F1E', rgb: '10, 15, 30', usage: 'Page background, primary dark surface' },
  { name: 'Navy Mid', hex: '#111827', rgb: '17, 24, 39', usage: 'Card backgrounds, secondary surfaces' },
  { name: 'White', hex: '#FFFFFF', rgb: '255, 255, 255', usage: 'Primary text on dark backgrounds' },
  { name: 'Gray 400', hex: '#9CA3AF', rgb: '156, 163, 175', usage: 'Secondary text, captions, labels' },
  { name: 'Gray 800', hex: '#1F2937', rgb: '31, 41, 55', usage: 'Borders, dividers, subtle UI' },
];

const typography = [
  { name: 'Inter', role: 'Primary Typeface', weights: ['Regular 400', 'Medium 500', 'SemiBold 600', 'Bold 700', 'Black 900'], usage: 'All body copy, UI elements, captions' },
  { name: 'Inter Black', role: 'Display / Headlines', weights: ['Black 900'], usage: 'Page titles, hero headlines, stats' },
];

const logoVariants = [
  { name: 'Primary Logo', bg: 'bg-[#0a0f1e]', border: 'border-gray-700', dark: true },
  { name: 'Light Background', bg: 'bg-gray-100', border: 'border-gray-200', dark: false },
  { name: 'Gold on Dark', bg: 'bg-[#0a0f1e]', border: 'border-amber-500/30', dark: true, gold: true },
];

function LogoMark({ dark, gold }) {
  const textColor = gold ? 'text-amber-500' : dark ? 'text-white' : 'text-gray-900';
  const accentColor = gold ? 'text-amber-300' : 'text-amber-500';
  const bgColor = dark ? 'bg-amber-500' : 'bg-amber-500';

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center font-black text-black text-sm`}>
          BG
        </div>
        <span className={`font-black text-2xl tracking-wide ${textColor}`}>
          BE<span className={accentColor}>GREAT</span>
        </span>
      </div>
      <div className={`text-xs tracking-[0.3em] uppercase font-medium ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
        Sports Management
      </div>
    </div>
  );
}

export default function BrandAssets() {
  const [copiedColor, setCopiedColor] = useState(null);

  const copyHex = (hex, name) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedColor(name);
      setTimeout(() => setCopiedColor(null), 2000);
    });
  };

  return (
    <section id="brand-assets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Identity</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Brand <span className="text-amber-500">Assets</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Official logos, color palette, and typography guidelines for all media and press use.
          </p>
        </div>

        {/* Logo variants */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-amber-500 rounded-full inline-block" />
            Logo Variants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {logoVariants.map((variant) => (
              <div
                key={variant.name}
                className={`${variant.bg} border ${variant.border} rounded-2xl p-10 flex flex-col items-center gap-4`}
              >
                <LogoMark dark={variant.dark} gold={variant.gold} />
                <div className="flex gap-2 mt-2">
                  <span className={`text-xs font-medium ${variant.dark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {variant.name}
                  </span>
                </div>
                <button
                  className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                    variant.dark
                      ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download SVG
                </button>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Place logos on approved backgrounds only. Do not recolor, distort, or add effects to the logo. Minimum size: 80px wide.
          </p>
        </div>

        {/* Color palette */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-amber-500 rounded-full inline-block" />
            Color Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colors.map((color) => (
              <div key={color.name} className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden">
                <div
                  className="h-20 w-full cursor-pointer relative group"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyHex(color.hex, color.name)}
                  title={`Click to copy ${color.hex}`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                      {copiedColor === color.name ? 'Copied!' : 'Copy HEX'}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-white text-xs font-bold">{color.name}</div>
                  <div className="text-gray-500 text-xs font-mono mt-0.5">{color.hex}</div>
                  <div className="text-gray-600 text-xs mt-1 leading-relaxed">{color.usage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-amber-500 rounded-full inline-block" />
            Typography
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {typography.map((font) => (
              <div key={font.name} className="bg-[#111827] border border-gray-800 rounded-2xl p-7">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="text-3xl font-black text-white">{font.name}</div>
                    <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mt-1">{font.role}</div>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  {font.weights.map((weight) => (
                    <div key={weight} className="text-gray-400 text-sm font-mono bg-white/5 px-3 py-1.5 rounded-lg">
                      {weight}
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{font.usage}</p>
                <div className="mt-5 pt-5 border-t border-gray-800 space-y-1">
                  <div className="text-4xl font-black text-white leading-none">Aa</div>
                  <div className="text-gray-400 text-sm tracking-wide">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                    abcdefghijklmnopqrstuvwxyz<br />
                    0123456789
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage guidelines */}
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-7">
          <h3 className="text-lg font-bold text-amber-400 mb-3">Usage Guidelines</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">&#10003;</span>
              Use brand assets only to represent BeGreat Sports Management or its athletes in authorized media coverage.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">&#10003;</span>
              Maintain clear space around the logo equal to the height of the &ldquo;BG&rdquo; mark on all sides.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5">&#10007;</span>
              Do not alter, recolor, rotate, or apply effects to any logo or brand element.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5">&#10007;</span>
              Do not use brand assets for commercial purposes without written permission from BeGreat Sports Management.
            </li>
          </ul>
          <p className="text-gray-500 text-sm mt-4">
            Questions about brand usage?{' '}
            <a href="mailto:media@begreatsportsmgmt.com" className="text-amber-400 hover:text-amber-300 transition-colors">
              media@begreatsportsmgmt.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
