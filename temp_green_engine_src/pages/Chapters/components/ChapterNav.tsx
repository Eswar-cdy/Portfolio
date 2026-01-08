import { Link } from 'react-router-dom';
import { Chapter } from '../data/chaptersContent';

interface ChapterNavProps {
  previous: Chapter | null;
  next: Chapter | null;
}

export const ChapterNav = ({ previous, next }: ChapterNavProps) => {
  return (
    <nav className="flex justify-between items-center mt-12 pt-8 border-t-2 border-gray-200">
      <div className="flex-1">
        {previous ? (
          <Link
            to={`/chapter/${previous.slug}`}
            className="group inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
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
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-semibold">{previous.title}</div>
            </div>
          </Link>
        ) : (
          <div className="text-gray-400 cursor-not-allowed">
            <div className="text-sm">Previous</div>
            <div className="font-semibold">No previous chapter</div>
          </div>
        )}
      </div>

      <Link
        to="/chapters"
        className="mx-4 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
      >
        All Chapters
      </Link>

      <div className="flex-1 text-right">
        {next ? (
          <Link
            to={`/chapter/${next.slug}`}
            className="group inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-semibold">{next.title}</div>
            </div>
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
          </Link>
        ) : (
          <div className="text-gray-400 cursor-not-allowed">
            <div className="text-sm">Next</div>
            <div className="font-semibold">No next chapter</div>
          </div>
        )}
      </div>
    </nav>
  );
};

