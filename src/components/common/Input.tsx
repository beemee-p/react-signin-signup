import React, { ReactElement } from "react";
import { styled } from "styled-components";

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  validation?: {
    isValid: boolean;
    error: string;
  };
}

const Input = (props: InputProps): ReactElement => {
  return (
    <LabelStyle>
      <InputStyle
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </LabelStyle>
  );
};

const LabelStyle = styled.label`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid rgb(228, 232, 232);
  padding: 11px 18px;
`;

const InputStyle = styled.input`
  width: 100%;
  outline-style: none;
  border: none;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.25px;
  font-weight: 400;
  background-color: transparent;
`;

export default Input;
