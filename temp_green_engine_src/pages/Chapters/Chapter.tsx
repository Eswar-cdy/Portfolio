import { useParams, Link } from 'react-router-dom';
import { getChapterBySlug, getAdjacentChapters } from './data/chaptersContent';
import { ReadingProgress } from './components/ReadingProgress';
import { ChapterNav } from './components/ChapterNav';
import { ShareButtons } from './components/ShareButtons';
import { useEffect } from 'react';

export const Chapter = () => {
  const { slug } = useParams<{ slug: string }>();
  const chapter = slug ? getChapterBySlug(slug) : undefined;
  const adjacentChapters = slug ? getAdjacentChapters(slug) : { previous: null, next: null };

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Update page title
  useEffect(() => {
    if (chapter) {
      document.title = `${chapter.title} - MicroHarvest Story`;
    }
    return () => {
      document.title = 'MicroHarvest - Microgreens Nutrition';
    };
  }, [chapter]);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Chapter Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the chapter you're looking for.
          </p>
          <Link
            to="/chapters"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Chapters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />
      
      <article className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to chapters link */}
          <Link
            to="/chapters"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Chapters
          </Link>

          {/* Chapter header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{chapter.icon}</span>
              <div>
                <div className="text-sm font-medium text-green-600 uppercase tracking-wide">
                  Chapter {chapter.id}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{chapter.readingTime} min read</span>
                  <span>•</span>
                  <div className="flex gap-1">
                    {chapter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {chapter.title}
            </h1>
            
            <p className="text-xl text-gray-600 font-medium">
              {chapter.subtitle}
            </p>

            <p className="text-lg text-gray-600 mt-4">
              {chapter.description}
            </p>
          </header>

          {/* Chapter content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div
              className="chapter-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: chapter.content }}
            />

            {/* Share buttons */}
            <ShareButtons chapter={chapter} />
          </div>

          {/* Navigation to previous/next chapters */}
          <ChapterNav
            previous={adjacentChapters.previous}
            next={adjacentChapters.next}
          />
        </div>
      </article>

      {/* Custom styles for chapter content */}
      <style>{`
        .chapter-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .chapter-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .chapter-content p {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #4b5563;
          margin-bottom: 1.25rem;
        }

        .chapter-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .chapter-content li {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #4b5563;
          margin-bottom: 0.5rem;
        }

        .chapter-content strong {
          font-weight: 600;
          color: #059669;
        }

        .chapter-content blockquote {
          border-left: 4px solid #059669;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #374151;
          background-color: #f0fdf4;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }

        .chapter-content blockquote footer {
          font-style: normal;
          font-weight: 600;
          color: #059669;
          margin-top: 0.5rem;
          font-size: 0.875rem;
        }

        .chapter-content a {
          color: #059669;
          text-decoration: underline;
          font-weight: 500;
        }

        .chapter-content a:hover {
          color: #047857;
        }
      `}</style>
    </>
  );
};

