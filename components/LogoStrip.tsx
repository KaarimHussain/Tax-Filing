import Amazon from "@/public/assets/Amazon.svg"
import Google from "@/public/assets/Google.svg"
import Meta from "@/public/assets/Meta.svg"
import Shopify from "@/public/assets/Shopify.svg"
import TikTokShop from "@/public/assets/Tiktok.svg"
import Walmart from "@/public/assets/Walmart.svg"
import Image from "next/image"

export default function LogoStrip() {
  const logos = [
    { name: 'Amazon', image: Amazon, spin: true },
    { name: 'Google', image: Google, spin: true },
    { name: 'Shopify', image: Shopify, spin: true },
    { name: 'TikTok', image: TikTokShop, spin: true },
    { name: 'Meta', image: Meta, spin: true },
    { name: 'Walmart', image: Walmart, spin: true },
  ];

  return (
    <section className="py-10 border-y border-brand-navy/5 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-brand-navy/30 text-sm font-medium mb-12 uppercase tracking-widest">
          Trusted by sellers across major platforms
        </p>
        {/* Flex centering with explicit justify-center */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`text-2xl font-black text-brand-navy hover:text-brand-red transition-colors cursor-default hover:scale-110 ${logo.spin ? 'logo-spin-hover' : 'transition-transform duration-300'
                }`}
            >
              {<Image src={logo.image} alt={logo.name} width={100} height={100} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
