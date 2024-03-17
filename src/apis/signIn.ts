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
    } else {
      console.error("Login failed");
    }
  } catch (error) {
    console.error("API call failed", error);
  }
}
