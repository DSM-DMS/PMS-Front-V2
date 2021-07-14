import useSWR from "swr";
import { fetcher, JwURL } from "../axios/axios";

export function FetchPhoto(page, size) {
  const { data } = useSWR(`${JwURL}gallery?page=${page}&size=${size}`, fetcher);
  return data;
}

export function FetchPhotoDetail(id) {
  const { data } = useSWR(`${JwURL}gallery/${id}`, fetcher);
  return data;
}
