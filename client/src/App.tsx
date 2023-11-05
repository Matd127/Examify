import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
