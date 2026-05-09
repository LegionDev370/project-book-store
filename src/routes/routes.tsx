import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";
import NotFound from "../pages/not-found";
import RootLayout from "../components/layouts/root-layout";
export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        // element: <h2>About</h2>,
      },
    ],
  },
  { path: "sign-up", element: <SignUp /> },
  { path: "sign-in", element: <SignIn /> },
  { path: "*", element: <NotFound /> },
]);
