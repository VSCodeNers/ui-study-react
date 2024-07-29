import styled from "styled-components";

const SignUp = ({ onChange, onSignUp, signUpForm, message }) => {
    return (
        <Container>
            <SignUpTitle>회원가입</SignUpTitle>
            <InputFormContainer>
                <EmailFormContainer>
                    <InputForm name="email" type="text" placeholder="이메일(아이디)" value={signUpForm.email} onChange={onChange}/>
                    <EmailCheckBtn>인증하기</EmailCheckBtn>
                </EmailFormContainer>
                <WarningMsg>{message.email}</WarningMsg>
                <InputForm name="pw" type="password" placeholder="비밀번호" value={signUpForm.pw} onChange={onChange}/>
                <WarningMsg>8-20자 사이의 영문 대/소문자와 숫자로만 구성</WarningMsg>
                <WarningMsg>{message.pw}</WarningMsg>
                <InputForm name="pwCheck" type="password" placeholder="비밀번호 확인" value={signUpForm.pwCheck} onChange={onChange}/>
                <WarningMsg>{message.pwCheck}</WarningMsg>
            </InputFormContainer>
            <SignUpBtn onClick={onSignUp}>가입하기</SignUpBtn>
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 70px 0 70px;
`;
const SignUpTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
`;
const InputFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    input:first-child {
        margin-top: 20px;
    }
    p:nth-child(4) {
        color: gray;
        margin-bottom: 0;
    }
`;
const EmailFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const EmailCheckBtn = styled.button`
    border: none;
    margin: 6px 0 0 15px;
    width: 80px;
    height: 40px;
    cursor: pointer;

    &:hover {
        background-color: #D5D5D5;
    }
`;
const InputForm = styled.input`
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1.5px solid #5D5D5D;
    padding-bottom: 7px;
    font-size: 15px;
`;
const WarningMsg = styled.p`
    margin: 3px 0 20px 3px;
    font-size: 13px;
    color: #C90000;
`;
const SignUpBtn = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #D5D5D5;
    }
`;
export default SignUp;