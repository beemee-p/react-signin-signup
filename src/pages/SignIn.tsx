import React, { ReactElement, useState } from "react";
import { signIn } from "../apis/signIn";
import {
  UserValidation,
  VALIDATION_TYPE,
  validateUser,
} from "../util/validation";

const SignIn = (): ReactElement => {
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
  }

  return (
    <div>
      <article>
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
      </article>

      <article>
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
      </article>

      <button onClick={handleSignIn}>로그인</button>
    </div>
  );
};

export default SignIn;
