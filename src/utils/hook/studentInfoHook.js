import { studentNumber } from "../variable/student";

export function StudentGrade(userData, stdSelect) {
  return Math.floor(
    userData?.students[`${stdSelect}`]?.[`${studentNumber}`] / 1000
  );
}

export function StudentClass(userData, stdSelect) {
  return Math.floor(
    (userData?.students[`${stdSelect}`]?.[`${studentNumber}`] % 1000) / 100
  );
}

export function StudentNumber(userData, stdSelect) {
  return Math.floor(
    (userData?.students[`${stdSelect}`]?.[`${studentNumber}`] % 1000) % 100
  );
}
