import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">About This Project</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            "Green Revolution: The Rise of MicroHarvest" is a 20,000-word business history that follows 
            the journey of a microgreens company from its inception through various stages of growth, 
            challenges, and evolution.
          </p>
          
          <h2>The Story</h2>
          <p>
            The narrative centers on three co-founders with complementary expertise:
          </p>
          <ul>
            <li><strong>Alex Chen</strong> - A chef with a passion for culinary innovation and flavor</li>
            <li><strong>Dr. Morgan Taylor</strong> - A nutritional scientist focused on optimizing plant nutrition</li>
            <li><strong>Jamie Rivera</strong> - A business strategist with experience in sustainable ventures</li>
          </ul>
          
          <p>
            Through their journey, the story explores the dramatic relationships, conflicts, and pivotal 
            decisions that shaped their company's development, while weaving in factual information about 
            the exceptional nutritional benefits of microgreens.
          </p>
          
          <h2>Nutritional Facts</h2>
          <p>
            All nutritional and health information presented in this narrative is based on scientific 
            research and peer-reviewed studies. Microgreens have been shown to contain up to 40 times 
            the nutrients of their mature counterparts, with exceptional levels of vitamins, minerals, 
            and beneficial compounds.
          </p>
          
          <h2>References</h2>
          <p>
            A comprehensive reference list is provided in the conclusion chapter, citing all scientific 
            sources used for nutritional and health claims throughout the narrative.
          </p>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/" className="text-emerald-600 hover:text-emerald-800">
            Return to Table of Contents
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
