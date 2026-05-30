export function KeyboardNavigationHint() {
  return (
    <div className="flex justify-end mt-4">
      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
        <kbd className="font-sans px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 shadow-sm mr-1">
          ←
        </kbd>
        <kbd className="font-sans px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 shadow-sm mr-2">
          →
        </kbd>
        navigate steps
      </span>
    </div>
  );
}
