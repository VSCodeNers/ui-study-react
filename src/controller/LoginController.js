import React from 'react';
import Login from '../view/Login';
import { getKakaoUrl, getNaverUrl, getGoogleUrl } from '../model/LoginModel';

const LoginController = () => {
    const handleKakaoLogin = () => {
        window.location.href = getKakaoUrl();
    };

    const handleNaverLogin = () => {
        window.location.href = getNaverUrl();
    };

    const handleNaverLogin = () => {
        window.location.href = getGoogleUrl();
    };

    return <Login onKakaoLogin={handleKakaoLogin} onNaverLogin={handleNaverLogin} onGoogleLogin={handleNaverLogin}/>;
};

export default LoginController;
