const Controller = ({onClickButton}) => {
    //onClickButton : 부모컴포넌트에서 넘긴 이벤트 핸들러

    //화살표 함수를 만들어서 onClickButton을 실행한 이유는 뭘까?
    //🚨왜냐하면? 인수를 원하는대로 못넣기 때문이다.
    //  <button onClick={onClickButton(-1)}> 이렇게 함수호출을 넣으면 안된다.
    //🚨그래서 '화살표 함수'를 이벤트핸들러로 정하고 그 안에서 원하는 인자값을 주고, 함수호출을 하는거임
    return <div>
        <button onClick={()=>{
            onClickButton(-1)
        }}>-1</button>
        <button onClick={()=>{
            onClickButton(-10)
        }}>-10</button>
        <button onClick={()=>{
            onClickButton(-100)
        }}>-100</button>
        <button onClick={()=>{
            onClickButton(100)
        }}>+100</button>
        <button onClick={()=>{
            onClickButton(10)
        }}>+10</button>
        <button onClick={()=>{
            onClickButton(1)
        }}>+1</button>
    </div>
}

export default Controller;