import styled from 'styled-components'
import { MYPAGE_COLOR } from '../style'

export const ChildrenStatus = styled.div`
    width: 95%;
    height: 83%;
    margin-top: 2%;
    display: flex;
`;
export const StatusItemWrapper = styled.div`
    width: 52%;
    height:100%;
    box-sizing:border-box;
    color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
    display : flex;
    flex-direction:column;
    justify-content: space-between;
`;
export const ChildrenStatusItem = styled.div`
    width: 100%;
    height: 23%;
    background-color: white;
    border: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
    box-sizing: border-box;
    padding: 2%;
    .itemTitle{
        color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
        font-size: 15px;
        border-bottom:1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
    }
`;
export const ItemInnerWrapper = styled.div`
    width: 98%;
    height: 60%;
    margin-top: 3%;
    display: flex;
    .checkStatus{
        color: ${MYPAGE_COLOR.MAIN_FONT_COLOR};
        width: 60%;
        height: 100%;
        font-size: 14px;
        text-align:left;
        padding-left: 7%;
        line-height:2;
    }
    .img-wrapper{
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;
export const Point = styled.div`
    color: white;
    text-align:center;
    width: 36%;
    height: 70%;
    border-radius: 50%;
    box-sizing: border-box;
    padding-top: 5%;
    font-size: 18px;
    background-color: ${props=>props.blue ? "#4775b2" : "#d37c7c"};
`