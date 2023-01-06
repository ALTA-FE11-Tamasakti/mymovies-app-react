import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Component, ReactNode } from "react";

import Homepage from "../Pages";
import DetailMovie from "../Pages/DetailMovies";
import Favorite from "../Pages/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movie/:id_movie",
    element: <DetailMovie />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
]);

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
