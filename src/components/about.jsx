import Image from 'next/image';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - JonesCo Lighting Installers</title>
        <meta name="description" content="Learn about the journey and values of JonesCo Lighting Installers, from our humble beginnings to becoming a trusted provider of Lighting services in Eastern Tennessee." />
      </Head>
      <div className="bg-white text-JonesCo-Lighting-Red-900">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Stock/about-us-bg.webp"
              alt="About Us Background"
              layout="fill"
              objectFit="cover"
              quality={75}
              priority
              className="opacity-30"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <h1 className="text-4xl font-bold text-center text-JonesCo-Lighting-Red-900">Our Story</h1>
            <p className="mt-4 text-lg leading-8 text-center text-JonesCo-Lighting-Green-700">
              From Humble Beginnings to Trusted Experts in Eastern Tennessee
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:pr-16">
              <h2 className="text-3xl font-semibold text-JonesCo-Lighting-Red-700 mb-4">Who We Are</h2>
              <p className="text-lg leading-7 text-JonesCo-Lighting-Red-700">
                JonesCo Lighting Installers was founded by Jonathan Jones, a man with a diverse background and a passion for helping others. Jonathan&apos;s journey began in the heart of Kentucky, where he worked as a mechanic, developing his skills in problem-solving and meticulous craftsmanship. His desire to make a difference in people&apos;s lives led him to transition into nursing, where he learned the importance of compassion, empathy, and putting people&apos;s needs first.
              </p>
              <p className="mt-4 text-lg leading-7 text-JonesCo-Lighting-Red-700">
                Combining his technical expertise and dedication to customer care, Jonathan founded JonesCo Lighting Installers. Our mission is to provide top-quality Lighting services while building lasting relationships with our clients.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/Stock/john.webp"
                alt="Jonathan Jones"
                layout="responsive"
                width={600}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-JonesCo-Lighting-Red-700 mb-4 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-JonesCo-Lighting-Red-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-JonesCo-Lighting-Red-900 mb-2">Quality</h3>
                <p className="text-lg text-JonesCo-Lighting-Red-700">
                  We use only the highest quality materials and the latest techniques to ensure your Lighting are built to last.
                </p>
              </div>
              <div className="bg-JonesCo-Lighting-Green-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-JonesCo-Lighting-Red-900 mb-2">Integrity</h3>
                <p className="text-lg text-JonesCo-Lighting-Red-700">
                  We believe in honesty and transparency. Our team is dedicated to providing reliable service and clear communication every step of the way.
                </p>
              </div>
              <div className="bg-JonesCo-Yellow-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-JonesCo-Lighting-Red-900 mb-2">Customer Focus</h3>
                <p className="text-lg text-JonesCo-Lighting-Red-700">
                  Our customers are at the heart of everything we do. We strive to exceed your expectations and ensure your satisfaction with our services.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-JonesCo-Lighting-Red-700 mb-4 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-JonesCo-Lighting-Green-900 mb-2">Lighting Cleaning</h3>
                <p className="text-lg text-JonesCo-Lighting-Red-700">
                  Keep your Lighting clean and functional with our thorough cleaning and inspection services. We remove debris and blockages to prevent water damage and ensure optimal performance.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-JonesCo-Lighting-Green-900 mb-2">Lighting Installation</h3>
                <p className="text-lg text-JonesCo-Lighting-Red-700">
                  Protect your Lighting from leaves and debris with our high-quality Lightings. Prevent clogs, reduce maintenance, and ensure proper water flow.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-JonesCo-Lighting-Green-900 mb-2">Lighting Replacement</h3>
                <p className="text-lg text-JonesCo-Lighting-Red-700">
                  Upgrade your old Lighting to modern, efficient seamless systems. We handle expert removal and installation for a hassle-free transition.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-JonesCo-Lighting-Red-700 mb-4">Join Our Community</h2>
            <p className="text-lg text-JonesCo-Lighting-Red-700">
              At JonesCo Lighting Installers, we are more than just a service provider; we are part of the community. We value the relationships we build and strive to make a positive impact in the lives of our customers.
            </p>
            <p className="mt-4 text-lg text-JonesCo-Lighting-Red-700">
              Contact us today to learn more about our services or to schedule a free, no-obligation quote. We look forward to serving you!
            </p>
            <a
              href="https://jonescolighting.com/contact"
              className="mt-8 inline-block bg-JonesCo-Lighting-Green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-JonesCo-Lighting-Green-600"
            >
              Get a Free Quote
            </a>
            <p className="mt-4 text-lg text-JonesCo-Lighting-Red-700">Or call us at <a href="tel:14232073325" className="text-JonesCo-Lighting-Red-500">1423-207-3325</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
