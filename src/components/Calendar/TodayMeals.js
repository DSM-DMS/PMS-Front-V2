import React, { useState } from "react";
import * as S from "./style";
import { FetchMeal, FetchMealImg } from "../../utils/api/user";

function TodayMeals(props) {
  const [selected, setSelected] = useState(1);
  const [listDisplay, setListDisplay] = useState("flex");
  const [imgDisplay, setImgDisplay] = useState("none");

  function getTodayLabel(date) {
    // eslint-disable-next-line no-array-constructor
    var week = new Array(
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    );

    var todayLabel = week[date];

    return todayLabel;
  }

  //급식 API
  const fetchMeal = FetchMeal(props.TodayDate);
  const fetchMealImg = FetchMealImg(props.TodayDate);

  const mealImgClickHandler = () => {
    if (listDisplay === "none" && imgDisplay === "flex") {
      setListDisplay("flex");
      setImgDisplay("none");
    } else {
      setListDisplay("none");
      setImgDisplay("flex");
    }
  };

  const buttonLists = [
    {
      id: 1,
      button: "아침",
    },
    {
      id: 2,
      button: "점심",
    },
    {
      id: 3,
      button: "저녁",
    },
  ];

  const MealButtonClickHandler = (row) => {
    setSelected(row.id);
  };

  return (
    <S.SideWrapper>
      <S.Title>오늘의 급식</S.Title>
      <S.SelectData>
        {props.month}월 {props.day}일 {getTodayLabel(props.date)}
      </S.SelectData>
      <S.MealsList onClick={mealImgClickHandler}>
        {selected === 1 ? (
          <>
            {fetchMeal?.breakfast === "" ? (
              <>급식이 없습니다.</>
            ) : (
              fetchMeal?.breakfast?.map((i, index) => (
                <li key={index} style={{ display: listDisplay }}>
                  {i}
                </li>
              ))
            )}
          </>
        ) : selected === 2 ? (
          <>
            {fetchMeal?.lunch === "" ? (
              <>급식이 없습니다.</>
            ) : (
              fetchMeal?.lunch?.map((i, index) => (
                <li key={index} style={{ display: listDisplay }}>
                  {i}
                </li>
              ))
            )}
          </>
        ) : (
          <>
            {fetchMeal?.dinner === "" ? (
              <>급식이 없습니다.</>
            ) : (
              fetchMeal?.dinner?.map((i, index) => (
                <li key={index} style={{ display: listDisplay }}>
                  {i}
                </li>
              ))
            )}
          </>
        )}
        {fetchMealImg?.breakfast ||
        fetchMealImg?.lunch ||
        fetchMealImg?.dinner === "" ? (
          <div style={{ display: imgDisplay, color: "gray" }}>
            오늘의 급식 사진이 없습니다.
          </div>
        ) : (
          <img
            style={{ display: imgDisplay }}
            src={
              selected === 1
                ? fetchMealImg?.breakfast
                : selected === 2
                ? fetchMealImg?.lunch
                : fetchMealImg?.dinner
            }
            alt="급식사진"
          />
        )}
      </S.MealsList>
      <S.Nav>
        {buttonLists.map((buttonList) => {
          return (
            <S.MealButton
              key={buttonList.id}
              onClick={() => MealButtonClickHandler(buttonList)}
              style={{
                backgroundColor:
                  buttonList.id === selected ? "#56ad9e" : "white",
                color: buttonList.id === selected ? "white" : "black",
              }}
            >
              {buttonList.button}
            </S.MealButton>
          );
        })}
      </S.Nav>
      <S.ListWrapper>
        {props.todayEvent.length === 0 ? (
          <div>행사가 없습니다.</div>
        ) : (
          <>
            {props.todayEvent.map((EventList, index) => {
              const EventDate = EventList.date.split("-");
              const date = EventDate[1] + "-" + EventDate[2];

              const EventColor =
                EventList.scheudles[0] === "의무귀가" ? "#D37C7C" : "#56AD77";
              return (
                <S.Event key={index}>
                  <S.EventName>
                    <div
                      className="circle"
                      style={{ backgroundColor: EventColor }}
                    ></div>
                    <span>{EventList.scheudles[0]}</span>
                  </S.EventName>
                  <S.EventDate>
                    <span>{date}</span>
                  </S.EventDate>
                </S.Event>
              );
            })}
          </>
        )}
      </S.ListWrapper>
    </S.SideWrapper>
  );
}

export default TodayMeals;
