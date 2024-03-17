import { jwtDecode } from "jwt-decode";
import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { User } from "../constants/user";
import { setUser } from "../store/user/actions";
import { useUserSelector } from "../store/user/selector";

const Main = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useUserSelector();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const decodedUserToken = token && jwtDecode(token);

    if (decodedUserToken) {
      dispatch(setUser(decodedUserToken as User));
    }
  }, []);

  function handleLogOut() {
    sessionStorage.removeItem("token");
    dispatch(setUser(null));
  }
  return (
    <div>
      <div>
        {user ? (
          <>
            <div>환영합니다 {user?.name || "-"} 님</div>
            <button onClick={handleLogOut}>로그아웃</button>
          </>
        ) : (
          <div>
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
