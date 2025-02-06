import useInput from "./../hooks/useInput"


const HookExam = () => {
    console.log("HookExam 렌더링")

    //배열의 구조분해
    const [input, onChange] = useInput();

    const [input2, onChange2] = useInput();

    return (
    <div>
        <input value={input} onChange={onChange}/>
        {input}

        <input value={input2} onChange={onChange2}/>
        {input2}
    </div>
    );


}

export default HookExam;