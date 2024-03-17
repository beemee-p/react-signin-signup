import { SIGNIN_URL } from "../constants/apis";
import axiosConfig from "./axiosConfig";

export async function signIn(email: string, password: string) {
  try {
    const response = await axiosConfig.post(SIGNIN_URL, {
      email,
      password,
    });

    if (response.status === 200) {
      const token = response.data.token;
      sessionStorage.setItem("token", token);
      alert("로그인에 성공했습니다💚");
    } else {
      console.error("Signin failed");
      alert("로그인에 실패했습니다🥲");
    }
  } catch (error) {
    console.error("API call failed", error);
  }
}
