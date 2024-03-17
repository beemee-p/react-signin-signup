import { DesignProps } from "@/src/styles/type";
import React, { ReactElement } from "react";
import { styled } from "styled-components";
import { ButtonTheme } from "../../styles/Button.styles";

export interface ButtonType {
  type: "primary" | "secondary";
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    DesignProps<ButtonType> {}

const Button = (props: ButtonProps): ReactElement => {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
};

const ButtonStyle = styled.button<ButtonProps>`
  ${ButtonTheme.defaultStyle}
  ${({ design }) => design && ButtonTheme.type[design.type || "primary"]}
`;

export default Button;
