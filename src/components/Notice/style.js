import styled from "styled-components";
export const MainWrapper = styled.div`
  width: 100%;
  height: 1130px;
  background-color: #f6f6f6;
`;
export const MainItemWrapper = styled.div`
  position: relative;
  top: -90px;
  margin: 0 auto;
  width: 78%;
  height: 680px;
  box-shadow: 0px 5px 5px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-sizing: border-box;
  padding: 2% 4%;
`;
export const Search = styled.div`
  width: 100%;
  height: 6%;
  margin: 0.5% 0%;
  display: flex;
  justify-content: flex-end;
  color: #9e9e9e;
  font-size: 17px;
  background-color: white;
`;
export const SearchInput = styled.input`
  border: 1px solid #c8c8c8;
  background-color: #f6f6f6;
  font-size: 17px;
  color: #9e9e9e;
  width: 25%;
  height: 100%;
  outline: none;
  box-sizing: border-box;
  padding-left: 1%;
`;
export const ArticleListWrapper = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Item = styled.div`
  width: 100%;
  height: 450px;
`;
export const ArticleListHeader = styled.div`
  border-bottom: 1px solid #c8c8c8;
  width: 100%;
  font-size: 18px;
  font-weight: 800;
  display: flex;
  align-items: center;
  padding: 11px 0;

  .title {
    text-align: left;
    width: 70%;
    box-sizing: border-box;
    display: flex;
  }
  .writer {
    width: 10%;
    text-align: center;
    box-sizing: border-box;
  }
  .day {
    width: 20%;
    text-align: center;
    box-sizing: border-box;
  }
`;
export const ArticleListItem = styled(ArticleListHeader)`
  font-weight: 600;
  font-size: 16px;
`;
export const NewItem = styled.div`
  color: #d37c7c;
  width: 1%;
  height: 40%;
  font-size: 12px;
  margin-left: 1%;
  position: relative;
  top: 1.5px;
`;
export const Page = styled.div`
  cursor: pointer;
  width: 15%;
  height: 7%;
  margin-top: 2%;
  font-size: 18px;
  color: #9e9e9e;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageItem = styled.div`
  cursor: pointer;
  width: 20%;
  height: 80%;
  text-align: center;
  .currentPage {
    font-weight: 600;
    color: black;
    text-decoration: underline;
  }
`;
export const BackPage = styled(PageItem)`
  display: ${(props) => (props.props === 1 ? "none" : "block")};
`;
export const NextPage = styled(PageItem)`
  display: ${(props) => (props.props ? "none" : "block")};
`;

//글 내용, 목록 확인 부분
export const MainWrittenWrapper = styled(MainWrapper)`
  height: auto;
`;
export const MainWrittenItemWrapper = styled(MainItemWrapper)`
  height: auto;

  h3 {
    font-weight: 600;
    font-size: 24px;
  }

  .addFile {
    border: 1px solid #c8c8c8;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    border-left: none;
    border-right: none;
    color: #9e9e9e;
    font-size: 20px;
    padding: 15px 0;
    margin: 20px 0;

    .filetitle {
      font-weight: 600;
      font-size: 16px;
      color: gray;
      border-right: 2px solid #c8c8c8;
      margin-right: 1%;
      padding-right: 1%;
    }

    .fileitem {
      width: 90%;
      & a {
        font-size: 16px;
        display: block;
        color: #9e9e9e;
        text-decoration: none;
      }
    }
  }
`;
export const WrittenInfo = styled.div`
  margin-top: 40px;
  color: #9e9e9e;
  font-size: 20px;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  height: 40px;
  box-sizing: border-box;
  padding: 5px 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .infotitleWrapper {
    font-weight: 600;
    font-size: 18px;
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .infotitle {
    font-weight: 600;
    font-size: 18px;
    border-right: 1px solid #c8c8c8;
    padding-right: 15px;
  }
`;
export const WrittenItem = styled.div`
  width: 100%;
  line-height: 180%;

  textarea {
    top: 12%;
    font-size: 16px;
    width: 100%;
    resize: none;
    border: none;
    margin: 20px 0;
  }

  textarea:focus {
    outline: none;
  }

  textarea::placeholder {
    color: black;
  }
`;
export const CommentWrapper = styled.div`
  width: 100%;
  height: 33%;
  margin-top: 1%;

  .commentTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    display: flex;

    h3 {
      font-size: 18px;
      font-weight: 600;
    }

    .commentAmount {
      margin-left: 1%;
      color: #9e9e9e;
      font-size: 16px;
      box-sizing: border-box;
    }
  }
`;
export const CommentContent = styled.div`
  input {
    margin-top: 20px;
    height: 50px;
    width: 100%;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    outline: none;
    background-color: #f6f6f6;
    color: black;
    box-sizing: border-box;
    padding-left: 2%;
  }

  input::placeholder {
    color: #9e9e9e;
  }
  width: 100%;
  height: 85%;
`;
export const CommentItemWrapper = styled.div`
  width: 100%;
  height: 75%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 1%;
`;
export const CommentItem = styled.div`
  width: 99%;
  height: auto;
  display: ${(props) => props.display || "flex"};
  margin-top: 1%;
  align-items: flex-end;
  .profileimage {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .commentItemInner {
    width: auto;
    height: auto;
    background-color: #f6f6f6;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    padding: 1%;
    .title {
      font-size: 16px;
      font-weight: 800;
      position: relative;
      top: -5px;
    }
    .content {
      font-size: 18px;
      display: flex;
      line-height: 130%;
    }
  }
  & span {
    color: gray;
    font-size: 12px;
    margin-left: 10px;
    width: 85px;
  }
  & span:hover {
    cursor: pointer;
  }
`;
export const ReCommentItem = styled(CommentItem)`
  margin-left: 5%;
`;
export const BottomItemWrapper = styled(MainItemWrapper)`
  height: 600px;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NoticeWrittenItem = styled(ArticleListItem)`
  border-top: 1px solid #c8c8c8;
  font-weight: 800;
  height: 11%;
  textarea:focus {
    outline: none;
  }
`;
export const WrittenPageMove = styled(Page)`
  position: relative;
`;
