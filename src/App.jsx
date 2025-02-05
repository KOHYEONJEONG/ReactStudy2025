import './App.css';
import Viewer from './counterProject/component/Viewer';
import Controller from './counterProject/component/Controller';
import { useState, useEffect } from 'react';
function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  //이벤트 핸들러
  const onClickButton = (value)=>{
    setCount(count + value);
  }

  //사이드 이펙트
  useEffect(()=>{//🚨원하는 값이 바뀌었을 때 콜백함수 실행
    console.log(`count : ${count} input : ${input}`)

  },[count, input]);//의존성 배열안에 있는 것중 하나의 값만 바뀌어도 실행됨.


  //계층구조(여러개의 컴포넌트들이 계층구조를 이룬다.)
  //특정 컴포넌트가 다른 컴포넌트에게 값을 전달 하려면 반드시 부모-자식관계가 성립해야 한다.
  //💥State Lifiting (state 끌어올리기): 하나의 state를 관리하려면 공통 부모 컴포넌트에서 만들어야 한다.
  //일반통행 차선을 기억하자
  //💥React.js의 데이터 흐름은 위에서 아래이다.(=단방향 데이터 흐름)
  // ㄴ 파악하기 쉽고, 직관적이다.
  //ㄴㄴ 데이터의 state를 어떤 컴포넌트에 위치할것인지 고려해야한다.
  return(
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) => {
        setInput(e.target.value)
      }}></input>
    </section>
    <section>
      <Viewer count={count}/>
    </section>
    <section> 
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  )
}

export default App;
