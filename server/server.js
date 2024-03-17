const express = require("express");
const cors = require("cors");
const app = express();
const port = 3005;
const jwt = require("jsonwebtoken");

app.use(cors());

// 로그인 API
app.post("/api/signin", (req, res) => {
  // db 의 유저정보를 검색해서 가져오는 로직이 추가 되어야 함
  const userInfo = { id: user.id, name: user.name };
  const secretKey = "abcd1234"; // 예시 비밀키
  const token = generateJWTtoken(user, secretKey, { expiresIn: "5m" });
  return res.json({ user: userInfo, token });
});

// 회원가입 API
app.post("/api/signup", (req, res) => {
  // db 의 유저정보를 검색해서 가져오는 로직이 추가 되어야 함
  const userInfo = { id: user.id, name: user.name };
  const secretKey = "abcd1234"; // 예시 비밀키
  const token = generateJWTtoken(user, secretKey, { expiresIn: "5m" });
  return res.json({ user: userInfo, token });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const user = { id: 3, email: "john@gmail.com", name: "John Doe" }; // 예시 유저

function generateJWTtoken(payload, secretKey, options) {
  return jwt.sign(payload, secretKey, options);
}
