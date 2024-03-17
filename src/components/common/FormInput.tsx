import { UserValidation } from "@/src/util/validation";
import React from "react";
import styled from "styled-components";
import Input from "./Input";

interface FormInputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  validation?: UserValidation | null;
}

const FormInput: React.FC<FormInputProps> = (props: FormInputProps) => {
  return (
    <FormInputStyle>
      <h5>{props.placeholder}</h5>
      <Input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />

      {!props.validation?.isValid && props.validation?.type === props.type && (
        <p className="err-msg">{props.validation?.error}</p>
      )}
    </FormInputStyle>
  );
};

const FormInputStyle = styled.li`
  margin-bottom: 20px;
  list-style-type: none;

  > h5 {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.25px;
    font-weight: 600;

    &::after {
      content: "*";
      color: red;
      margin-left: 4px;
    }
  }

  .err-msg {
    margin-top: 8px;
    color: red;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.25px;
  }
`;

export default FormInput;
