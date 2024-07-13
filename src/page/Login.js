import styled from "styled-components";
import kakaoImg from "../asset/kakao_login.png";
import naverImg from "../asset/naver_login.png";

const Login = () => {
    // Kakao
    const REST_API_KEY = "2619591c3502b856bfe4fd9a319bf861";
    const REDIRECT_URI = "http://localhost:3000/oauth";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const clickKakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    // Naver
    const CLIENT_ID = "L76zooznWQC482xxpf7B";
    const STATE = "test"
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

    const clickNaverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    }

    return (
        <Container>
            <LoginTitleText>로그인 하쇼</LoginTitleText>
            <LoginContainer>
                <LoginInputContainer>
                    <InputForm type="text" placeholder="아이디"/>
                    <InputForm type="password" placeholder="비밀번호"/>
                </LoginInputContainer>
                <LoginButton>로그인</LoginButton>
            </LoginContainer>
            <SocialLoginButtonContainer>
                <SocialLoginButton src={kakaoImg} onClick={clickKakaoLogin}/>
                <SocialLoginButton src={naverImg} onClick={clickNaverLogin}/>
            </SocialLoginButtonContainer>
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
    margin-bottom: 50px;
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
const SocialLoginButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
const SocialLoginButton = styled.img`
    width: 168px;
    cursor: pointer;
`;
export default Login;