import React, { ButtonHTMLAttributes, Component } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
export default class Button extends Component<ButtonProps> {
  render() {
    return (
      <button className="btn w-full tracking-wider" {...this.props}>
        {this.props.label}
      </button>
    );
  }
}
