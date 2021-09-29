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
    const nowDate = new Date();
    if (nowDate.getMonth !== date.getMonth) {
      return date.getDate + 30 - nowDate.getDate <= 7;
    }
    console.log(nowDate.getDate - date.getDate <= 7);
  };

  //page 이동
  const backPage = () => {
    if (presentPage === 1) {
      alert("error");
      return;
    }
    setPresentPage(presentPage - 1);
  };
  const nextPage = () => {
    if (presentPage === totalPage) {
      alert("error");
      return;
    }
    setPresentPage(presentPage + 1);
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
          <select>
            <option>제목</option>
            <option>제목+내용</option>
            <option>내용</option>
          </select>
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
                  to={{ pathname: `/noticeWritten`, state: { id: notice.id } }}
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
            <S.PageItem onClick={() => backPage()}>{"<"}</S.PageItem>
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
                >
                  {id}
                </S.PageItem>
              ))}
            </>
            <S.PageItem onClick={() => nextPage()}>{">"}</S.PageItem>
          </S.Page>
        </S.ArticleListWrapper>
      </S.MainItemWrapper>
      <Footer />
    </S.MainWrapper>
  );
}

export default Notice;
