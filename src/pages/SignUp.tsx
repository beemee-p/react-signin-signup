import React, { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../apis/signup";
import {
  UserValidation,
  VALIDATION_TYPE,
  validateUser,
} from "../util/validation";
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
    <ul>
      <li>
        <span>이메일</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />

        {!userValidation?.isValid &&
          userValidation?.type === VALIDATION_TYPE.EMAIL && (
            <p>{userValidation.error}</p>
          )}
      </li>

      <li>
        <span>이름</span>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />

        {!userValidation?.isValid &&
          userValidation?.type === VALIDATION_TYPE.NAME && (
            <p>{userValidation.error}</p>
          )}
      </li>

      <li>
        <span>비밀번호</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />

        {!userValidation?.isValid &&
          userValidation?.type === VALIDATION_TYPE.PASSWORD && (
            <p>{userValidation.error}</p>
          )}
      </li>

      <button onClick={handleSignUp}>회원가입</button>
      <Link to="/signin">로그인</Link>
    </ul>
  );
};

export default SignUp;
