export default function Trade() {
  const serviceCards = [
    { title: 'Product Sourcing', desc: 'We help clients find suitable products and supply options based on their target market, business model, and required specifications.' },
    { title: 'Manufacturing Support', desc: 'We work with clients who need product manufacturing support from Pakistan, helping connect demand with production opportunities.' },
    { title: 'Supply Coordination', desc: 'We support supplier communication, requirement alignment, and order coordination to help businesses manage product flow more efficiently.' },
    { title: 'Export Support', desc: 'We assist clients looking to export products from Pakistan by supporting sourcing, coordination, and trade-related operational steps.' },
    { title: 'Vendor Identification', desc: 'We help identify suitable vendor and manufacturing options based on the client\'s niche, quantity, and business goals.' },
    { title: 'Custom Requirements', desc: 'We are open to any niche and can support businesses looking for tailored sourcing and supply solutions based on specific product needs.' },
  ];

  const processSteps = [
    { step: '01', title: 'Requirement Review', desc: 'We understand what product, category, quantity, or business objective you are targeting.' },
    { step: '02', title: 'Sourcing & Matching', desc: 'We identify relevant sourcing, manufacturing, or supply options based on your needs.' },
    { step: '03', title: 'Coordination', desc: 'We support communication, requirement alignment, and next-step planning with the right parties.' },
    { step: '04', title: 'Execution Support', desc: 'We continue supporting the process so your trade requirement moves forward with more clarity and confidence.' },
  ];

  return (
    <div className="py-16 bg-white text-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">From Pakistan to Global Markets - <span className="text-brand-red">Trade Support That Delivers</span></h1>
          <p className="text-brand-red font-bold mb-4 uppercase tracking-widest text-sm">Manufacturing, Sourcing, Supply, and Export support from Pakistan</p>
          <p className="text-xl text-brand-navy/60 max-w-3xl mx-auto mb-10">
            M. E. T Ventures helps businesses source, manufacture, supply, and export products from Pakistan with practical support across vendor coordination, product sourcing, and trade execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href="/get-started" className="btn-get-started bg-brand-red text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-red/20">Discuss Your Requirement</a>
             <a href="/get-started" className="btn-get-started bg-brand-navy text-white px-8 py-4 rounded-full font-bold transition-all">Get Started</a>
          </div>
        </div>

        <section className="bg-slate-50 rounded-3xl p-8 md:p-16 mb-16 border border-brand-navy/5">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Trade Services That Move Business Forward</h2>
            <p className="text-lg text-brand-navy/60 leading-relaxed mb-6">
              Our Trade division is built for businesses, brands, and buyers looking for reliable product sourcing and supply support from Pakistan. We help clients identify manufacturing opportunities, coordinate supply, and support export-focused business requirements across different product categories.
            </p>
            <p className="text-lg text-brand-navy/60 leading-relaxed font-semibold italic">
              "Whether you are building a new product line, looking for supply partners, or exploring cross-border trade opportunities, M. E. T Ventures helps simplify the process and move it forward with confidence."
            </p>
            <p className="mt-8 text-brand-red font-bold">We are open to working across multiple niches and product categories based on client requirements.</p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCards.map((card) => (
            <div key={card.title} className="glass-card p-8 group hover:-translate-y-2 transition-all">
               <h3 className="text-xl font-bold mb-4 text-brand-navy">{card.title}</h3>
               <p className="text-brand-navy/60 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <section className="py-20 border-y border-brand-navy/5 mb-16">
          <h2 className="text-3xl font-bold mb-16 text-center">Execution Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center group">
                 <div className="w-16 h-16 bg-brand-red/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red text-brand-red group-hover:text-white transition-all font-black text-xl">
                   {step.step}
                 </div>
                 <h3 className="text-lg font-bold mb-4">{step.title}</h3>
                 <p className="text-brand-navy/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
           <div>
              <h2 className="text-3xl font-bold mb-8 italic">Why Businesses Partner With Us</h2>
              <p className="text-brand-navy/60 mb-8 leading-relaxed">
                We understand that trade is not just about finding a product. It is about finding the right supply partner, the right manufacturing fit, and the right execution path. Our role is to make trade more practical, more organized, and more accessible for businesses looking to buy, build, or export through Pakistan.
              </p>
              <ul className="space-y-4">
                 {[
                   'Product sourcing support from Pakistan',
                   'Manufacturing and supply coordination',
                   'Export-focused business support',
                   'Open to multiple niches and industries',
                   'Practical handling of business requirements',
                   'Reliable communication and execution support'
                 ].map((item) => (
                   <li key={item} className="flex items-center space-x-3">
                     <span className="text-brand-red font-bold text-xl">✓</span>
                     <span className="text-brand-navy/70 font-medium">{item}</span>
                   </li>
                 ))}
              </ul>
           </div>
           <div className="bg-brand-navy text-white rounded-3xl p-12 flex flex-col justify-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Open to Any Niche</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                We are not limited to one product category. We are open to supporting clients across different niches depending on product demand, manufacturing feasibility, and supply requirements. Whether the need is for private label products, general supply, bulk sourcing, or export-ready goods, we are ready to explore the opportunity.
              </p>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                 <p className="text-sm font-medium">Looking to source, manufacture, or export from Pakistan? Tell us what you need, and our team will review your requirements and guide the next steps.</p>
              </div>
           </div>
        </section>

        <section className="py-20 bg-slate-50 rounded-3xl text-center px-8 border border-brand-navy/5">
           <h2 className="text-3xl md:text-4xl font-bold mb-8">Built to Connect Opportunity With Execution</h2>
           <p className="max-w-3xl mx-auto text-brand-navy/60 text-lg leading-relaxed mb-12">
             Pakistan offers strong potential for manufacturing, supply, and export across multiple industries. M. E. T Ventures helps clients turn that potential into practical business movement by connecting sourcing, supply, and trade support under one service structure.
           </p>
           <a href="/get-started" className="btn-get-started inline-block bg-brand-red text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-red/20 uppercase tracking-widest">Get Started</a>
        </section>
      </div>
    </div>
  );
}
