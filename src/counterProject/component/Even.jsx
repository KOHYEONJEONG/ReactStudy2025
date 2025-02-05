import { useEffect } from "react";
const Even = () => {


    useEffect(()=> {
        return() => {
                //useEffect 사용하여 UnMount 제어하기
                //콜백함수 안에 return문에 화살표함수
                //클린업, 정리함수(useEffect 콜백함수 안에 return문이 있을시)
            console.log("Even : unmount");
        }
    },[]);

    useEffect(()=> {
            console.log("Even : Mount");
    },[]);

    return<div>짝수입니다.</div>
}

export default Even;