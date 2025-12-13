const Shimmer = ({ count = 8 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="max-w-xs w-full">
            <div className="shimmer">
              <div className="bg-gray-300 h-40 sm:h-48 rounded-t-xl"></div>
              <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                <div className="h-3 sm:h-4 bg-gray-300 rounded w-2/4"></div>
                <div className="h-3 sm:h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-3 sm:h-4 bg-gray-300 rounded w-2/4"></div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default Shimmer;
