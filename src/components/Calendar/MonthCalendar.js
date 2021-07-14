import moment from "moment";
import React, { useState, useEffect } from "react";
import * as S from "./style";

function MonthCalendar(props) {
  const [baseDate, setBaseDate] = useState(moment());

  const dateArray = ["일", "월", "화", "수", "목", "금", "토"];
  const today = baseDate;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const mapArrayToDate = (dateArray) => {
    return dateArray.map((date, index) => {
      const className = () => {
        let className = "calBodyHeaderCell";
        if (index === 0) {
          return className + " date-sun";
        } else if (index === 6) {
          return className + " date-sat";
        } else {
          return className + " date-weekday";
        }
      };
      return <div className={className()}>{date}</div>;
    });
  };

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;

    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line no-loop-func
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <td
                    key={index}
                    style={{ backgroundColor: "#ffff0054" }}
                    onClick={() => {
                      props.setMealChangeDate(days.format("YYYYMMDD"));
                      props.setMonthChange(days.format("M"));
                      props.setDayChange(days.format("D"));
                      props.setDateChange(days.day());
                      props.setChangeDate(days.format("YYYY-MM-DD"));
                    }}
                  >
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <td key={index} style={{ color: "gray" }}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td
                    key={index}
                    style={{
                      backgroundColor:
                        index === 0 ? "#f2d7d7" : index === 6 ? "#c7d5e8" : "",
                    }}
                    onClick={() => {
                      props.setMealChangeDate(days.format("YYYYMMDD"));
                      props.setMonthChange(days.format("M"));
                      props.setDayChange(days.format("D"));
                      props.setDateChange(days.day());
                      props.setChangeDate(days.format("YYYY-MM-DD"));
                    }}
                  >
                    <span>{days.format("D")}</span>
                    <div className="content-wrapper">
                      {props.eventDate
                        .filter(
                          (data) => data.date === days.format("YYYY-MM-DD")
                        )[0]
                        ?.scheudles.map((i) => {
                          return (
                            <div className="content">
                              <div className="circle"></div>
                              <span>{i}</span>
                            </div>
                          );
                        })}
                    </div>
                  </td>
                );
              }
            })}
        </tr>
      );
    }

    return result;
  };
  useEffect(() => {
    console.log(props.eventDate);
  }, [props]);
  return (
    <S.MiddleWrapper>
      <S.CalenderMain>
        <div className="calBodyWrapper">
          <div className="controlbutton">
            <button
              onClick={() => {
                setBaseDate(baseDate.clone().subtract(1, "month"));
                props.setMonthDate(
                  baseDate.clone().subtract(1, "month").format("M")
                );
              }}
            >
              {"<"}
            </button>
            <h3>{today.format("YYYY 년 MM 월")}</h3>
            <button
              onClick={() => {
                setBaseDate(baseDate.clone().add(1, "month"));
                props.setMonthDate(
                  baseDate.clone().add(1, "month").format("M")
                );
              }}
            >
              {">"}
            </button>
          </div>
          <div className="calBodyHeader">{mapArrayToDate(dateArray)}</div>
          <table>
            <tbody>{calendarArr()}</tbody>
          </table>
        </div>
      </S.CalenderMain>
    </S.MiddleWrapper>
  );
}

export default MonthCalendar;
