import React, { useEffect, useState } from "react";
import * as S from "../style";
import { BackgroundTitle, Footer, InfoHeader } from "../../index";
import { FetchPhoto } from "../../../utils/api/info";
import PhotoItem from "./PhotoItem";
import { Link } from "react-router-dom";
import queryString from "query-string";

const PhotoAlbum = ({ location }) => {
  const query = queryString.parse(location.search);

  const [nowPage, setNowPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [page, setPage] = useState(5);
  const [basicsPage, setBasicPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");
  const [dataList, setDataList] = useState([]);

  const size = 10;
  let page_arr = [];

  const uploadDate = "upload-date";
  const fetchPhoto = FetchPhoto(nowPage - 1, size);
  const totalLength = fetchPhoto?.totalLength;

  useEffect(() => {
    setMaxPage(Math.ceil(totalLength / size));
  }, [totalLength]);

  if (maxPage < 5) {
    for (let i = basicsPage; i <= maxPage; i++) {
      page_arr[i] = i;
    }
  } else {
    for (let i = basicsPage; i <= page; i++) {
      page_arr[i] = i;
    }
  }

  const processed = (querys) =>
    page_arr.map((num) => {
      if (Number(querys.page) !== num) {
        return (
          <Link
            onClick={() => setNowPage(num)}
            to={`/photo-album/page=${page_arr[num]}`}
            key={num}
          >
            {page_arr[num]}
          </Link>
        );
      } else {
        return (
          <Link
            onClick={() => setNowPage(num)}
            to={`/photo-album/page=${page_arr[num]}`}
            style={{ color: "#6192f3" }}
            key={num}
          >
            {page_arr[num]}
          </Link>
        );
      }
    });

  const prev = () => {
    if (basicsPage !== 1) {
      if (page % 5 !== 0) {
        setPage(page - (page % 5));
        setBasicPage(basicsPage - (basicsPage % 5) - 4);
      } else {
        setPage(page - 5);
        setBasicPage(basicsPage - 5);
      }
    }
  };

  const next = () => {
    if (page < maxPage) {
      if (maxPage < page + 5) {
        setPage(maxPage);
        setBasicPage(basicsPage + 5);
      } else {
        setPage(page + 5);
        setBasicPage(basicsPage + 5);
      }
    }
  };

  useEffect(() => {
    setDataList(
      fetchPhoto?.galleries.filter((object) =>
        object.title.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
  }, [searchWord, fetchPhoto?.galleries]);

  return (
    <>
      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader
          title="포토 앨범"
          placeholder="검색어를 입력해주세요"
          setSearchWord={setSearchWord}
          selectName="제목"
        />
        <S.ItemBoxWrapper>
          <S.ItemListWrapper>
            {dataList?.map((photo) => {
              return (
                <>
                  <PhotoItem
                    key={photo.id}
                    id={photo.id}
                    title={photo.title}
                    img={photo.thumbnail}
                    update={photo[`${uploadDate}`]}
                  />
                </>
              );
            })}
          </S.ItemListWrapper>
          <S.PageNumber>
            <div className="page-arrow" onClick={prev}>
              {"<"}
            </div>
            {processed(query)}
            <div className="page-arrow" onClick={next}>
              {">"}
            </div>
          </S.PageNumber>
        </S.ItemBoxWrapper>
        <Footer />
      </S.InfoMainWrapper>
    </>
  );
};

export default PhotoAlbum;
