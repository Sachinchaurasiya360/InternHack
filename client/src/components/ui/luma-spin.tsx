export function LumaSpin({ className = "" }: { className?: string }) {
  const shapeStyle = {
    boxShadow: "inset 0 0 0 3px currentColor",
  };

  return (
    <div className={`relative w-16 aspect-square text-gray-800 dark:text-gray-100 ${className}`}>
      <span
        className="absolute rounded-full animate-[loaderAnim_2.5s_infinite]"
        style={shapeStyle}
      />
      <span
        className="absolute rounded-full animate-[loaderAnim_2.5s_infinite_-1.25s]"
        style={shapeStyle}
      />
    </div>
  );
}
