import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const App: FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
