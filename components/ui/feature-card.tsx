'use client';
import type { CardProps } from '@nextui-org/react';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

export type FeatureCardProps = CardProps & {
  title: string;
  descriptions: string[];
  image: string;
};

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, descriptions = [], image, ...props }, ref) => {
    return (
      <Card ref={ref} className="bg-content2" shadow="none" {...props}>
        <CardHeader className="flex flex-col p-0">
          <div className="w-full h-[12rem] relative">
            <Image
              alt="Waffle fries with soup"
              fill={true}
              objectFit="cover"
              src={image}
            />
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-2">
          {descriptions.map((description, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 min-h-[50px] px-3 py-2 text-content3-foreground h-full"
            >
              <p className="text-sm font-semibold text-primary">Limited time</p>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-sm text-left tracking-wide leading-relaxed flex-grow">
                {description}
              </p>
              <Button
                className="text-xs font-normal text-white bg-gradient-to-b from-primary to-secondary w-32"
                color="primary"
                radius="full"
              >
                View Products
              </Button>
            </div>
          ))}
        </CardBody>
      </Card>
    );
  },
);

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
