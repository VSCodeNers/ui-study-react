import styled from "styled-components";
import { Link } from "react-router-dom";

import kakaoImg from "../asset/kakao_login.png";
import naverImg from "../asset/naver_login.png";
import googleImg from "../asset/google_login.png";

const Login = ({ onSocialLogin, onChange, loginForm, onSignIn, signInGoogle }) => {
    return (
        <Container>
            <LoginTitleText>로그인 하쇼</LoginTitleText>
            <LoginContainer>
                <LoginInputContainer>
                    <InputForm name="email" type="text" placeholder="이메일(아이디)" value={loginForm.email} onChange={onChange}/>
                    <InputForm name="pw" type="password" placeholder="비밀번호" value={loginForm.pw} onChange={onChange}/>
                </LoginInputContainer>
                <LoginButton onClick={onSignIn}>로그인</LoginButton>
            </LoginContainer>
            <SignUpText to={"/signup"}>회원가입 할래요</SignUpText>
            <SocialLoginContainer>
                <SocialLoginTextContainer>
                    <div/>
                    <SocialLoginText>SNS 계정으로 로그인</SocialLoginText>
                    <div/>
                </SocialLoginTextContainer>
                <SocialLoginButtonContainer>
                    <SocialLoginButton src={kakaoImg} onClick={() => onSocialLogin("kakao")}/>
                    <SocialLoginButton src={naverImg} onClick={() => onSocialLogin("naver")}/>
                    <SocialLoginButton src={googleImg} onClick={signInGoogle}/>
                </SocialLoginButtonContainer>
            </SocialLoginContainer>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 70px 0 70px;
`;
const LoginTitleText = styled.h3`
    margin-bottom: 120px;
    font-size: 25px;
`;
const LoginContainer = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const LoginInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;
const InputForm = styled.input`
    width: 250px;
    outline: none;
    border: none;
    border-bottom: 1.5px solid #5D5D5D;
    padding-bottom: 7px;
    font-size: 15px;
`;
const LoginButton = styled.button`
    width: 90px;
    border: none;
    border-radius: 5%;
    cursor: pointer;

    &:hover {
        background-color: #D5D5D5;
    }
`;
const SignUpText = styled(Link)`
    margin-top: 15px;
    color: black;
    text-decoration: none;
`;
const SocialLoginContainer = styled.div`
    position: relative;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;
const SocialLoginTextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    div {
        width: 35%;
        height: 1px;
        background-color: #212121;
    }
`;
const SocialLoginText = styled.p`
    width: 50%;
    padding: 0 5px;
    text-align: center;
    color: #212121;
`;
const SocialLoginButtonContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
const SocialLoginButton = styled.img`
    width: 200px;
    height: 40px;
    cursor: pointer;
`;
export default Login;