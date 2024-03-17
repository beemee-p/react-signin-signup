import { User } from "@/src/constants/user";
import { useSelector } from "react-redux";
import { rootState } from "..";

export const useUserSelector = (): User | undefined =>
  useSelector((state: rootState) => state.user.user);
