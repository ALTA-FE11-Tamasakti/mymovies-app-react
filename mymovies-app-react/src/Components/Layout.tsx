import React, { Component } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className="h-full w-full bg-white flex flex-col">
        <Navbar />
        <div className="h-full overflow-auto p-3"></div> {this.props.children}
      </div>
    );
  }
}
