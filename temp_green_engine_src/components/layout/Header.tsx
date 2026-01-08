import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold hover:text-green-200 transition-colors">
              Green Revolution
            </Link>
            <p className="text-sm text-green-300">The Rise of MicroHarvest</p>
          </div>
          
          <nav>
            <ul className="flex flex-wrap space-x-1 md:space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`py-2 px-3 rounded hover:bg-green-700 transition-colors ${
                    location.pathname === '/' ? 'bg-green-700 font-medium' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/chapters" 
                  className={`py-2 px-3 rounded hover:bg-green-700 transition-colors ${
                    location.pathname.includes('/chapter') ? 'bg-green-700 font-medium' : ''
                  }`}
                >
                  Chapters
                </Link>
              </li>
              <li>
                <Link 
                  to="/microgreens-guide" 
                  className={`py-2 px-3 rounded hover:bg-green-700 transition-colors ${
                    location.pathname === '/microgreens-guide' ? 'bg-green-700 font-medium' : ''
                  }`}
                >
                  Microgreens Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/grow-kits" 
                  className={`py-2 px-3 rounded hover:bg-green-700 transition-colors ${
                    location.pathname === '/grow-kits' ? 'bg-green-700 font-medium' : ''
                  }`}
                >
                  Grow Kits
                </Link>
              </li>
              <li>
                <Link 
                  to="/technology" 
                  className={`py-2 px-3 rounded hover:bg-green-700 transition-colors ${
                    location.pathname === '/technology' ? 'bg-green-700 font-medium' : ''
                  }`}
                >
                  Smart Technology
                </Link>
              </li>
              <li>
                <Link 
                  to="/nutrition-recommendation" 
                  className={`py-2 px-3 rounded hover:bg-green-700 transition-colors ${
                    location.pathname.includes('/nutrition-recommendation') ? 'bg-green-700 font-medium' : ''
                  }`}
                >
                  Nutrition
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`py-2 px-3 rounded hover:bg-green-700 transition-colors ${
                    location.pathname === '/about' ? 'bg-green-700 font-medium' : ''
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
