//간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

import { useState , useRef} from "react";

const Register = () => {
    console.log("Register 렌더링")
    
// const [name, setName] = useState("이름");
// const [birth, setBirth] = useState("");
// const [country, setCountry] = useState("");
// const [bio, setBio] = useState("");

    //한번에 state 변수 관리하는 방법(객체형태로 관리)
    const [input, setInput] = useState({
        name : "",
        birth:"",
        country : "",
        bio : ""
    })
    const inputRef = useRef("");
    const countRef = useRef(0);

    //한번에 통합 이벤트핸들러로 관리하는 방법(객체형태로 관리)
    const onChange = (e) => {
        // console.log(e.target.name, e.target.value)
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value //태그의 name속성 필수임
        })
    }



    //이벤트 핸들러라고 부름
    const onSubmit = () => {
        if(input.name === ""){
            //이름을 입력하는 dom 요소 포커스
            //레퍼런스 객체로 접근

            inputRef.current.focus();
        }
    }



    return (
    <div>
        <div>
            <input 
                ref={inputRef}
                name = "name"
                value={input.name} 
                placeholder={"이름"} 
                onChange={onChange}
                />
        </div>

        <div>
            <input
                    name = "birth"
                    type="date" 
                    value={input.birth} 
                    onChange={onChange}/>
        </div>

        <div>
            <select  name = "country" onChange={onChange} value={input.country}>
                <option></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
        </div>
        
        <div>
            <textarea name="bio" onChange={onChange} value={input.bio}/>
        </div>

        <button onClick={onSubmit}>제출</button>
    </div>
    )
}

export default Register;