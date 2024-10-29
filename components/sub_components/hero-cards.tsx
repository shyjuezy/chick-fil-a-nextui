import React from 'react';

import FeatureCard from '@/components/ui/feature-card';

const featuresCategories = [
  {
    key: '1',
    image: '/hero/feature1.jpg',
    title: 'You made it a thing, so we made it a side',
    descriptions: [
      'Whether you scoop it up with Waffle Fries, spread it on crackers, or even eat it with a spoon, go ahead and enjoy the Seasonal Pimento Cheese Side however you like. Your cheese, your rules.',
    ],
  },
  {
    key: '2',
    image: '/hero/feature2.jpg',
    title: 'Honey Pepper Pimento',
    descriptions: [
      'The Honey Pepper Pimento Sandwich now comes with an original or spicy filet, served with pimento cheese, mild pickled jalapeños, a drizzle of honey, on a warm, toasted bun.',
    ],
  },
  {
    key: '3',
    image: '/hero/feature3.jpg',
    title: 'Banana Pudding Milkshake',
    descriptions: [
      'Real bananas and vanilla wafer cookie crumbles blended into cold, creamy Icedream® dessert for our most bananas milkshake yet.',
    ],
  },
];

export default function HeroCards() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {featuresCategories.map((category) => (
        <FeatureCard
          key={category.key}
          descriptions={category.descriptions}
          image={category.image}
          title={category.title}
        />
      ))}
    </div>
  );
}
