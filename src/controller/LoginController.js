import React from 'react';
import Login from '../view/Login';
import { getKakaoUrl, getNaverUrl } from '../model/LoginModel';

const LoginController = () => {
    const handleKakaoLogin = () => {
        window.location.href = getKakaoUrl();
    };

    const handleNaverLogin = () => {
        window.location.href = getNaverUrl();
    };

    return <Login onKakaoLogin={handleKakaoLogin} onNaverLogin={handleNaverLogin} />;
};

export default LoginController;
