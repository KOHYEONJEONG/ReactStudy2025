import { useState } from "react";

//참고 : 커스텀 hooks 만들기 
//반복적으로 사용할 코드를 정의한 함수.
export default function useInput(){
    console.log("useInput 호출")
    //리액트는 내부적으로 접두사 use가 붙으면 hook으로 인식함.

    //리액트 hook 관련된 팁.
    //1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능.
    //2. 조건부로 호출 불가.
    //3. 나만의 hook 생성 가능.(접두사 use붙이기)
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}