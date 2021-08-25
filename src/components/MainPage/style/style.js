import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 1350px;
`;

export const CodingImg = styled.div`
  width: 100%;
  height: 100%;

  .School-img {
    position: absolute;
    top: -155px;
    display: flex;
    flex-direction: row;
    width: 300vw;

    > img {
      width: 100vw;
      height: 780px;
      object-fit: cover;
    }
  }

  .slide-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    top: 530px;
  }

  .SchoolTitle {
    position: relative;
    top: 18%;
    width: 78%;
    margin: 0 auto;
    color: white;
  }
  p {
    margin-bottom: 20px;
    font-weight: 100;
    font-size: 25px;
  }
  .SchoolTitle p:nth-child(2) {
    font-size: 35px;
    font-weight: 700;
  }
  .bottomLine {
    width: 220px;
    height: 5px;
    background: #ffffff;
    border-radius: 5px;
  }
  .typist {
    font-size: 20px;
  }
`;
