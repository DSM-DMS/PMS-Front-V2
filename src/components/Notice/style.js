import styled from "styled-components";
export const MainWrapper = styled.div`
  width: 100%;
  height: 1130px;
  background-color: #f6f6f6;
`;
export const MainItemWrapper = styled.div`
  position: relative;
  top: -5%;
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
  select {
    color: #9e9e9e;
    font-size: 17px;
    background-color: white;
    width: 10%;
    height: 100%;
    outline: none;
    border: 1px solid #c8c8c8;
    option {
      color: #c8c8c8;
      font-size: 16px;
    }
  }
`;
export const SearchInput = styled.input`
  border: 1px solid #c8c8c8;
  background-color: #f6f6f6;
  font-size: 17px;
  color: #9e9e9e;
  width: 23%;
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
  height: 10%;
  font-weight: 1000;
  font-size: 18px;
  display: flex;
  .title {
    text-align: left;
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 0.8%;
    display: flex;
  }
  .writer {
    width: 10%;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    padding-top: 0.8%;
  }
  .day {
    width: 20%;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    padding-top: 0.8%;
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
  width: 20%;
  height: 80%;
  text-align: center;
  .currentPage {
    font-weight: 600;
    color: black;
    text-decoration: underline;
  }
`;

//글 내용, 목록 확인 부분
export const MainWrittenWrapper = styled(MainWrapper)`
  /*   height: 2000px; */
`;
export const MainWrittenItemWrapper = styled(MainItemWrapper)`
  height: auto;
  h3 {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 2%;
  }
  .addFile {
    border: 1px solid #c8c8c8;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    border-left: none;
    border-right: none;
    color: #9e9e9e;
    font-size: 20px;
    .filetitle {
      font-weight: 600;
      width: 6%;
      border-right: 2px solid #c8c8c8;
      margin-right: 1%;
      padding-right: 1%;
    }
    .fileitem {
      width: 90%;
    }
  }
`;
export const WrittenInfo = styled.div`
  color: #9e9e9e;
  font-size: 20px;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  height: 5%;
  display: flex;
  box-sizing: border-box;
  padding: 5px 0;
  justify-content: space-between;
  .infotitleWrapper {
    display: flex;
    width: 30%;
  }
  .infotitle {
    font-weight: 600;
    width: 70px;
    border-right: 1px solid #c8c8c8;
    margin-left: 12%;
  }
`;
export const WrittenItem = styled.div`
  font-weight: 550;
  margin-top: 1%;
  width: 100%;
  line-height: 180%;
  textarea {
    top: 12%;
    width: 100%;
    resize: none;
    border: none;
    font-size: 20px;
    margin: 5px 0;
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
    width: 100%;
    height: 40px;
    display: flex;
    h3 {
      font-weight: 600;
    }
    .commentAmount {
      margin-left: 1%;
      color: #9e9e9e;
      font-size: 16px;
      box-sizing: border-box;
      padding-top: 0.4%;
    }
  }
`;
export const CommentContent = styled.div`
  input {
    width: 100%;
    border-radius: 3%;
    height: 50px;
    outline: none;
    background-color: #f6f6f6;
    border: none;
    font-size: 17px;
    color: #9e9e9e;
    box-sizing: border-box;
    padding-left: 2%;
  }
  width: 100%;
  height: 85%;
`;
export const CommentItemWrapper = styled.div`
  width: 100%;
  height: 75%;
  overflow-y: scroll;
  margin-top: 1%;
`;
export const CommentItem = styled.div`
  width: 99%;
  height: auto;
  display: flex;
  margin-top: 1%;
  align-items: center;
  .profileimage {
    width: 4.4%;
    height: 50px;
    margin-left: 1%;
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
