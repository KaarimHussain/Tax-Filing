import LogoStrip from "@/components/LogoStrip";

export default function Marketing() {
  const services = [
    { title: 'Meta Ads Management', desc: 'Campaign planning, audience targeting, creative testing, remarketing, scaling, and performance optimization across Facebook and Instagram.' },
    { title: 'TikTok Ads Management', desc: 'Short-form growth strategy, audience targeting, campaign launch, testing, and conversion-focused optimization built for TikTok-native performance.' },
    { title: 'Google Ads Management', desc: 'Search, Display, Shopping, and remarketing campaigns designed to capture high-intent traffic and improve return on ad spend.' },
    { title: 'AI Content Creation', desc: 'We help brands build scalable content systems using AI-assisted workflows for ad copy, content planning, hooks, scripts, and creative ideation.' },
    { title: 'UGC Strategy & Direction', desc: 'We support creator-style content strategies that feel native, build trust, and improve conversion.' },
    { title: 'Creative Testing', desc: 'We review winning angles, improve message clarity, test creatives, and optimize based on campaign performance.' },
  ];

  const process = [
    { step: 'Audit', desc: 'We review your ad account, creatives, offers, landing pages, and campaign setup.' },
    { step: 'Plan', desc: 'We build a strategy around your goals, audience, offer, and platform fit.' },
    { step: 'Launch', desc: 'We execute campaigns with the right structure, tracking, and creative alignment.' },
    { step: 'Optimize', desc: 'We continuously improve performance through testing, reporting, and scale decisions.' },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">Performance Marketing That <span className="text-brand-red">Helps Brands Scale</span></h1>
          <p className="text-brand-red font-bold mb-4 uppercase tracking-widest">Paid media, AI content creation, and UGC built for growth</p>
          <p className="text-xl text-brand-navy/60 max-w-3xl mx-auto">
            We help brands generate traffic, leads, and sales through strategic ad management, creative execution, and scalable content systems across today's most important digital platforms.
          </p>
        </div>

        <section className="bg-slate-50 rounded-3xl p-8 md:p-16 mb-24 border border-brand-navy/5">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-navy">Marketing That Connects Strategy With Results</h2>
            <p className="text-lg text-brand-navy/60 leading-relaxed">
              Our marketing services are built for brands that need stronger visibility, better conversion, and practical execution. We manage campaigns across Meta, TikTok, and Google while also supporting content systems through AI content creation and UGC-style creative direction.
            </p>
          </div>
        </section>

        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-12 text-brand-navy border-l-4 border-brand-red pl-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="glass-card p-8 group hover:-translate-y-2 transition-all">
                <h3 className="text-xl font-bold mb-4 text-brand-navy">{service.title}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-12 text-brand-navy border-l-4 border-brand-red pl-6">Execution Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, idx) => (
              <div key={p.step} className="relative">
                <div className="text-4xl font-black text-brand-red/10 mb-2">{idx + 1}</div>
                <h3 className="text-lg font-bold mb-2 text-brand-navy">{p.step}</h3>
                <p className="text-brand-navy/60 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="py-24 border-t border-brand-navy/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-brand-navy">Why Partners Choose Us</h2>
              <ul className="space-y-4">
                {[
                  'Multi-platform ad management under one team',
                  'Practical growth support, not just theory',
                  'Strong alignment between traffic and conversion goals',
                  'AI and UGC included as part of modern creative execution',
                  'Suitable for e-commerce brands and growth-stage companies'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-brand-navy/70 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-navy rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6 text-white">Ready to scale?</h3>
              <p className="text-white/60 mb-8">Discuss your marketing requirements with our creative and performance team today.</p>
              <a href="/get-started" className="inline-block bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold transition-all">Get Started</a>
            </div>
          </div>
        </section>

        <LogoStrip />
      </div>
    </div>
  );
}
