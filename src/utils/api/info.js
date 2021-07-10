import useSWR from "swr";
import { fetcher, JwURL } from "../axios/axios";

export function FetchPhoto() {
  const { data } = useSWR(`${JwURL}gallery?page=0&size=10`, fetcher);
  return data;
}

export function FetchPhotoDetail(id) {
  const { data } = useSWR(`${JwURL}gallery/${id}`, fetcher);
  return data;
}
