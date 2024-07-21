export const getKakaoUrl = () => {
    const REST_API_KEY = "2619591c3502b856bfe4fd9a319bf861";
    const REDIRECT_URI = "http://localhost:3000/oauth";
    return `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
};

export const getNaverUrl = () => {
    const CLIENT_ID = "L76zooznWQC482xxpf7B";
    const STATE = "test";
    const REDIRECT_URI = "http://localhost:3000/oauth";
    return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
};
