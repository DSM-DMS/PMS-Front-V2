import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 1130px;
  background-color: #f6f6f6;
`;

export const ItemWrapper = styled.div`
  position: relative;
  top: -10%;
  margin: 0 auto;
  width: 78%;
  height: 800px;
  box-shadow: 0px 5px 5px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-sizing: border-box;
  padding: 2% 4%;

  & h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #c8c8c8;

  & span {
    color: #9e9e9e;
    font-weight: 500;
    font-size: 18px;
  }
`;
export const DetailContent = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LetterContent = styled.div`
  width: 100%;
  height: auto;
  max-width: 100%;
`;

export const PhotoContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  height: 500px;
  overflow: auto;

  & img {
    width: 40%;
    object-fit: cover;
    margin-right: 30px;
  }
`;

export const AttachFile = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #c8c8c8;
  border-top: 1px solid #c8c8c8;

  & span {
    margin-right: 10px;
    color: #9e9e9e;
    font-weight: 500;
    font-size: 15px;
  }

  & span:nth-child(2) {
    cursor: pointer;

    :hover {
      border-bottom: 1px solid #c8c8c8;
    }
  }
`;
