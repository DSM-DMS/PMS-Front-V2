import useSWR from "swr";
import { authFetcher, MainURL } from "../axios/axios";

export function StudentUser() {
  const { data } = useSWR(`${MainURL}/user`, authFetcher);
  return data;
}
