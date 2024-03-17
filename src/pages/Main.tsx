import { jwtDecode } from "jwt-decode";
import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import Header from "../components/Header";
import { User } from "../constants/user";
import { setUser } from "../store/user/actions";

const Main = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const decodedUserToken = token && jwtDecode(token);

    if (decodedUserToken) {
      dispatch(setUser(decodedUserToken as User));
    }
  }, []);

  return (
    <MainStyle>
      <Header />

      <SectionStyle>
        <h1>
          성공한 기업들의
          <br />
          혁신적 비용 관리, 스팬딧
        </h1>

        <p>
          법인 카드부터 솔루션까지, <br />
          새로운 차원의 올인원 비용 관리를 경험해보세요.
        </p>
      </SectionStyle>
    </MainStyle>
  );
};

export const MainStyle = styled.main`
  max-width: 1200px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 80px;
`;

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 500px;
  margin-bottom: 24px;
  text-align: center;

  h1 {
    color: #0b2852;
    font-size: 50px;
    font-weight: 700;
  }

  > p {
    color: #334255;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }
`;

export default Main;
