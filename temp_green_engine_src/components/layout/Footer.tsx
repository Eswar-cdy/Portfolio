import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-emerald-800">Green Revolution</h3>
            <p className="text-sm text-gray-600">The Rise of MicroHarvest</p>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>All nutritional facts are supported by scientific research.</p>
            <p>See the conclusion chapter for a complete list of references.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Green Revolution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
