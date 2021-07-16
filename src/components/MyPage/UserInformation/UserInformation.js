import React, { useEffect, useState} from 'react';
import * as S from './style';
import { FetchUser } from '../../../utils/api/myPage';

function UserInformation() {
    const [nickname, setNickname] = useState('이재원');
    const onChange = (e) => {
        setNickname(e.target.value)
    }

    return (
        <S.UserInformation>
            <h4>개인 정보</h4>
            <S.UserInformationItem>
                <S.ItemTitle>이메일</S.ItemTitle>
                <S.ItemContent></S.ItemContent>
            </S.UserInformationItem>
            <S.UserInformationItemBot>
                <S.ItemTitle>닉네임</S.ItemTitle>
                <S.NickNameInput onChange={onChange}value={nickname} />
            </S.UserInformationItemBot>
        </S.UserInformation>
    )
}

export default UserInformation;