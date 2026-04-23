import LogoStrip from "@/components/LogoStrip";

export default function ECommerce() {
  const services = [
    { title: 'Amazon Account Management', desc: 'Support for listings, catalog organization, account monitoring, issue coordination, and day-to-day marketplace management.' },
    { title: 'Amazon PPC Management', desc: 'Campaign structuring, keyword research, bid optimization, search term analysis, and advertising performance support.' },
    { title: 'TikTok Shop Management', desc: 'Store setup, product management, campaign support, product visibility, and content-commerce alignment for shop growth.' },
    { title: 'Walmart Marketplace Support', desc: 'Product listing support, account workflow management, monitoring, and marketplace operations assistance.' },
    { title: 'Shopify Store Support', desc: 'Product organization, merchandising support, store structure, and conversion-minded operational support for DTC growth.' },
    { title: 'Listing & Growth Planning', desc: 'Listing optimization, catalog support, and marketplace growth planning to scale your commerce footprint.' },
  ];

  const results = [
    { title: 'TikTok Shop Growth', detail: 'Generated $32.8K GMV in March through content-driven sales and shop optimization.' },
    { title: 'Amazon Performance', detail: 'Delivered $937.3K in sales and 47K+ units sold through high-volume account execution.' },
    { title: 'Walmart Performance', detail: 'Achieved $62.3K GMV in March with steady sales and consistent marketplace growth.' },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">E-Commerce Management Built for <span className="text-brand-red">Marketplace Growth</span></h1>
          <p className="text-brand-red font-bold mb-4 uppercase tracking-widest">From Amazon and Walmart to Shopify and TikTok Shop</p>
          <p className="text-xl text-brand-navy/60 max-w-3xl mx-auto">
            We help brands and sellers manage stores, improve visibility, support operations, and grow sales across major e-commerce platforms.
          </p>
        </div>

        <section className="bg-slate-50 rounded-3xl p-8 md:p-16 mb-24 border border-brand-navy/5">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-navy">End-to-End E-Commerce Support</h2>
            <p className="text-lg text-brand-navy/60 leading-relaxed">
              Our e-commerce services are designed for brands that need practical support across marketplaces and online stores. We help manage the operational, strategic, and growth side of selling online.
            </p>
          </div>
        </section>

        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-12 text-brand-navy border-l-4 border-brand-red pl-6">Core Services</h2>
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
          <h2 className="text-2xl font-bold mb-12 text-brand-navy border-l-4 border-brand-red pl-6">Portfolio & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((res) => (
              <div key={res.title} className="bg-white border border-brand-navy/5 p-8 rounded-2xl shadow-sm">
                <h3 className="text-brand-red font-bold mb-2">{res.title}</h3>
                <p className="text-brand-navy/60 text-sm">{res.detail}</p>
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
                    'One team across multiple commerce platforms',
                    'Practical execution with marketplace understanding',
                    'Strong support for both operations and growth',
                    'Suitable for new sellers and scaling brands',
                    'Portfolio-backed experience in live commerce'
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
              <div className="bg-slate-50 border border-brand-navy/5 rounded-3xl p-12">
                 <h3 className="text-2xl font-bold mb-6 text-brand-navy">Ready to manage your growth?</h3>
                 <p className="text-brand-navy/60 mb-8">Let our team handle the day-to-day operations while you focus on the big picture.</p>
                 <a href="/get-started" className="inline-block bg-brand-navy hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all">Get Started</a>
              </div>
           </div>
        </section>

        <LogoStrip />
      </div>
    </div>
  );
}
