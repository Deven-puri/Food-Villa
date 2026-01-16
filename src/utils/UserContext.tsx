import { createContext } from "react";
const UserContext = createContext({
  loggedInUser: "Default User",
  setLoggedInUser: (user: string) => {},
});
export default UserContext;
