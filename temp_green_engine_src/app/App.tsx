import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CookieConsent from '../components/common/CookieConsent';
import { initGA, logPageView } from '../services/analytics';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import ChapterPage from '../pages/ChapterPage';
import AboutPage from '../pages/AboutPage';
import MicrogreensGuidePage from '../pages/MicrogreensGuidePage';
import GrowKitPage from '../pages/GrowKitPage';
import TechnologyPage from '../pages/TechnologyPage';
import NotFoundPage from '../pages/NotFoundPage';
import ChaptersLanding from '../pages/Chapters/ChaptersLanding';
import { Chapter } from '../pages/Chapters/Chapter';
import NutritionRecommendationPage from "../features/nutrition/pages/NutritionRecommendationPage";
import NutritionRecommendationForm from "../features/nutrition/components/NutritionRecommendationForm";
import NutritionRecommendationResults from "../features/nutrition/components/NutritionRecommendationResults";
import '../assets/styles/globals.css';
import { preloadImages } from '../utils/preloadImages';


function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if consent was previously given
    const consent = localStorage.getItem('microharvest-analytics-consent');
    if (consent === 'true') {
      // Initialize GA if consent exists
      initGA();
    }
    // Preload critical images on initial app load (if they exist)
    // Images are preloaded but failures are handled gracefully
    // Note: Images may not exist yet - warnings are suppressed
    preloadImages([
      '/images/hero/hero-background.png',
      '/images/products/sprout-kit.png',
      '/images/products/garden-system.png',
      '/images/products/pro-system.png',
      '/images/products/commercial-pro.png',
    ], true).catch(() => {
      // Errors are already handled in preloadImages function
      // This catch is just for safety
    });
  }, []);

  useEffect(() => {
    // Track page views if consent given
    const consent = localStorage.getItem('microharvest-analytics-consent');
    if (consent === 'true') {
      logPageView(location.pathname + location.search);
    }
  }, [location]);

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#16a34a',
            color: '#fff',
          },
        }}
      />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/chapters" element={<ChaptersLanding />} />
        <Route path="/chapter/:slug" element={<Chapter />} />
        <Route path="/chapter/:id" element={<ChapterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/microgreens-guide" element={<MicrogreensGuidePage />} />
        <Route path="/grow-kits" element={<GrowKitPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/nutrition" element={<Navigate to="/nutrition-recommendation" replace />} />
        <Route path="/nutrition-recommendation" element={<NutritionRecommendationPage />} />
        <Route path="/nutrition-recommendation/form" element={<NutritionRecommendationForm />} />
        <Route path="/nutrition-recommendation/results" element={<NutritionRecommendationResults />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
      <CookieConsent />
    </>
  );
}

export default App;
