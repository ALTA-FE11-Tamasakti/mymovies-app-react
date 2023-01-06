import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="footer footer-center p-4 bg-white text-base-content"
        style={{ paddingTop: "4rem", paddingBottom: "2rem" }}
      >
        <div>
          <p
            style={{ color: "black", fontFamily: "Poppins", fontWeight: "700" }}
          >
            Copyright © 2023 - All right reserved by FIlmku
          </p>
        </div>
      </footer>
    );
  }
}
