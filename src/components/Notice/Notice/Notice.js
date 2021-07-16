import React, { useState } from "react";
import * as S from "../style";
import BackgroundTitle from '../../BackgroundTitle'
import Footer from '../../footer/Footer'
import { FetchNotice } from '../../../utils/api/user'

function Notice(){
    const [firstPageNum, setFirstPageNum] = useState(1);
    const fetchNotice = FetchNotice(0);
    const previousPage = () =>{
        if(firstPageNum === 1) return;
        else setFirstPageNum(firstPageNum-1);
    }
    const nextPage = () =>{
        setFirstPageNum(firstPageNum+1);
    }
    return(
        <S.MainWrapper>
            <BackgroundTitle title="공지사항" />
            <S.MainItemWrapper>
                <S.Search>
                    <select>
                        <option>제목</option>
                        <option>제목+내용</option>
                        <option>내용</option>
                    </select>
                    <S.SearchInput placeholder="검색" />
                </S.Search>
                <S.ArticleListWrapper>
                    <S.ArticleListHeader>
                        <S.ArticleListTitle>제목</S.ArticleListTitle>
                        <S.ArticleListWriter>작성자</S.ArticleListWriter>
                        <S.ArticleListDay>날짜</S.ArticleListDay>
                    </S.ArticleListHeader>
                    <S.ArticleListItem>
                        <S.ArticleListTitle>대덕소프트웨어마이스터고 지방공무원(시설관리직) 대체인력 채용 공고 <S.NewItem>NEW</S.NewItem></S.ArticleListTitle>
                        <S.ArticleListWriter>이**</S.ArticleListWriter>
                        <S.ArticleListDay>2019-12-31</S.ArticleListDay>
                    </S.ArticleListItem>
                    
                    <S.Page>
                        <S.PageItem onClick={previousPage}>{"<"}</S.PageItem>
                        <S.PageItem>{firstPageNum}</S.PageItem>
                        <S.PageItem>{firstPageNum+1}</S.PageItem>
                        <S.PageItem>{firstPageNum+2}</S.PageItem>
                        <S.PageItem>{firstPageNum+3}</S.PageItem>
                        <S.PageItem>{firstPageNum+4}</S.PageItem>
                        <S.PageItem onClick={nextPage}>{">"}</S.PageItem>
                    </S.Page>
                </S.ArticleListWrapper>
            </S.MainItemWrapper>
            <Footer/>
        </S.MainWrapper>
    )
}

export default Notice;