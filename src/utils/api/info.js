import useSWR from "swr";
import { fetcher, JwURL } from "../axios/axios";

export function FetchPhoto() {
  const { data } = useSWR(`${JwURL}gallery?page=0&size=12`, fetcher);
  return data;
}
