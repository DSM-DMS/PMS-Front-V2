import React, { useEffect, useState } from "react";
import * as S from "../style";
import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import { ReactComponent as Profile } from "../../../assets/Prifile.svg";
import { FetcherNotice, NoticeContent } from "../../../utils/api/user";
import { requestJW } from "../../../utils/axios/axios";
import { Link } from "react-router-dom";

function NoticeWritten(props) {
  useEffect(() => {
    const { location, history } = props;
    if (location.state.id === undefined) {
      history.push("/");
    }
  }, []);
  const resizing = (id) => {
    const textarea = document.getElementById(id);
    textarea.style.height = "0px";
    textarea.style.height = textarea.scrollHeight.toString() + "px";
  };
  //notice_id
  const { location } = props;
  const contentId = location.state.id;
  const noticeContent = NoticeContent(contentId);
  const [contentBody, setContentBody] = useState();
  useEffect(() => {
    setContentBody(noticeContent?.body);
  }, [noticeContent]);
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
      return date.getDay + 30 - nowDate.getDay <= 7;
    }
    return nowDate.getDay - date.getDay <= 7;
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
  useEffect(() => {
    resizing("textarea");
  });
  //댓글 입력
  const [comment, setComment] = useState("");
  const onChange = (e) => {
    setComment(e.target.value);
  };
  const typedEnter = (e) => {
    if (e.key === "Enter") {
      const typedComment = (notice_id) => {
        requestJW(
          "post",
          `notice/${notice_id}/comment`,
          {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          { body: comment, comment_id: null }
        );
      };
      typedComment(contentId);
      setComment("");
    }
  };
  return (
    <S.MainWrittenWrapper>
      <BackgroundTitle title="공지사항" />
      <S.MainWrittenItemWrapper>
        <h3>{noticeContent?.title}</h3>
        <S.WrittenInfo>
          <div className="infotype">공지사항</div>
          <div className="infotitleWrapper">
            <div className="infotitle">작성자</div>
            {noticeContent?.writer}
            <div className="infotitle">작성일</div>
            {noticeContent?.[`upload-date`]}
          </div>
        </S.WrittenInfo>
        <S.WrittenItem>
          <textarea id="textarea" placeholder={contentBody} readOnly />
        </S.WrittenItem>
        <div className="addFile">
          <div className="filetitle">첨부파일</div>
          <div className="fileitem"></div>
        </div>
        <S.CommentWrapper>
          <div className="commentTitle">
            <h3>댓글</h3>
            <div className="commentAmount">
              {noticeContent?.comment.length
                ? noticeContent?.comment.length
                : "0"}
              개
            </div>
          </div>
          <S.CommentContent>
            <input
              placeholder="댓글을 입력하세요."
              onChange={onChange}
              onKeyPress={typedEnter}
              value={comment}
            />
            <S.CommentItemWrapper>
              {noticeContent?.comment.map((comment) => (
                <S.CommentItem id={comment.id}>
                  <div className="profileimage">
                    <Profile />
                  </div>
                  <div className="commentItemInner">
                    <div className="title">{comment.user.name}</div>
                    <div className="content">{comment.body}</div>
                  </div>
                </S.CommentItem>
              ))}
            </S.CommentItemWrapper>
          </S.CommentContent>
        </S.CommentWrapper>
      </S.MainWrittenItemWrapper>
      <S.BottomItemWrapper>
        <S.ArticleListHeader>
          <div className="title">제목</div>
          <div className="writer">작성자</div>
          <div className="day">날짜</div>
        </S.ArticleListHeader>
        <S.Item>
          {fetchNotice?.notices.map((notice, index) => (
            <Link
              to={{ pathname: `/noticeWritten`, state: { id: notice.id } }}
              style={{ textDecoration: "none", color: "black" }}
              key={index}
            >
              <S.ArticleListItem id={notice.id} key={index}>
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
        <S.Page>
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
      </S.BottomItemWrapper>
      <Footer />
    </S.MainWrittenWrapper>
  );
}

export default NoticeWritten;
