import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-base-100">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home{" "}
        </Link>
        <Link to="/favorites" className="btn btn-ghost normal-case text-xl">
          Favorites{" "}
        </Link>
      </div>
    );
  }
}
