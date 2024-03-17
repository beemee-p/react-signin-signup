import { DesignProps } from "@/src/styles/type";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ButtonTheme } from "../../styles/Button.styles";
import { ButtonType } from "./Button";

interface LinkButtonProps
  extends React.RefAttributes<HTMLAnchorElement>,
    DesignProps<ButtonType> {
  to: string;
  children?: React.ReactNode;
}

const LinkButton = ({ children, ...props }: LinkButtonProps) => {
  return (
    <LinkButtonStyle {...props} to={props.to}>
      {children}
    </LinkButtonStyle>
  );
};

const LinkButtonStyle = styled(Link)<LinkButtonProps>`
  color: inherit;
  text-decoration: none;
  text-align: center;
  ${ButtonTheme.defaultStyle}
  ${({ design }) => design && ButtonTheme.type[design.type || "primary"]}
`;

export default LinkButton;
