import React, { useEffect } from "react";
import * as S from "../style";
import { BackgroundTitle, Footer, InfoHeader } from "../../index";
import { FetchPhoto } from "../../../utils/api/info";
import PhotoItem from "./PhotoItem";

const PhotoAlbum = () => {
  const fetchPhoto = FetchPhoto();
  const uploadDate = "upload-date";

  useEffect(() => {
    console.log(fetchPhoto);
  }, [fetchPhoto]);

  return (
    <>
      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader title="포토 앨범" placeholder="검색어를 입력해주세요" />
        <S.ItemBoxWrapper>
          {fetchPhoto?.map((photo, index) => {
            return (
              <>
                <PhotoItem
                  key={index}
                  title={photo.title}
                  img={photo.thumbnail}
                  update={photo[`${uploadDate}`]}
                />
              </>
            );
          })}
        </S.ItemBoxWrapper>
        <Footer />
      </S.InfoMainWrapper>
    </>
  );
};

export default PhotoAlbum;
