import React, { useEffect } from "react";
import * as S from "./detailStyle";
import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import { FetchPhotoDetail } from "../../../utils/api/info";

const PhotoDetail = ({ match }) => {
  const uploadDate = "upload-date";
  const photoDetail = FetchPhotoDetail(match.params.id);

  console.log(photoDetail);

  return (
    <S.MainWrapper>
      <BackgroundTitle title=""></BackgroundTitle>
      <S.ItemWrapper>
        <h1>{photoDetail?.gallery.title}</h1>
        <S.DetailInfo>
          <span>포토 앨범</span>
          <span>작성일 {photoDetail?.gallery[`${uploadDate}`]}</span>
        </S.DetailInfo>
        <S.DetailContent>
          <S.LetterContent>{photoDetail?.gallery.body}</S.LetterContent>
          <S.PhotoContent>
            {photoDetail?.gallery.attach.map((img, index) => {
              return <img key={index} src={img} alt="포토앨범 이미지"></img>;
            })}
          </S.PhotoContent>
        </S.DetailContent>
        <S.AttachFile>
          <span>첨부파일</span>
          <span>{photoDetail?.gallery.thumbnail}</span>
        </S.AttachFile>
      </S.ItemWrapper>
      <Footer />
    </S.MainWrapper>
  );
};

export default PhotoDetail;
