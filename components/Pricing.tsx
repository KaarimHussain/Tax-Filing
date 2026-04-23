import Link from 'next/link';

export default function Pricing() {
  const usPlans = [
    { name: 'Go', price: '$9.99', sub: '+ state fees', features: ['Automated Data Sync', 'Federal Filing', 'Email Support'] },
    { name: 'Grow', price: '$149', sub: '+ state fees', features: ['Everything in Go', 'Multi-state Nexus Tracking', 'Priority Support'] },
    { name: 'Pro', price: '$249', sub: '+ state fees', features: ['Everything in Grow', 'Audit Protection', 'Dedicated Accountant'], recommended: true },
  ];

  const nonUsPlans = [
    { name: 'Digital Bank', price: '$799', features: ['LLC Formation', 'Digital Bank Setup', 'EIN Registration', 'Tax Consultation'] },
    { name: 'Physical Bank', price: '$2,000', features: ['Everything in Digital', 'Physical Bank Account', 'Mailing Address', 'Full Compliance'] },
  ];

  return (
    <div className="space-y-24 py-12">
      {/* US Residents */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-navy">US Residents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card p-8 flex flex-col h-full border-t-4 ${plan.recommended ? 'border-brand-red scale-105 z-10 shadow-2xl shadow-brand-red/10' : 'border-brand-navy/10'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold mb-4 text-brand-navy">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand-navy">{plan.price}</span>
                <span className="text-brand-navy/40 ml-2">{plan.sub}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center text-brand-navy/60 text-sm">
                    <svg className="w-4 h-4 mr-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/get-started?plan=${plan.name}`}
                className={`text-center py-3 rounded-lg font-bold transition-all ${plan.recommended ? 'bg-brand-red text-white hover:bg-brand-red-dark' : 'bg-brand-navy/5 text-brand-navy hover:bg-brand-navy/10'}`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Non-US Residents */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-navy">Non-US Residents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {nonUsPlans.map((plan) => (
            <div key={plan.name} className="glass-card p-8 flex flex-col h-full border-t-4 border-brand-navy/10">
              <h3 className="text-xl font-bold mb-4 text-brand-navy">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand-navy">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center text-brand-navy/60 text-sm">
                    <svg className="w-4 h-4 mr-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/get-started?plan=${plan.name}`}
                className="text-center py-3 bg-brand-navy/5 text-brand-navy font-bold rounded-lg hover:bg-brand-navy/10 transition-all"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
