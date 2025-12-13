const Contact = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8">
        Contact Us
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-400 p-3 w-full sm:w-1/2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 p-3 w-full sm:w-1/2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          placeholder="Message"
          className="border border-gray-400 p-3 w-full mb-4 rounded h-32 sm:h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </div>
      <h2 className=" text-xl sm:text-2xl md:text-2xl text-center mt-12 mb-6">
        Deven <br /> 98580909858 <br /> devenpuri03@gmail.com
      </h2>
    </div>
  );
};
export default Contact;
