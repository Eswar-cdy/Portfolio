import React from 'react';
import { Link } from 'react-router-dom';
import { chapters } from './data/chaptersContent';

const ChaptersLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The MicroHarvest Story
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            From a garage experiment to a thriving business revolutionizing urban agriculture
          </p>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Read the Complete Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how three founders combined their expertise to build a sustainable food company 
            that's changing the way cities grow and consume fresh produce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/chapter/${chapter.slug}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-6 md:p-8">
                {/* Chapter number and icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{chapter.icon}</span>
                    <div className="text-sm font-bold text-green-600 uppercase tracking-wide">
                      Chapter {chapter.id}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{chapter.readingTime} min</span>
                  </div>
                </div>

                {/* Title and subtitle */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-lg font-medium text-gray-600 mb-3">
                  {chapter.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {chapter.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {chapter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read button */}
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  <span>Read Chapter</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-green-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Own Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get personalized microgreen recommendations or explore our growing kits to bring 
            fresh, nutrient-dense greens to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/nutrition-recommendation"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Your Nutrition Plan
            </Link>
            <Link
              to="/grow-kits"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors"
            >
              Explore Growing Kits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaptersLanding;
