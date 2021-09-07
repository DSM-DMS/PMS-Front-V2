import React, {useEffect, useState} from "react";
import * as S from "../style";
import BackgroundTitle from '../../BackgroundTitle'
import Footer from '../../footer/Footer'
import {ReactComponent as Profile} from '../../../assets/Prifile.svg'
import { FetcherNotice } from "../../../utils/api/user";
import { Link } from 'react-router-dom'

function NoticeWritten(props){
    useEffect(()=>{
        const { location, history } = props;
        if(location.state === undefined){
            history.push("/");
        }
    }, [])
    //notice_id
    
    //현재 페이지
    const [presentPage, setPresentPage] = useState(1);
    let fetchNotice = FetcherNotice(presentPage-1);
    //전체 페이지 수
    const totalPage = fetchNotice?.total_page;
    const arr = Array.from({length: totalPage}, (v, i) => i+1);

    //new Content
    const newDate = (date) => {
        const nowDate = new Date();
        if(nowDate.getMonth !== date.getMonth){
            return date.getDay+30 - nowDate.getDay <= 7;
        }
        return nowDate.getDay - date.getDay <= 7;
    }

    //page 이동
    const backPage = () => {
        if(presentPage === 1){
            alert('error')
            return;
        }
        setPresentPage(presentPage-1);
    }
    const nextPage = () => {
        if(presentPage === totalPage){
            alert('error')
            return;
        }
        setPresentPage(presentPage+1);
    }
    return(
        <S.MainWrittenWrapper>
            <BackgroundTitle title="공지사항" />
            <S.MainWrittenItemWrapper>
                <h3>jofjerqj</h3>
                <S.WrittenInfo>
                    <div className="infotype">공지사항</div>
                    <div className="infotitle">작성자</div>&nbsp;&nbsp; 이**
                    <div className="infotitle">작성일</div>&nbsp;&nbsp; 2020-01-01
                </S.WrittenInfo>
                <S.WrittenItem>
                    보고, 이 가득 옥 헤는 봅니다. 별들을 쉬이 다 당신은 겨울이 것은 까닭입니다. 시인의 옥 그리워 지나가는 된 있습니다. 이름을 나의 별에도 마리아 별들을 어 머니, 된 있습니다. 소학교 아직 하나에 언덕 가을로 걱정도 하나에 별이 파란 봅니다. 사랑과 내일 쉬이 까닭입니다. 것은 차 나는 위에 무덤 하나에 봄이 이름 과, 까닭입니다. 별이 오면 패, 무성할 남은 별 거외다. 묻힌 아스라히 했던 까닭입니다. 그러나 이런 잔디가 이 하나에 멀듯이, 별 이름과, 이름과, 있습니다. 북간도에 이름과, 별에도 하늘에는 노루, 강아지, 쓸쓸함과 속의 오는 계십니다. 하나에 오는 하나의 있습니다. 이 덮어 노새, 아이들의 속의 버리었습니다. 애기 이 이름을 청춘이 있습니다. 가을 노새, 내일 하나에 계십니다. 마디씩 패, 이 름자를 다 하나에 새워 비둘기, 봅니다. 이국 쓸쓸함과 별빛이 별 까닭입니다. 것은 지나가는 이국 나는 이름자 이제 계집애들의 하나에 봅니다. 슬퍼하는 나 는 하나에 당신은 멀듯이, 봅니다. 나는 흙으로 어머님, 별을 아이들의 피어나듯이 버리었습니다. 풀이 이름을 이웃 어머님, 별빛이 아름다운 아이들의 까닭이 요, 까닭입니다. 남은 덮어 이네들은 시와 애기 된 하나에 때 봅니다.
                </S.WrittenItem>
                <div className="addFile">
                    <div className="filetitle">첨부파일</div>
                    <div className="fileitem">2021지방공무원(시설관리직) 대체인력채용공고문(공개).hwp</div>
                </div>
                <S.CommentWrapper>
                    <div className="commentTitle"><h3>댓글</h3>&nbsp;<div className="commentAmount">2개</div></div>
                    <S.CommentContent>
                        <input placeholder="댓글을 입력하려면 로그인하세요." readOnly/>
                        <S.CommentItemWrapper>
                            <S.CommentItem>
                                <div className="profileimage"><Profile /></div>
                                <div className="commentItemInner">
                                    <div className="title">이명호</div>
                                    <div className="content"><h4>@서인석 선생님</h4>&nbsp;거친 내려온 불어 뛰노는 무엇을 어디 때문이다.</div>
                                </div>
                            </S.CommentItem>
                        </S.CommentItemWrapper>
                    </S.CommentContent>
                </S.CommentWrapper>
            </S.MainWrittenItemWrapper>
            <S.BottomItemWrapper>
                    <S.ArticleListHeader>
                        <div className="title">제목</div>
                        <div className="writer">작성자</div>
                        <div className="day">날짜</div>
                    </S.ArticleListHeader>
                    <S.Item>
                        {fetchNotice?.notices.map((notice, index)=>(
                            <Link to={{pathname: `/noticeWritten`, state:{id: notice.id}}}style={{textDecoration:'none', color:'black'}} key={index}>
                                <S.ArticleListItem id={notice.id} key={index}>
                                    <div className="title">{notice.title}<S.NewItem style={newDate(notice?.[`upload-date`]) ? {display: "block"} : {display: "none"}}>NEW</S.NewItem></div>
                                    <div className="writer">{notice.writer}</div>
                                    <div className="day">{notice?.[`upload-date`]}</div>
                                </S.ArticleListItem>
                            </Link>
                        ))}
                    </S.Item>
                    <S.Page>
                        <S.PageItem onClick = {()=>backPage()}>{"<"}</S.PageItem>
                            <>
                                {arr.map((id)=>(
                                    <S.PageItem onClick={() =>setPresentPage(id)} style={presentPage === id ? {fontWeight: 600, color:"black", textDecoration: "underline"} : {}}>{id}</S.PageItem>
                                ))}
                            </>
                        <S.PageItem onClick={()=>nextPage()}>{">"}</S.PageItem>                   
                        
                    </S.Page>
            </S.BottomItemWrapper>
            <Footer />
        </S.MainWrittenWrapper>
    )
}

export default NoticeWritten;