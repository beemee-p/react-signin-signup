import { User } from "@/src/constants/user";

export const setUser = (user: User | null) => ({
  type: "SET_USER",
  payload: user,
});
