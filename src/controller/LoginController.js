import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

import Login from '../view/Login';
import { getKakaoUrl, getNaverUrl } from '../model/LoginModel';

const LoginController = () => {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({ 
        email: "", 
        pw: "" 
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    // 이메일 로그인
    const signIn = async () => {
        if (loginForm.email === "" && loginForm.pw === "") {
            alert("아이디와 비밀번호를 입력해주세요.");
        } else {
            try {
                const userCheck = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.pw);
                console.log("로그인 성공");
                navigate("/main");
            } catch (error) {
                console.log(error);
                alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
            }
        }
    }

    // 카카오, 네이버 소셜 로그인
    const handleSocialLogin = (type) => {
        switch(type) {
            case "kakao":
                window.location.href = getKakaoUrl();
                break;
            case "naver":
                window.location.href = getNaverUrl();
                break;
        }
    };

    // 구글 소셜 로그인
    const signInGoogle = async () => {
        const googleProvider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, googleProvider);
            console.log("구글 로그인 성공");
            navigate("/main");
        } catch (error) {
            console.log(error);
            alert("구글 로그인 실패");
        }
    };

    return <Login onSocialLogin={handleSocialLogin} onChange={onChange} loginForm={loginForm} onSignIn={signIn} signInGoogle={signInGoogle}/>;
};

export default LoginController;