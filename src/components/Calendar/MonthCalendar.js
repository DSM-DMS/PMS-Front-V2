import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Calendar from "react-calendar";
import { computeHeadingLevel } from "@testing-library/react";

function MonthCalendar(props) {
  const [value, onChange] = useState(new Date());
  const ref = useRef(null);

  const callDay = (Day) => {
    let year = Day.getFullYear();
    const month = String(Day.getMonth() + 1).padStart(2, "0");
    const day = String(Day.getDate()).padStart(2, "0");
    const date = Day.getDay();

    let TodayDate = year + "-" + month + "-" + day;
    let MaelDate = year + "" + month + "" + day;

    props.setChangeDate(TodayDate);
    props.setMealChangeDate(MaelDate);
    props.setMonthChange(month);
    props.setDayChange(day);
    props.setDateChange(date);
  };

  function format(num) {
    return num < 10 ? 0 + num : num;
  }
  // useEffect(() => {
  //   const calenderElements = document.getElementsByClassName(
  //     "react-calendar__month-view__days"
  //   )[0].childNodes;
  //   calenderElements.forEach((i) => {
  //     const date = i.innerHTML.split('"')[1];
  //     const year = date.split("년 ")[0];
  //     const month = date.split("년 ")[1].split("월")[0];
  //     const day = date.split("월 ")[1].split("일")[0];
  //     const fullDate = `${year}-${format(month)}-${format(day)}`;
  //     const event = props.eventDate.filter((i) => {
  //       if (i.date === fullDate) return i;
  //     });
  //     if (event.length > 0) i.innerHTML += event[0].scheudles[0];
  //   });
  //   console.log(props.eventDate);
  // }, [props.eventDate, value]);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <S.MiddleWrapper>
        <S.CalenderMain>
          <Calendar
            value={value}
            onChange={onChange}
            onClickDay={callDay}
            onActiveStartDateChange={(e) => console.log(e)}
          />
        </S.CalenderMain>
      </S.MiddleWrapper>
    </>
  );
}

export default MonthCalendar;
