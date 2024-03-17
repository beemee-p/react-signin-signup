import React, { ReactElement, useState } from "react";
import { signIn } from "../apis/signIn";

const SignIn = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    console.log(email + " " + password);
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
      </article>

      <article>
        <span>비밀번호</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
      </article>

      <button onClick={handleSignIn}>로그인</button>
    </div>
  );
};

export default SignIn;
