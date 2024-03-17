import { SIGNUP_URL } from "../constants/apis";
import axiosConfig from "./axiosConfig";

export async function signUp(email: string, password: string, name: string) {
  try {
    const response = await axiosConfig.post(SIGNUP_URL, {
      email,
      password,
      name,
    });

    if (response.status === 200) {
      const token = response.data.token;
      sessionStorage.setItem("token", token);
      alert("회원가입에 성공했습니다🐶");
    } else {
      console.error("Signin failed");
      alert("회원가입에 실패했습니다🥲");
    }
  } catch (error) {
    console.error("API call failed", error);
  }
}
