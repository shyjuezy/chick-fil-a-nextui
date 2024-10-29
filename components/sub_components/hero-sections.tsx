'use client';

import Image from 'next/image';
import { Button } from '@nextui-org/react';
import React from 'react';

export default function HeroSections() {
  return (
    <div className="grid gap-4 grid-cols-1">
      <div className="flex flex-col-reverse bg-content2 lg:flex-row rounded-2xl overflow-hidden">
        <div className="flex flex-col justify-center p-4 gap-4 lg:w-1/2">
          <h2 className="text-3xl font-semibold text-blue-800">
            Explore the full menu
          </h2>
          <p className="mt-4 text-gray-700">
            Whether you&apos;re hungry for a Chick-fil-A® Chicken Sandwich or
            salads prepared fresh daily, we&apos;re here to serve you delicious
            food made with quality ingredients every day (except Sunday).
          </p>
          <Button
            className="text-xs font-normal text-white bg-gradient-to-b from-primary to-secondary w-64"
            color="primary"
            radius="full"
          >
            Find something to eat
          </Button>
        </div>
        <div className="h-[20rem] w-full lg:w-1/2 relative">
          <Image
            alt="Chick-fil-A Chicken Sandwich"
            fill={true}
            objectFit="cover"
            src="/images/chicken-sandwich.jpg"
          />
        </div>
      </div>
      <div>Placeholder 1 </div>
      <div className="flex justify-center">Placeholder 2</div>
    </div>
  );
}
