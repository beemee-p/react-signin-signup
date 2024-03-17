import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/common/Button";
import LinkButton from "../components/common/LinkButton";
import SpenditLogo from "../static/img/spendit-logo.png";
import { setUser } from "../store/user/actions";
import { useUserSelector } from "../store/user/selector";

const Header = () => {
  const user = useUserSelector();
  const dispatch = useDispatch();
  const location = useLocation();

  function handleLogOut() {
    sessionStorage.removeItem("token");
    dispatch(setUser(null));
    alert("로그아웃 되었습니다.👋");
  }

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={SpenditLogo} alt="logo" />
      </Link>

      {location.pathname !== "/signup" && location.pathname !== "/signin" && (
        <div className="user-btns">
          {user ? (
            <>
              <p>환영합니다 {user?.name || "-"} 님</p>
              <Button onClick={handleLogOut} design={{ type: "secondary" }}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <LinkButton to="/signin" design={{ type: "primary" }}>
                로그인
              </LinkButton>

              <LinkButton to="/signup" design={{ type: "secondary" }}>
                회원가입
              </LinkButton>
            </>
          )}
        </div>
      )}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  > a {
    &:hover {
      opacity: 0.7;
    }
    > img {
      width: 108px;
      height: 30px;
    }
  }

  .user-btns {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      width: 75px;
    }

    > p {
      margin-right: 8px;
    }
  }
`;

export default Header;
