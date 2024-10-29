import { Image } from '@nextui-org/image';

import HeroMain from '@/components/sub_components/hero-main';
import HeroCards from '@/components/sub_components/hero-cards';
import HeroSections from '@/components/sub_components/hero-sections';

export default function Hero() {
  return (
    <main className="container px-10 flex flex-col justify-center gap-10">
      <section className="flex justify-between">
        <section className="flex flex-row items-center justify-center lg:gap-8 py-4 md:py-2">
          <Image src="/images/Backstage-Tours-Red.png" width={40} />
          <section className="flex flex-col">
            <p className="text-3xl text-gray-500">
              <span className="font-light">Eerie-sistable eats</span>
            </p>
            <p className="font-semibold text-gray-800">
              Serve a spook-tacular spread with Chick-fil-A Catering
            </p>
          </section>
        </section>
        <section className="flex items-center justify-center gap-4 py-4 md:py-2">
          <button className="flex items-center space-x-2 text-red-600 font-semibold focus:outline-none group">
            <span>Order now</span>
            <span className="inline-block transform transition-transform duration-200 ease-in-out group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </section>
      </section>
      <HeroMain />
      <HeroCards />
      <HeroSections />
    </main>
  );
}
