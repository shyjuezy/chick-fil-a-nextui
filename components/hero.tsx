import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';

export default function Hero() {
  return (
    <main className="container px-10 flex flex-col justify-center gap-10">
      <section className="flex justify-between">
        <section className="flex flex-row items-center justify-center gap-8 py-4 md:py-2">
          <Image src="/images/Backstage-Tours-Red.png" width={40} />
          <section className="flex flex-col">
            <p className="text-xs text-gray-500">
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
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          <p className="text-sm text-gray-500 flex items-center mb-2">
            Welcome
          </p>
          <h1 className="text-xl font-bold text-red-600 leading-tight lg:text-6xl mb-4">
            An original then, an original now
          </h1>
          <div className="flex gap-4 mt-6">
            <Link
              className="px-8 py-3 text-white bg-red-600 rounded-full hover:bg-red-700 transition"
              href="/pickup"
            >
              Order pickup
            </Link>
            <Link
              className="px-8 py-3 text-red-600 bg-white border border-red-600 rounded-full hover:bg-red-50 transition"
              href="/delivery"
            >
              Order delivery
            </Link>
          </div>
        </div>
        <div>
          <section className="flex justify-center mb-8 lg:mb-0">
            <Image
              className="object-contain"
              height={500}
              src="/images/ChickenSandwich.jpg"
              width={500}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
