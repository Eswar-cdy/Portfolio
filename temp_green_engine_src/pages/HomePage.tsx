import React from 'react';
import { Link } from 'react-router-dom';
import { chapters } from '../data/chapterData';
import HeroSection from '../components/home/HeroSection';
import FeatureCards from '../components/home/FeatureCards';
import OptimizedImage from '../components/common/OptimizedImage';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeatureCards />
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-800">
            Green Revolution
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-emerald-700">
            The Rise of MicroHarvest
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            A thrilling business history centered on key relationships and pivotal decisions 
            in the rise of a microgreens company, revealing behind-the-scenes conflicts and 
            turning points while exploring the nutritional values and health benefits of microgreens.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-emerald-700">About This Story</h3>
          <p className="text-gray-700 mb-4">
            Follow the journey of three visionary co-founders—Alex Chen (chef), Dr. Morgan Taylor 
            (nutritional scientist), and Jamie Rivera (business strategist)—as they build their 
            microgreens company through various challenges and triumphs.
          </p>
          <p className="text-gray-700 mb-4">
            This narrative integrates dramatic character relationships, pivotal business decisions, 
            and scientifically accurate information about the exceptional nutritional benefits of microgreens.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Chapters</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {chapters.map((chapter) => (
              <Link 
                key={chapter.id}
                to={`/chapter/${chapter.slug}`}
                className="block p-6 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all"
              >
                <h4 className="text-xl font-medium mb-2 text-emerald-800">{chapter.title}</h4>
                <p className="text-gray-600">{chapter.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/chapter/introduction"
            className="inline-block px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Begin Reading
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
