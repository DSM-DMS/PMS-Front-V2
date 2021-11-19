import styled from "styled-components";
import { Company, DMS, PMS } from "../../../assets";

//카테고리
export const CategoryWrapper = styled.div`
  position: relative;
  top: 28%;
  margin: 0 auto;
  width: 78%;
  height: 575px;
`;

export const CategoryItem = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: row;
`;

export const CategoryItemBottom = styled(CategoryItem)`
  height: 55%;
`;

//카테고리 타이틀
export const Title = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 500;
`;

export const Font14 = styled.span`
  font-size: 14px;
  margin: 0 auto;
`;

export const SubTitle = styled.span`
  font-size: 18px;
`;

export const SchoolInfo = styled.div`
  background-color: #d37c7c;
  width: 40%;
  height: 100%;
  color: white;
`;

export const ClubInfo = styled(SchoolInfo)`
  cursor: pointer;
  background-color: #56ad77;
  width: 20%;
  display: flex;
  flex-direction: column;

  .club {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .club-info {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .club-img {
    margin: 0 auto;
    width: 88.5%;
    height: 120px;
    background-size: cover;
    background-image: url(${Company});
  }

  & a {
    text-decoration: none;
    color: white;
    height: 100%;
  }
`;

export const CompanyInfo = styled(ClubInfo)`
  background-color: #56ad9e;

  & a {
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 90%;
    margin: 0 auto;
  }
`;

export const DMSInfo = styled.a`
  background-image: url(${DMS});
  background-size: cover;
  background-repeat: no-repeat;

  cursor: pointer;
  background-color: #56ad77;
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const DeveloperInfo = styled.div`
  cursor: pointer;
  height: 50%;
  background-color: #92b5f9;
  display: flex;
  flex-direction: row;

  & a {
    text-decoration: none;
    display: flex;
  }

  & img {
    position: relative;
    bottom: -14px;
  }

  .creators-info {
    width: 30%;
    height: 80%;
    background-image: url(${PMS});
    background-size: auto;
  }
`;

export const PMSInfo = styled(DeveloperInfo)`
  background-color: #2e3451;
  cursor: unset;

  .pms-img {
    margin: 6%;
    width: 100px;
    height: 100px;
    background-image: url(${PMS});
    background-size: auto;
  }
`;

export const ButtonItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  min-height: 30px;
  border-bottom: 0.5px solid white;

  .button-cover {
    border: 0.5px solid white;
    margin: -1px;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  label {
    cursor: pointer;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > span {
    font-size: 14px;
    font-weight: 100;
    padding: 5px;
  }
`;

export const ClubAnimation = styled.div`
  width: 104%;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  margin: 30px;
  transition: 0.7s;

  img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    margin: 3px;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  overflow: auto;

  > li {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 7px;
  }
`;
