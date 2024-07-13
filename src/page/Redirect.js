import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
    const code = new URL(document.location).searchParams.get("code");

    // const url = `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`;
    
    console.log(code);

    return (
        <div> 로그인 중... </div>
    )
}
export default Redirect;