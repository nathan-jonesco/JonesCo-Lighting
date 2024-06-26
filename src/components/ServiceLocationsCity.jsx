import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const counties = [
  {
    name: 'Cocke County, TN',
    description: 'Home to Parrottsville where the local community thrives amidst the natural beauty of Eastern Tennessee.',
    cities: ['Newport', 'Parrottsville', 'Cosby', 'Del Rio'],
    link: '/cocke',
  },
  {
    name: 'Jefferson County, TN',
    description: 'Adjacent to Cocke, Jefferson County offers scenic landscapes and historic towns like Dandridge.',
    cities: ['Dandridge', 'Jefferson City', 'White Pine', 'New Market', 'Baneberry'],
    link: '/jefferson',
  },
  {
    name: 'Hamblen County, TN',
    description: 'Known for its vibrant city of Morristown, Hamblen County combines urban conveniences with rural charm.',
    cities: ['Morristown', 'Russellville', 'Whitesburg', 'Talbott'],
    link: '/hamblen',
  },
  {
    name: 'Greene County, TN',
    description: 'Features the historic town of Greeneville and provides a rich tapestry of cultural and outdoor activities.',
    cities: ['Greeneville', 'Mosheim', 'Tusculum', 'Baileyton'],
    link: '/greene',
  },
  {
    name: 'Sevier County, TN',
    description: 'Tourist hotspot with attractions such as Dollywood and the gateway to the Great Smoky Mountains.',
    cities: ['Sevierville', 'Pigeon Forge', 'Gatlinburg', 'Pittman Center'],
    link: '/sevier',
  },
  {
    name: 'Washington County, TN',
    description: "Houses Tennessee's oldest town, Jonesborough, and is rich in history and tradition.",
    cities: ['Johnson City', 'Jonesborough', 'Limestone', 'Telford'],
    link: '/washington',
  },
  {
    name: 'Knox County, TN',
    description: 'Includes Knoxville and offers a mix of urban life, educational institutions, and extensive shopping areas.',
    cities: ['Knoxville', 'Farragut', 'Powell', 'Corryton'],
    link: '/knox',
  },
  {
    name: 'Blount County, TN',
    description: 'Known for the quiet beauty of the Foothills of the Great Smoky Mountains and the peaceful town of Maryville.',
    cities: ['Maryville', 'Alcoa', 'Friendsville', 'Townsend', 'Louisville'],
    link: '/blount',
  }
];

export default function ServiceAreas() {
  const [visibleCounties, setVisibleCounties] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (visibleCounties.length < counties.length) {
      intervalRef.current = setInterval(() => {
        setVisibleCounties(prevCounties => [...prevCounties, prevCounties.length]);
      }, 500);
    }
    return () => clearInterval(intervalRef.current);
  }, [visibleCounties]);

  return (
    <div className="bg-JonesCo-Lighting-Green-700 py-12 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-JonesCo-Lighting-Red-200">Eastern Tennessee Focused,</h2>
            <p className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Service Driven</p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              At JonesCo Lighting Installers, we&apos;re proud to extend our bespoke Lighting services to a broadening range of counties in Eastern Tennessee. Each area we serve benefits from our commitment to excellence, attention to detail, and the personalized touch that only JonesCo can provide. Discover our dedicated service in your city.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:gap-y-16">
            {counties.map((county, index) => (
              <div
                key={county.name}
                className={`relative pl-9 transition-opacity duration-1000 ${
                  visibleCounties.includes(index) ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <dt className="text-gray-100 font-black">
                  <a href={county.link} className="flex items-center">
                    <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-JonesCo-Lighting-Red-300" aria-hidden="true" />
                    {county.name}
                  </a>
                </dt>
                <dd className="mt-2 text-gray-300">{county.description}</dd>
                <ul className="list-disc pl-5 mt-2 text-gray-300 transition-opacity duration-300 group-hover:opacity-100">
                  {county.cities.map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
