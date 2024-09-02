import Image from 'next/image';
import { LightBulbIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline'; // Importing Heroicons
import Picture from '@/images/Team/lighting.webp';

const incentives = [
  {
    name: 'Innovative Lighting Designs',
    icon: LightBulbIcon,
    description:
      'Our team brings creativity and innovation to every project, ensuring your lighting is not only functional but also visually stunning.',
  },
  {
    name: 'Energy Efficiency',
    icon: SparklesIcon,
    description:
      'We prioritize energy-efficient solutions that save you money while providing brilliant illumination for your home or business.',
  },
  {
    name: 'Premium Quality Materials',
    icon: StarIcon,
    description:
      'We use only the highest quality materials in our installations, ensuring durability and longevity in every lighting system we install.',
  },
];

export default function IncentivesSection() {
  return (
    <div className="bg-blue-50 dark:bg-yellow-500">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Done Right <b className='block text-yellow-500 dark:text-blue-100'> The First Time.</b>
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-100">
                At JonesCo Lighting, we are dedicated to providing top-tier lighting services that exceed your expectations. Our mission is to deliver quality results with the highest level of professionalism and care.
              </p>
            </div>
            <div className="relative w-full h-72 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <Image
                alt="Professional lighting installation in action"
                src={Picture}
                className="object-cover object-center"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="flex items-start lg:block">
                <incentive.icon className="ml-4 mb-4 md:h-16 md:w-16 h-14 w-14 text-yellow-600 dark:text-white" aria-hidden="true" />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-100">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
