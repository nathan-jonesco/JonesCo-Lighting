import React from 'react';

const KnoxCounty = () => {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Lighting-Red-500 to-JonesCo-Lighting-Green-700 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Lighting-Green-200">
            Proudly Serving Knox County, TN
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Premium Lighting Solutions for Knox County Homes
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto lg:max-w-4xl">
          <div className="text-xl text-gray-200">
            <p>
              Welcome to JonesCo Lighting Installers, proudly serving Knox County, TN. Known for its vibrant city of Knoxville, Knox County offers a unique blend of urban amenities and natural beauty.
            </p>
            <p className="mt-6">
              Whether you&apos;re cheering on the Vols at the University of Tennessee, exploring Market Square, or enjoying the scenic views at Ijams Nature Center, we understand the specific needs of homes in Knox County. Our mission is to ensure your Lighting are in top shape, protecting your property from water damage.
            </p>
            <p className="mt-6">Our comprehensive services include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Thorough Lighting Cleaning</li>
              <li>High-Quality Lighting Installation</li>
              <li>Seamless Lighting Replacement</li>
            </ul>
            <p className="mt-6">
              Join the many satisfied homeowners in Knox County who trust JonesCo for their Lighting needs. We combine local expertise with a commitment to exceptional service to deliver results that last.
            </p>
            <p className="mt-6">
              Discover the JonesCo difference today and see why we are the preferred Lighting professionals in Knox County.
            </p>
            <p className="mt-6 font-bold">
              Contact us today at <a href="https://jonescolighting.com/contact" className="underline">jonescolighting.com/contact</a> or call 423-207-3325 to schedule your free, no-obligation quote!
            </p>
          </div>
          <div className="mt-10 lg:mt-16 flex justify-center">
            <img src="/images/knox-county-landmark.jpg" alt="Knox County Landmark" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnoxCounty;
