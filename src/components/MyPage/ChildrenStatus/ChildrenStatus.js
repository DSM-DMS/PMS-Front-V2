import React, { useEffect, useState } from 'react';
import * as S from './style'
import {Bike, Home, MealGreen, MealRed, Remain } from '../../../assets/index'
import ChildrenCurrentStatus from './ChildrenCurrentStatus/ChildrenCurrentStatus'
import { StudentUser, StudentUserInfo } from '../../../utils/api/myPage'

function ChildrenStatus(){
    const studentUser = StudentUser();
    const [studentNumber, setStudentNumber] = useState("");
    useEffect(()=>{
        setStudentNumber(studentUser?.students[0]?.['student-number']);
    }, [studentUser?.students]);
    const userInformation = StudentUserInfo(2202);

    const [phrase, setPhrase] = useState(1);
    const [previousPhrase, setPreviousPhrase] = useState(0);
    const clickPhrase = (num) => {
        setPreviousPhrase(phrase);
        setPhrase(num);
    }
    return(
        <S.ChildrenStatus>
            <S.StatusItemWrapper>
                <S.ChildrenStatusItem>
                    <div className="itemTitle">기숙사 생활</div>
                    <S.ItemInnerWrapper>
                        <div className="checkStatus">
                            <ul>
                                <li onClick={()=>clickPhrase(1)} id="1">다벌점 봉사 활동 내역</li>
                                <li onClick={()=>clickPhrase(2)} id="2">상벌점 내역 확인</li>
                            </ul>
                        </div>
                        <div className="img-wrapper">
                            <S.Point blue>{userInformation?.['bonus-point']}</S.Point>
                            <S.Point>{userInformation?.['minus-point']}</S.Point>
                        </div>
                    </S.ItemInnerWrapper>
                </S.ChildrenStatusItem>
                <S.ChildrenStatusItem>
                    <div className="itemTitle">학교 생활</div>
                        <S.ItemInnerWrapper>
                            <div className="checkStatus">
                                <ul>
                                    <li onClick={()=>clickPhrase(3)}>외출 내역 확인</li>
                                </ul>
                            </div>
                            <div className="img-wrapper">
                                <img src={Bike} alt=""></img>
                            </div>
                        </S.ItemInnerWrapper>
                </S.ChildrenStatusItem>
                <S.ChildrenStatusItem>
                    <div className="itemTitle">신청 상태</div>
                    <S.ItemInnerWrapper>
                        <div className="checkStatus">
                            <ul>
                                <li onClick={()=>clickPhrase(4)}>이번주 잔류 신청 상태</li>
                                <li onClick={()=>clickPhrase(5)}>주말 급식 신청 여부</li>
                            </ul>
                        </div>
                        <div className="img-wrapper">
                            <img src={userInformation?.['stay-status'] ? Remain : Home} alt="잔류여부"></img>
                            <img src={userInformation?.['meal-applied'] ? MealGreen : MealRed} alt="급식신청여부"></img>
                        </div>
                    </S.ItemInnerWrapper>
                </S.ChildrenStatusItem>
                <S.ChildrenStatusItem>
                    <div className="itemTitle">동아리</div>
                    <S.ItemInnerWrapper>
                        <div className="checkStatus">
                            <ul>
                                <li>DMS</li>
                            </ul>
                        </div>
                        <div className="img-wrapper"></div>
                    </S.ItemInnerWrapper>
                </S.ChildrenStatusItem>
            </S.StatusItemWrapper>
            <ChildrenCurrentStatus value={phrase}/>
        </S.ChildrenStatus>
    )
}

export default ChildrenStatus;