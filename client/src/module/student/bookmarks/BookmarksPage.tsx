import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookmarks, BookmarkType, Bookmark } from "../../../hooks/useBookmarks";
import { ExternalLink, Building, Briefcase, Calendar, Code, Bookmark as BookmarkIcon } from "lucide-react";
import { BookmarkButton } from "../../../components/BookmarkButton";

const TABS: { label: string; value: BookmarkType | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "Jobs", value: "JOB" },
  { label: "External Jobs", value: "EXTERNAL_JOB" },
  { label: "Hackathons", value: "HACKATHON" },
  { label: "Companies", value: "COMPANY" },
];

export const BookmarksPage = () => {
  const [activeTab, setActiveTab] = useState<BookmarkType | "ALL">("ALL");
  const { bookmarks, isLoading } = useBookmarks(activeTab === "ALL" ? undefined : activeTab);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <BookmarkIcon className="w-8 h-8 text-indigo-500" />
            My Bookmarks
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Access your saved opportunities, companies, and hackathons all in one place.
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
              activeTab === tab.value
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-48 rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
          ))}
        </div>
      ) : bookmarks.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {bookmarks.map((bookmark) => (
              <BookmarkCard key={`${bookmark.entityType}-${bookmark.entityId}`} bookmark={bookmark} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
            <BookmarkIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">No bookmarks yet</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
            When you find an interesting opportunity or company, click the bookmark icon to save it here for later.
          </p>
        </motion.div>
      )}
    </div>
  );
};

const BookmarkCard = ({ bookmark }: { bookmark: Bookmark }) => {
  const getIcon = () => {
    switch (bookmark.entityType) {
      case "JOB":
      case "EXTERNAL_JOB":
        return <Briefcase className="w-5 h-5 text-blue-500" />;
      case "COMPANY":
        return <Building className="w-5 h-5 text-purple-500" />;
      case "HACKATHON":
        return <Code className="w-5 h-5 text-green-500" />;
      default:
        return <BookmarkIcon className="w-5 h-5 text-indigo-500" />;
    }
  };

  const getEntityLabel = () => {
    switch (bookmark.entityType) {
      case "JOB":
        return "Job";
      case "EXTERNAL_JOB":
        return "External Job";
      case "COMPANY":
        return "Company";
      case "HACKATHON":
        return "Hackathon";
      default:
        return "Item";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center border border-gray-100 dark:border-gray-700">
            {bookmark.data?.logo ? (
              <img src={bookmark.data.logo} alt="" className="w-6 h-6 object-contain rounded-sm" />
            ) : (
              getIcon()
            )}
          </div>
          <div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {getEntityLabel()}
            </span>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {new Date(bookmark.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <BookmarkButton
          entityId={bookmark.entityId}
          entityType={bookmark.entityType}
          title={bookmark.title}
          url={bookmark.url}
          data={bookmark.data}
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {bookmark.title || `Saved ${getEntityLabel()}`}
        </h3>
        
        {bookmark.data?.location && (
          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
            {bookmark.data.location}
          </p>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        <a
          href={bookmark.url || "#"}
          target={bookmark.url?.startsWith("http") ? "_blank" : undefined}
          rel={bookmark.url?.startsWith("http") ? "noopener noreferrer" : undefined}
          className="w-full py-2 px-4 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium text-sm flex items-center justify-center gap-2 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors"
        >
          View Details
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default BookmarksPage;
