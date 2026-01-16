const Shimmer = ({ count = 8 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="block h-full w-full max-w-xs">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="shimmer w-full h-40 sm:h-48 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200"></div>
              <div className="p-3 sm:p-4 flex-1 flex flex-col space-y-2">
                <div className="h-5 sm:h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded shimmer w-3/4"></div>
                <div className="h-4 sm:h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded shimmer w-full flex-1"></div>
                <div className="h-4 sm:h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded shimmer w-1/4"></div>
                <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded shimmer w-2/3"></div>
                <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded shimmer w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default Shimmer;
