export default function Roadmap() {
  const steps = [
    { id: '01', title: 'Discovery', desc: 'We learn about your business, goals, and current challenges across marketing, e-commerce, or trade.' },
    { id: '02', title: 'Strategy', desc: 'We build a focused plan based on the support you need, whether that is paid media, marketplace management, or sourcing and export support.' },
    { id: '03', title: 'Execution', desc: 'Our team handles implementation, coordination, and day-to-day support with practical, hands-on execution.' },
    { id: '04', title: 'Growth', desc: 'We help you build momentum through stronger performance, better operations, and a more scalable business structure.' },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-brand-navy">How It Works</h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="mb-4">
                <span className="text-6xl font-black text-brand-navy/5 group-hover:text-brand-red/10 transition-colors">
                  {step.id}
                </span>
                <h3 className="text-2xl font-bold -mt-8 relative z-10 text-brand-navy">{step.title}</h3>
              </div>
              <p className="text-brand-navy/60 leading-relaxed">
                {step.desc}
              </p>

              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-[28px] -right-4 w-8 h-px bg-brand-navy/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
