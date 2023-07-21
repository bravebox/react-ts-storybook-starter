import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button data-testid="my-button" onClick={() => console.log("1")}>{props.label ?? "Default"}</button>;
};

export default Button;
