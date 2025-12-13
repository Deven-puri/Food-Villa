import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as any;
  console.error("Routing Error:", error);

  return (
    <div className="p-4 sm:p-8 md:p-20 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4">
        Oops! Something went wrong :(
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4">
        Please try again later.
      </h2>
      {error?.status && (
        <h3 className="text-base sm:text-lg text-gray-600 mb-2">
          {error.status}: {error.statusText}
        </h3>
      )}
      {error?.message && (
        <p className="text-sm sm:text-base text-gray-500">{error.message}</p>
      )}
    </div>
  );
};

export default Error;
