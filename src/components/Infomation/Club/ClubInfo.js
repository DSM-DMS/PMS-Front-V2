import React, { useEffect, useState } from "react";
import * as S from "../style";
import {
  BackgroundTitle,
  Footer,
  InfoHeader,
  InfoItemBox,
  ClubDetailModal,
} from "../../index";
import { FetchClub, FetchClubDetail } from "../../../utils/api/user";

function ClubInfo() {
  const [clubTitle, setClubTitle] = useState("");
  const [modalBool, setModalBool] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const logo = "picture-uri";
  const clubName = "club-name";

  // 동아리 리스트 api
  const fetchClub = FetchClub();

  // 동아리 상세 api
  const fetchClubDetail = FetchClubDetail(clubTitle);

  useEffect(() => {
    setDataList(
      fetchClub?.clubs.filter((object) =>
        object[`${clubName}`].toLowerCase().includes(searchWord.toLowerCase())
      )
    );
  }, [fetchClub?.clubs, searchWord]);

  return (
    <>
      {modalBool && (
        <ClubDetailModal
          titleName="동아리 소개"
          modal={modalBool}
          setModalBool={setModalBool}
          member={fetchClubDetail?.member}
          clubName={fetchClubDetail?.title}
          explanation={fetchClubDetail?.explanation}
          img={fetchClubDetail?.url}
        />
      )}

      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader
          title="동아리 소개"
          placeholder="동아리를 입력해주세요"
          setSearchWord={setSearchWord}
          selectName="동아리 이름"
        />
        <S.ItemBoxWrapper>
          <S.ItemListWrapper>
            {dataList?.length === 0 ? (
              <div className="search-none">검색결과가 없습니다.</div>
            ) : (
              dataList?.map((club, index) => {
                return (
                  <>
                    <InfoItemBox
                      key={index}
                      modalBool={modalBool}
                      setModalBool={setModalBool}
                      setClubTitle={setClubTitle}
                      clubImg={club[`${logo}`]}
                      clubName={club[`${clubName}`]}
                      explanation={club.explanation}
                    />
                  </>
                );
              })
            )}
          </S.ItemListWrapper>
        </S.ItemBoxWrapper>
        <Footer />
      </S.InfoMainWrapper>
    </>
  );
}

export default ClubInfo;
