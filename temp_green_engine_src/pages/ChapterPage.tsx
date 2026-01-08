import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { chapters } from '../data/chapterData';
import ReactMarkdown from 'react-markdown';

const ChapterPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  const chapter = chapters.find(c => c.slug === slug);
  const chapterIndex = chapters.findIndex(c => c.slug === slug);
  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;
  
  useEffect(() => {
    const fetchChapterContent = async () => {
      setLoading(true);
      try {
        // Map slug to the corresponding markdown file
        let fileName = '';
        if (slug === 'introduction') {
          fileName = 'introduction.md';
        } else if (slug === 'conclusion') {
          fileName = 'conclusion.md';
        } else {
          // Extract chapter number from the chapter object id
          const chapterNum = chapter?.id.replace('chapter', '');
          fileName = `chapter${chapterNum}.md`;
        }
        
        // Fetch the markdown content from public directory
        const response = await fetch(`/api/chapters/${fileName}`);
        if (!response.ok) {
          throw new Error('Failed to load chapter content');
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading chapter:', error);
        setContent('# Error Loading Chapter\n\nSorry, we encountered an error loading this chapter content.');
      } finally {
        setLoading(false);
      }
    };
    
    if (chapter) {
      fetchChapterContent();
    }
  }, [slug, chapter]);
  
  if (!chapter) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Chapter Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the chapter you're looking for.</p>
          <Link to="/" className="text-emerald-600 hover:text-emerald-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading chapter content...</p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">{chapter.title}</h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            
            <div className="flex justify-between items-center border-t border-gray-200 pt-6 mt-8">
              {prevChapter ? (
                <Link 
                  to={`/chapter/${prevChapter.slug}`}
                  className="flex items-center text-emerald-600 hover:text-emerald-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Previous: {prevChapter.title.length > 30 ? prevChapter.title.substring(0, 30) + '...' : prevChapter.title}
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextChapter ? (
                <Link 
                  to={`/chapter/${nextChapter.slug}`}
                  className="flex items-center text-emerald-600 hover:text-emerald-800"
                >
                  Next: {nextChapter.title.length > 30 ? nextChapter.title.substring(0, 30) + '...' : nextChapter.title}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/" className="text-emerald-600 hover:text-emerald-800">
                Back to Table of Contents
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChapterPage;
