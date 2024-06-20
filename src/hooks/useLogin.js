import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "login", payload: user });
        setIsPending(false);
        navigate("/");
        if (!user) {
          throw new Error("로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
        //setError(error.message); // Firebase에서 반환된 오류 메시지 설정
        setIsPending(false);
        window.alert("아이디 또는 비밀번호가 잘못되었습니다.");
      });
  };

  return { error, isPending, login };
};
