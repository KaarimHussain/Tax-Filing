export default function Stats() {
  const stats = [
    { label: 'Sales Generated', value: '$50M+' },
    { label: 'Ad Spend Managed', value: '$6M+' },
    { label: 'Team Members', value: '50+' },
  ];

  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-brand-navy/30 text-sm font-medium mb-16 uppercase tracking-widest">
          Our Numbers Speak
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative w-64 h-64 rounded-full flex flex-col items-center justify-center text-center p-8
                ${index % 2 === 0 ? 'bg-white border-brand-red/10' : 'bg-white border-brand-red/20'}
                border-2 shadow-xl transition-transform hover:scale-105
              `}
            >
              <span className="text-4xl font-bold text-brand-navy mb-2">{stat.value}</span>
              <span className="text-sm text-brand-navy/40 uppercase tracking-widest font-semibold">{stat.label}</span>

              {/* Decorative Red Accent */}
              <div className="absolute top-0 right-4 w-4 h-4 bg-brand-red rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
