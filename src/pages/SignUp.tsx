import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { signUp } from "../apis/signup";
import Button from "../components/common/Button";
import FormInput from "../components/common/FormInput";
import LinkButton from "../components/common/LinkButton";
import { UserValidation, validateUser } from "../util/validation";
import Template from "./Template";

const SignUp = (): ReactElement => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userValidation, setUserValidation] = useState<UserValidation | null>();

  async function handleSignUp() {
    const validator = validateUser({ email, password, name });

    if (!validator.isValid) {
      setUserValidation(validator);
      return;
    }

    setUserValidation(null);
    await signUp(email, password, name);
    navigate("/");
  }

  return (
    <Template>
      <h3>회원가입</h3>

      <UlStyle>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          validation={userValidation}
        />

        <FormInput
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          validation={userValidation}
        />

        <FormInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          validation={userValidation}
        />

        <div className="btn-wrap">
          <Button onClick={handleSignUp} design={{ type: "primary" }}>
            회원가입
          </Button>

          <LinkButton to="/signin" design={{ type: "secondary" }}>
            로그인
          </LinkButton>
        </div>
      </UlStyle>
    </Template>
  );
};

export const UlStyle = styled.ul`
  .btn-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;

    > button {
      margin-right: 4px;
      width: 72px;
      height: 38px;
    }

    > a {
      height: 38px;
      width: 72px;
    }
  }
`;

export default SignUp;
