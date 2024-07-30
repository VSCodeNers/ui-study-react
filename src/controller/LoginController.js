import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Login from '../view/Login';
import { getKakaoUrl, getNaverUrl, getGoogleUrl } from '../model/LoginModel';

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
    
    const handleSocialLogin = (type) => {
        switch(type) {
            case "kakao":
                window.location.href = getKakaoUrl();
                break;
            case "naver":
                window.location.href = getNaverUrl();
                break;
            case "google":
                window.location.href = getGoogleUrl();
                break;
        }
    };

    const signIn = async () => {
        try {
            const userCheck = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.pw);
            console.log("로그인 성공");
            navigate("/main");
        } catch (error) {
            console.log(error);
            window.alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
        }
    }

    return <Login onSocialLogin={handleSocialLogin} onChange={onChange} loginForm={loginForm} onSignIn={signIn}/>;
};

export default LoginController;