import React from "react";
import { styled } from "styled-components";
import Header from "../components/Header";

interface TemplateProps {
  children: React.ReactNode;
}

const Template = (props: TemplateProps) => {
  return (
    <MainStyle>
      <Header />
      {props.children}
    </MainStyle>
  );
};

export const MainStyle = styled.main`
  max-width: 1200px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 80px;
`;

export default Template;
