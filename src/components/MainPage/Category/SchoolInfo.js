import React, { useState } from "react";
import { useHistory } from "react-router";
import { FetchNotice, FetchNoticeNews } from "../../../utils/api/user";
import * as S from "../style/schoolInfoStyle";

const colorLists = [
  { id: 1, name: "가정통신문" },
  { id: 2, name: "공지사항" },
];

const SchoolInfo = () => {
  const history = useHistory();
  const [btnSelect, setBtnSelect] = useState(1);
  const uploadDate = "upload-date";

  const backgroundColor = (list) => {
    setBtnSelect(list.id);
  };

  function textSlice(txt, len) {
    if (txt.length > len) {
      txt = txt.substr(0, len) + " ...";
    }
    return txt;
  }

  //api
  const fetchNotice = FetchNotice(0);
  const fetchNoticeNews = FetchNoticeNews();

  return (
    <S.SchoolInfo>
      <div className="container">
        <S.Title>학교소식</S.Title>
        <S.ButtonItem>
          <div className="button-cover">
            {colorLists.map((color) => (
              <label
                style={{
                  backgroundColor: color.id === btnSelect ? "white" : "#d37c7c",
                  color: color.id === btnSelect ? "#d37c7c" : "white",
                }}
                key={color.id}
                onClick={() => backgroundColor(color)}
              >
                <span>{color.name}</span>
              </label>
            ))}
          </div>
        </S.ButtonItem>
        <S.InfoList>
          {btnSelect === 1 ? (
            <>
              {fetchNoticeNews?.notices.map((notice) => (
                <li
                  key={notice.id}
                  onClick={() =>
                    history.push(
                      `/PMS-Front-V2/familyLetterWritten/${notice.id}`
                    )
                  }
                >
                  <span>{textSlice(notice.title, 25)}</span>
                  <span>{notice[`${uploadDate}`]}</span>
                </li>
              ))}
            </>
          ) : (
            <>
              {fetchNotice?.notices.map((notice) => (
                <li
                  key={notice.id}
                  onClick={() =>
                    history.push(`/PMS-Front-V2/noticeWritten/${notice.id}`)
                  }
                >
                  <span>{textSlice(notice.title, 30)}</span>
                  <span>{notice[`${uploadDate}`]}</span>
                </li>
              ))}
            </>
          )}
        </S.InfoList>
      </div>
    </S.SchoolInfo>
  );
};

export default SchoolInfo;
