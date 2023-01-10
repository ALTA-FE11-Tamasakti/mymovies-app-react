import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { ThemeContext } from "../Utils/Context";
import { useDispatch } from "react-redux";
import { useState, useMemo } from "react";

import Homepage from "../Pages";
import DetailMovie from "../Pages/DetailMovies";
import Favorite from "../Pages/Favorite";
import { setFavorites } from "../Utils/Redux/reducer/reducer";

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

const App = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getFavMovies = localStorage.getItem("FavMovie");
    if (getFavMovies) {
      dispatch(setFavorites(JSON.parse(getFavMovies)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
