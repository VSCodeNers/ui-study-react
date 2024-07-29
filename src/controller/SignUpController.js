import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

import SignUp from "../view/SignUp";
import { emailRegex, passwordRegex } from "../model/SignUpModel";

const SignUpController = () => {
    const navigate = useNavigate();

    // 회원가입 입력 정보
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        pw: "",
        pwCheck: ""
    });

    // 입력 정보 별 안내 메시지
    const [message, setMessage] = useState({
        email: "",
        pw: "",
        pwCheck: ""
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm((prev) => ({
            ...prev,
            [name]: value
        }));
        validateField(name, value);
    }

    // 비밀번호 확인
    useEffect(() => {
        const checkPassword = (signUpForm.pw !== signUpForm.pwCheck ? "비밀번호 불일치" : "");
        setMessage((prev) => ({
            ...prev,
            pwCheck: checkPassword
        }))
    }, [signUpForm.pw, signUpForm.pwCheck]);

    // 이메일, 비밀번호 유효성 검사
    const validateField = (name, value) => {
        let msg = "";
        switch(name) {
            case "email":
                msg = (!emailRegex.test(value) ? "유효한 이메일 주소가 아닙니다." : "");
                break;
            case "pw": 
                msg = (!passwordRegex.test(value) ? "유효한 비밀번호가 아닙니다." : "");
                break;
            default:
                break;
        }
        setMessage((prev) => ({
            ...prev,
            [name]: msg
        }));
    }

    const EmailVerification = async () => {
        
    }

    // 회원가입
    const signUp = async () => {
        if (signUpForm.email !== "" && signUpForm.pw !== "" && signUpForm.pwCheck !== "" && signUpForm.pw === signUpForm.pwCheck) {
            try {
                const newUser = await createUserWithEmailAndPassword(auth, signUpForm.email, signUpForm.pw);
                const user = newUser.user;
                await sendEmailVerification(user);
                console.log("회원가입 완료");
                navigate("/");
            } catch (error) {
                window.alert("회원가입 중, 오류가 발생했습니다.");
            }
        } else if (signUpForm.email === "") {
            setMessage((prev) => ({
                ...prev,
                email: "이메일을 입력해주세요."
            }));
        } else if (signUpForm.pw === "") {
            setMessage((prev) => ({
                ...prev,
                pw: "비밀번호를 입력해주세요."
            }));
        } else if (signUpForm.pwCheck === "") {
            setMessage((prev) => ({
                ...prev,
                pwCheck: "비밀번호를 한 번 더 입력해주세요."
            }));
        }
    }

    return <SignUp onChange={onChange} onSignUp={signUp} signUpForm={signUpForm} message={message}/>;
};
export default SignUpController;