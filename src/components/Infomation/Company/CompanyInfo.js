import React from "react";
import * as S from "../style";

import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import InfoHeader from "../InfoHeader";
import InfoItemBox from "../InfoItemBox";

function CompanyInfo() {
  const companyList = [
    {
      id: 1,
      clubImg:
        "https://img.etnews.com/photonews/1606/810925_20160614144005_543_0001.jpg",
      companyName: "비나텍",
      explanation:
        "친환경 제품을 제공함으로써 더불어 사는 세상을 이루기 위해 꾸준히 노력합니다.",
      resolution: "열정, 소통, 나눔",
    },
    {
      id: 2,
      clubImg:
        "https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20190131145752075520bf3fa6eb9210178107185.jpg",
      companyName: "우아한형제들",
      explanation: "국내 1위 배달앱 배달의민족을 운영하는 ‘우아한형제들’",
      resolution: "협업을 통해 성과를 만들어낼 수 있는 분",
    },
    {
      id: 3,
      clubImg: "https://static.wanted.co.kr/images/wdes/0_4.206a5988.jpg",
      companyName: "번개장터",
      explanation: "국내 최초 모바일 중고 거래 플랫폼",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
  ];
  //const [modalBool, setModalBool] = useState(false);

  //Modal창 닫기

  return (
    <>
      {/*  <ClubDetailModal
        modal={modal}
        ModalClose={ModalClose}
        titleName="취업처 소개"
      /> */}
      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader
          title="취업처 소개"
          placeholder="취업처를 입력해주세요"
          selectName="동아리 이름"
        />
        <S.ItemBoxWrapper>
          <S.ItemListWrapper>
            {companyList.map((club) => {
              return (
                <InfoItemBox
                  clubImg={club.clubImg}
                  //setModal={setModal}
                  key={club.id}
                  title={club.companyName}
                  explanation={club.explanation}
                  resolution={club.resolution}
                />
              );
            })}
          </S.ItemListWrapper>
        </S.ItemBoxWrapper>
        <Footer />
      </S.InfoMainWrapper>
    </>
  );
}

export default CompanyInfo;
