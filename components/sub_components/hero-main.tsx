import { Link } from '@nextui-org/link';
import { Image } from '@nextui-org/image';

export default function HeroMain() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center">
      <div className="flex flex-col items-center text-center lg:text-left lg:w-1/2">
        <p className="text-xl font-semibold text-gray-700 flex items-center mb-2">
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
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex justify-center lg:justify-end">
        <section className="flex justify-center h-50 xlg:mb-0">
          <Image
            className="object-cover"
            height={300}
            src="/images/ChickenSandwich.jpg"
            width={500}
          />
        </section>
      </div>
    </div>
  );
}
