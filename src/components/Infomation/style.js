import styled from "styled-components";
import { Earth } from "../../assets/index";

const MainWrapper = styled.div`
  width: 100%;
  height: 1230px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
`;

const InfoMainWrapper = styled.div`
  width: 100%;
  height: 1430px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreatorsWrapper = styled.div`
  position: relative;
  top: -7%;
  margin: 0 auto;
  width: 78%;
  height: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
`;
const InfoItem = styled.div`
  margin: 0 20px;
  width: 250px;
  height: 300px;
  background-color: white;
  box-shadow: 3px 3px 3px #00000029;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s all;

  span {
    margin: 15px;
  }

  img {
    width: 160px;
    height: 160px;
    border-radius: 100px;
    object-fit: cover;
  }
`;

const InfoHeaderWrapper = styled.div`
  position: relative;
  top: -7%;
  margin: 0 auto;
  width: 78%;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 5px #00000029;

  h1 {
    font-size: 26px;
    font-weight: 600;
    margin-left: 70px;
  }

  .info-search {
    margin-left: 70px;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    width: 23%;
    height: 40px;
    border: 1px solid #c8c8c8;
  }
  .info-search span {
    width: 35%;
    padding: 10px;
    border-right: 1px solid #c8c8c8;
    font-size: 14px;
    color: #c8c8c8;
  }

  .info-search input {
    outline: none;
    width: 100%;
    border: none;
    padding: 10px;
  }
`;

const ItemBoxWrapper = styled.div`
  position: relative;
  top: -4%;
  width: 70%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
  overflow: auto;

  .search-none {
    color: #9a9a9a;
  }
`;

const ItemBox = styled.div`
  cursor: pointer;
  margin: 1%;
  width: 21.7%;
  height: 200px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 5px #00000029;
  border: 2px solid #c8c8c861;
  border-radius: 5px;
  transition: 0.5s all;
  :hover {
    border: 2px solid #5d51ce;
  }
`;

const ItemContainer = styled.div`
  width: 93%;
  height: 180px;
  margin: 4%;

  :hover img {
    transform: scale(1.1);
  }

  .img-wrapper {
    width: 100%;
    height: 100px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
      border: 1px solid rgba(0, 0, 0, 0.1);
      transition: opacity 0.5s ease 0s, transform 0.5s ease 0s;
    }
  }

  h3 {
    margin: 9px 0;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    color: #545454;
  }
  span {
    font-size: 12px;
    color: #545454;
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 2;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  background-color: white;
  margin: 0 auto;
  box-shadow: 0px 3px 6px #00000029;

  .title-bar {
    width: 500px;
    height: 5px;
    background: transparent
      linear-gradient(90deg, #ffe874 0%, #7b1acf 69%, #713eff 100%) 0% 0%
      no-repeat padding-box;
  }
`;

const ModalHeader = styled.div`
  width: 500px;
  height: 160px;
  background-image: url(${Earth});
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .background-cover {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .club-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -15px;

    > span {
      color: white;
      font-weight: 600;
      font-size: 18px;
      z-index: 2;
    }
  }
  .logo {
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50px;
    margin: 10px;
  }

  .close {
    cursor: pointer;
    margin: 10px;
    width: 20px;
    position: relative;
    top: 0;
    right: -231px;
    z-index: 2;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  h3 {
    margin: 25px;
    font-weight: 600;
  }

  .member-wrap {
    display: flex;
    flex-direction: row;
    padding: 25px;
    box-sizing: border-box;
    width: 100%;

    p {
      font-weight: 600;
    }

    .member-container {
      width: 80%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      span {
        margin-left: 10px;
      }
    }
  }

  .club-img {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    //overflow: hidden;
    width: 400%;
    > img {
      width: 200px;
      height: 200px;
      margin: 0 24px;
    }
  }
  .button-icon {
    display: flex;
    flex-direction: row;
    margin: auto;

    > button {
      cursor: pointer;
      width: 50px;
      height: 20px;
      margin: 0 10px;
      color: white;
      border: none;
      outline: none;
      background: #350871 0% 0% no-repeat padding-box;
      border-radius: 15px;
    }
  }
`;

// 페이지 네이션 스타일
const PageNumber = styled.div`
  display: flex;
  flex-direction: row;

  & a {
    padding: 10px;
  }

  .page-arrow {
    padding: 10px;
  }
`;

export {
  MainWrapper,
  InfoMainWrapper,
  CreatorsWrapper,
  InfoItem,
  InfoHeaderWrapper,
  ItemBoxWrapper,
  ItemListWrapper,
  ItemBox,
  ItemContainer,
  ModalWrapper,
  ModalItem,
  ModalHeader,
  InfoWrapper,
  PageNumber,
};
