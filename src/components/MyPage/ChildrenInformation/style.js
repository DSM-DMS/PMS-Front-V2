import styled from 'styled-components';
import {Profile, Triangle} from '../../../assets/index'
import { MYPAGE_COLOR} from '../style'

export const MyChildren = styled.div`
    background-color: white;
    width: 95%;
    height:10%;
    border: 1px solid ${MYPAGE_COLOR.MAIN_BORDER_COLOR};
    display: flex;
    align-items:center;
    box-sizing: border-box;
    padding: 0 2%;
    h5{
        font-size: 15px;
    }
`;
export const ChildrenProfileImage = styled.div`
    width: 9%;
    height: 80%;
    background-image: url(${Profile});
`;
export const ChildrenInformationValue = styled.div`
    margin-left: 2%;
    width: 85%;
    height: 80%;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content:center;
`;
export const TriangleImg = styled.div`
    background-image: url(${Triangle});
    width: 15px;
    height: 8px;
`;