import { Link } from "react-router-dom";
import Button from "./Button";
import "../Styles/Nav.css";
import { useContext } from "react";

import { ThemeContext } from "../Utils/Context";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <div className="navbar dark:bg-gray-600">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl "
          style={{ backgroundColor: "black", marginLeft: "1rem" }}
        >
          Filmku
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="dark:md:hover:bg-indigo-900">
            <Link
              className="dark:text-white "
              to="/favorites"
              style={{
                color: "black",
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "1.4em",
                padding: "1rem",
                letterSpacing: "0.15rem",
              }}
            >
              <h3 className="dark:text-white">Favorites</h3>
            </Link>
          </li>
        </ul>
      </div>
      <input type="checkbox" className="toggle" onClick={() => handleTheme()} />

      <div className="navbar-end">
        <input
          type="text"
          placeholder="Search Movies"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
    // <div className="navbar bg-base-100">
    //   <Link to="/" className="btn btn-ghost normal-case text-xl">
    //     Cinephile
    //   </Link>
    // </div>
  );
};

export default Navbar;
