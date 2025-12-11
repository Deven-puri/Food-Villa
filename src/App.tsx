import React, { lazy, Suspense, useState } from "react";
import "../style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestraurentsMenu from "./components/RestraurentsMenu";
import UserContext from "./utils/UserContext";

//chuncking
//lazy loading
//code splitting
//dynamic binding
//on demand loading
//dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState("Default User");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestraurentsMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const App: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};
export default App;
