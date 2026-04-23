export default function LogoStrip() {
  const logos = [
    { name: 'Amazon', spin: true },
    { name: 'Google', spin: false },
    { name: 'Shopify', spin: false },
    { name: 'TikTok Shop', spin: false },
    { name: 'Meta', spin: false },
    { name: 'Walmart', spin: true },
  ];

  return (
    <section className="py-20 border-y border-brand-navy/5 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-brand-navy/30 text-sm font-medium mb-12 uppercase tracking-widest">
          Trusted by sellers across major platforms
        </p>
        {/* Flex centering with explicit justify-center */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-70 transition-opacity duration-500">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`text-2xl font-black text-brand-navy hover:text-brand-red transition-colors cursor-default hover:scale-110 ${
                logo.spin ? 'logo-spin-hover' : 'transition-transform duration-300'
              }`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
