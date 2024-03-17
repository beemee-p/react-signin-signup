import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../apis/signIn";
import Button from "../components/common/Button";
import FormInput from "../components/common/FormInput";
import LinkButton from "../components/common/LinkButton";
import { UserValidation, validateUser } from "../util/validation";
import { UlStyle } from "./SignUp";
import Template from "./Template";

const SignIn = (): ReactElement => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userValidation, setUserValidation] = useState<UserValidation | null>();

  async function handleSignIn() {
    const validator = validateUser({ email, password });

    if (!validator.isValid) {
      setUserValidation(validator);
      return;
    }

    setUserValidation(null);
    await signIn(email, password);
    navigate("/");
  }

  return (
    <Template>
      <h3>로그인</h3>

      <UlStyle>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
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
          <Button onClick={handleSignIn} design={{ type: "primary" }}>
            로그인
          </Button>

          <LinkButton to="/signup" design={{ type: "secondary" }}>
            회원가입
          </LinkButton>
        </div>
      </UlStyle>
    </Template>
  );
};

export default SignIn;
