import React from "react";
import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "submit" | "reset";
};

export const Button: FC<ButtonProps> = ({ children, type }) => {
  return <button className="kuddus" type={type}>{children}</button>;
};
