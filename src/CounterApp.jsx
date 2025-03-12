import "./App.css";
import Viewer from "./counterProject/components/Viewer";
import Controller from "./counterProject/components/Controller";
import Even from "./counterProject/components/Even";
import { useState, useEffect, useRef } from "react";
function App() {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState("");
	const isMount = useRef(false); //라이프 사이클 중 update일때만 사이드이펙트 사용하기 위해 생성

	//1. Mount(탄생) :[], 최초1회 실행
	useEffect(() => {
		console.log("Mount");
	}, []);

	//2. Update(변화 , 리렌더링)
	useEffect(() => {
		if (!isMount.current) {
			// 컴포넌트가 Mount되지 않으면 실행x, 이후 리렌더링에서만 실행된다.
			isMount.current = true;
			return;
		}
		console.log("update");
	}); //deps가 없으면 : 컴포넌트가 리렌더링될 때 호출된다.

	//3. UnMount(죽음)

	//이벤트 핸들러

	const onClickButton = (value) => {
		setCount(count + value);
	};

	//컴포넌트 사이드 이펙트
	/*
      useEffect(()=>{//🚨[]에 작성한 '원하는 값이 바뀌었을 때 콜백함수 실행'
        console.log(`count : ${count} input : ${input}`);//맨처음 컴포넌트가 렌더링 될때도 실행됨.

      },[count, input]);//[]:의존성 배열, 안에 있는 것중 하나의 값만 바뀌어도 실행됨.
  */

	//계층구조(여러개의 컴포넌트들이 계층구조를 이룬다.)
	//특정 컴포넌트가 다른 컴포넌트에게 값을 전달 하려면 반드시 부모-자식관계가 성립해야 한다.
	//💥State Lifiting (state 끌어올리기): 하나의 state를 관리하려면 공통 부모 컴포넌트에서 만들어야 한다.
	//일반통행 차선을 기억하자
	//💥React.js의 데이터 흐름은 위에서 아래이다.(=단방향 데이터 흐름)
	// ㄴ 파악하기 쉽고, 직관적이다.
	//ㄴㄴ 데이터의 state를 어떤 컴포넌트에 위치할것인지 고려해야한다.
	return (
		<div className="App">
			<h1>Simple Counter</h1>
			<section>
				<input
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
						//console.log(input);//변경된 input값이 출력되지 않는다.(이전값만 나올뿐)
						//🚨🚨setInput 비동기 함수라고 보면된다, 호출만 했을뿐 결과값을 받은게 아니야!
						//🚨🚨useEffect를 사용해야 변경된 state값을 바로바로 사용할 수 있다.
					}}
				></input>
			</section>
			<section>
				<Viewer count={count} />
				{/* null, undefined는 출력되지 않는다. */}
				{count % 2 === 0 ? <Even /> : null}
			</section>
			<section>
				<Controller onClickButton={onClickButton} />
			</section>
		</div>
	);
}

export default App;
