import React from 'react';

export default function CallToAction() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Brighten Up Your Home!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Enjoy our top-notch pressure and window washing services.
        </p>

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-JonesCo-Red-500 to-JonesCo-Green-700 hover:from-JonesCo-Red-600 hover:to-JonesCo-Green-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
        >
          Claim Your Free Estimate!
        </a>
      </div>
    </div>
  );
}
