import React from "react";
import * as S from "../style";
import BackgroundTitle from '../../BackgroundTitle'
import Footer from '../../footer/Footer'
import {ReactComponent as Profile} from '../../../assets/Prifile.svg'

function FamilyLetterWritten(){
    return(
        <S.MainWrittenWrapper>
            <BackgroundTitle title="공지사항" />
            <S.MainWrittenItemWrapper>
                <h3>대덕소프트웨어마이스터고등학교 지방공무원(시설관리직) 대체인력 채용</h3>
                <S.WrittenInfo>
                    <div className="infotype">가정통신문</div>
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
                                <S.CommentItemInner>
                                    <div className="title">이명호</div>
                                    <div className="content"><h4>@서인석 선생님</h4>&nbsp;거친 내려온 불어 뛰노는 무엇을 어디 때문이다.</div>
                                </S.CommentItemInner>
                            </S.CommentItem>
                        </S.CommentItemWrapper>
                    </S.CommentContent>
                </S.CommentWrapper>
            </S.MainWrittenItemWrapper>
            <S.BottomItemWrapper>
                 <S.ArticleListWrapper>
                     <S.NoticeWrittenItem>
                     </S.NoticeWrittenItem>
                 </S.ArticleListWrapper>
                 <S.WrittenPageMove>
                        <S.PageItem>1</S.PageItem>
                        <S.PageItem>2</S.PageItem>
                        <S.PageItem>3</S.PageItem>
                        <S.PageItem>4</S.PageItem>
                        <S.PageItem>5</S.PageItem>
                    </S.WrittenPageMove>
            </S.BottomItemWrapper>
            <Footer />
        </S.MainWrittenWrapper>
    )
}

export default FamilyLetterWritten;