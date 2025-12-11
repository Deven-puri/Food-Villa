import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"
const About = () => {
  return (
    <div>
      <div>
        <UserContext.Consumer>
          {({ loggedInUser }: { loggedInUser: string }) => (
            <h1 className="font-bold text-xl">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h1>About Us</h1>
      <h2>This is the React Web</h2>
      <UserClass name={"Deven"} location={"Delhi"} />
    </div>
  );
};
export default About;