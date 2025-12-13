import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12 max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <UserContext.Consumer>
          {({ loggedInUser }: { loggedInUser: string }) => (
            <h1 className="font-bold text-lg sm:text-xl text-blue-600">
              Welcome, {loggedInUser}
            </h1>
          )}
        </UserContext.Consumer>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        About Food Villa
      </h1>
      <h2 className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
        A React-based Food Delivery Application
      </h2>

      <div className="mb-12 text-center">
        <p className="text-gray-700 mb-4 text-base sm:text-lg">
          This is a food delivery web application built with React.
        </p>
        <p className="text-gray-700 mb-3 font-semibold">Features include:</p>
        <ul className="list-none text-gray-700 space-y-2">
          <li>🍽️ Browse restaurants</li>
          <li>🔍 Search and filter options</li>
          <li>🛒 Add items to cart</li>
          <li>📱 Responsive design</li>
        </ul>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Meet the Developer
        </h2>
        <div className="flex justify-center">
          <UserClass name={"Deven"} location={"Delhi"} />
        </div>
      </div>
    </div>
  );
};
export default About;
