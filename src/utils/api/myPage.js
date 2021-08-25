import useSWR from "swr";
import { authFetcher, MainURL, nicknameFetch } from "../axios/axios";

export function StudentUser() {
  const { data } = useSWR(`${MainURL}/user`, authFetcher);
  return data;
}

export function StudentUserInfo(studentNumber) {
  const { data } = useSWR(
    `${MainURL}/user/student/${studentNumber}`,
    authFetcher
  );
  return data;
}

export function StudentUserPoint(studentNumber){
  const { data } = useSWR(`${MainURL}/user/student/point/${studentNumber}`, authFetcher)
  return data;
}

export function StudentUserOuting(studentNumber){
  const { data } = useSWR(`${MainURL}/user/student/outing/${studentNumber}`, authFetcher)
  return data;
}

export function UserNickname(name){
  const { data } = useSWR(`${MainURL}/user/name`, nicknameFetch(name));
  return data;
}