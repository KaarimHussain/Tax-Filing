"use client"

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LogoStrip from "@/components/LogoStrip";
import Roadmap from "@/components/Roadmap";
import Link from "next/link";
import ExecutionCarousel from "@/components/ExecutionCarousel";
import PortfolioBooklet from "@/components/PortfolioBooklet";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div className="flex flex-col space-y-0">
      <Hero />

      {/* Centered platform logos are inside LogoStrip */}
      <LogoStrip />

      {/* E-commerce Section — Hero/Feature Image */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/img_23.png"
          alt="E-commerce Excellence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/40 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 shadow-sm">
              Global E-commerce Execution
            </h2>
            <p className="text-white/90 text-xl font-medium mb-8">
              Managing brands across Amazon, Walmart, and TikTok Shop with precision.
            </p>
            <Link
              href="/e-commerce"
              className="bg-white text-brand-navy px-8 py-3 rounded-full font-bold hover:bg-brand-red hover:text-white transition-all shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Stats />

      {/* Spacing fix for How It Works */}
      <Roadmap />

      {/* Portfolio Section with Booklet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Execution Portfolio</h2>
            <p className="text-brand-navy/60 text-center max-w-2xl">
              A deep dive into our work across TikTok Shop, Walmart, and Amazon.
            </p>
          </div>

          <PortfolioBooklet />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="glass-card overflow-hidden border-2 border-brand-navy/5">
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 1500,
                  })
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="https://images.unsplash.com/photo-1596831749402-783c83a82655?q=80&w=926&auto=format&fit=crop"
                      alt="TikTok Screenshot"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="https://images.unsplash.com/photo-1708484061139-6a6a8daacccc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Walmart"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TikTok & Walmart Integration</h3>
                <p className="text-brand-navy/60 text-sm">Real-time performance monitoring and marketplace scaling results.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brand-navy italic">"Practical, execution-focused service delivery that scales brands."</h3>
              <p className="text-lg text-brand-navy/60 leading-relaxed">
                We don't just advise; we execute. Our portfolio shows the results of hands-on management across the world's most competitive marketplaces.
              </p>
              <Link
                href="/get-started"
                className="btn-get-started inline-block bg-brand-red text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional value prop section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 leading-tight text-brand-navy">
              Why <span className="text-brand-red">M. E. T Ventures?</span>
            </h2>
            <div className="space-y-6 text-brand-navy/60">
              <p className="text-lg">
                M. E. T Ventures is built for businesses that need more than one service provider. We combine marketing, e-commerce execution, and trade support under one structure so brands can grow without managing multiple disconnected teams.
              </p>
              <ul className="space-y-4">
                {[
                  'Performance-driven marketing support',
                  'Marketplace and store management expertise',
                  'Trade support for sourcing, manufacturing, supply, and export',
                  'Practical, execution-focused service delivery',
                  'Support for scaling brands, sellers, and growing businesses'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-brand-red/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                    </div>
                    <span className="text-brand-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ExecutionCarousel />
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-24 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">Ready to grow with the right support?</h2>
          <p className="text-xl text-white/70 mb-12">
            From paid media and marketplace management to sourcing and export support, M. E. T Ventures helps businesses move forward with confidence.
          </p>
          <Link
            href="/get-started"
            className="btn-get-started inline-block bg-brand-red text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-red/20"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

