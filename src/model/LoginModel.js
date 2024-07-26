export const getKakaoUrl = () => {
    const REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    return https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code;
};

export const getNaverUrl = () => {
    const CLIENT_ID = process.env.REACT_APP_N_CLIENT_ID;
    const STATE = process.env.REACT_APP_N_STATE;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    return https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI};
};

export const getGoogleUrl = () => {
    const CLIENT_ID = process.env.REACT_APP_G_CLIENT_ID;
    const PASSWORD = process.env.REACT_APP_G_PASSWORD;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    return https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid email profile;
};