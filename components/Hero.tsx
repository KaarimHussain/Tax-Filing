import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy mb-8 leading-[1.1] tracking-tight">
          Growth, Commerce, and Trade - <br className="hidden md:block" />
          <span className="text-brand-red">Under One Roof</span>
        </h1>
        <p className="text-xl text-brand-navy/60 mb-12 max-w-3xl mx-auto leading-relaxed">
          M. E. T Ventures helps brands scale through performance marketing, e-commerce execution, and trade support from Pakistan to global markets.
        </p>

        {/* CTA Buttons — no "Explore Services" overlay since there is no hero video */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Link
            href="/marketing"
            className="w-full sm:w-auto px-10 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-all text-lg shadow-xl shadow-brand-red/20"
          >
            Explore Services
          </Link>
          <Link
            href="/get-started"
            className="btn-get-started w-full sm:w-auto px-10 py-4 border-2 border-brand-navy text-brand-navy font-bold rounded-full transition-all text-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
