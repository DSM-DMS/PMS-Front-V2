import React, { useState, useEffect} from 'react';
import * as S from './style'
import { StudentUser } from '../../../utils/api/myPage'

function ChildrenInformation(){
    const student = StudentUser();
    const [studentName, setStudentName] = useState("");
    const [studentNumber, setStudentNumber] = useState("");
    useEffect(()=>{
        setStudentName(student?.students[0]['student-name']);
        setStudentNumber(student?.students[0]['student-number']);
    }, [student?.students])

    const studentGrade = Math.floor(studentNumber / 1000);
    const studentClass = Math.floor((studentNumber % 1000) / 100);
    const studentNum = Math.floor((studentNumber % 1000) % 100);
    const studentDepartment = (studentGrade === 1 ? "공통교육과정" : studentClass === 3 ? "임베디드 소프트웨어 개발과" : studentClass === 4 ? "정보보안과" : "소프트웨어 개발과")
    return(
        <S.MyChildren>
            <S.ChildrenProfileImage />
            <S.ChildrenInformationValue>
                <h5>{studentName}</h5>{studentGrade}학년 {studentClass}반 {studentNum}번 - {studentDepartment}
            </S.ChildrenInformationValue>
            <S.TriangleImg />
        </S.MyChildren>
    )
}
export default ChildrenInformation;