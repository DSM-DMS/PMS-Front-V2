import React, {useState} from 'react';
import * as S from './style';

function UserInformation() {

    const [text, setText] = useState('이재원');
    const onChange = (e) => {
        setText(e.target.value)
    }
    return (
        <S.UserInformation>
            <h4>개인 정보</h4>
            <S.UserInformationItem>
                <S.ItemTitle>이메일</S.ItemTitle>
                <S.ItemContent>000000@gmail.com</S.ItemContent>
            </S.UserInformationItem>
            <S.UserInformationItemBot>
                <S.ItemTitle>닉네임</S.ItemTitle>
                <S.NickNameInput onChange={onChange}value={text} />
            </S.UserInformationItemBot>
        </S.UserInformation>
    )
}

export default UserInformation;