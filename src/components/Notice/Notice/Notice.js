import React, { useState } from "react";
import * as S from "../style";
import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import { FetcherNotice } from "../../../utils/api/user";
import { Link } from "react-router-dom";

function Notice() {
  //현재 페이지
  const [presentPage, setPresentPage] = useState(1);
  let fetchNotice = FetcherNotice(presentPage - 1);

  //전체 페이지 수
  const totalPage = fetchNotice?.total_page;
  const arr = Array.from({ length: totalPage }, (v, i) => i + 1);

  //new Content
  const newDate = (date) => {
    const today = new Date();
    const dateArray = date.split("-");
    if (parseInt(today.getMonth() + 1) !== parseInt(dateArray[1])) {
      return parseInt(dateArray[2]) + 30 - parseInt(today.getDate()) <= 7;
    }
    return parseInt(dateArray[2]) - parseInt(today.getDate()) <= 7;
  };

  //input
  const [inputText, setInputText] = useState("");
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <S.MainWrapper>
      <BackgroundTitle title="공지사항" />
      <S.MainItemWrapper>
        <S.Search>
          <S.SearchInput placeholder="검색" onChange={onChange} />
        </S.Search>
        <S.ArticleListWrapper>
          <S.ArticleListHeader>
            <div className="title">제목</div>
            <div className="writer">작성자</div>
            <div className="day">날짜</div>
          </S.ArticleListHeader>
          <S.Item>
            {fetchNotice?.notices
              .filter((data) => {
                if (inputText === "") {
                  return data;
                } else if (
                  data.title.toLowerCase().includes(inputText.toLowerCase())
                ) {
                  return data;
                } else {
                  return 0;
                }
              })
              .map((notice, index) => (
                <Link
                  to={{
                    pathname: `/noticeWritten/${notice.id}`,
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                  key={index}
                >
                  <S.ArticleListItem>
                    <div className="title">
                      {notice.title}
                      <S.NewItem
                        style={
                          newDate(notice?.[`upload-date`])
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        NEW
                      </S.NewItem>
                    </div>
                    <div className="writer">{notice.writer}</div>
                    <div className="day">{notice?.[`upload-date`]}</div>
                  </S.ArticleListItem>
                </Link>
              ))}
          </S.Item>
          <S.Page props={totalPage}>
            <S.BackPage
              onClick={() => {
                setPresentPage(presentPage - 1);
              }}
              props={presentPage}
            >
              {"<"}
            </S.BackPage>
            <>
              {arr.map((id) => (
                <S.PageItem
                  onClick={() => setPresentPage(id)}
                  style={
                    presentPage === id
                      ? {
                          fontWeight: 600,
                          color: "black",
                          textDecoration: "underline",
                        }
                      : {}
                  }
                  key={id}
                >
                  {id}
                </S.PageItem>
              ))}
            </>
            <S.NextPage
              onClick={() => {
                setPresentPage(presentPage + 1);
              }}
              props={presentPage === totalPage}
            >
              {">"}
            </S.NextPage>
          </S.Page>
        </S.ArticleListWrapper>
      </S.MainItemWrapper>
      <Footer />
    </S.MainWrapper>
  );
}

export default Notice;
