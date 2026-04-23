import Stats from "@/components/Stats";

export default function AboutUs() {
  const pillars = [
    { name: 'Marketing', desc: 'Growth through paid media, AI content systems, and UGC-focused creative support.' },
    { name: 'E-commerce', desc: 'Marketplace and store management across Amazon, Walmart, Shopify, and TikTok Shop.' },
    { name: 'Trade', desc: 'Product sourcing, manufacturing support, supply coordination, and export support from Pakistan.' },
  ];

  return (
    <div className="py-16 bg-white text-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Our Mission: <br /> <span className="text-brand-red">Helping Businesses Grow With Better Execution</span></h1>
            <p className="text-brand-red font-bold mb-6 uppercase tracking-widest text-sm">Marketing, E-commerce, and Trade under one structure</p>
            <div className="space-y-6 text-brand-navy/60 text-lg leading-relaxed">
              <p>
                M. E. T Ventures was built to support brands, sellers, and growing businesses with the practical services they need most. Instead of working with multiple disconnected providers, our clients can access support across marketing, e-commerce, and trade through one business model.
              </p>
              <p>
                Our focus is simple: help businesses grow, stay organized, and operate more efficiently. We believe strong execution, clear communication, and service flexibility create long-term value for modern brands.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-red/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-50 rounded-3xl p-10 border border-brand-navy/5 shadow-xl">
                <div className="text-6xl font-black text-brand-navy/5 mb-6 select-none tracking-tighter">OUR STORY</div>
                <h3 className="text-2xl font-bold mb-4 text-brand-navy underline decoration-brand-red decoration-4 underline-offset-4">The M. E. T Model</h3>
                <p className="text-brand-navy/70 leading-relaxed text-sm">
                  M. E. T stands for Marketing, E-commerce, and Trade - the three core pillars of our business. We created this structure to solve a common problem: businesses often need growth support, operational help, and supply or expansion support at the same time, but usually have to manage different providers for each. M. E. T Ventures brings those needs together in one practical model.
                </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 underline decoration-brand-red decoration-4 underline-offset-8">Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-brand-navy">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="glass-card p-10 flex flex-col items-center hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-brand-red rounded-full mb-6 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-brand-red/20">
                   {pillar.name[0]}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.name}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 px-8 py-16 bg-brand-navy text-white rounded-3xl text-center shadow-2xl">
           <h2 className="text-3xl font-bold mb-12">Why Choose M. E. T Ventures?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Multi-service support model', icon: '⚡' },
                { title: 'Platform-based growth experience', icon: '📈' },
                { title: 'Live portfolio-backed work samples', icon: '💼' },
                { title: 'Scalable support for brands and sellers', icon: '🚀' }
              ].map((item) => (
                <div key={item.title} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="text-3xl mb-4">{item.icon}</div>
                   <p className="font-semibold text-sm">{item.title}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-slate-50 rounded-3xl overflow-hidden py-16 border border-brand-navy/5">
            <h2 className="text-4xl font-black text-center mb-8 uppercase tracking-tighter text-brand-navy/5">Execution Excellence</h2>
            <Stats />
            <div className="text-center mt-12">
               <a href="/get-started" className="btn-get-started inline-block bg-brand-red text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg">Work With Us</a>
            </div>
        </div>
      </div>
    </div>
  );
}
